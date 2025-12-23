import Card from "../components/Card";
import EntryContent from "../components/EntryContent";
import FocusListItems from "../components/FocusListItems";
import RecenEntriesList from "../components/RecentEntriesList";
import TagChip from "../components/TagChip";
import AlertIcon from "../components/icons/AlertIcon";
import { useState } from "react";

const Dashboard = () => {
  const [focusText, setFocusText] = useState("");
  const [focusList, setFocusList] = useState([]);

  const addFocus = () => {
    if (focusText.trim() === "") {
      return alert(
        "Input field can't be empty. Please input your focus before adding!"
      );
    }
    const focus = {
      id: focusList.length === 0 ? 1 : focusList[focusList.length - 1].id + 1,
      focusName: focusText,
    };

    setFocusList([...focusList, focus]);
    setFocusText("");
  };

  const deleteFocus = (id) => {
    setFocusList(focusList.filter((f) => f.id !== id));
  };

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-auto gap-10 md:grid-cols-2 md:grid-rows-[auto, auto] ">
        <div className="flex flex-col gap-1 md:col-span-2">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <p className="text-lg">Your learning overview.</p>
        </div>
        <div className="flex flex-col gap-5">
          <Card
            value={focusText}
            onChange={(event) => setFocusText(event.target.value)}
            onSave={addFocus}
          />
          <FocusListItems focusList={focusList} deleteFocus={deleteFocus} />
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
