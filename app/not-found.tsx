import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <FileQuestion className="text-gray-400" size={48} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        The product you are looking for has been removed or does not exist.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}