import "./App.css";
import Main from "./layout/Main";
import SideBar from "./layout/SideBar";
import TopBar from "./layout/TopBar";

function App() {
  return (
    <>
      <div className="">
        <TopBar />
        <div className="grid grid-cols-[16rem_1fr] gap-4">
          <SideBar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
