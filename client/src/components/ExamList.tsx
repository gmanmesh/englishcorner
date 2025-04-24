import React from 'react'
import { examsList } from '../data/test'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri';
import { setAdminDashboard } from '../features/admin'
import { useDispatch } from 'react-redux'

const ExamList: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div className='px-4'>
            <div className='flex justify-between'>
                <p className='font-bold text-orange-500 text-xl'>Exams List</p>
                <p className='font-bold text-white px-1 py-[1px] rounded-md bg-primaryBtn cursor-pointer transition-transform hover:scale-110 duration-300 ' onClick={() => dispatch(setAdminDashboard("newExam"))} >Add New</p>
            </div>

            {examsList.map((item) => (
                <div key={item.examCode} className='w-full m-2 px-2 rounded-sm cursor-pointer shadow-md flex justify-between'>
                    <div>
                        <p><span>Title :</span>{item.examTitle}</p>
                        <p><span>Level :</span>{item.level}</p>
                        <p><span>Code :</span>{item.examCode}</p>
                    </div>
                    <div className='flex justify-around flex-col'>
                        <BiEdit className='text-[24px] text-green-600' />
                        <RiDeleteBinLine className='text-[24px] text-red-500' />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ExamList