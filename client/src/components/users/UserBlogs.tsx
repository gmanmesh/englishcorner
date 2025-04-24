

const UserBlogs = () => {
    return (
        <div className="my-4 bg-gray-50">
            <h2 className="text-5xl md:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                News
            </h2>
            <div className="flex flex-col gap-4 my-4 container mx-auto px-4">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 cursor-pointer">
                    <p className="text-gray-700 font-semibold">Discount for Online Students</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 cursor-pointer">
                    <p className="text-gray-700 font-semibold">Our Group Classes Are Awesome</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 cursor-pointer">
                    <p className="text-gray-700 font-semibold">Private Classes Are Ready for You</p>
                </div>
            </div>
        </div>
    )
}

export default UserBlogs
