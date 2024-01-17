"use client";

import { sidebarLink } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen w-[300px] py-7 px-10 flex flex-col bg-slate-100">
      {sidebarLink.map((link) => {
        const isActive =
          (pathname.includes(link.label) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <Link
            href={link.route}
            key={link.label}
            className={`w-[200px] flex items-center gap-2 px-5 py-3 rounded-md ${
              isActive && "bg-orange-500"
            }`}
          >
            <Image
              src={link.imageUrl}
              alt={link.label}
              width={28}
              height={28}
              className={isActive ? "" : "invert"}
            />
            <h2 className={isActive ? "text-white" : "text-black"}>
              {link.label}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftSidebar;
