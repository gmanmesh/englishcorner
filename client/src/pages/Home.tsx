import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../types/types'
import UserForm from '../components/UserForm';
import AboutSection from '../components/web/AboutSection.tsx';
import ServiceSection from '../components/web/OurCourses.tsx';
import ClientsSection from '../components/web/ClientsSection.tsx';
import TestimonialsSection from '../components/web/TestimonialsSection.tsx';
import ContactSection from '../components/web/ContactSection.tsx';
import HeroSection from '../components/web/HeroSection.tsx';
import BlogSection from '../components/web/BlogSection.tsx';
import Navigation from '../components/web/Navigation.tsx';
import Footer from '../components/web/Footer.tsx';
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