"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="w-full bg-[#000000] fixed left-0 right-0 top-0 z-50">
    <nav className="mx-auto py-4 lg:px-0 px-3   flex w-full max-w-[1200px] ">
      <section className="flex w-full flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-[52px]">
          <Link href={"/"}>
            <h1 className="text-lg text-[#F5C111] font-accent">Convofy</h1>
          </Link>

          <div className="hidden flex-row items-center gap-[52px] lg:flex ">
            <Link
              className={`text-lg ${pathname === "/Trending" ? "text-white underline underline-offset-8" : "text-gray-300 transition-all duration-300 hover:text-white"}`}
              href={"/Trending"}
            >
              Trending
            </Link>

            <Link
              className={`text-lg ${pathname === "/Search" ? "text-white underline underline-offset-8" : "text-gray-300 transition-all duration-300 hover:text-white"}`}
              href={"/Search"}
            >
              Search
            </Link>
          </div>
        </div>

        <header>
          <SignedOut>
            <Button asChild size={"sm"} className="rounded-full">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </section>
    </nav>
    </div>
  );
}
