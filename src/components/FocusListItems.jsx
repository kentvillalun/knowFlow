const FocusListItems = ({ focusList }) => {
  return (
    <>
      <div className="flex flex-col gap-3 lg:col-span-1 md:col-span-1 col-span-2 md:order-3 ">
        <h2 className="text-2xl font-semibold">Today's Targets</h2>
        <div className="flex flex-col gap-4">
          {focusList.map((f) => {
            return (
              <div
                className="w-full bg-white p-4 shadow-lg rounded-xl transform hover:-translate-y-1 hover:shadow-xl transition-all hover:border-b-violet-700 hover:border-b-3 hover:cursor-pointer pb-8"
                key={f.id}
              >
                <h3 className="text-xl font-semibold">{f.focusName}</h3>
              </div>
            );
          })}


        </div>
      </div>
    </>
  );
};

export default FocusListItems;
