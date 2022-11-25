import React from "react";
import TeacherArticle from "../TeacherArticle";
import StyleTeacherContainer from "./style";
import Container from "../../UI/Container";
import teacherImg from "../../../assets/images/teachers-img.jpg";

const TeacherContainer = () => {
  return (
    <StyleTeacherContainer>
      <Container>
        <TeacherArticle />
        <img src={teacherImg} alt="teacher" />
      </Container>
    </StyleTeacherContainer>
  );
};

export default TeacherContainer;
