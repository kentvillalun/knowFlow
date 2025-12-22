const RecenEntriesList = () => {
  return (
    <>
      <div className=" bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 col-span-2">
        <h2 className="text-2xl font-semibold">Recent Entries</h2>
        <div className="">
            <div className="flex justify-between p-1 ">
                <p className="text-lg font-semibold hover:cursor-pointer">React Hook Deep Dive</p>
                <p className="text-gray-400 text-lg hover:cursor-pointer">12-11-25</p>
            </div>

            <div className="flex justify-between p-1">
                <p className="text-lg font-semibold hover:cursor-pointer">Understanding Redux</p>
                <p className="text-gray-400 text-lg hover:cursor-pointer">12-15-25</p>
            </div>

            <div className="flex justify-between p-1">
                <p className="text-lg font-semibold hover:cursor-pointer">React Router Dom</p>
                <p className="text-gray-400 text-lg hover:cursor-pointer">12-16-25</p>
            </div>

            <div className="flex justify-between p-1">
                <p className="text-lg font-semibold hover:cursor-pointer">React Router Dom</p>
                <p className="text-gray-400 text-lg hover:cursor-pointer">12-16-25</p>
            </div>

            <div className="flex justify-between p-1">
                <p className="text-lg font-semibold hover:cursor-pointer">React Router Dom</p>
                <p className="text-gray-400 text-lg hover:cursor-pointer">12-16-25</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default RecenEntriesList;
