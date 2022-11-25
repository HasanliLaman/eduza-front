import React from "react";
import AllCourses from "../components/Courses/AllCourses";
import Banner from "../components/UI/Banner";

const Courses = () => {
  return (
    <div>
      <Banner text={"Courses"} primary={true} />
      <AllCourses />
    </div>
  );
};

export default Courses;
