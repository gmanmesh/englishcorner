import { useSelector } from "react-redux";
import { RootState } from "../../types/types";


const UsersHero = () => {
    const user = useSelector((state: RootState) => state.user.user);
    return (
        <div className="text-primary py-20 rounded-lg bg-gradient-to-b from-[#c6c6fe] to-white shadow-md my-4">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-5xl py-2 font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-300">
                    Welcome, and take the few steps needed to join our amazing English classes!
                </h3>
                <p className="text-xl mb-8 text-gray-700">
                    <span className="font-bold text-blue-600">Hi {user?.user_name.charAt(0).toUpperCase()+user.user_name.substring(1,user.user_name.length)}</span>, we're thrilled to have you join us at English Corner.
                </p>
                <p className="text-lg text-gray-600">
                    Whether you're here to improve your conversational skills, prepare for exams, or advance your career, we’re here to support you every step of the way.
                </p>
            </div>
        </div>
    )
}

export default UsersHero