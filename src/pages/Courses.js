import React, { useEffect } from "react";
import AllCourses from "../components/Courses/AllCourses";
import Banner from "../components/UI/Banner";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../asyncThunk";

const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div>
      <Banner text={"Kurslar"} primary={true} />
      <AllCourses />
    </div>
  );
};

export default Courses;
