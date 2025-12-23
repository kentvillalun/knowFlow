const Card = ({value, onChange, onSave}) => {
  return (
    <>
      <div className="bg-white shadow-lg p-6 rounded-xl flex flex-col gap-2 col-span-2 md:col-span-1 lg:order-1">
        <h2 className="text-2xl font-semibold">Today's Focus</h2>
        <p className="italic">What will you apply today?</p>
        <textarea name="" id="" rows={3} className="w-full p-3 border-2 rounded-xl text-gray-400 focus:border-violet-700 focus:outline-0" placeholder="Ex. Build the Entries page layout and practice component separation." value={value} onChange={onChange}></textarea>
        <div className="flex justify-end">
          <button className="bg-violet-800 text-white px-6 py-2 rounded-3xl hover:bg-violet-900 active:bg-violet-950 transition-colors cursor-pointer" onClick={onSave}>Save Focus</button>
        </div>
      </div>
    </>
  );
};

export default Card;
