"use client";

import { MenuIcon, Search, TextAlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-[0.5px] border-neutral-400/70 pb-4 mb-4">
      <div className="md:flex items-center gap-4 hidden">
        <TextAlignJustify className="size-4" />
        <Link href="" className="text-black font-medium">
          Shop
        </Link>
        <Link href="" className="text-neutral-600 font-normal">
          Journal
        </Link>
        <Link href="" className="text-neutral-600 font-normal">
          About
        </Link>
      </div>
      <Image src="/infigon-logo.svg" alt="logo" width={150} height={150} className="max-sm:w-[100px]" />
      <div className="hidden md:flex items-center gap-4">
        <Link href="" className="text-neutral-600 font-normal">
          Account
        </Link>
        <Link href="" className="text-neutral-600 font-normal">
          Blog
        </Link>
        <Link href="" className="text-neutral-600 font-normal">
          {"Wishlist(3)"}
        </Link>
        <Search className="size-4" />
      </div>
      <MenuIcon className="size-5 md:hidden" />
    </div>
  );
}
