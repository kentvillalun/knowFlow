import Card from "../components/Card";
import EntryListItem from "../components/EntryListItem";
import TagChip from "../components/TagChip";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_auto_1fr] gap-5 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-1 col-span-2">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p className="text-lg">Your learning overview.</p>
        </div>
        <Card />
        <EntryListItem />
        <TagChip />
      </div>
    </>
  );
};

export default Dashboard;
