import { useDispatch } from "react-redux";
import { setProfileForm } from "../features/users";
import { useState } from "react";
import axios from "axios";
import { userProfile } from "../api/api";

const NewRegistration = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        first_name: "",
        fathers_name: "",
        role: "student",
        address: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post(userProfile, inputs)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className="fixed backdrop-blur-md py-10 h-screen mt-[-20px] flex justify-center w-[1100px]">
            <div className="w-[700px] mx-auto p-4 bg-white h-fit shadow-md rounded-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="fathers_name" className="block text-sm font-medium text-gray-700">
                            Father's Name
                        </label>
                        <input
                            type="text"
                            id="fathers_name"
                            name="fathers_name"
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Select Your Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="student">Student</option>
                            <option value="staff">Staff</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></textarea>
                    </div>
                    <div className="flex gap-6">
                        <button
                            type="submit"
                            className=" py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>

                        <p
                            onClick={() => dispatch(setProfileForm(false))} className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >Cancel</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewRegistration;
