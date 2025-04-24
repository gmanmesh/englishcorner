import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "../features/students"
import userSlice from "../features/users";
import adminSlice from "../features/admin";
import evaluationSlice from "../features/evaluation";
import blogSlice from "../features/blogs";

const store = configureStore({
    reducer: {
          student: studentsSlice,
          user: userSlice,
          admin: adminSlice,
          evaluation: evaluationSlice,
          blogs:blogSlice
        
  }
});

export default store