'use client';

import ImageComponent from '@/components/image-component';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { fetchSearchResults } from '@/server/tmdb';
import type { SearchResult } from '@/types/tmdb-types';
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ComboBox() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<SearchResult | null>(
        null
    );
    const router = useRouter();

    const { data } = useQuery<{ results: SearchResult[] }>({
        queryKey: ['search', searchQuery],
        queryFn: async () => await fetchSearchResults(searchQuery),
        enabled: searchQuery !== '', // Only fetch data when searchQuery is not empty
    });

    const handleSearchInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchQuery(e.target.value);
    };

    return (
        <Combobox value={selectedValue} onChange={setSelectedValue}>
            <ComboboxInput
                displayValue={(item: SearchResult) =>
                    item?.title ?? item?.original_title ?? item?.name ?? ''
                }
                aria-label="search results"
                placeholder="Search for a movie or TV show"
                onChange={handleSearchInputChange}
                className="block h-[50px] w-full rounded-full border border-[#F5C111] bg-[#28282B] p-2.5 pl-5 text-sm font-medium text-white placeholder-gray-100 focus:ring-2 focus:ring-[#F5C111] lg:h-[70px] lg:text-xl  "
            />
            <ComboboxOptions
                className={cn(
                    'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {data?.results?.slice(0, 4).map((search) => (
                    <ComboboxOption
                        className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
                        key={search.id}
                        value={search}
                        onClick={() =>
                            router.push(
                                `/info/${search.media_type}/${search.id}`
                            )
                        }
                    >
                        <div className="flex flex-row items-start gap-3">
                            <ImageComponent
                                src={`https://image.tmdb.org/t/p/original${search.poster_path}`}
                                alt={`${search.title ?? search.original_title ?? search.name}`}
                                width={200}
                                height={200}
                                className="h-auto w-[70px] rounded object-cover"
                            />
                            <div>
                                <h1>
                                    {search.title ??
                                        search.original_title ??
                                        search.name}
                                </h1>
                                <div className="flex flex-row items-center gap-1">
                                    <Icons.star />
                                    <h1>{search.vote_average}</h1>
                                </div>
                                <h1>{search.media_type}</h1>
                            </div>
                        </div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    );
}
