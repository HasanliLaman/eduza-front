import React from "react";
import StyleTeacherArticle from "./style";
import Button from "../../UI/Button";

const TeacherArticle = () => {
  return (
    <StyleTeacherArticle>
      <h2>Courses taught by industry leaders around the world</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="buttons">
        <Button isPrimary={true} text="Browse teachers" />
        <Button isPrimary={false} text="Become a teacher" />
      </div>
    </StyleTeacherArticle>
  );
};

export default TeacherArticle;
