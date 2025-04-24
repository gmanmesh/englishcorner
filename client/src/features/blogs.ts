import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogState } from "../types/types";

const initialState:BlogState = {
     blogForm:false
}
const blogSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setBlogForm(state, action:PayloadAction<boolean>) {
        state.blogForm = action.payload
    }
    }
});

export default blogSlice.reducer

export const {setBlogForm} = blogSlice.actions