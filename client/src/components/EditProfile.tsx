import React, { useState } from 'react';
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const EditProfile: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null); // State for the selected image

    // Handle file selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            // Read the file as a data URL
            reader.onload = (event) => {
                if (event.target) {
                    setProfileImage(event.target.result as string); // Update the state with the image preview
                }
            };

            reader.readAsDataURL(file); // Start reading the file
        }
    };

    // Handle image deletion
    const handleImageDelete = () => {
        setProfileImage(null); // Reset the image state
    };

    const inputStyle = "px-4 py-1 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"

    return (
        <div className="">
            <div className="w-3/4 m-auto px-6 bg-white shadow-small rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Edit Profile</h2>

                {/* Profile Image Section */}
                <div className="flex flex-col items-center justify-center mb-2">
                    {/* Display the selected image or default avatar */}
                    <img
                        src={profileImage || '/images/default-avatar.png'}
                        alt="profile"
                        className="w-32 h-32 rounded-3xl shadow-md object-cover"
                    />
                    <div className="flex gap-2 mt-2">
                        {/* Upload Button */}
                        <label htmlFor="image">
                            <MdOutlinePublishedWithChanges
                                className="text-[24px] text-blue-500 hover:text-blue-900 transition duration-300 cursor-pointer"
                            />
                        </label>
                        <input
                            type="file"
                            id="image"
                            hidden
                            accept="image/*" // Restrict to image files
                            onChange={handleImageChange} // Trigger image change handler
                        />

                        {/* Delete Button */}
                        {profileImage && (
                            <RiDeleteBin6Line
                                className="text-[24px] text-red-500 hover:text-red-900 transition duration-300 cursor-pointer"
                                onClick={handleImageDelete} // Trigger image delete handler
                            />
                        )}
                    </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-2 text-primary">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-medium">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            className={inputStyle}
                        />
                    </div>

                    {/* Father's Name */}
                    <div className="flex flex-col">
                        <label htmlFor="fatherName" className="font-medium">
                            Father's Name:
                        </label>
                        <input
                            type="text"
                            id="fatherName"
                            placeholder="Father's Name"
                            className={inputStyle}
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="font-medium">
                            Phone:
                        </label>
                        <input
                            type="number"
                            id="phone"
                            placeholder="Phone Number"
                            className={inputStyle}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className={inputStyle}
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="address" className="font-medium">
                            Address:
                        </label>
                        <textarea
                            id="address"
                            rows={3}
                            placeholder="Enter your address"
                            className={inputStyle}
                        ></textarea>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 mb-2 bg-primaryBtn hover:bg-lightBtn active:bg-primaryBtn  text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;