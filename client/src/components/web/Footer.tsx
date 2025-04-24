import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-500 text-primary flex flex-col pt-4 z-40" >
            <div className='flex justify-between px-4 w-[1120px] m-auto '>
                <div className="mb-6 flex flex-col items-center">
                    <img
                        src="/images/logo.png"
                        alt="School Logo"
                        className="h-10 mb-4"
                    />
                    <p className="text-yellow-50 text-sm w-[200px]">
                        English Corner is committed to providing exceptional language education for learners of all ages.
                    </p>
                </div>
                <div>
                    <h4 className="text-yellow-50 font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-yellow-50 text-sm">
                        <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">Service</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">Clients</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">Testimonials</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">Blogs</a></li>
                        <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-yellow-50 font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-yellow-50 hover:text-blue-300">
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className="text-yellow-50 hover:text-blue-300">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="text-yellow-50 hover:text-blue-300">
                            <FaYoutube />
                        </a>
                        <a href="#" className="text-yellow-50 hover:text-blue-300">
                            <FaInstagramSquare />
                        </a>
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <h4 className="text-yellow-50 font-semibold mb-4">Stay Updated</h4>
                    <p className="text-yellow-50 text-sm mb-4">
                        Join our mailing list to get updates about new courses and events.
                    </p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-2 py-1 rounded-lg bg-yellow-50 text-orange-600 focus:outline-none"
                        />
                        <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-2 py-1 rounded-lg hover:from-orange-500 hover:to-orange-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-yellow-50 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} English Corner. All rights reserved. <span style={{marginLeft:'55%'}}>Developed by Ethio Digital Academy PLC</span> 
                </p>
            </div>
        </footer>
    );
};

export default Footer;

