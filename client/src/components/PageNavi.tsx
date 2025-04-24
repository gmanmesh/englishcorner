import React from 'react'
import { Link } from 'react-router-dom'

const PageNavi: React.FC = () => {
    return (
        <div className='w-[1120px] m-auto bg-yellow-200 flex justify-between'>
            <p>only for production</p>
            <div className='flex gap-4'>
                <Link to={'/'} >Home</Link>
                <Link to={'/admin'} >Admin</Link>
                <Link to={'/users'} >Users</Link>
                <Link to={'/evaluation'} >Evalu</Link>
                <Link to={'/students'} >Students</Link>
                <Link to={'/staffs'} >Staff</Link>
                <Link to={'/abcd'} >404</Link>
            </div>

        </div>
    )
}

export default PageNavi
