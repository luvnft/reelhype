import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Story",
    description: "Search for movies and tv trailers",
  };


export default function StoryLayout({ children }: { children: React.ReactNode }) {
 return (
    <MaxWidthWrapper>
        {children}
    </MaxWidthWrapper>
 )
}