import React from "react";
import StyleTeacherArticle from "./style";
import Button from "../../UI/Button";

const TeacherArticle = () => {
  return (
    <StyleTeacherArticle>
      <h2>Ölkə üzrə sənaye liderləri tərəfindən tədris olunan kurslar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="buttons">
        <Button isPrimary={true} text="Müəllimlərimiz" />
        <Button isPrimary={false} text="Müəllim olun" />
      </div>
    </StyleTeacherArticle>
  );
};

export default TeacherArticle;
