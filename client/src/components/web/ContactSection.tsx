import React, { useState } from 'react';
import { SiGooglemaps } from "react-icons/si";
import { PiCompassRose } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill all fields');
            setLoading(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert('Please enter a valid email');
            setLoading(false);
            return;
        }

        // Fake API call (replace with actual API)
        setTimeout(() => {
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div

            className="py-20"
            id='contact'
        >
            <div className="container mx-auto px-2 bg-gray-50">
                {/* Section Heading */}
                <h2

                    className="text-center mb-12 text-4xl md:text-5xl font-extrabold text-orange-600 pt-6"
                >
                    Get In Touch
                </h2>

                {/* Contact Form */}
                <div
                    className="grid grid-cols-1 gap-8 pb-12"

                >

                    <div className='w-[1120px] flex items-center justify-center'>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-[140px] bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 w-[600px] rounded-2xl  pt-10 md:p-8"
                        >
                            {success ? (
                                <div className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 p-4 mb-4 rounded-lg">
                                    <p>Message sent successfully!</p>
                                </div>
                            ) : null}

                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-800 to-blue-950 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"

                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className='absolute flex justify-between w-[1100px] px-auto m-auto'>
                        <div className=' p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-[200px] flex flex-col items-center pt-2 shadow-gray-300 h-[160px] '>
                            <PiCompassRose className='text-blue-400 text-[24px] ' />
                            <p className='font-semibold text-primary'>Address</p>
                            <p className="text-xs text-gray-500">Addis Ababa</p>
                            <p className="text-xs text-gray-500">Megenagna Genet Comercial </p>
                        </div>
                        <div className=' p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-[200px] flex flex-col items-center pt-2 shadow-gray-300 h-[160px] '>
                            <FaPhoneAlt className="text-blue-500 text-2xl mb-2" />
                            <p className="text-sm font-semibold text-gray-700">Phone</p>
                            <p className="text-xs text-gray-500">+251 912 445 517</p>
                        </div>

                        <div className=' p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-[200px] flex flex-col items-center pt-2 shadow-gray-300 h-[160px] '>
                            <MdOutlineEmail className="text-blue-500 text-2xl mb-2" />
                            <p className="text-sm font-semibold text-gray-700">Email</p>
                            <a href="mailto:englishcorner@gmail.com" className="text-xs text-blue-500 underline">
                                englishcorner@gmail.com
                            </a>
                        </div>
                        <div className=' p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer w-[200px] flex flex-col items-center pt-2 shadow-gray-300 h-[160px] '>
                            <SiGooglemaps className="text-blue-500 text-2xl mb-2" />
                            <p className="text-sm font-semibold text-gray-700">Google Map</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-500 underline"
                            >
                                View on Google Maps
                            </a>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default ContactSection;

