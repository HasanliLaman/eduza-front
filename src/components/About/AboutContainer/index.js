import React from "react";
import StyleAboutContainer from "./style";
import Container from "../../UI/Container";
import Button from "../../UI/Button";
import AboutList from "../AboutList";
import aboutImg from "../../../assets/images/about-img.jpg";

const AboutContainer = () => {
  return (
    <StyleAboutContainer>
      <Container>
        <h2>Haqqımızda</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className="content">
          <AboutList />
          <img src={aboutImg} alt="about" />
        </div>
        <Button isPrimary={false} text="Daha ətraflı" />
      </Container>
    </StyleAboutContainer>
  );
};

export default AboutContainer;
