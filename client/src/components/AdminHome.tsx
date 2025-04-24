import React, { useState } from 'react';
import ExamStat from './admin/ExamStat';
import StudentStat from './StudentStat';
import { IoCloseSharp } from "react-icons/io5";

const AdminHome: React.FC = () => {
    // State to manage the blog items
    const [blogs, setBlogs] = useState([
        {
            title: "Notice",
            subTitle: "Meeting",
            target: "Staff",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, veritatis. Voluptatum voluptas ex cum iusto culpa. Ipsam error possimus totam iure eligendi deserunt commodi laudantium ipsum? Molestiae adipisci repudiandae molestias harum ab nihil ipsa minus, quis repellat quos unde! Aliquid blanditiis magni, impedit numquam illum quod ipsa velit nam exercitationem!",
        },
        {
            title: "Urgent",
            subTitle: "Exam Date",
            target: "Student",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, laudantium ipsum? Molestiae adipisci repudiandae molestias harum ab nihil ipsa minus, quis repellat quos unde! Aliquid blanditiis magni, impedit numquam illum quod ipsa velit nam exercitationem!",
        },
    ]);

    // Function to delete a blog item
    const handleDelete = (index: number) => {
        const updatedBlogs = blogs.filter((_, i) => i !== index); // Remove the item at the given index
        setBlogs(updatedBlogs); // Update the state with the new list
    };

    return (
        <div className=" m-auto w-fit p-2">
            {/* Charts Section */}
            <div className="flex justify-evenly w-[80%] ">
                <ExamStat />
                <StudentStat />
            </div>

            {/* Blog Section */}
            <div>
                <p className="font-bold text-orange-500 text-center text-lg mt-4">Notices</p>
                {blogs.map((item, index) => (
                    <div key={index} className="border-b p-4 relative group">



                        {/* Blog Content */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <p className="font-bold">{item.title}</p>
                                <div className='flex items-center gap-4 text-sm text-orange-400'>
                                    <p>12/4/25</p>
                                    <IoCloseSharp
                                        className="cursor-pointer text-lg text-orange-500  opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => handleDelete(index)} // Attach delete handler
                                    />
                                </div>

                            </div>
                            <p className="italic">{item.subTitle}</p>
                            <p>{item.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHome;