import { Searchinput } from './_components/search-input';

const Search = () => {
    return (
        <div className="mx-auto mt-16 w-full  max-w-[1400px] lg:mt-20 ">
            <div className="flex flex-col gap-6 px-3 py-10 lg:gap-10 lg:px-0">
                <h1 className="font-secondary text-3xl">Search</h1>
                <div>
                    <Searchinput />
                </div>
            </div>
        </div>
    );
};

export default Search;
