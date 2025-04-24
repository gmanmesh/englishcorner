import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { setAdminDashboard } from '../../features/admin'
import { RootState } from '../../types/types';
import { GrGroup } from "react-icons/gr";
import { MdOutlineHome } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const AdminDashboard: React.FC = () => {
    const [list, setList] = useState(false);
    const [blogList, setBlogList] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminPage = useSelector((state: RootState) => state.admin.adminPage);


    return (
        <div className="">
            <div className='flex flex-col h-screen'>
                <div className=''>
                    <div className={`${adminPage === "home" && 'bg-blue-50'} cursor-pointer  text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 flex items-center gap-8`} onClick={() => dispatch(setAdminDashboard('home'))} >
                        <MdOutlineHome className='absolute text-[20px]' />
                        <p className='ml-10'>Home</p>
                    </div>
                    <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "staff" && 'bg-blue-50'} ${adminPage === "student" && 'bg-blue-50'} ${adminPage === "users" && 'bg-blue-50'} flex justify-between items-center cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`}  >
                        <GrGroup className='absolute' />
                        <p className='ml-10'>Members</p>
                        {list ? <FaCaretUp className='text-blue-700 text-sm' /> : <FaCaretDown className='text-blue-700 text-sm' />}
                    </div>
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "staff" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("staff"))} >Staff</div>}
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "student" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("student"))} >Student</div>}
                    {list && <div onMouseEnter={() => setList(true)} onMouseLeave={() => setList(false)} className={`${adminPage === "users" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("users"))} >Manage Users</div>}
                    <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "myblogs" && 'bg-blue-50'} ${adminPage === "staffblogs" && 'bg-blue-50'} ${adminPage === "studentblogs" && 'bg-blue-50'} ${adminPage === "usersblogs" && 'bg-blue-50'} flex justify-between items-center cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`}  >
                        <FaBlog className='absolute' />
                        <p className='ml-10'>Blogs</p>
                        {blogList ? <FaCaretUp className='text-blue-700 text-sm' /> : <FaCaretDown className='text-blue-700 text-sm' />}
                    </div>
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "myblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2 `} onClick={() => dispatch(setAdminDashboard("myblogs"))} >My blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "staffblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("staffblogs"))} >Staff blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "studentblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("studentblogs"))} >Students blogs</div>}
                    {blogList && <div onMouseEnter={() => setBlogList(true)} onMouseLeave={() => setBlogList(false)} className={`${adminPage === "usersblogs" && 'bg-blue-50'} cursor-pointer text-blue-950  hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300 ml-2`} onClick={() => dispatch(setAdminDashboard("usersblogs"))} >Users blogs</div>}
                    <div className={`${adminPage === "exams" && 'bg-blue-50'} cursor-pointer text-blue-950 font-bold hover:bg-blue-50 px-4 py-1 border-[1px] active:bg-blue-100 rounded-md transition-all duration-300`} onClick={() => dispatch(setAdminDashboard("exams"))} >
                        <FaRegNewspaper className='absolute' />
                        <p className='ml-10'>Exams</p>
                    </div>

                </div>
                <div className='font-bold text-orange-800 cursor-pointer hover:bg-blue-50 px-4 mb-4 py-1 transition-all duration-300 border-b-[1px] active:bg-blue-100 mt-10'>
                    <BiLogOut className='absolute text-[24px]' />
                    <p className='ml-10' onClick={() => navigate('/')}>Sign Out</p>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard