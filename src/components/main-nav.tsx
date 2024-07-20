"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Search } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 right-0  top-0 z-50 w-full bg-[#0A0B0B]/30 backdrop-blur-xl">
      
      <nav className="mx-auto flex w-full max-w-[1200px]   px-3 py-4 lg:px-0 ">
      
        <section className="flex w-full flex-row items-center justify-between ">
          <div className="flex flex-row items-center gap-[52px]">
            <div className="flex flex-row gap-4 items-center">
            <MobileNav />
              <Link href={"/"}>
              <h1 className="font-accent text-lg text-[#F5C111]">Convofy</h1>
            </Link>
           
            </div>
            

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
              <Link
                className={`text-lg ${pathname === "/Story" ? "text-white underline underline-offset-8" : "text-gray-300 transition-all duration-300 hover:text-white"}`}
                href={"/story"}
              >
                Story
              </Link>
            </div>
          </div>

          <header className="flex flex-row items-center gap-5">
            <Link
              className="block cursor-pointer transition-all duration-300 hover:bg-gray-950 lg:hidden"
              href="/Search"
            >
              <Search className="h-[28px] w-[28px]" />
            </Link>
            <div>
              <SignedOut>
                <Button asChild size={"sm"} className="rounded-full">
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
        </section>
      </nav>
    </div>
  );
}
