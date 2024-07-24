import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="block lg:hidden">
      <Sheet key="left">
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side={'left'} className="w-[250px] ">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="grid gap-4 py-4">
            <Link
              className={`text-lg ${pathname === "/Trending" ? "text-white" : "text-gray-300 "}`}
              href={"/Discover"}
            >
              Discover
            </Link>

            <Link
              className={`text-lg ${pathname === "/Search" ? "text-white " : "text-gray-300"}`}
              href={"/Search"}
            >
              Search
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
