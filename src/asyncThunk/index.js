import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../server/index";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const res = await api.get(`/courses`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
