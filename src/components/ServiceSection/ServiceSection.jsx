import React, { Suspense } from "react";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "../ErrorDisplay";
import ServiceList from "../ServiceList";

function ServiceSection() {
  return (
    <section className="bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          Services In Your Area
        </h2>
        <Suspense fallback={<SpinnerLoading />}>
          <ErrorBoundary fallback={<ErrorDisplay />}>
            <ServiceList />
          </ErrorBoundary>
        </Suspense>
      </div>
    </section>
  );
}

export default ServiceSection;
