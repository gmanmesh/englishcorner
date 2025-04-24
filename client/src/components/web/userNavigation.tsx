import React, { useEffect, useState } from 'react';
import { setLoginForm } from '../../features/users';
import { useDispatch } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';


const Navigation: React.FC = () => {
    const [hasShadow, setHasShadow] = useState(false);
   // const dispatch = useDispatch();
    const navigate = useNavigate();


    // Detect scroll position and add shadow when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0.25) {
                setHasShadow(true); // Apply shadow when scrolled more than 75px
            } else {
                setHasShadow(false); // Remove shadow when at the top
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 mb-4 w-full transition duration-3000 z-20 bg-white  ${hasShadow ? 'shadow-md shadow-orange-200' : 'shadow-none'}`}
        >
            <div className={`w-[1120px] m-auto transition duration-3000   ${hasShadow ? 'bg-white' : ''}  z-10 flex justify-between h-[70px] items-center px-4`}>
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <img
                        className="h-[50px] w-auto"
                        src="/images/logo.png"
                        alt="Logo"
                    />

                    {/* Logo Text */}
                    <h1 className="text-orange-400 font-bold text-lg md:text-xl lg:text-2xl">
                        ENGLISH CORNER
                    </h1>
                </div>
                <ul className="flex gap-4">
                    {/* <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#home" smooth >Home</Link>
                    </li>
                    <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#about" smooth>About</Link>
                    </li>
                    <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#courses" smooth >Courses</Link>
                    </li>

                    /* <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#testimonial" smooth >Testimonials</Link>
                    </li> */}
                    <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out">
                    <p>Welcome</p>
                    </li>
                    {/* <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#blog" smooth >Blog</Link>
                    </li> */} 
                    {/*   <li className="text-orange-400 after:duration-300 hover:text-orange-600 active:text-orange-700 font-semibold relative after:block after:bg-orange-300 after:w-0 after:h-[3px] after:rounded-md after:absolute after:bottom-0 transition-all duration-300 ease-in-out hover:after:w-full">
                        <Link to="#client" smooth >Clients</Link>
                    </li> */}

                </ul>

                <div>
                    <button
                        className="outline outline-2 outline-orange-200 px-4 py-1 text-orange-500 rounded-md font-bold transition duration-300 hover:bg-orange-50 active:bg-orange-100 focus:outline-none"
                        onClick={() => navigate('/')}
                        aria-label="Logout"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navigation;
