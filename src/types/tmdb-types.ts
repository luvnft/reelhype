export interface Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    name: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieData {
    results: Movie[];
}

export interface ImageComponentProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    fill?: boolean;
}

export interface SearchResult {
    id: number;
    media_type: string;
    poster_path: string;
    title?: string;
    original_title?: string;
    name?: string;
    vote_average: number;
}

export interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
    seasonNumber?: number;
}

export interface VideoPlayerProps {
    sources: string[];
    info: TrailerInfos[];
    mediaType: string;
    id: string;
}

export interface ApiResponse {
    results: Video[];
}

export interface Season {
    season_number: number;
}

export interface ShowData {
    seasons: Season[];
}

export interface TrailerInfoProps {
    media_type: 'movie' | 'tv';
    id: string;
}

export interface TrailerInfos {
    key: string;
    name: string;
    seasonNumber?: number;
}
