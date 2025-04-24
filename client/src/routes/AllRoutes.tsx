import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import Users from '../pages/Users'
import Page404 from '../pages/Page404'
import Evaluation from '../pages/Evaluation'
import Student from '../pages/Student'
import Staff from '../pages/Staff'
import Secretary from '../pages/Secretary';
import NewAdmin from '../pages/NewAdmin'

const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/newadmin' element={<NewAdmin />} />
            <Route path='/users' element={<Users />} />
            <Route path='/evaluation' element={<Evaluation />} />
            <Route path='/students' element={<Student />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='/secretary' element={<Secretary />} />
            <Route path='/*' element={<Page404 />} />
        </Routes>
    )
}
export default AllRoutes
