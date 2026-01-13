"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-8 pt-6 bg-neutral-300/50 p-4 rounded-lg shadow space-y-5 md:space-y-8">
      <div className="flex items-center justify-between">
        <Image src="/infigon-logo.svg" alt="" width={120} height={120} />
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Amazon
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Shopify
          </a>
        </div>
      </div>
      <p className="w-full text-center py-2 text-xs">
        © 2026 Product Explorer. Built by <strong>Sahil Ahmed</strong>.
      </p>
    </div>
  );
}
