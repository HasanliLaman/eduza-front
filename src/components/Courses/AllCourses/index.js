import React from "react";
import Course from "../Course";
import StyleAllCourses from "./style";
import Container from "../../UI/Container";
import arrow from "../../../assets/images/arrow-down-yellow.svg";

const AllCourses = () => {
  return (
    <StyleAllCourses>
      <img src={arrow} alt="arrow" />
      <Container>
        <h1>All Courses</h1>
        <div className="categories">
          <button className="active">All</button>
          <button>Development</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
        <div className="courses">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </Container>
    </StyleAllCourses>
  );
};

export default AllCourses;
