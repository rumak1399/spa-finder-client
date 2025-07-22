import React, { Suspense } from "react";
import { getCategories } from "../actions/category/category";
import { getTags } from "../actions/tags/tags";
import SearchForm from "@/components/SearchForm/SearchForm";
import { getPostsByTags } from "../actions/posts/posts";
import Image from "next/image";
import { MessageCircleMore, ServerOff, Store } from "lucide-react";
import MapWithMarkers from "@/components/MapWithMarkers/MapWithMarkers";
import { calcReview } from "@/utils/calcReview";
import { calcReviewStars } from "@/utils/calcReviewStars";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "@/components/ErrorDisplay";
import NotAvailable from "@/components/NotAvailable/NotAvailable";

async function Search({ searchParams }) {
  const categories = await getCategories();
  const tags = await getTags();
  const resolvedSearchParams = await searchParams;

  const selectedCategoryId = resolvedSearchParams?.category || "";
  const selectedState = resolvedSearchParams?.state || "";
  const selectedCity = resolvedSearchParams?.city || "";

  const posts = await getPostsByTags({
    categoryId: selectedCategoryId,
    state: selectedState,
    city: selectedCity
  });
  // console.log(selectedCategoryId, selectedTags, posts);
  return (
    <div className="min-h-screen space-y-10">
      <section className="bg-blue-400 dark:bg-blue-800 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Find the Perfect Massage & Spa Near You
            </h1>
            <p className="text-xl mb-8 text-white">
              Discover top-rated massage therapists and spa services in your
              area
            </p>
            <SearchForm
              categories={categories?.data}
              selectedCategoryId={selectedCategoryId}
            />
            {/* <form
              method="GET"
              className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                  >
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="category"
                    defaultValue={selectedCategoryId}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
                  >
                    <option value="">All types of massages</option>
                    {categories?.data.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat?.name}
                      </option>
                    ))}
                  </select>
                </div>
  
                <div className="flex-1">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter your address, city or zip code"
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
  
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    &nbsp;
                  </label>
                  <button
                    type="submit"
                    className="w-full px-3 py-3 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                  >
                    Search
                  </button>
                </div>
              </div>
  
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  const newTags = isActive
                    ? selectedTags.filter((t) => t !== tag)
                    : [...selectedTags, tag];
  
                  const query = new URLSearchParams({
                    category: selectedCategoryId,
                    tags: newTags.join(","),
                  }).toString();
  
                  return (
                    <a
                      key={tag}
                      href={`?${query}`}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900"
                      }`}
                    >
                      {tag}
                    </a>
                  );
                })}
              </div>
            </form> */}

            {/* Example: Render filtered posts */}
            {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts?.map((post) => (
                <div key={post._id} className="bg-white p-4 rounded shadow">
                  <img
                    src={post.image.url}
                    alt={post.image.alt}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>
      <Suspense fallback={<SpinnerLoading />}>
        <ErrorBoundary fallback={<ErrorDisplay />}>
          {posts.length === 0 ? (
            <NotAvailable
              message="No posts available for this category and these tags"
              icon={<ServerOff />}
            />
          ) : (
            <div className="flex flex-col md:flex-row justify-between gap-4 w-full md:w-7xl mx-auto p-4">
              <div className="w-full md:w-1/2">
                {posts?.map((item) => (
                  <div
                    key={item?._id}
                    className="flex flex-col md:flex-row gap-5 border-b border-gray-300 hover:shadow-md p-5"
                  >
                    <div className="w-46 h-52 overflow-hidden rounded-md">
                      <Image
                        src={item?.image?.url}
                        alt={item?.image?.alt}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-between">
                      <div className="flex flex-col gap-2">
                        <p>{item?.title}</p>
                        <div className="flex gap-2">
                          <div className="text-amber-400">
                            {calcReviewStars(item?.review)}
                          </div>
                          <p>
                            {calcReview(item?.review)} ({item?.review.length}{" "}
                            reviews)
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Store />
                          <p>{item?.description}</p>
                        </div>
                      </div>
                      <div className="flex justify-start md:justify-end">
                        <button className="bg-blue-500 rounded-md px-5 py-3 flex items-center gap-2">
                          <MessageCircleMore size={20} color="white" />
                          <p className="text-sm text-white">
                            Get pricing & availability
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Map Section  */}
              <div className="w-full md:w-2/5 sticky top-4 h-screen">
                <MapWithMarkers />
              </div>
            </div>
          )}
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Search;
