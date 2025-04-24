import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAdminDashboard } from "../../features/admin";
import { BiLogOut } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Toggle dropdown visibility when clicking the settings icon
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div className="flex justify-between items-center px-4 py-2 text-primary">
            <div className="flex items-center gap-2">
                {/* Logo */}
                <img className="h-[50px] w-auto transform hover:scale-105 duration-300 cursor-pointer" onClick={() => navigate('/')} src="/images/logo.png" alt="Logo" />

                {/* Logo Text */}
                <p className="text-orange-400 font-bold text-lg md:text-xl lg:text-2xl transform hover:text-orange-500 duration-300 cursor-pointer" onClick={() => navigate('/')}>
                    ENGLISH CORNER
                </p>
            </div>
            <p>Welcome</p>
            <div
                className="flex items-center px-4 py-2 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* <p className="mr-4 text-primary font-semibold">Admin</p> */}
                <img className="w-[30px] h-[30px] rounded-full mr-2" src="/images/default-avatar.png" alt="" />
                <CiSettings
                    className="hover:scale-110 transform duration-300 cursor-pointer"
                    onClick={handleMouseEnter} // Show dropdown when clicked
                />
            </div>
            {isDropdownVisible && (
                <div
                    className="absolute right-0 top-[50px] bg-white shadow-lg p-2 rounded-md"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="py-2 rounded-md border-gray-50 transform duration-300 hover:bg-gray-50 cursor-pointer" onClick={() => dispatch(setAdminDashboard("profile"))}>
                        <CgProfile className="absolute text-[16px] top-0 bottom-0 my-auto" />
                        <p className="ml-6 ">My Profile</p>
                    </div>

                    <div className="py-2 rounded-md border-gray-50 transform duration-300 hover:bg-gray-50 cursor-pointer" onClick={() => dispatch(setAdminDashboard("editProfile"))} >
                        <VscTools className="absolute text-[16px] top-0 bottom-0 my-auto" />
                        <p className="ml-6 ">Edit Profile</p>
                    </div>

                    <div onClick={() => dispatch(setAdminDashboard("changePassword"))} className="py-2 rounded-md border-gray-50 transform duration-300 hover:bg-gray-50 cursor-pointer">
                        <RiLockPasswordLine className="absolute text-[16px] top-0 bottom-0 my-auto" />
                        <p className="ml-6" >Change Password</p>
                    </div>

                    <div className="py-2 rounded-md text-red-500 border-gray-50 transform duration-300 hover:bg-gray-50 cursor-pointer">
                        <BiLogOut className="absolute text-[16px] top-0 bottom-0 my-auto" />
                        <p className="ml-6"  onClick={()=>navigate('/')}>Logout</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardHeader;
