import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';

const Profile: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <div className="flex justify-center  bg-gray-100">
            <div className="w-full max-w-4xl p-8 bg-white flex gap-8">
                {/* Profile Image and Name */}
                <div className="text-center">
                    <img
                        src="/images/default-avatar.png"
                        alt="profile"
                        className="w-32 h-32 rounded-full shadow-md object-cover mx-auto mb-4"
                    />
                    <p className="text-lg font-bold text-primary">
                        <span className="font-semibold">Mr.</span> {user.user_name}
                    </p>
                </div>

                {/* Profile Details */}
                <div className="flex-1 px-4 py-4 border border-gray-200 rounded-md shadow-sm">
                    <table className="w-full">
                        <tbody className="text-gray-700">

                            <tr className="border-b border-gray-200 py-2">
                                <td className="font-medium pr-4">Full Name:</td>
                                <td className="text-start">{user.user_name}</td>
                            </tr>

                            <tr className="border-b border-gray-200 py-2">
                                <td className="font-medium pr-4">Phone:</td>
                                <td className="text-start">{user.phone}</td>
                            </tr>

                            {/* Email */}
                            <tr className="border-b border-gray-200 py-2">
                                <td className="font-medium pr-4">Email:</td>
                                <td className="text-start">{user.email}</td>
                            </tr>

                            {/* Address */}
                            <tr className="py-2">
                                <td className="font-medium pr-4">Address:</td>
                                <td className="text-start">{user.role}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;