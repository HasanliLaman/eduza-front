import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../asyncThunk";

const initialState = {
  loading: false,
  error: null,
  courses: {},
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => ({
      loading: false,
      courses: action.payload,
      error: "",
    }));
    builder.addCase(fetchCourses.pending, (state, action) => ({
      loading: true,
      courses: state.courses,
      error: state.error,
    }));
    builder.addCase(fetchCourses.rejected, (state, action) => ({
      loading: false,
      courses: state.courses,
      error: "Something went wrong!",
    }));
  },
});

export default courseSlice.reducer;
