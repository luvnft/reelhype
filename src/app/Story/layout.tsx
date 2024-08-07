import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Story',
    description: 'Why I`m building ReelHype',
};

export default function StoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
}
