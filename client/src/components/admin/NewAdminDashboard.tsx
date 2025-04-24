import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { setAdminDashboard } from '../../features/admin'
import { RootState } from '../../types/types';

const NewAdminDashboard = () => {
    const [list, setList] = useState(false);
    const [blogList, setBlogList] = useState(false);
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
                    <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "staff" && 'bg-blue-50'} ${adminPage === "student" && 'bg-blue-50'} ${adminPage === "users" && 'bg-blue-50'} flex justify-between items-center cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`}  >
                        Members
                        {list ? <FaCaretUp className='text-blue-700 text-sm' /> : <FaCaretDown className='text-blue-700 text-sm' />}
                    </div>
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "staff" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("staff"))} >Staff</div>}
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "student" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("student"))} >Student</div>}
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "users" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("users"))} >New users</div>}
                    <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "myblogs" && 'bg-blue-50'} ${adminPage === "staffblogs" && 'bg-blue-50'} ${adminPage === "studentblogs" && 'bg-blue-50'} ${adminPage === "usersblogs" && 'bg-blue-50'} flex justify-between items-center cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`}  >
                        Blogs
                        {blogList ? <FaCaretUp className='text-blue-700 text-sm' /> : <FaCaretDown className='text-blue-700 text-sm' />}
                    </div>
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "myblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2 `} onClick={() => dispatch(setAdminDashboard("myblogs"))} >My blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "staffblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("staffblogs"))} >Staff blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "studentblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("studentblogs"))} >Students blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "usersblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("usersblogs"))} >Users blogs</div>}
                    <div className={`${adminPage === "exams" && 'bg-blue-50'} cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard("exams"))} >Exams</div>

                </div>
                <div>
                    <p className='font-bold text-orange-800 cursor-pointer hover:bg-blue-50 px-4 mb-4 py-1 transition-all duration-300 border-b-[1px] active:bg-blue-100 mt-10'>Sign Out</p>
                </div>
            </div>

        </div>
    )
}
export default NewAdminDashboard

