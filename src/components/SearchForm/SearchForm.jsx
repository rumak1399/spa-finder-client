"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "../ErrorDisplay";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { useGetPostsByTagsMutation } from "@/redux/endpoints/postEndpoints/getPosts";

export default function SearchForm({
  categories = [],
  tags = [],
  selectedCategoryId = "",
  selectedTags = [],
}) {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  // const [getPostsByTags] = useGetPostsByTagsMutation(); // ✅ Move this to top level

  // useEffect(() => {
  //   setCategory(selectedCategoryId);
  //   setActiveTags(selectedTags);
  // }, [selectedCategoryId, selectedTags]);

  useEffect(() => {
  if (selectedCategoryId !== category) {
    setCategory(selectedCategoryId);
  }

  // Compare arrays deeply before setting
  if (
    selectedTags.length !== activeTags.length ||
    !selectedTags.every((tag, i) => tag === activeTags[i])
  ) {
    setActiveTags(selectedTags);
  }
}, [selectedCategoryId, selectedTags]);


  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (activeTags.length) params.set("tags", activeTags.join(","));
    router.push(`/search?${params.toString()}`);
    // try {
    //   const response = await getPostsByTags({
    //     categoryId: category,
    //     tags: activeTags,
    //   }).unwrap();
    //   console.log("Fetched posts:", response);
    // } catch (error) {
    //   console.error("Failed to fetch posts:", error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1">
            Service Type
          </label>
          <Suspense fallback={<SpinnerLoading />}>
            <ErrorBoundary fallback={<ErrorDisplay />}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
              >
                <option value="">All types of massages</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </ErrorBoundary>
          </Suspense>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1">
            Location
          </label>
          <input
            type="text"
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
        <Suspense fallback={<SpinnerLoading />}>
          <ErrorBoundary fallback={<ErrorDisplay />}>
            {tags.map((tag) => {
              const isActive = activeTags.includes(tag);
              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </ErrorBoundary>
        </Suspense>
      </div>
    </form>
  );
}
