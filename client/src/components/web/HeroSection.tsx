import React from 'react';
import { _easeInOut, _motion } from 'framer-motion';
import { _setLoginForm } from '../../features/users';
import { _useDispatch } from 'react-redux';

const HeroSection: React.FC = () => {

    const dispatch = useDispatch()
    return (
        <div id="home" className=''>
            <_motion.div
            initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="py-20 md:py-8 px-4 md:px-8 bg-gray-50">
            <div className="max-h-screen flex flex-col py-16 px-4 my-6 bg-gray-50 overflow-hidden" >
                {/* Hero Content */}
                <div className="flex flex-col md:flex-row items-center mb-8 justify-between">
                    {/* Text Section */}
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                            It's Time to Learn English
                        </h1>
                        <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 font-medium mb-8">
                            Our English language center offers world-class courses in regular, group and personal classes for all ages and skill levels.
                        </p>
                        <div className=''>
                            <button
                                className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                                aria-label="Get Started"
                                onClick={() => dispatch(setLoginForm(true))}
                            >
                                Get Started Now
                            </button>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-end w-full md:w-1/2">
                        <img
                            src='/images/hool-image-free-photo(1).png'
                            alt="Hero Section"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                {/* <motion.p
                    initial={{ x: -500 }}
                    animate={{ x: 1300 }}
                    transition={{ duration: 25, ease: easeInOut }}
                    className='font-bold text-4xl text-orange-500'
                ><h4>Welcome to English Corner</h4></motion.p> */}


            </div>
            </_motion.div>
        </div>
    );
};

export default _HeroSection;
