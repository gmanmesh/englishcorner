import React, { useRef } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            quote: "This school transformed my English skills! The teachers are amazing and the curriculum is well-structured.",
            name: 'Lemlem Hailu',
            role: 'Adult Learner',
            avatar: '/testmony/adalt.jpeg',
        },
        {
            id: 2,
            quote: "My child loves coming here! The interactive lessons make learning fun and effective.",
            name: 'Dr. Alemu',
            role: 'Parent',
            avatar: '/testmony/parent.jpg',
        },
        {
            id: 3,
            quote: "The online courses are incredibly flexible. I can study anytime from anywhere!",
            name: 'Kefyalew Admassu',
            role: 'Corporate Employee',
            avatar: '/testmony/Corporet.jpeg',
        },
        {
            id: 4,
            quote: "The IELTS prep course helped me achieve my dream score! Highly recommended.",
            name: 'Prof. Zelelem Asmamaw',
            role: 'University Applicant',
            avatar: '/testmony/university.jpeg',
        },
    ];

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const cardWidth = 300; // Match your card width
    const gap = 16; // Gap between cards (1rem = 16px)

    const handleArrowClick = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;

        const container = sliderRef.current;
        const visibleCards = 3; // Number of cards visible at a time
        const totalCards = testimonials.length;

        // Calculate current scroll position in terms of card index
        const currentIndex = Math.round(container.scrollLeft / (cardWidth + gap));

        // Determine new index based on direction
        let newIndex = currentIndex;
        if (direction === 'left') {
            newIndex = currentIndex === 0 ? totalCards - visibleCards : currentIndex - 1;
        } else if (direction === 'right') {
            newIndex = currentIndex === totalCards - visibleCards ? 0 : currentIndex + 1;
        }

        // Scroll to the new position
        const offset = newIndex * (cardWidth + gap);
        container.scrollTo({
            left: offset,
            behavior: 'smooth'
        });
    };
    return (
        <div

            className="py-20 "
            id='testimonial'
        >
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2

                    className="text-center mb-12 text-4xl md:text-5xl font-extrabold text-orange-600"
                >
                    What Our Students Say
                </h2>

                <div className="flex items-center justify-center gap-4">
                    {/* Left Arrow */}
                    <FaCaretLeft
                        size={40}
                        onClick={() => handleArrowClick('left')}
                        className="text-primary cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 rounded-full"
                    />

                    {/* Slider */}
                    <div
                        className="flex overflow-hidden gap-4 py-4 px-2"
                        ref={sliderRef}
                        style={{
                            width: `${cardWidth * 3 + gap * 2}px`, // Fixed width for 3 cards
                            scrollBehavior: 'smooth',
                        }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="w-[295px] p-6 bg-white rounded-lg shadow-nav flex flex-col items-center gap-5 transform transition-all hover:scale-105 cursor-pointer"
                                style={{ flexShrink: 0 }} // Prevent shrinking
                            >
                                <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-orange-500">
                                    <img
                                        src={item.avatar}
                                        alt="avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-primary text-lg">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                                <p className="text-gray-700 text-center">{item.quote}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <FaCaretRight
                        size={40}
                        onClick={() => handleArrowClick('right')}
                        className="text-primary cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300 rounded-full"
                    />
                </div>

                {/* Feature Highlights */}
                <div className="text-center" >
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-8"
                    >
                        Why They Love Us
                    </motion.h3>
                    <motion.ul
                        className="space-y-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto flex items-center justify-around"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                    >

                        <motion.li className="flex items-center text-primary">
                            <svg
                                className="w-6 h-6 text-orange-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Expert Instructors
                        </motion.li>
                        <motion.li className="flex items-center text-primary">
                            <svg
                                className="w-6 h-6 text-orange-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Flexible Schedule
                        </motion.li>
                        <motion.li className="flex items-center text-primary">
                            <svg
                                className="w-6 h-6 text-orange-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Proven Results
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;


