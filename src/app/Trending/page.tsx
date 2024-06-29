import { Icons } from "@/components/ui/icons"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';

interface Movie {
    id: string;
    media_type: string;
    poster_path: string;
    title: string;
    vote_average: number;
    name: string;
}

export default async function Trending() {
    const data = await fetchTrendingImages()

    return (
        <div className="w-full max-w-[1200px] flex flex-col gap-10 px-3 mx-auto py-10">
            <h1 className="text-3xl font-medium font-mono px-3">Trending</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-5 gap-3">
                {data.results.map((trending: Movie) => (
                    <Link href={`/info/${trending.media_type}/${trending.id}`} key={trending.id} className="px-[13px] py-[9px] flex flex-col items-start gap-1 cursor-pointer">
                        <CldImage deliveryType='fetch' width={198.10} height={296.51} src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
                            alt={trending.title || trending.name}
                            className="object-cover w-full max-w-[198.10px] lg:h-[296.51px] h-auto rounded-[25.90px] transition-all border border-gray-500 hover:shadow-white/30 hover:shadow-sm hover:outline hover:outline-2 hover:outline-stone-400" />
                        <div className="py-3 pr-3">
                            <h2 className="text-white  font-normal font-mono text-lg">{trending.title || trending.name}</h2>
                            <div className="flex flex-row items-center gap-2">
                                <Icons.star />
                                <p className="text-white text-sm font-normal font-mono">{trending.vote_average}</p>
                            </div>
                        </div>
                    </Link>
                )
                )}
            </div>
        </div>
    )
}

async function fetchTrendingImages() {
    const res = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        cache: 'no-store'
    })

    const data = await res.json()
    return data
}