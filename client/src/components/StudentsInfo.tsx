import React from 'react'
import { setStudent } from '../features/students'
import { useDispatch } from 'react-redux'

const StudentsInfo: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div className='flex justify-center z-20 sticky top-[130px]'>
            <div className='py-4 px-4 shadow-hero rounded-lg absolute w-[600px] bg-white '>
                <p className='text-blue-950 font-bold text-center'>English Corner Students Status</p>
                <p><span className='font-semibold'>Name :</span> Abebe Beyene</p>
                <p><span className='font-semibold'>Email :</span> -</p>
                <p><span className='font-semibold'>Phone :</span> 0912548787</p>
                <p><span className='font-semibold'>Date of rege:</span> 12/1/25</p>
                <p><span className='font-semibold'>Exam result:</span> B</p>
                <p><span className='font-semibold'>Recent Exam Result:</span> B+</p>
                <p><span className='font-semibold'>Status:</span> Student</p>
                <div className='flex justify-center'>
                    <p className='bg-blue-950 text-white px-6 cursor-pointer rounded-md hover:bg-blue-900 active:bg-blue-800' onClick={() => dispatch(setStudent(false))}>Close</p>
                </div>
            </div>
        </div>

    )
}

export default StudentsInfo
