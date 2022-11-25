import React from "react";
import StyleAboutList from "./style";
import teacher from "../../../assets/images/about-teachers.svg";
import student from "../../../assets/images/about-students.svg";
import uptodate from "../../../assets/images/about-uptodate.svg";

const AboutList = () => {
  return (
    <StyleAboutList>
      <li>
        <img src={teacher} alt="Expert teachers" />
        <h3>Industry expert teachers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id dolor .
        </p>
      </li>
      <li>
        <img src={uptodate} alt="Up-to-date course content" />
        <h3>Up-to-date course content</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id dolor .
        </p>
      </li>
      <li>
        <img src={student} alt="Students community" />
        <h3>Students community</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
          Felis donec massa aliquam id dolor .
        </p>
      </li>
    </StyleAboutList>
  );
};

export default AboutList;
