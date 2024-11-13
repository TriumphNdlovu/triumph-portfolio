export default function Trash() {
        return (
            <>
            <h2 className="text-4xl text-red-500 font-bold mb-6 text-center">
                Trash: Negative Thoughts Archive
                </h2>
                <p className="text-lg mb-8 text-center text-gray-400">
                It's okay to feel down, but let's not dwell on these thoughts. Here are some things I need to let go.
                </p>
                
                <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"I am a failure"</p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"I am a loser"</p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"I am a nobody"</p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"I will never succeed"</p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"Nobody cares about me"</p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                    <p className="text-xl text-gray-300">"I'm just not good enough"</p>
                </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-400">
                These thoughts are just passing through. They don't define me, and I am working on letting them go.
                </p>
            </>
        );
}