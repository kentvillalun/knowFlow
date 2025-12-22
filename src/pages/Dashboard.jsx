import Card from "../components/Card";
import EntryContent from "../components/EntryContent";
import FocusListItems from "../components/FocusListItems";
import RecenEntriesList from "../components/RecentEntriesList";
import TagChip from "../components/TagChip";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-auto gap-10 md:grid-cols-2 md:grid-rows-[auto, auto] ">
      {/* <div className="grid lg:grid-rows-[auto_auto_1fr_1fr_1fr] gap-5 md:grid-cols-2 grid-cols-1"> */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p className="text-lg">Your learning overview.</p>
        </div>
        <div className="flex flex-col gap-5">
          <Card />
          <FocusListItems />
        </div>
        <div className="flex flex-col gap-5">
          <TagChip />
          <RecenEntriesList />
          <EntryContent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
