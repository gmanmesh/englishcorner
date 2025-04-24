import React, { useEffect } from 'react';
import UserBlogs from '../components/users/UserBlogs';
import SpotLight from '../components/users/SpotLight';
import WhyUs from '../components/users/WhyUs';
import EvaluateHere from '../components/users/EvaluateHere';
import UsersHero from '../components/users/UsersHero';
import UsersGuild from '../components/users/UsersGuild';
import NewRegisteration from '../components/NewRegisteration';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/types';
import { userProfile } from '../api/api';
import axios from 'axios';
import { setUser } from '../features/users';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/web/userNavigation';
import Footer from '../components/web/Footer';


const Users: React.FC = () => {
    const profileForm = useSelector((state: RootState) => state.user.profileForm);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

  

    const date = new Date();
    const formattedDate = date.toDateString();
    //`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

    return (
        <div className="container mx-auto px-4">
            <div className=' flex flex-col'>
                <Navigation />
        </div>
            {profileForm && <NewRegisteration />}
            <main className="pt-8 bg-gray-50">
                <div className="flex justify-between">
                    <p className="font-bold">Hello, {user?.user_name.charAt(0).toUpperCase()+user.user_name.substring(1,user.user_name.length)}</p>
                    <p>{formattedDate}</p>
                </div>
                <UsersHero />
                <UsersGuild />
                <EvaluateHere />
                <WhyUs />
                <SpotLight />
                <UserBlogs />
            </main>
            <div className='z-100 absolute left-0 right-0'>
                <Footer />
            </div>
            
        </div>
    );
};

export default Users;