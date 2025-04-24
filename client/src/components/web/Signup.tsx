import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { signupApi } from '../../api/api';
import { setForm, setLoginForm } from '../../features/users';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { signUp } from '../../types/types';

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const [serverMessage, setServerMessage] = useState<string>('');
    const [comfirm, setComfirm] = useState<string>('');
    const [inputs, setInputs] = useState<signUp>({
        user_name: '',
        phone: '',
        email: '',
        user_password: '',
        gender: '',
    });

    const [error, setError] = useState({
        user_name: '',
        phone: '',
        email: '',
        user_password: '',
        gender: '',
        repeat_password: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeat, setShowRepeat] = useState(false);

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        if (value === "") {
            setError((pre) => ({ ...pre, user_name: "Please enter username" }));
        } else {
            setError((pre) => ({ ...pre, user_name: "" }));
        }
    };

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        if (value === "") {
            setError((pre) => ({ ...pre, phone: "Please enter your phone" }));
        }
        else if (!value.match(/^\d{9,12}$/)) {
            setError({ ...error, phone: "Invalid phone number" });
            return;
        }
        setError((pre) => ({ ...pre, phone: "" }));
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        if (value !== "" && !value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
            setError({ ...error, email: "Invalid email format" });
            return;
        }
        setError((pre) => ({ ...pre, email: "" }));
    };

    const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        if (value === "") {
            setError((pre) => ({ ...pre, gender: "Please select your gender" }));
        } else {
            setError((pre) => ({ ...pre, gender: "" }));
        }
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        if (value === "") {
            setError((pre) => ({ ...pre, user_password: "Please enter your password" }));
        } else {
            setError((pre) => ({ ...pre, user_password: "" }));
        }
    };

    const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setComfirm(value);

        if (value === "") {
            setError((prev) => ({ ...prev, repeat_password: "Please confirm password" }));
        } else if (inputs.user_password !== value) {
            setError((prev) => ({ ...prev, repeat_password: "Passwords do not match" }));
        } else {
            setError((prev) => ({ ...prev, repeat_password: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formErrors = { ...error };

        if (inputs.user_name === "") formErrors.user_name = "Please enter username";
        if (inputs.gender === "") formErrors.gender = "Please select your gender";
        if (inputs.phone === "") formErrors.phone = "Please enter your phone";
        if (inputs.user_password === "") formErrors.user_password = "Please enter your password";
        if (comfirm === "") formErrors.repeat_password = "Please confirm password";
        if (inputs.user_password !== comfirm) formErrors.repeat_password = "Passwords do not match";

        if (Object.values(formErrors).some((error) => error !== "")) {
            setError(formErrors);
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(signupApi, inputs);
            setServerMessage(response.data.message);
            console.log(response.data)
            if (response.data.message === "registered") {
                dispatch(setForm('login'))
            }

        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.message) {
                setServerMessage(err.response.data.message);
            } else {
                setServerMessage('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        'w-full px-4 py-[2px] border border-orange-300 rounded-md focus:border-blue-300 focus:outline-none text-md text-primary';

    return (
        <div className="max-w-md mx-auto bg-white">
            <p className="text-red-600 text-center font-semibold text-lg">{serverMessage}</p>

            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <div className="mb-2">
                    <div className="flex justify-between">
                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.user_name}</p>
                    </div>
                    <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        placeholder="Username"
                        value={inputs.user_name}
                        onChange={handleUserName}
                        required
                        className={inputClass}
                    />
                </div>

                <div className="mb-2">
                    <div className="flex justify-between">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.phone}</p>
                    </div>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={inputs.phone}
                        onChange={handlePhone}
                        required
                        className={inputClass}
                    />
                </div>

                <div className="mb-2">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.email}</p>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={inputs.email}
                        onChange={handleEmail}
                        className={inputClass}
                    />
                </div>

                <div className="mb-2">
                    <div className="flex justify-between">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.gender}</p>
                    </div>
                    <select
                        id="gender"
                        name="gender"
                        value={inputs.gender}
                        onChange={handleGender}
                        required
                        className={inputClass}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="mb-2 relative">
                    <div className="flex justify-between">
                        <label htmlFor="user_password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.user_password}</p>
                    </div>
                    <input
                        id="user_password"
                        name="user_password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={inputs.user_password}
                        onChange={handlePassword}
                        required
                        className={inputClass}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute mt-3 top-1/2 text-lg font-bold right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <PiEyeClosed className='text-orange-600' /> : <PiEye className='text-orange-600' />}
                    </button>
                </div>

                <div className="mb-2 relative">
                    <div className="flex justify-between">
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <p className="text-sm font-medium text-red-500 mr-2">{error.repeat_password}</p>
                    </div>
                    <input
                        id="confirm_password"
                        type={showRepeat ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        value={comfirm}
                        onChange={confirmPassword}
                        required
                        className={inputClass}
                    />
                    <button
                        type="button"
                        onClick={() => setShowRepeat(!showRepeat)}
                        className="absolute mt-3 top-1/2 text-lg font-bold right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showRepeat ? 'Hide password' : 'Show password'}
                    >
                        {showRepeat ? <PiEyeClosed className='text-orange-600 ' /> : <PiEye className='text-orange-600 ' />}
                    </button>
                </div>

                <div className="flex gap-4 my-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-800 text-white px-10 py-[7px] rounded-md hover:bg-blue-700 active:bg-blue-700 transition duration-300"
                    >
                        {loading ? 'Signing up...' : 'Sign up'}
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(setLoginForm(false))}
                        className="bg-gray-400 text-white px-6 py-[7px] rounded-md hover:bg-gray-500 active:bg-gray-600 transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
