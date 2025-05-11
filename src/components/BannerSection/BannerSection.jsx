import { getCategories } from "@/app/actions/category/category";
import React, { Suspense } from "react";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "../ErrorDisplay";

async function BannerSection() {
  const categories = await getCategories();
  return (
    <section className="bg-blue-400 dark:bg-blue-800 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Find the Perfect Massage & Spa Near You
          </h1>
          <p className="text-xl mb-8 text-white">
            Discover top-rated massage therapists and spa services in your area
          </p>

          {/* Search Bar */}
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                >
                  Service Type
                </label>
                <Suspense fallback={<SpinnerLoading />}>
                  <ErrorBoundary fallback={<ErrorDisplay />}>
                    <select
                      id="service"
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
                    >
                      <option value="">All types of massages</option>
                      {categories?.data.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat?.name}
                        </option>
                      ))}
                    </select>
                  </ErrorBoundary>
                </Suspense>
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
                  placeholder="Enter your address, city or zip code"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  &nbsp;
                </label>
                <button className="w-full px-3 py-3 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                Near Me
              </button>
              <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                Open Now
              </button>
              <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                Top Rated
              </button>
              <button className="bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900 px-3 py-1 rounded-full text-sm">
                Special Offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
