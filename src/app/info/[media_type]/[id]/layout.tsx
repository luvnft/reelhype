import { FilmInfo } from '@/server/tmdb';
import type { LayoutProps } from '@/types/layout-types';
import type { BackdropProps } from '@/types/metadata-types';

export const runtime = 'edge';

export async function generateMetadata({
    params,
}: {
    params: { media_type: string; id: string };
}) {
    const { media_type, id } = params;
    const data = await FilmInfo({ media_type: media_type, id: id });
    const post = await fetch(
        `https://api.themoviedb.org/3/${params.media_type}/${params.id}/images?include_image_language=en&language=en-US`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            },
            cache: 'no-store',
        }
    )
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json() as Promise<BackdropProps>;
        })
        .catch((error) => {
            console.error('Error fetching backdrop:', error);
            return { backdrops: [] } as BackdropProps;
        });

    const backdropPath =
        post?.backdrops?.[0]?.file_path ?? '/fallback-image.jpg';

    const { name, original_name, overview, title } = data;

    return {
        title: `${name || original_name || title} Trailer`,
        description: overview,
        openGraph: {
            images: [
                {
                    url: `https://image.tmdb.org/t/p/original${backdropPath}`,
                    width: 1200,
                    height: 630,
                    alt: `${name ?? original_name ?? title} Trailer`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${name ?? original_name ?? title} Trailer`,
            description: overview,
            images: `https://image.tmdb.org/t/p/original${backdropPath}`,
            creator: '@evansso_',
        },
    };
}

export default function InfoLayout({ children }: LayoutProps) {
    return <div>{children}</div>;
}
