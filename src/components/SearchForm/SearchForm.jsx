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

  const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [selectedState, setSelectedState] = useState("");
const [selectedCity, setSelectedCity] = useState("");
const [cityLoading, setCityLoading] = useState(false);


useEffect(() => {
  const fetchStates = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/location/all-state`);
      const data = await res.json();
      setStates(data.states);
    } catch (error) {
      console.error("Failed to fetch states:", error);
    }
  };

  fetchStates();
}, []);


useEffect(() => {
  if (!selectedState) return;
  const fetchCities = async () => {
    setCityLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_LIVE_LINK}/location/city-by-id/${selectedState}`);
      const data = await res.json();
      setCities(data.city);
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    } finally {
      setCityLoading(false);
    }
  };

  fetchCities();
  setSelectedCity(""); // Reset city
}, [selectedState]);


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
  if (!selectedState || !selectedCity) {
    alert("Please select both state and city.");
    return;
  }

  const params = new URLSearchParams();
  params.set("category", category);
  params.set("state", selectedState);
  params.set("city", selectedCity);
  router.push(`/search?${params.toString()}`);
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
                required
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
    State
  </label>
  <select
    value={selectedState}
    onChange={(e) => setSelectedState(e.target.value)}
    className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
    required
  >
    <option value="">Select a state</option>
    {states.map((state) => (
      <option key={state._id} value={state._id}>
        {state.name}
      </option>
    ))}
  </select>
</div>

<div className="flex-1">
  <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1">
    City
  </label>

  {cityLoading ? (
    <p className="text-gray-500">Loading cities...</p>
  ) : (
    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
      disabled={!selectedState}
      required
    >
      <option value="">
        {selectedState ? "Select a city" : "Select a state first"}
      </option>
      {cities.map((city) => (
        <option key={city._id} value={city._id}>
          {city.name}
        </option>
      ))}
    </select>
  )}
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
    </form>
  );
}

 {/* <div className="flex-1">
          <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter your address, city or zip code"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          />
        </div> */}


 {/* <div className="flex flex-wrap gap-2 mt-3">
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
      </div> */}