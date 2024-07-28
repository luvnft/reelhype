import ImageComponent from '@/components/image-component';
import { FilmInfo } from '@/server/tmdb';
import { Disqus } from '../../_components/disqus';
import { TrailerInfo } from '../../_components/trailer-info';

export async function generateMetadata({
    params,
}: {
    params: { media_type: string; id: string };
}) {
    const { media_type, id } = params;
    const data = await FilmInfo({ media_type: media_type, id: id });

    const { name, original_name, overview, title } = data;

    return {
        title: `${name || original_name || title} Trailer`,
        description: overview,
    };
}

export default async function Page({
    params: { media_type, id },
}: {
    params: { media_type: string; id: string };
}) {
    const data = await FilmInfo({ media_type: media_type, id: id });

    const { name, original_name, title, backdrop_path } = data;

    return (
        <div className="relative min-h-screen">
            <ImageComponent
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt={original_name}
                width={1200}
                height={1200}
                className="h-[400px] w-screen object-cover lg:h-[700px] "
            />

            <div className="absolute inset-0 h-[400px] bg-gradient-to-b from-transparent to-black lg:h-[700px]" />

            <div className="absolute inset-0">
                <div className="mx-auto mt-24 flex w-full max-w-[1200px] items-center rounded-lg px-3 py-0 lg:mt-20  lg:py-3">
                    <div className=" flex w-full flex-col gap-10  lg:gap-10">
                        <div className=" ">
                            <TrailerInfo
                                media_type={media_type as 'movie' | 'tv'}
                                id={id}
                            />
                        </div>

                        <div className="flex flex-col gap-8">
                            <h1 className="text-2xl font-medium ">Comments</h1>
                            <div>
                                <Disqus
                                    id={id}
                                    title={name || original_name || title}
                                    media_type={media_type}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
