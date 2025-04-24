import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import ChangePass from "../components/ChangePass";
import SecreteryDashboard from '../components/secretery/SecreteryDashboard';
import SecreteryHome from "../components/secretery/SecreteryHome";
import Navigation from '../components/web/userNavigation';
import Footer from '../components/web/Footer';

const Secretary = () => {
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
                    <SecreteryDashboard />
                </div>
                <div className='ml-[215px] w-[850px] min-h-[90vh] my-10 py-2 rounded-lg'>
                    {adminPage === "home" && <SecreteryHome />}
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

export default Secretary

