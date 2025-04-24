import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { setBlogForm } from '../features/blogs';
import { useDispatch } from 'react-redux';

const MyBlog: React.FC = () => {
    // State to track the index of the currently expanded blog item
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const dispatch = useDispatch()

    const blog = [
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
    ];

    return (
        <div className='w-[800px] m-auto px-2'>
            <div className='flex justify-between'>
                <p className='font-bold text-orange-500 text-xl'>My Blog</p>
                <p
                    className='font-bold text-white px-1 py-[1px] rounded-md bg-primaryBtn cursor-pointer transition-transform hover:scale-110 duration-300  '
                    onClick={() => dispatch(setBlogForm(true))}
                >Add new</p>

            </div>

            {blog.map((item, index) => (
                <div key={index} className="border-y-[1px] mt-1 border-orange-200 p-2 rounded-md shadow-sm flex justify-between">
                    <div>
                        <p><span className="font-bold">Title: </span>{item.title}</p>
                        <p><span className="font-bold">Subtitle: </span>{item.subTitle}</p>
                        <p><span className="font-bold">Target: </span>{item.target}</p>


                        {activeIndex === index && <p className="mt-2 text-gray-700">{item.message}</p>}
                        <p className="text-blue-500 cursor-pointer px-2 underline hover:text-blue-600"
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {activeIndex === index ? "Read less..." : "Read more..."}
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <FiEdit className="text-[24px] text-green-500 hover:text-green-800 cursor-pointer" title="Edit" />
                        <RiDeleteBinLine className="text-[24px] text-red-700 hover:text-red-950 cursor-pointer" title="Delete" />
                    </div>


                </div>
            ))}
        </div>
    );
};

export default MyBlog;