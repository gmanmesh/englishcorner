import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../types/types'
import UserForm from '../components/UserForm';
import AboutSection from '../components/web/AboutSection';
import ServiceSection from '../components/web/OurCourses';
import ClientsSection from '../components/web/ClientsSection';
import TestimonialsSection from '../components/web/TestimonialsSection';
import ContactSection from '../components/web/ContactSection';
import HeroSection from '../components/web/HeroSection';
import BlogSection from '../components/web/BlogSection';
import Navigation from '../components/web/Navigation';
import Footer from '../components/web/Footer';
const Home: React.FC = () => {
    const login = useSelector((state: RootState) => state.user.userForm)

    return (
        <>
            {login && <UserForm />}
            <div className=' flex flex-col'>
                <Navigation />
                <HeroSection />
                <AboutSection />
                <ServiceSection />
                <TestimonialsSection />
                <BlogSection />
                <ContactSection />
                <ClientsSection />

            </div>
            <div className='z-100 absolute left-0 right-0'>
                <Footer />
            </div>
        </>

    )
}

export default Home