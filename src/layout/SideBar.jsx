import HomeIcon from "../components/icons/HomeIcon";
import EntryIcon from "../components/icons/EntryIcon";
import TagIcon from "../components/icons/TagIcon";
import SettingIcon from "../components/icons/SettingIcon";

const SideBar = () => {
  return (
    <>
      <div className="w-64 min-h-[calc(100dvh-75px)] border-r-gray-200 border-r sticky top-18.75 self-start">
        {/* Dashboard Link */}
        <div className="p-4 mt-7 flex flex-col gap-2">
          <div className=" pb-2 mr-5">
            <div className="flex flex-row gap-5 items-center uppercase hover:bg-violet-50 px-4 py-2 text-gray-400 rounded-lg hover:text-violet-900 transition-colors cursor-pointer active:bg-violet-200 ">
              <HomeIcon />
              <p className="">Dashboard</p>
            </div>
          </div>

          <div className=" pb-2 mr-5">
            <div className="flex flex-row gap-5 items-center uppercase hover:bg-violet-50 px-4 py-2 text-gray-400 rounded-lg hover:text-violet-900 transition-colors cursor-pointer active:bg-violet-200 ">
                <EntryIcon />
              <p className="">Entries</p>
            </div>
          </div>

          <div className=" pb-2 mr-5 ">
            <div className="flex flex-row gap-5 items-center uppercase hover:bg-violet-50 px-4 py-2 text-gray-400 rounded-lg hover:text-violet-900 transition-colors cursor-pointer active:bg-violet-200 ">
                <TagIcon />
              <p className="">Tags</p>
            </div>
          </div>

           <div className="border-b pb-7 mr-5 border-gray-300">
            <div className="flex flex-row gap-5 items-center uppercase hover:bg-violet-50 px-4 py-2 text-gray-400 rounded-lg hover:text-violet-900 transition-colors cursor-pointer active:bg-violet-200 ">
                <SettingIcon />
              <p className="">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
