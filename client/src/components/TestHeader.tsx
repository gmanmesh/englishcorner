
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';

const TestHeader: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);

    const date = new Date()
    return (
        <div className='w-full mt-[40px] flex items-center justify-between px-4'>
            <div className='flex justify-start items-center'>

                <p className=' font-bold text-orange-600'>CHECK YOUR LEVEL NOW</p>
            </div>
            <div>
                <p className='font-bold text-primary'>Welcome to the exam, <span style={{color:'orange'}}>{user.user_name.toUpperCase()}!</span></p>
            </div>
            <div>
                <p className='text-primary font-semibold'>{date.toDateString()}</p>
            </div>

        </div>
    )
}

export default TestHeader
