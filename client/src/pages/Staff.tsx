import React from "react"
import StaffDashboard from '../components/staff/StaffDashboard';
import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import ChangePass from "../components/ChangePass";
import StaffHome from "../components/staff/StaffHome";
import Navigation from '../components/web/userNavigation';
import Footer from '../components/web/Footer';

const Staff: React.FC = () => {

  const adminPage = useSelector((state: RootState) => state.admin.adminPage);
  return (
    <>
    <div className=' flex flex-col'>
          <Navigation />
      </div>
      {/* {userInfo && <StudentaInfo />} */}

      <div className="w-[1120px] m-auto px-4 flex">
      
        <div className=' bg-slate-400'>

        </div>
        <div className='fixed top-[73px] w-[200px] rounded-md  bg-gray-50'>
          {/* side menu */}
          <StaffDashboard />
        </div>
        <div className='ml-[215px] w-[850px] min-h-[90vh] my-10 py-2 rounded-lg'>
          {adminPage === "home" && <StaffHome />}
          {adminPage === "profile" && <Profile />}
          {adminPage === "editProfile" && <EditProfile />}
          {adminPage === "changePassword" && <ChangePass />}
        </div>

      </div>
      <div className='z-100 absolute left-0 right-0'>
            <Footer />
      </div>

    </>
  )
}

export default Staff