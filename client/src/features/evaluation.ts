import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { evaluationState } from "../types/types";

const initialState:evaluationState = {
    addEvalForm: false,
}
const evaluationSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
     setEvalForm(state, action: PayloadAction<boolean>) {
            state.addEvalForm= action.payload
        },
    }
});

export default evaluationSlice.reducer

export const {setEvalForm} = evaluationSlice.actions