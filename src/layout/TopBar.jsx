import SearchIcon from "../components/icons/SearchIcon";
import PlusIcon from "../components/icons/PlusIcon";

const TopBar = () => {
  return (
    <>
      <div className="font-sans shadow-lg flex flex-row justify-between items-center px-9 py-4 sticky top-0 z-10 bg-white">
        {/* App name */}
        <h1 className="text-4xl font-bold">KnowFlow</h1>
        <div className="flex flex-row justify-between items-center gap-7 ">

          {/* Search field  */}
          <div className="hidden lg:flex flex-row justify-between gap-2 px-4 py-1 items-center rounded-3xl border-2 focus-within:border-violet-700 text-gray-400 hover:cursor-text">
            <label htmlFor="search" className="hover:cursor-text">
              <SearchIcon />
            </label>
            <input
              type="text"
              name=""
              id="search"
              className=" py-1 min-w-md focus:outline-0 bg-transparent"
              placeholder="Search..."
            />
          </div>

          {/* Add entry button */}
          <button className="flex flex-row justify-between gap-3 px-5 py-2 items-center rounded-3xl bg-violet-800 text-white hover:bg-violet-900 active:bg-violet-950 cursor-pointer transition-colors">
            <PlusIcon />
            <p className="">New Entry</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
