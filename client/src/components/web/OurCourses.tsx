import React from 'react';
import { motion } from 'framer-motion';
import { courseItems } from '../../data/test';
import WhyChoose from './WhyChoose';

const CourseSection: React.FC = () => {

    return (
        <div id='courses' className='py-8'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="py-20 md:py-8 px-4 md:px-8 bg-gray-50"
            >
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"
                    >
                        Our Courses
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6"
                    >
                        Transform your language skills with tailored solutions designed for every learning style and goal.
                    </motion.p>
                </div>

                {/* Course Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ stagger: 0.15, duration: 0.5, ease: 'easeOut' }}
                >
                    {courseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-white flex flex-col rounded-2xl overflow-hidden shadow-lg ${item.container}`}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
                        >
                            <div className={`md:p-4 cursor-pointer`}>
                                <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-2xl filter blur-3xl opacity-50 mix-blend-multiply pointer-events-none animate-pulse-slow"></div>
                                <div className='flex items-center border-b-2 rounded-md px-2'>
                                    <div className='mr-2'>
                                        <img src={item.image} alt="logo" className='w-[40px] h-[40px]' />
                                    </div>
                                    <h3 className={`text-md font-semibold ${item.textColor}`}>{item.title}</h3>
                                </div>
                                <p className={`text-sm mt-4 ${item.textColor} opacity-80`}>
                                    {item.description}
                                </p>
                                <ul className="flex flex-col space-y-2 mt-6 text-sm">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className={`${item.textColor} opacity-70`}>
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>


            <WhyChoose />
        </div>
    );
};

export default CourseSection;
