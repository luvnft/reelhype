import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Convofy Info';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

interface Backdrop {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface BackdropProps {
  backdrops: Backdrop[];
}

export default async function Image({ params }: { params: { media_type: string, id: string } }) {
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
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json() as Promise<BackdropProps>;
  }).catch((error) => {
    console.error('Error fetching backdrop:', error);
    return { backdrops: [] } as BackdropProps;
  });

  const backdropPath = post?.backdrops?.[0]?.file_path || '/fallback-image.jpg';

  return new ImageResponse(
    (
      <div className='w-fit h-fit'>
        <img 
          className='w-screen h-screen object-cover' 
          src={`https://image.tmdb.org/t/p/original${backdropPath}`} 
          alt={alt} 
        />
      </div>
    ),
    {
      ...size,
    }
  );
}