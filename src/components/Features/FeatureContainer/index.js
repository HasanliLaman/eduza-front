import React from "react";
import Container from "../../UI/Container";
import Feature from "../Feature";
import StyleFeatureContainer from "./style";
import learn from "../../../assets/images/features-learn.svg";
import work from "../../../assets/images/features-work.svg";
import graduate from "../../../assets/images/features-graduate.svg";
import arrow from "../../../assets/images/arrow-down-orange.svg";

const FeatureContainer = () => {
  return (
    <StyleFeatureContainer>
      <img src={arrow} alt="arrow" />
      <Container>
        <h2>Niyə bizim kurslarımızla öyrənməlisiniz?</h2>
        <div className="features">
          <Feature title={"1. Öyrən"} img={learn} />
          <Feature title={"2. Bitir"} img={graduate} />
          <Feature title={"3. İşlə"} img={work} />
        </div>
      </Container>
    </StyleFeatureContainer>
  );
};

export default FeatureContainer;
