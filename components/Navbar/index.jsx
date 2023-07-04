import { NavLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100">
      <div className="flex items-center justify-start flex-1 gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="GrafBase" />
        </Link>
        <ul className="hidden text-sm lg:flex gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href} className="">
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
