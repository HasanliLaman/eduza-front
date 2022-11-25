import React from "react";
import StyleCourse from "./style";

const Course = ({ name, img, tutor }) => {
  return (
    <StyleCourse>
      <div className="duration">7hr 24m</div>
      <img src={`http://164.92.171.28/${img}`} alt="course" />
      <article>
        <span>{name}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id.
        </p>
        <div className="teacher">
          <p>{tutor}</p>
        </div>
      </article>
    </StyleCourse>
  );
};

export default Course;
