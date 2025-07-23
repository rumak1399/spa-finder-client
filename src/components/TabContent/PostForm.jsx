"use client";

import { useGetCategoriesQuery } from "@/redux/baseUrl";
import { ImageUploader } from "@/utils/ImageUploader";
import { VideoUploader } from "@/utils/VideoUploader";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCameraOutline, IoVideocamOutline } from "react-icons/io5";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { useSession } from "next-auth/react";
import ErrorDisplay from "../ErrorDisplay";
import LocationPicker from "../LocationPicker/LocationPicker";

export default function PostForm({ profile }) {
  const { data: session, status } = useSession();
  const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [selectedState, setSelectedState] = useState(null);
const [cityLoading, setCityLoading] = useState(false);
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategoriesQuery();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const watchImage = watch("image.url");
  const watchVideo = watch("video.url");
  const watchDiscount = watch("discount");
// console.log(watch("location"));

  // Set email from session into form
  useEffect(() => {
    if (session?.user?.email) {
      setValue("email", session.user.email, { shouldValidate: true });
    }
  }, [session?.user?.email, setValue]);

  useEffect(() => {
  const fetchStates = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/location/all-state`);
      const data = await res.json();
      setStates(data.states);
    } catch (error) {
      console.error("Failed to fetch states", error);
    }
  };

  fetchStates();
}, []);

useEffect(() => {
  const fetchCities = async () => {
    if (!selectedState) return;
    setCityLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/location/city-by-id/${selectedState}`);
      const data = await res.json();
      setCities(data.city);
    } catch (error) {
      console.error("Failed to fetch cities", error);
    } finally {
      setCityLoading(false);
    }
  };

  fetchCities();
}, [selectedState]);

  const onSubmit = async (data) => {
  //  console.log(data);
   
    if (!data.image?.url && !data.video?.url) {
      alert("Either an image or a video is required.");
      return;
    }
    console.log(data)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, userId: profile.userId }),
      });
      const result = await res.json();

      if (res.ok) {
        alert(`Post added!`);
        reset();
      } else {
        alert(`Failed to add product: ${result.message}`);
      }
    } catch (error) {
      console.log("Error submitting product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (status === "loading") {
    return <SpinnerLoading />;
  }

  if (status === "unauthenticated") {
    return <ErrorDisplay />;
  }

  return (
    <div className="w-full p-5 rounded-lg">
      <h2 className="text-2xl font-bold">Create New Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Post Image */}
        <div>
          Post Image
          <label htmlFor="file" className="block font-semibold mb-1"></label>
          {watchImage ? (
            <Image
              width={100}
              height={100}
              className="w-full h-[360px] rounded-md border border-gray-300 object-cover mb-2"
              src={watchImage}
              alt="Main"
            />
          ) : (
            <div className="min-w-[260px] h-[360px] rounded-md border border-dashed border-gray-300 mb-2 flex justify-center items-center flex-col text-gray-400">
              <IoCameraOutline size={30} />
              <span>260x360</span>
            </div>
          )}
          <ImageUploader
            onUploadSuccess={(link) => {
              setValue("image.url", link, { shouldValidate: true });
              setValue("image.alt", "product image");
            }}
          />
          <input type="hidden" {...register("image.url")} />
        </div>

        {/* Post Video */}
        <div>
          <label htmlFor="video" className="block font-semibold mb-1">
            Post Video
          </label>
          {watchVideo ? (
            <video
              src={watchVideo}
              controls
              className="w-full h-[360px] rounded-md border border-gray-300 object-cover mb-2"
            />
          ) : (
            <div className="min-w-[260px] h-[360px] rounded-md border border-dashed border-gray-300 mb-2 flex justify-center items-center flex-col text-gray-400">
              <IoVideocamOutline size={30} />
              <span>MP4/WEBM</span>
            </div>
          )}

          <VideoUploader
            onUploadSuccess={(link) => {
              setValue("video.url", link, { shouldValidate: true });
              setValue("video.alt", "product video");
            }}
          />
          <input type="hidden" {...register("video.url")} />
        </div>

        {/* Email - prefilled and disabled */}
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
          disabled
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Phone */}
        <input
          {...register("phone", { required: "Phone is required" })}
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-md"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        {/* <LocationPicker
          onChange={(coords) => setValue("location", coords)}
          defaultValue={watch("location")}
        /> */}

        {/* Hidden input to hold location object */}
        {/* <input type="hidden" {...register("location.lat")} />
        <input type="hidden" {...register("location.lng")} /> */}
        {/* Title */}
        <input
          {...register("title", { required: "Title is required" })}
          placeholder="Title"
          className="w-full px-4 py-2 border rounded-md"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        {/* Description */}
         <textarea
          {...register("description")}
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Price */}
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-md"
        />

       

        {/* Specification */}
        <textarea
          {...register("additionalPriceInfo")}
          placeholder="Additional Price Info"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Discount */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("discount")} />
          <label>Discount Available</label>
        </div>

        {watchDiscount && (
          <input
            type="number"
            {...register("discountAmount")}
            placeholder="Discount Amount"
            className="w-full px-4 py-2 border rounded-md"
          />
        )}
        {/* state and city select box */}
        <div>
          <div>
  <label htmlFor="state" className="block mb-1 font-medium">
    State
  </label>
  <select
    id="state"
    className="w-full h-10 rounded-md border pl-3"
    {...register("state", { required: "State is required" })}
    onChange={(e) => {
      const value = e.target.value;
      setSelectedState(value);
      setValue("state", value);
      setValue("city", ""); // Reset city on state change
    }}
    defaultValue=""
  >
    <option value="" disabled>
      Select a state
    </option>
    {states.map((state) => (
      <option key={state._id} value={state._id}>
        {state.name}
      </option>
    ))}
  </select>
  {errors.state && <p className="text-red-500">{errors.state.message}</p>}
</div>
{selectedState && (
  <div className="mt-3">
    <label htmlFor="city" className="block mb-1 font-medium">
      City
    </label>
    {cityLoading ? (
      <p>Loading cities...</p>
    ) : (
      <select
        id="city"
        className="w-full h-10 rounded-md border pl-3"
        {...register("city", { required: "City is required" })}
        defaultValue=""
      >
        <option value="" disabled>
          Select a city
        </option>
        {cities.map((city) => (
          <option key={city._id} value={city._id}>
            {city.name}
          </option>
        ))}
      </select>
    )}
    {errors.city && <p className="text-red-500">{errors.city.message}</p>}
  </div>
)}
        </div>
        <div>
  <label htmlFor="address" className="block mb-1 font-medium">
    Address (Street, Landmark, etc.)
  </label>
  <input
    type="text"
    id="address"
    placeholder="Enter full address"
    className="w-full px-4 py-2 border rounded-md"
    {...register("address", { required: "Address is required" })}
  />
  {errors.address && <p className="text-red-500">{errors.address.message}</p>}
</div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Category
          </label>
          {categoriesLoading ? (
            <SpinnerLoading />
          ) : (
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="w-full h-10 rounded-md border border-bcollor pl-3"
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories?.data.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat?.name}
                </option>
              ))}
            </select>
          )}
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Popular */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("popular")} />
          <label>Mark as Popular</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
