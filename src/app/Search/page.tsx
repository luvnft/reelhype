import { Searchinput } from "./_components/search-input";

const Search = () => {
  return (
    <div className="mx-auto  w-full max-w-[1200px] ">
      <div className="flex flex-col gap-10 px-4 py-10 lg:px-0">
        <h1 className="font-mono text-3xl">Search</h1>
        <div>
          <Searchinput />
        </div>
      </div>
    </div>
  );
};

export default Search;
