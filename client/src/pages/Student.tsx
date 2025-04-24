import React from 'react';
import { Link } from 'react-router-dom';
import {

    FaBook,
    FaRegCalendarAlt,
    FaUserGraduate,
    FaClipboardList,
    FaBlog
} from 'react-icons/fa';
import { MdOutlineQueryStats } from 'react-icons/md';
import Footer from '../components/web/Footer';
import Navigation from '../components/web/userNavigation';
const Student: React.FC = () => {
    // Mock user data (replace with API integration)
    const user = {
        name: 'Abebe Kebede',
        grade: 'English Student',
        attendance: 92,
        courses: [
            { id: 1, title: 'Academic Writing', progress: 45 },
            { id: 2, title: 'Speaking', progress: 60 },
            { id: 3, title: 'Grammar Essentials', progress: 55 }
        ],
        upcomingEvents: [
            { id: 1, title: 'Essay Submission', date: '2025-03-15' },
            { id: 2, title: 'Midterm Exam', date: '2025-03-20' }
        ],
        recentActivity: [
            { id: 1, description: 'Submitted: Poetry Analysis Essay', date: '2025-03-05' },
            { id: 2, description: 'Completed: Grammar Quiz', date: '2025-03-03' }
        ]
    };

    return (
        
        <div className="w-[1120px] m-auto bg-gray-50">
            <div className=' flex flex-col'>
                <Navigation />
            </div>
            <main className="container mx-auto px-4 py-8">
                {/* Welcome Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 rounded-full p-3">
                            <FaUserGraduate className="text-blue-600 text-3xl" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Welcome back, {user.name}!</h2>
                            <p className="text-gray-600">{user.grade}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-around bg-blue-50 p-4 rounded-lg">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">{user.attendance}%</p>
                                <p className="text-gray-600">Attendance</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">{user.courses.length}</p>
                                <p className="text-gray-600">Active Courses</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Access Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                        <Link to="/courses" className="flex items-center space-x-4">
                            <div className="bg-blue-100 rounded-lg p-3">
                                <FaBook className="text-blue-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold">My Schedule</h3>
                                <p className="text-gray-600">View all schedule</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                        <Link to="/exams" className="flex items-center space-x-4">
                            <div className="bg-green-100 rounded-lg p-3">
                                <FaClipboardList className="text-green-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Exams</h3>
                                <p className="text-gray-600">Upcoming & past exams</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                        <Link to="/blog" className="flex items-center space-x-4">
                            <div className="bg-orange-100 rounded-lg p-3">
                                <FaBlog className="text-orange-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Blog</h3>
                                <p className="text-gray-600">School news & articles</p>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                        <Link to="/blog" className="flex items-center space-x-4">
                            <div className="bg-orange-100 rounded-lg p-3">
                                <MdOutlineQueryStats className="text-orange-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Status</h3>
                                <p className="text-gray-600">Attendance & efficiency</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Course Progress Section */}
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Course Progress</h3>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {user.courses.map(course => (
                            <div key={course.id} className="bg-white p-4 rounded-lg shadow">
                                <h4 className="font-medium">{course.title}</h4>
                                <div className="bg-gray-200 rounded-full h-2.5 mt-2">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600 mt-2">{course.progress}%</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Upcoming Events</h3>
                        <Link to="/calendar" className="text-blue-600 hover:text-blue-800">
                            Full Calendar
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {user.upcomingEvents.map(event => (
                            <div key={event.id} className="flex justify-between items-center mb-2">
                                <div>
                                    <h4 className="font-medium">{event.title}</h4>
                                    <p className="text-sm text-gray-600">{event.date}</p>
                                </div>
                                <FaRegCalendarAlt className="text-blue-600 text-lg" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recent Activity */}
                <section>
                    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        {user.recentActivity.map(activity => (
                            <div key={activity.id} className="flex items-center mb-2">
                                <div className="bg-blue-100 rounded-full p-2 mr-3">
                                    <FaClipboardList className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-medium">{activity.description}</p>
                                    <p className="text-sm text-gray-600">{activity.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <div className='z-100 absolute left-0 right-0'>
                <Footer />
            </div>

        </div>
    );
};

export default Student




