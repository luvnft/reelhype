import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Search',
    description: 'Search for Movies and TV trailers',
};

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
