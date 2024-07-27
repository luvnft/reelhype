import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Search',
    description: 'Search for movies and tv trailers',
};

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
