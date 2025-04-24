import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setStudent } from '../features/students';
import { RootState } from '../types/types';
import axios from 'axios';
import { getStaffs } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { getStaffList } from '../features/admin';

const SlaffLists: React.FC = () => {
    const dispatch = useDispatch();

    // State for managing the search query
    const [searchQuery, setSearchQuery] = useState('');
    // State for managing the selected status filter (updated to number | null)
    const [statusFilter, setStatusFilter] = useState<number | null>(null);
    // State for managing the edited status of a student (updated to number | null)
    const [editStatusId, setEditStatusId] = useState<number | null>(null);

    // Fetch staff list from Redux store
    const staffList = useSelector((state: RootState) => state.admin.staffs);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(getStaffs)
            .then((res) => {
                dispatch(getStaffList(res.data));
            })
            .catch((err) => {
                console.error('Error fetching staff data:', err);
                if (err.response?.status === 401 || err.response?.status === 500) {
                    navigate('/');
                }
            });
    }, [dispatch, navigate]);

    // Filtered staff based on the search query and status filter
    const filteredStudents = staffList.filter((student) => {
        const matchesSearchQuery = student.user_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatusFilter = statusFilter ? student.status === String(statusFilter) : true;
        return matchesSearchQuery && matchesStatusFilter;
    });

    // Handle status change
    const handleStatusChange = (id: number, newStatus: string) => {
        // Simulate updating the status in the data source
        console.log(`Updated staff ${id} status to ${newStatus}`);
        setEditStatusId(null); // Exit edit mode
    };

    return (
        <div className="px-2">
            {/* Header Section */}
            <div className="flex justify-between items-center sticky top-0 bg-white z-10 border-b-[2px] border-orange-100 p-2">
                <p className='font-bold text-orange-500 text-xl'>Staff</p>
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

            {/* Status Filter Section */}
            <div className="my-4 flex gap-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="statusFilter"
                        checked={statusFilter === null}
                        onChange={() => setStatusFilter(null)}
                        className="hidden"
                    />
                    <span
                        className={`ml-2 px-2 py-1 rounded cursor-pointer ${statusFilter === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        All
                    </span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="statusFilter"
                        checked={statusFilter === 1} // Assuming "active" maps to 1
                        onChange={() => setStatusFilter(1)}
                        className="hidden"
                    />
                    <span
                        className={`ml-2 px-2 py-1 rounded cursor-pointer ${statusFilter === 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Active
                    </span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="statusFilter"
                        checked={statusFilter === 2} // Assuming "terminated" maps to 2
                        onChange={() => setStatusFilter(2)}
                        className="hidden"
                    />
                    <span
                        className={`ml-2 px-2 py-1 rounded cursor-pointer ${statusFilter === 2 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        Terminated
                    </span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="statusFilter"
                        checked={statusFilter === 3} // Assuming "leave" maps to 3
                        onChange={() => setStatusFilter(3)}
                        className="hidden"
                    />
                    <span
                        className={`ml-2 px-2 py-1 rounded cursor-pointer ${statusFilter === 3 ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        On Leave
                    </span>
                </label>
            </div>

            {/* Table Section */}
            <div className="mt-4">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-white shadow-sm shadow-orange-200">
                        <tr className="border-b-2">
                            <th className="p-2 text-left font-medium">Id</th>
                            <th className="p-2 text-left font-medium">Name</th>
                            <th className="p-2 text-left font-medium">Gender</th>
                            <th className="p-2 text-left font-medium">Phone</th>
                            <th className="p-2 text-left font-medium">Email</th>
                            <th className="p-2 text-left font-medium">Position</th>
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
                                    <td className="p-2">{student.gender}</td>
                                    <td className="p-2">{student.phone}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.profession}</td>
                                    <td className="p-2">
                                        {editStatusId === student.user_id ? (
                                            <select
                                                value={student.status}
                                                onChange={(e) => handleStatusChange(student.user_id, e.target.value)}
                                                className="border border-orange-400 rounded p-1"
                                            >
                                                <option value="1">Active</option>
                                                <option value="2">Terminated</option>
                                                <option value="3">On Leave</option>
                                            </select>
                                        ) : (
                                            <span
                                                className="cursor-pointer underline text-blue-500"
                                                onClick={() => setEditStatusId(student.user_id)}
                                            >
                                                {student.status}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="p-2 text-center text-gray-500">
                                    No match found... {searchQuery}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SlaffLists;