import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { setStudent } from '../features/students';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getNewUsers } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { getNewUsersList } from '../features/admin';
import { RootState } from '../types/types';

const NewUsers: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // State for managing the search query
    const [searchQuery, setSearchQuery] = useState('');
    const newUsers = useSelector((state: RootState) => state.admin.newUsers)

    useEffect(() => {
        axios.get(getNewUsers)
            .then((res) => {
                dispatch(getNewUsersList(res.data))
            })
            .catch(err => {
                if (err) {
                    navigate('/')
                }
            })
    })



    // Filtered students based on the search query
    const filteredStudents = newUsers.filter((student) =>
        student.user_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-2">
            {/* Header Section */}
            <div className="flex justify-between items-center sticky top-0 bg-white z-10 border-b-[2px] border-orange-100 p-2">
                <p className='font-bold text-orange-500 text-xl'>New Users</p>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-1 border-orange-400 border-[1px] rounded-md outline-none focus:border-blue-600 w-[200px]"
                    />
                    <FaSearch className="absolute left-3 text-orange-400" />
                </div>
            </div>

            {/* Table Section */}
            <div className="mt-4">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-white shadow-sm shadow-orange-200">
                        <tr className="border-b-2">
                            <th className="p-2 text-left font-medium">Id</th>
                            <th className="p-2 text-left font-medium">Name</th>
                            <th className="p-2 text-left font-medium">Phone</th>
                            <th className="p-2 text-left font-medium">Email</th>
                            <th className="p-2 text-left font-medium">Address</th>
                            <th className="p-2 text-left font-medium">Result</th>
                            <th className="p-2 text-left font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <tr key={student.user_id} className="border-b-2 hover:bg-gray-50">
                                    <td className="p-2">{student.user_id}</td>
                                    <td>
                                        <span
                                            className="bg-blue-50 hover:bg-blue-100 cursor-pointer px-2 py-1 rounded"
                                            onClick={() => dispatch(setStudent(true))}
                                        >
                                            {student.user_name}
                                        </span>
                                    </td>
                                    <td className="p-2">{student.phone}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.role}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="p-2 text-center text-gray-500">
                                    No students found matching "{searchQuery}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NewUsers