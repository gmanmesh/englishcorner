import React, { useState } from 'react';

const ChangePass: React.FC = () => {
    // State for form fields
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State for error messages
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Reset success message
        setSuccessMessage(null);

        // Basic validation
        if (!currentPassword) {
            setError('Please enter your current password.');
            return;
        }

        if (!newPassword || newPassword.length < 6) {
            setError('New password must be at least 6 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        // Simulate password change (replace with API call)
        setTimeout(() => {
            setError(null);
            setSuccessMessage('Password changed successfully!');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }, 1000); // Simulate API delay
    };

    return (
        <div className="flex justify-center  ">
            <div className="w-3/4 shadow-small bg-white rounded-lg p-4  ">
                <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Change Password</h2>

                {successMessage && (
                    <p className="text-green-500 font-medium text-center mb-4">{successMessage}</p>
                )}
                {error && <p className="text-red-500 font-medium text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4 text-primary">

                    <div className=''>
                        <label htmlFor="currentPassword" className="block font-medium mb-1 ">
                            Current Password:
                        </label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-4 py-2 border  border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your current password"
                        />
                    </div>


                    <div>
                        <label htmlFor="newPassword" className="block font-medium mb-1">
                            New Password:
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border  border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your new password"
                        />
                    </div>


                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border  border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Confirm your new password"
                        />
                    </div>


                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-primaryBtn hover:bg-lightBtn active:bg-primaryBtn text-white font-medium rounded-md  transition duration-300"
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePass;