import { useNavigate } from "react-router-dom"
import { setProfileForm } from "../../features/users"
import { useDispatch } from "react-redux"


const UsersGuild = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className="py-16 bg-gray-50" >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-8 text-blue-700">What’s Next?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Step 1: Complete Your Profile */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Step 1: Complete Your Profile</h3>
                        <button
                            onClick={() => dispatch(setProfileForm(true))}
                            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md active:shadow-lg transition duration-300 ease-in-out"
                        >
                            Complete My Profile
                        </button>
                    </div>
                    {/* Step 2: Evaluate Your Level */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Step 2: Evaluate Your Level</h3>
                        <button
                            onClick={() => navigate('/evaluation')}
                            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md active:shadow-lg transition duration-300 ease-in-out"
                        >
                            Start Evaluation
                        </button>
                    </div>

                    {/* Step 3: Meet Your Teacher */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-medium mb-4 text-blue-600">Step 3: Meet Your Teacher</h3>
                        <button
                            onClick={() => navigate('/schedule')}
                            className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md active:shadow-lg transition duration-300 ease-in-out"
                        >
                            Schedule My First Class
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default UsersGuild