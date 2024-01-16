import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-6 items-center bg-slate-100">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/images/site-logo.svg"
          width={28}
          height={28}
          alt="site logo"
        />
        <p className="font-inter font-bold">
          Dev <span className="text-orange-500">Flow</span>
        </p>
      </div>
      <GlobalSearch />

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link
          href="/sign-in"
          className="bg-orange-500 py-2 px-5 rounded-md text-white"
        >
          Sign in
        </Link>
      </SignedOut>
    </div>
  );
};

export default Navbar;
