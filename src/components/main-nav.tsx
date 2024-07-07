"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="mx-auto flex w-full max-w-[1200px] ">
      <section className="flex w-full flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-[52px]">
          <Link href={"/"}>
            <Icons.logo className="h-[59px] w-[105px]" />
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
  );
}
