import React, { Suspense } from "react";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import CategoryList from "../CategoryList";
import ErrorDisplay from "../ErrorDisplay";
import { ErrorBoundary } from "@/utils/ErrorBoundary";

async function CategoriesSection() {

  return (
    <section className="bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Browse By Category
        </h2>
        <Suspense fallback={<SpinnerLoading />}>
          {/* Error boundary must be client-side */}
          <ErrorBoundary fallback={<ErrorDisplay />}>
            <CategoryList />
          </ErrorBoundary>
        </Suspense>
      </div>
    </section>
  );
}

export default CategoriesSection;
