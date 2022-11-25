import React from "react";
import StyleCourse from "./style";
import courseImg from "../../../assets/images/course-img.jpeg";
import courseTeacher from "../../../assets/images/course-teacher.jpg";

const Course = () => {
  return (
    <StyleCourse>
      <div className="duration">7hr 24m</div>
      <img src={courseImg} alt="course" />
      <article>
        <span>Graphic designer</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id.
        </p>
        <div className="teacher">
          <img src={courseTeacher} alt="teacher" />
          <p>Kathie Corl</p>
        </div>
      </article>
    </StyleCourse>
  );
};

export default Course;
