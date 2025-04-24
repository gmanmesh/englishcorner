import { StudentsState } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:StudentsState = {
    studentCard:false,
}
const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudent(state, action: PayloadAction<boolean>) {
            state.studentCard = action.payload
        },
    }
});

export default studentSlice.reducer

export const {setStudent} = studentSlice.actions