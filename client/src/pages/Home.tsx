import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../types/types'
import UserForm from '../components/UserForm';
import _AboutSection from '../components/web/AboutSection.tsx';
import _ServiceSection from '../components/web/OurCourses.tsx';
import _ClientsSection from '../components/web/ClientsSection.tsx';
import _TestimonialsSection from '../components/web/TestimonialsSection.tsx';
import _ContactSection from '../components/web/ContactSection.tsx';
import _HeroSection from '../components/web/HeroSection.tsx';
import _BlogSection from '../components/web/BlogSection.tsx';
import _Navigation from '../components/web/Navigation.tsx';
import _Footer from '../components/web/Footer.tsx';
const Home: React.FC = () => {
    const login = useSelector((state: RootState) => state.user.userForm)

    return (
        <>
            {login && <UserForm />}
            <div className=' flex flex-col'>
                <_Navigation />
                <_HeroSection />
                <_AboutSection />
                <_ServiceSection />
                <_TestimonialsSection />
                <_BlogSection />
                <_ContactSection />
                <_ClientsSection />

            </div>
            <div className='z-100 absolute left-0 right-0'>
                <Footer />
            </div>
        </>

    )
}

export default Home
