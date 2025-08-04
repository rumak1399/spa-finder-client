import ErrorDisplay from "@/components/ErrorDisplay";
import SingleCategoryPage from "@/components/SingleCategory/SingleCategoryPage";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";

import { ErrorBoundary } from "@/utils/ErrorBoundary";

import React, { Suspense } from "react";

const SingleCategory = async ({ params }) => {
  const { categoryName } = await params;
  console.log("LINR AT 14 ", categoryName);

  return (
    <div className="min-h-screen mx-auto max-w-7xl p-4 ">
      {/* Posts Section */}
      <Suspense fallback={<SpinnerLoading />}>
        <ErrorBoundary fallback={<ErrorDisplay />}>
          <SingleCategoryPage categoryName={categoryName} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default SingleCategory;
