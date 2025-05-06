import { useGetPostsQuery } from "@/redux/endpoints/postEndpoints/getPosts";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import PopularPostsList from "../PopularPostsList";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "../ErrorDisplay";

async function PopularSection() {
  return (
    <section className=" bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Popular Services Near You
        </h2>
        <Suspense fallback={<SpinnerLoading />}>
          <ErrorBoundary fallback={<ErrorDisplay />}>
            <PopularPostsList />
          </ErrorBoundary>
        </Suspense>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopularSection;
