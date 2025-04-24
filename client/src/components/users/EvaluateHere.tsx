import { useNavigate } from "react-router-dom"


const EvaluateHere = () => {
    const navigate = useNavigate()
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold mb-6 text-blue-700">Evaluate Your English Level for Free</h2>
                <p className="text-lg mb-8 text-gray-600">
                    This quick evaluation helps us understand your current level and guide you on the best path to achieving your English-learning goals.
                </p>
                <button
                    onClick={() => navigate('/evaluation')}
                    className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-md active:shadow-lg transition duration-300 ease-in-out"
                >
                    Start Evaluation
                </button>
            </div>
        </div>
    )
}

export default EvaluateHere
