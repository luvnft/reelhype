"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "@/utils/tmdb";
import { cn } from "@/lib/utils";

interface SearchResult {
  id: number;
  media_type: string;
  poster_path: string;
  title?: string;
  original_title?: string;
  name?: string;
  vote_average: number;
}

export default function ComboBox() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<SearchResult | null>(null);

  const { data, isLoading } = useQuery<{ results: SearchResult[] }>({
    queryKey: ["search", searchQuery],
    queryFn: async () => await fetchSearchResults(searchQuery),
    enabled: searchQuery !== "", // Only fetch data when searchQuery is not empty
  });

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Combobox value={selectedValue} onChange={setSelectedValue}>
      <ComboboxInput
        displayValue={(item: SearchResult) =>
          item?.title ?? item?.original_title ?? item?.name ?? ""
        }
        
        aria-label="search results"
        placeholder="Search for a movie or TV show"
        onChange={handleSearchInputChange}
        className="block h-[50px] w-full rounded-full border border-gray-300 bg-[#0A0B0B] p-2.5 pl-5 text-sm font-medium text-white placeholder-gray-100 focus:ring-2 focus:ring-white lg:h-[70px] lg:text-xl  "
      />
      <ComboboxOptions
        className={cn(
          "w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
        )}
      >
        {data?.results?.slice(0, 4).map((search) => (
          <ComboboxOption
            className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
            key={search.id}
            value={search}
          >
            {({ active }) => (
              <div className={`p-2 ${active ? "bg-blue-500 text-white" : ""}`}>
                {search.title ?? search.original_title ?? search.name}
              </div>
            )}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
}
