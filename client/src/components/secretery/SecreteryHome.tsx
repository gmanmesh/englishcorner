import { useState } from "react";

const SecreteryHome = () => {

    const [registrations, setRegistrations] = useState([
        { id: 1, name: 'Mesfin Abera', type: 'student', date: '2025-03-15', status: 'pending' },
        { id: 2, name: 'Betty Solomon', type: 'student', date: '2025-03-14', status: 'approved' }
    ]);

    const [blogPosts, setBlogPosts] = useState([
        { id: 1, title: 'School Annual Report', author: 'Admin', date: '2025-01-10', status: 'published' },
        { id: 2, title: 'New Curriculum Update', author: 'Staff', date: '2025-01-05', status: 'draft' }
    ]);

    const [users, setUsers] = useState([
        { id: 1, name: 'Bereket Kemal', role: 'student', status: 'active', class: 'Grade 12' },
        { id: 2, name: 'Michael Tadesse', role: 'staff', status: 'active', department: 'Science' }
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
        <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
            {/* Registration Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4" style={{color:"orange",fontWeight:"bold"}}>Registration Approval</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Name</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
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
                <h3 className="text-xl font-semibold mb-4" style={{color:"orange",fontWeight:"bold"}}>Blog Posts Control</h3>
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
                <h3 className="text-xl font-semibold mb-4" style={{color:"orange",fontWeight:"bold"}}>User Status Control</h3>
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
                                    <td>{/*user.role*/}Student</td>
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
    )
}

export default SecreteryHome