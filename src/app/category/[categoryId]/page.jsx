  import ErrorDisplay from "@/components/ErrorDisplay";
import SingleCategoryPage from "@/components/SingleCategory/SingleCategory";
  import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";

  import { ErrorBoundary } from "@/utils/ErrorBoundary";

  import React, { Suspense } from "react";

  const SingleCategory = async ({ params }) => {
    const { categoryId } = await  params;
  console.log('LINR AT 14 ', categoryId);

    return (
      <div className="min-h-screen mx-auto max-w-7xl p-4 ">
        {/* Posts Section */}
        <Suspense fallback={<SpinnerLoading />}>
          <ErrorBoundary fallback={<ErrorDisplay />}>
          <SingleCategoryPage categoryId={categoryId && categoryId}/>
          </ErrorBoundary>
        </Suspense>
      </div>
    );
  };

  export default SingleCategory;
