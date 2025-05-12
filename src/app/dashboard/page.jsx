import { auth } from "@/auth";
import SideTabs from "@/components/ui/side-by-side-tabs";
import React, { Suspense } from "react";
import { tablist } from "../../../assets/data/data";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";
import { ErrorBoundary } from "@/utils/ErrorBoundary";
import ErrorDisplay from "@/components/ErrorDisplay";

async function Dashboard() {
  const profile = await auth();
  // console.log("data 6", profile);

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4">
      <Suspense fallback={<SpinnerLoading />}>
        <ErrorBoundary fallback={<ErrorDisplay />}>
          <SideTabs tablist={tablist} profile={profile} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default Dashboard;
