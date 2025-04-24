import React from 'react'
import Login from './web/Login'
import Signup from './web/Signup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../types/types'
import { setForm } from '../features/users'

const UserForm: React.FC = () => {
    const login = useSelector((state: RootState) => state.user.form);
    const dispatch = useDispatch();

    const buttonClass = (isActive: boolean) =>
        `my-3 w-full py-2 rounded-md text-orange-600 text-center font-bold cursor-pointer transition duration-300 ${isActive ? 'bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white' : 'hover:bg-orange-50 shadow-small text-orange-600 '
        }`;

    return (
        <div className='sticky top-[80px] bg-slate-200  flex justify-center z-10'>
            <div className='py-2 px-4 shadow-hero rounded-lg absolute w-[500px] bg-white '>
                <div className="flex justify-around gap-4">
                    <button
                        onClick={() => dispatch(setForm('login'))}
                        className={buttonClass(login === 'login')}
                        aria-label="Switch to Login Form"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => dispatch(setForm('signup'))}
                        className={buttonClass(login === 'signup')}
                        aria-label="Switch to Signup Form"
                    >
                        Sign up
                    </button>
                </div>

                {login === "login" && <Login />}
                {login === "signup" && <Signup />}


            </div>
        </div>
    )
}

export default UserForm