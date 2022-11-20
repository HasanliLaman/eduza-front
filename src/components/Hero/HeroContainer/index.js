import React from "react";
import StyleHeroContainer from "./style";
import Container from "../../UI/Container";
import heroImg from "../../../assets/images/hero-img.jpeg";
import HeroArticle from "../HeroArticle";

const HeroContainer = () => {
  return (
    <StyleHeroContainer>
      <div className="yellow"></div>
      <div className="orange"></div>
      <div className="blue"></div>
      <Container>
        <HeroArticle />
        <img src={heroImg} alt="hero" />
      </Container>
    </StyleHeroContainer>
  );
};

export default HeroContainer;
