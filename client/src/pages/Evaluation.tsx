import React from 'react';
import Test from '../components/Test';
import TestHeader from '../components/TestHeader';
import StudentaInfo from '../components/StudentsInfo';
import Navigation from '../components/web/userNavigation';
import Footer from '../components/web/Footer';


const Evaluation: React.FC = () => {
    return (
        <div className='w-full shadow-sm shadow-orange-400 m-auto'>
            <div className=' flex flex-col'>
            <Navigation />
        </div>
            <TestHeader />
            <Test />
           {/*  <StudentaInfo /> */}

        <div className='z-100 absolute left-0 right-0'>
            <Footer />
      </div>
        </div>
    )
}

export default Evaluation