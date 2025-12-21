const EntryListItem = () => {
    return (
        <>
            <div className="flex flex-col gap-3 lg:col-span-1 md:col-span-1 col-span-2">
                <h2 className="text-2xl font-semibold">Recent Entries</h2>
                <div className="flex flex-col gap-4">
                    
                    <div className="w-full bg-white p-4 shadow-lg rounded-xl transform hover:-translate-y-1 hover:shadow-xl transition-all hover:border-b-violet-700 hover:border-b-3 hover:cursor-pointer">
                        <h3 className="text-xl font-semibold">React Hooks Deep Dive</h3>
                        <p className="text-gray-400">23-11-18</p>
                    </div>

                    <div className="w-full bg-white p-4 shadow-lg rounded-xl transform hover:-translate-y-1 hover:shadow-xl transition-all hover:border-b-violet-700 hover:border-b-3 hover:cursor-pointer">
                        <h3 className="text-xl font-semibold">React Router Dom</h3>
                        <p className="text-gray-400">23-11-20</p>
                    </div>

                    <div className="w-full bg-white p-4 shadow-lg rounded-xl transform hover:-translate-y-1 hover:shadow-xl transition-all hover:border-b-violet-700 hover:border-b-3 hover:cursor-pointer">
                        <h3 className="text-xl font-semibold">What is a React Component</h3>
                        <p className="text-gray-400">23-11-20</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default EntryListItem;