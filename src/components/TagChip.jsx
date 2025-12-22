const TagChip = () => {
    return (
        <>
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
                <h3 className="text-2xl font-semibold">Top Tags</h3>
                <div className="grid xl:grid-cols-5 grid-rows-auto gap-2 lg:grid-cols-4 grid-cols-4">
                    <div className="p-1 rounded-3xl text-center border-violet-700 border-2 hover:cursor-pointer hover:shadow-xl shadow-lg transform hover:-translate-y-1 transition-all hover:bg-violet-100  text-violet-700 text-lg ">
                        <p className="">React</p>
                    </div>

                    <div className="p-1 rounded-3xl text-center border-violet-700 border-2 hover:cursor-pointer hover:shadow-xl shadow-lg transform hover:-translate-y-1 transition-all hover:bg-violet-100  text-violet-700 text-lg ">
                        <p className="">Node JS</p>
                    </div>

                    <div className="p-1 rounded-3xl text-center border-violet-700 border-2 hover:cursor-pointer hover:shadow-xl shadow-lg transform hover:-translate-y-1 transition-all hover:bg-violet-100  text-violet-700 text-lg ">
                        <p className="">Hooks</p>
                    </div>

                    <div className="p-1 rounded-3xl text-center border-violet-700 border-2 hover:cursor-pointer hover:shadow-xl shadow-lg transform hover:-translate-y-1 transition-all hover:bg-violet-100  text-violet-700 text-lg ">
                        <p className="">API</p>
                    </div>

                    <div className="p-1 rounded-3xl text-center border-violet-700 border-2 hover:cursor-pointer hover:shadow-xl shadow-lg transform hover:-translate-y-1 transition-all hover:bg-violet-100  text-violet-700 text-lg ">
                        <p className="">UI</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default TagChip;