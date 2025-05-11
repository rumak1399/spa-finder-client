"use client";

import { useGetCategoriesQuery } from "@/redux/baseUrl";
import { ImageUploader } from "@/utils/ImageUploader";
import { VideoUploader } from "@/utils/VideoUploader";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { IoCameraOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

export default function PostForm({ profile }) {
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useGetCategoriesQuery();
  console.log("categories", categories, "profile", profile.userId);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // You can send this data to your API endpoint here

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
        // setDisplay("products");
      } else {
        alert(`Failed to add product: ${result.message}`);
      }
    } catch (error) {
      console.log("Error submitting product:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const watchDiscount = watch("discount");
  const mainImage = watch("image.url");
  const mainVideo = watch("video.url");

  return (
    <div className="w-full p-5  rounded-lg ">
      <h2 className="text-2xl font-bold">Create New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          Post Image
          <label htmlFor="file" className="block font-semibold mb-1"></label>
          {mainImage ? (
            <Image
              width={100}
              height={100}
              className="w-full h-[360px] rounded-md border border-gray-300 object-cover mb-2"
              src={mainImage}
              alt="Main"
            />
          ) : (
            <div className="min-w-[260px] h-[360px] rounded-md border border-dashed border-gray-300 mb-2 flex justify-center items-center flex-col text-gray-400">
              <IoCameraOutline size={30} />
              <span>260x360</span>
            </div>
          )}
          {/* 👇 ImageUploader integration */}
          <ImageUploader
            onUploadSuccess={(link) => {
              setValue("image.url", link, { shouldValidate: true });
              setValue("video.alt", "product image");
            }}
          />
          <input
            type="hidden"
            {...register("image.url", { required: "Image is required" })}
          />
          {errors.image?.url && (
            <p className="text-red-500 text-sm">{errors.image.url.message}</p>
          )}
        </div>
        {/* Title */}
        <div>
          <label htmlFor="video" className="block font-semibold mb-1">
            Post Video
          </label>
          {mainVideo ? (
            <video
              src={mainVideo}
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
          <input
            type="hidden"
            {...register("video.url", { required: "Video is required" })}
          />
          {errors.video?.url && (
            <p className="text-red-500 text-sm">{errors.video.url.message}</p>
          )}
        </div>
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

        {/* Specification */}
        <textarea
          {...register("specification")}
          placeholder="Specification"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Image URL & Alt */}
        {/* <div className="grid grid-cols-2 gap-4">
          <input
            {...register("image.url")}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            {...register("image.alt")}
            placeholder="Image Alt Text"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div> */}

        {/* Video URL & Alt */}
        {/* <div className="grid grid-cols-2 gap-4">
          <input
            {...register("video.url")}
            placeholder="Video URL"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            {...register("video.alt")}
            placeholder="Video Alt Text"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div> */}

        {/* Price */}
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* Discount Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("discount")} />
          <label>Discount Available</label>
        </div>

        {/* Discount Amount - Conditional */}
        {watchDiscount && (
          <input
            type="number"
            {...register("discountAmount")}
            placeholder="Discount Amount"
            className="w-full px-4 py-2 border rounded-md"
          />
        )}

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

        {/* Popular Checkbox */}
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
