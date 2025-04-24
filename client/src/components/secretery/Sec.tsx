import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineDashboard, MdOutlinePostAdd } from 'react-icons/md';
import { BsPeopleFill, BsPersonBadge } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';


const Secretery = () => {
    // Mock data (replace with API integration)
    const [registrations, setRegistrations] = useState([
        { id: 1, name: 'John Doe', type: 'student', date: '2023-11-15', status: 'pending' },
        { id: 2, name: 'Jane Smith', type: 'staff', date: '2023-11-14', status: 'approved' }
    ]);

    const [blogPosts, setBlogPosts] = useState([
        { id: 1, title: 'School Annual Report', author: 'Admin', date: '2023-11-10', status: 'published' },
        { id: 2, title: 'New Curriculum Update', author: 'Staff', date: '2023-11-05', status: 'draft' }
    ]);

    const [users, setUsers] = useState([
        { id: 1, name: 'Emily Johnson', role: 'student', status: 'active', class: 'Grade 10' },
        { id: 2, name: 'Michael Brown', role: 'staff', status: 'active', department: 'Science' }
    ]);

    // Registration approval handler
    const handleApproval = (id: number, action: 'approve' | 'reject') => {
        setRegistrations(registrations.map(reg =>
            reg.id === id ? { ...reg, status: action } : reg
        ));
    };

    // Blog post status toggle
    const toggleBlogStatus = (id: number) => {
        setBlogPosts(blogPosts.map(post =>
            post.id === id ? { ...post, status: post.status === 'published' ? 'draft' : 'published' } : post
        ));
    };

    // User status toggle
    const toggleUserStatus = (id: number) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-blue-600 py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <BsPeopleFill className="text-white text-3xl" />
                        <h1 className="text-white text-2xl font-bold">School Administration</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-white">Welcome, Secretary</span>
                        <button className="text-white hover:text-blue-200">
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar and Main Content */}
            <div className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
                {/* Sidebar */}
                <nav className="col-span-12 md:col-span-3 lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-4">Main Navigation</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                <MdOutlineDashboard className="text-xl" />
                                <span>Dashboard</span>
                            </li>
                            <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                <FaUsers className="text-xl" />
                                <span>Registrations</span>
                            </li>
                            <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                <MdOutlinePostAdd className="text-xl" />
                                <span>Blog Management</span>
                            </li>
                            <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                <BsPersonBadge className="text-xl" />
                                <span>User Management</span>
                            </li>
                            <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                                <HiOutlineDocumentReport className="text-xl" />
                                <span>Reports</span>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content Area */}
                <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
                    {/* Registration Management */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Registration Approvals</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2">Name</th>
                                        <th>Type</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registrations.map(reg => (
                                        <tr key={reg.id} className="border-t">
                                            <td className="py-3">{reg.name}</td>
                                            <td>{reg.type}</td>
                                            <td>{reg.date}</td>
                                            <td>
                                                <span className={`px-2 py-1 rounded-full text-xs ${reg.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                                                    reg.status === 'approved' ? 'bg-green-200 text-green-800' :
                                                        'bg-red-200 text-red-800'
                                                    }`}>
                                                    {reg.status}
                                                </span>
                                            </td>
                                            <td className="flex space-x-2">
                                                <button
                                                    className="text-green-600 hover:text-green-800"
                                                    onClick={() => handleApproval(reg.id, 'approve')}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className="text-red-600 hover:text-red-800"
                                                    onClick={() => handleApproval(reg.id, 'reject')}
                                                >
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Blog Management */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Blog Posts Control</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2">Title</th>
                                        <th>Author</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogPosts.map(post => (
                                        <tr key={post.id} className="border-t">
                                            <td className="py-3">{post.title}</td>
                                            <td>{post.author}</td>
                                            <td>{post.date}</td>
                                            <td>
                                                <span className={`px-2 py-1 rounded-full text-xs ${post.status === 'published' ?
                                                    'bg-green-200 text-green-800' :
                                                    'bg-gray-200 text-gray-800'
                                                    }`}>
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td className="flex space-x-2">
                                                <button
                                                    className="text-blue-600 hover:text-blue-800"
                                                    onClick={() => toggleBlogStatus(post.id)}
                                                >
                                                    {post.status === 'published' ? 'Unpublish' : 'Publish'}
                                                </button>
                                                <button className="text-red-600 hover:text-red-800">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* User Management */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">User Status Control</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="py-2">Name</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Details</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} className="border-t">
                                            <td className="py-3">{user.name}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'active' ?
                                                    'bg-green-200 text-green-800' :
                                                    'bg-red-200 text-red-800'
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td>
                                                {user.role === 'student' ? user.class : user.department}
                                            </td>
                                            <td>
                                                <button
                                                    className={`text-white px-3 py-1 rounded-full ${user.status === 'active' ?
                                                        'bg-red-600 hover:bg-red-700' :
                                                        'bg-green-600 hover:bg-green-700'
                                                        }`}
                                                    onClick={() => toggleUserStatus(user.id)}
                                                >
                                                    {user.status === 'active' ? 'Deactivate' : 'Activate'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Secretery


