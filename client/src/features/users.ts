import { UserState, user } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const myProflle:user = {
            acc_status: '',
            created_at: '',
            email: '',
            fathers_name: '', 
            first_name: '',
            gender: '',
            phone: '',
            picture:'',
            profession: '',
            role: '', 
            status: '',
            user_id: 0,
            user_name: '',
}


const initialState: UserState = {
            user:myProflle,
            signup: null,
            login: null,
            userForm: false,
            form: "login",
            profileForm:false,
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<user>) {
            state.user = action.payload
        },
      
        setLoginForm(state, action: PayloadAction<boolean>) {
            state.userForm = action.payload
        },
        setForm(state, action: PayloadAction<string>) {
            state.form = action.payload
        },
        setProfileForm(state, action: PayloadAction<boolean>) {
            state.profileForm = action.payload
        },
    }
});

export default userSlice.reducer

export const {setLoginForm, setForm, setUser, setProfileForm} = userSlice.actions