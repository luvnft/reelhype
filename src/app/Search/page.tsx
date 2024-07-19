import { Searchinput } from "./_components/search-input";

const Search = () => {
  return (
    <div className="mx-auto lg:mt-20 mt-16  w-full max-w-[1200px] ">
      <div className="flex flex-col lg:gap-10 gap-6 px-2 py-10 lg:px-0">
        <h1 className="font-secondary text-3xl">Search</h1>
        <div>
          <Searchinput />
        </div>
      </div>
    </div>
  );
};

export default Search;
