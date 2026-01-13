"use client";

import { useEffect } from "react";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Connection Issue</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        We were unable to load the product data. Please check your internet connection and try again.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        <RefreshCcw size={18} />
        Retry
      </button>
    </div>
  );
}