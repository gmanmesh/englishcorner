import { AdminState, user } from '../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:AdminState = {
    adminPage: 'home',
    students: [],
    staffs: [],
    newUsers: [],
    secreteries: [],
    admins: [],
    
}
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminDashboard(state, action: PayloadAction<string>) {
            state.adminPage = action.payload;
        },
        getStudentsList(state, action: PayloadAction<user[]>) {
            state.students = action.payload
        },
        getStaffList(state, action: PayloadAction<user[]>) {
            state.staffs = action.payload
        },
        getSecreteriesList(state, action: PayloadAction<user[]>) {
            state.secreteries = action.payload
        },
        getAdminList(state, action: PayloadAction<user[]>) {
            state.admins = action.payload
        },
        getNewUsersList(state, action: PayloadAction<user[]>) {
            state.newUsers = action.payload
        },
    }
});

export default adminSlice.reducer

export const { setAdminDashboard, getStudentsList, getStaffList, getSecreteriesList, getAdminList, getNewUsersList } = adminSlice.actions