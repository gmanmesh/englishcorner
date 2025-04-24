import React, { useEffect, useRef } from 'react';
import { BsStars } from "react-icons/bs";
import { motion, useAnimation, useInView } from 'framer-motion';
import { featureItems } from '../../data/test';

const AboutSection: React.FC = () => {
    const useTitle = useRef(null);
    const titleInview = useInView(useTitle, { once: true });
    const caption = useRef(null);
    const captionInview = useInView(caption, { once: true });
    const cardRefs = useRef(null); // For multiple card refs
    const cardInview = useInView(cardRefs, { once: true });

    const titleControlAni = useAnimation();
    const captionControlAni = useAnimation();
    const cardAnimation = useAnimation();

    const aboutVariant = {
        yVisible: { opacity: 1, y: "0%" },
        hidden: { opacity: 0, scale: 0.8 },
        appear: { opacity: 1, scale: 1 },
        righttoLeft: { opacity: 0, x: "100%" },
        lefttoRight: { opacity: 0, y: "-100%" },
        xVisible: { opacity: 1, x: "0%" }
    };

    // Start the animation when the title or caption is visible
    useEffect(() => {
        if (titleInview) {
            titleControlAni.start("yVisible");
        }
        if (captionInview) {
            captionControlAni.start("appear");
        }
        if (cardInview) {
            cardAnimation.start("xVisible");
        }
    }, [titleInview, captionInview, cardInview]);

    return (
        <div className="py-12 md:py-20 px-4 md:px-8" id="about">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1

                    className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 mb-4"
                >
                    About Us
                </h1>
                <motion.div
                    ref={caption}
                    variants={aboutVariant}
                    initial="hidden"
                    animate={captionControlAni}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed border border-gray-300 rounded-lg relative"
                >
                    <BsStars className="absolute text-[40px] text-orange-300" />
                    <p className="px-6 py-4">
                        Discover what makes our language school the best choice for learners of all ages. With a commitment to excellence and student success, we offer more than just language education.
                    </p>
                </motion.div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={aboutVariant}
                        initial="hidden"
                        animate={cardAnimation}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        ref={cardRefs} // Set reference for each card
                        className={`rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer ${item.bgColor}`}
                        aria-label={item.title}
                    >
                        <div className="p-6 h-full flex flex-col justify-evenly">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
                                        <img src={item.image} alt={`${item.title} icon`} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className={`text-xl font-semibold text-primary`}>{item.title}</h3>
                                </div>
                                <span className="w-3/4 h-[2px] bg-orange-600 rounded-full mb-2 m-auto"></span>
                            </div>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
