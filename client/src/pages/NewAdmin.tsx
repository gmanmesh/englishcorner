import { useEffect } from 'react';
import Students from '../components/StudentsList';
import StudentaInfo from '../components/StudentsInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/types';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminHome from '../components/AdminHome';
import ExamList from '../components/ExamList';
import NewUsers from '../components/NewUsers';
import StaffList from '../components/StaffList';
import NewExam from '../components/NewExam';
import MyBlog from '../components/MyBlog';
import StaffBlogs from '../components/staff/StaffBlogs';
import StudentsBlog from '../components/students/StudentsBlog';
import UsersBlog from '../components/UsersBlog'
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import ChangePass from '../components/ChangePass';
import axios from 'axios';
import { userProfile } from '../api/api';
import { setUser } from '../features/users';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/admin/DashboardHeader';

const NewAdmin = () => {


    const userInfo = useSelector((state: RootState) => state.student.studentCard);
    const adminPage = useSelector((state: RootState) => state.admin.adminPage);
    const navigate = useNavigate()


    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(userProfile, { withCredentials: true })
            .then((res) => {

                dispatch(setUser(res.data));

            })
            .catch(err => {
                if (err) {
                    navigate('/')
                }

            });
    }, [dispatch]);


    return (
        <>
            {userInfo && <StudentaInfo />}

            <div className="w-[1120px] m-auto px-4 min-h-[80vh] pb-8 bg-gray-50">
                <div className="sticky z-20 top-0 bg-gray-50 rounded-xl shadow-sm">
                    <DashboardHeader />
                </div>
                <div className='fixed mt-[70px] w-[200px] rounded-md'>
                    <AdminDashboard />
                </div>
                <div className='ml-[215px] w-[870px] my-10 bg-white rounded-3xl  shadow-md'>
                    <div className=' pb-10 pt-4 px-3 bg-[radial-gradient(circle_at_top_right,_#ffeacedf,_transparent)] rounded-3xl'>

                        {adminPage === "home" && <AdminHome />}
                        {adminPage === "student" && <Students />}
                        {adminPage === "users" && <NewUsers />}
                        {adminPage === "staff" && <StaffList />}
                        {adminPage === "exams" && <ExamList />}
                        {adminPage === "myblogs" && <MyBlog />}
                        {adminPage === "staffblogs" && <StaffBlogs />}
                        {adminPage === "studentblogs" && <StudentsBlog />}
                        {adminPage === "usersblogs" && <UsersBlog />}
                        {adminPage === "newExam" && <NewExam />}
                        {adminPage === "profile" && <Profile />}
                        {adminPage === "editProfile" && <EditProfile />}
                        {adminPage === "changePassword" && <ChangePass />}


                    </div>
                </div>

            </div>

        </>
    )
}

export default NewAdmin




