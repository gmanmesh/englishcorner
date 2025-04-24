import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { setAdminDashboard } from '../../features/admin';
import { RootState } from '../../types/types';

const StaffDashboard: React.FC = () => {

    const [profile, setProfile] = useState(false)

    const dispatch = useDispatch();
    const adminPage = useSelector((state: RootState) => state.admin.adminPage);
    const user = useSelector((state: RootState) => state.user.user)
    return (
        <div className="">
            <div className='flex flex-col h-screen'>
                <div onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)} className={`${adminPage === "profile" && 'bg-blue-50'} ${adminPage === "editProfile" && 'bg-blue-50'} ${adminPage === "changePassword" && 'bg-blue-50'} flex justify-between items-center cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px]  rounded-md transition-all duration-300 border-b-[1px] active:bg-blue-100`}  >
                    {user.user_name}
                    {profile ? <FaCaretUp className='text-blue-700 text-sm' /> : <FaCaretDown className='text-blue-700 text-sm' />}
                </div>
                {profile && <div onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)} className={`${adminPage === "profile" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("profile"))} >My profile</div>}
                {profile && <div onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)} className={`${adminPage === "editProfile" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("editProfile"))} >Edit profile</div>}
                {profile && <div onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)} className={`${adminPage === "changePassword" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("changePassword"))} >Change password</div>}
                <div className=' gap-2  mt-10'>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard('home'))} >Home</div>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard('home'))} >Class Schedule</div>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard('home'))} >Exams</div>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard('home'))} >My Students</div>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard('home'))} >Blogs</div>

                </div>

            </div>

        </div>
    )
}

export default StaffDashboard
