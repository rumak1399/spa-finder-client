import BrowseServices from "@/components/BrowseServices/BrowseServices";
import ErrorDisplay from "@/components/ErrorDisplay";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import React, { Suspense } from "react";
export const metadata = {
  title: "Browse Spa Services | Spa Finder",
  description:
    "Explore a wide range of massage and spa services tailored to your needs. Find the perfect treatment near you with Spa Finder.",
};

function Services() {
  return (
    <div className="w-full md:w-7xl mx-auto p-4 flex flex-col gap-5 min-h-screen">
      <h1 className="text-2xl font-bold">Browse top services near you</h1>
      <Suspense fallback={<SpinnerLoading />}>
        <ErrorBoundary fallback={<ErrorDisplay />}>
          <BrowseServices />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Services;
