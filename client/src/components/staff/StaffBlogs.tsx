import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const StaffBlogs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
            <p className='font-bold text-orange-500'>Staff Blog</p>
            {blog.map((item, index) => (
                <div key={index} className="border-y-[1px] mt-1 border-orange-200 p-2 rounded-md shadow-sm flex justify-between">
                    <div>
                        <p><span className="font-bold">Title: </span>{item.title}</p>
                        <p><span className="font-bold">Subtitle: </span>{item.subTitle}</p>
                        <p><span className="font-bold">Target: </span>{item.target}</p>


                        {activeIndex === index && <p className="mt-2 text-gray-700">{item.message}</p>}
                        <p className="text-blue-500 cursor-pointer underline hover:text-blue-600"
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
    )
}

export default StaffBlogs