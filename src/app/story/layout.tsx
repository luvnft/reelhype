import MaxWidthWrapper from "@/components/MaxWidthWrapper";


export default function StoryLayout({ children }: { children: React.ReactNode }) {
 return (
    <MaxWidthWrapper>
        {children}
    </MaxWidthWrapper>
 )
}