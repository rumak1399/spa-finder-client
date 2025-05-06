import React from "react";

function SpinnerLoading() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-500 dark:text-gray-400">Loading...</p>
    </div>
  );
}

export default SpinnerLoading;
