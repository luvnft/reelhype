import type {
    ApiResponse,
    Season,
    ShowData,
    TrailerInfoProps,
    TrailerInfos,
    Video,
} from '@/types/tmdb-types';
import { VideoPlayer } from './video-player';

export const TrailerInfo: React.FC<TrailerInfoProps> = async ({
    media_type,
    id,
}) => {
    let allTrailers: Video[] = [];

    if (media_type === 'movie') {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
                },
            }
        );
        const data = (await response.json()) as ApiResponse;
        allTrailers = data.results.filter((video) => video.type === 'Trailer');
    } else if (media_type === 'tv') {
        const showResponse = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
                },
            }
        );
        const showData = (await showResponse.json()) as ShowData;
        const seasons: Season[] = showData.seasons.filter(
            (season) => season.season_number > 0
        );

        for (const season of seasons) {
            const response = await fetch(
                `https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}/videos?language=en-US`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
                    },
                }
            );
            const data = (await response.json()) as ApiResponse;
            const seasonTrailers = data.results.filter(
                (video) => video.type === 'Trailer'
            );
            seasonTrailers.forEach((trailer) => {
                trailer.seasonNumber = season.season_number;
            });
            allTrailers.push(...seasonTrailers);
        }

        const showTrailersResponse = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
                },
            }
        );
        const showTrailersData =
            (await showTrailersResponse.json()) as ApiResponse;
        const showTrailers = showTrailersData.results.filter(
            (video) => video.type === 'Trailer'
        );
        showTrailers.forEach((trailer) => {
            trailer.seasonNumber = 0;
        });
        allTrailers.push(...showTrailers);
    }

    const trailerInfo: TrailerInfos[] = allTrailers.map((trailer) => ({
        key: trailer.key,
        name: trailer.name,
        seasonNumber: trailer.seasonNumber,
    }));

    return (
        <div className="flex flex-col gap-3 lg:gap-5">
            <VideoPlayer
                sources={allTrailers.map((trailer) => `youtube/${trailer.key}`)}
                info={trailerInfo}
                id={id}
                mediaType={media_type}
            />
        </div>
    );
};
