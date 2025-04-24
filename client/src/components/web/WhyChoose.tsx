import { easeInOut, motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const WhyChoose = () => {
    const qualified = useRef(null);
    const qualifView = useInView(qualified, { once: true });
    const access = useRef(null);
    const accessView = useInView(access, { once: true });
    const garanty = useRef(null);
    const garantyView = useInView(garanty, { once: true });
    const students = useRef(null);
    const studentsView = useInView(students, { once: true });
    const flexable = useRef(null);
    const flexableView = useInView(flexable, { once: true });
    const certified = useRef(null);
    const certifiedView = useInView(certified, { once: true });

    const qualiAnimation = useAnimation();
    const accessAnimation = useAnimation();
    const garantyAnimation = useAnimation();
    const studentAnimation = useAnimation();
    const flexableAnimation = useAnimation();
    const certifiedAnimation = useAnimation();

    const aniVariant = {
        visible: { opacity: 1, x: "0%" },
        fromLeft: { opacity: 0, x: "-100%" },
        fromRight: { opacity: 0, x: "100%" },
    };

    useEffect(() => {
        if (qualifView) {
            qualiAnimation.start('visible');
        }
        if (accessView) {
            accessAnimation.start("visible")
        }
        if (garantyView) {
            garantyAnimation.start("visible")
        }
        if (studentsView) {
            studentAnimation.start("visible")
        }
        if (flexableView) {
            flexableAnimation.start("visible")
        }
        if (certifiedView) {
            certifiedAnimation.start("visible")
        }
    }, [qualifView, garantyView, garantyAnimation, qualiAnimation, accessView, accessAnimation, certifiedView, certifiedAnimation, flexableView, flexableAnimation, studentsView, studentAnimation]);

    return (

        <div className="max-w-4xl mx-auto mt-24" >
            <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-2xl font-extrabold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-10 py-2"
            >
                Why Choose Our Courses?
            </motion.h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromLeft"
                        animate={qualiAnimation}
                        ref={qualified}
                        transition={{ ease: easeInOut, duration: 1 }}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">Qualified instructors with 15+ years of experience</p>
                    </motion.div>
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromRight"
                        animate={accessAnimation}
                        transition={{ ease: easeInOut, duration: 1 }}
                        ref={access}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">24/7 access to our learning platform</p>
                    </motion.div>
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromLeft"
                        animate={garantyAnimation}
                        transition={{ ease: easeInOut, duration: 1 }}
                        ref={garanty}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">Guaranteed proficiency improvements in 3 months</p>
                    </motion.div>
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromRight"
                        animate={studentAnimation}
                        transition={{ ease: easeInOut, duration: 1 }}
                        ref={students}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">98% student satisfaction rate</p>
                    </motion.div>
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromLeft"
                        animate={flexableAnimation}
                        transition={{ ease: easeInOut, duration: 1 }}
                        ref={flexable}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">Flexible payment plans available</p>
                    </motion.div>
                    <motion.div
                        className="shadow p-6 rounded-md flex items-start space-x-3"
                        whileHover={{ scale: 1.01 }}
                        variants={aniVariant}
                        initial="fromRight"
                        animate={certifiedAnimation}
                        transition={{ ease: easeInOut, duration: 1 }}
                        ref={certified}
                    >
                        <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">Certified curriculum aligned with global standards</p>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default WhyChoose
