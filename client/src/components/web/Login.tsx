import React, { useState } from 'react';
import { setForm, setLoginForm, setUser } from '../../features/users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginApi, userProfile } from '../../api/api';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

const Login: React.FC = () => {
    const [input, setInput] = useState({
        email: '',
        user_password: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState<string | null>(null)

    axios.defaults.withCredentials = true;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);


        try {
            axios.post(loginApi, input)
                .then((res) => {
                    setLoading(true);

                    if (res.data.message === "Login successful") {
                        const role = res.data.user.acc_role;

                        axios.get(userProfile)
                            .then((res) => {
                                dispatch(setUser(res.data))
                            })

                        if (role === "user") {
                            navigate('/users')
                        }
                        if (role === "admin") {
                            navigate('/admin')
                        }
                        if (role === "student") {
                            navigate("/students")
                        }
                        if (role === "secretery") {
                            navigate("/secretery")
                        }
                        if (role === "staff") {
                            navigate("/staffs")
                        }

                    }
                })
                .catch(() => (
                    setError("Invalid email or password")
                ))
                .finally(() => (
                    setLoading(false),
                    setTimeout(() => {
                        setMessage(null);
                        dispatch(setLoginForm(false))

                    }, 2000)

                ))

        } catch (err) {

            setError("server");
        }

    };


    const inputClass =
        'w-full px-4 py-[2px] border border-orange-300 rounded-md focus:border-blue-500 focus:outline-none text-md text-gray-800';

    return (
        <div className="max-w-md mx-auto bg-white">
            <div className='h-[18px] mb-4'>
                <p className="text-red-600 text-center font-semibold text-lg">{message}</p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-2">
                    <div className="flex justify-between">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email (Phone)
                        </label>
                        <p className="text-sm font-medium text-red-700 mr-2"></p>
                    </div>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email or Phone"
                        value={input.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                </div>

                {/* Password Field */}
                <div className="mb-2 relative">
                    <div className="flex justify-between">
                        <label htmlFor="user_password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <p className="text-sm font-medium text-red-700 mr-2"></p>
                    </div>

                    <input
                        id="user_password"
                        name="user_password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={input.user_password}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                    {/* Password Visibility Toggle */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute mt-3 top-1/2 text-lg font-bold right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <PiEyeClosed size={20} className='text-orange-600' /> : <PiEye size={20} className='text-orange-600' />}
                    </button>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-800 text-white px-10  rounded-md hover:bg-blue-700 active:bg-blue-700 transition duration-300 "
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <button
                        type="button"
                        onClick={() => dispatch(setLoginForm(false))}
                        className="bg-gray-400 text-white px-6 py-[6px] rounded-md hover:bg-gray-500 active:bg-gray-600 transition duration-300 "
                    >
                        Cancel
                    </button>
                </div>
            </form>


            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-600 cursor-pointer font-medium hover:underline"
                        onClick={() => dispatch(setForm('signup'))}
                        aria-label="Sign up"
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
