import React from 'react'
import { FaRegSadTear } from "react-icons/fa";

const Page404: React.FC = () => {
    return (
        <div className='w-[1120px] h-[315px] m-auto px-4 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <FaRegSadTear className='text-orange-500 text-[80px] font-bold' />
                <p className='text-4xl font-bold text-primary'>
                    Page not found
                </p>

            </div>

        </div>
    )
}

export default Page404
