import { Button } from "./ui/button";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function MainNav() {
  return (
    <nav className="mx-auto flex w-full max-w-[1200px] ">
      <section className="flex w-full flex-row items-center justify-between ">
        <div className="flex flex-row items-center gap-[52px]">
          <Link href={"/"}>
            <Icons.logo className="h-[59px] w-[105px]" />
          </Link>

          <div className="hidden flex-row items-center gap-[52px] lg:flex ">
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link className="text-lg " href={"/Trending"}>
                Trending
              </Link>
            </Button>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link className="text-lg " href={"/"}>
                Upcoming
              </Link>
            </Button>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link className="text-lg " href={"/"}>
                Live Premiers
              </Link>
            </Button>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link className="text-lg " href={"/"}>
                Communities
              </Link>
            </Button>
          </div>
        </div>

        <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
      </section>
    </nav>
  );
}
