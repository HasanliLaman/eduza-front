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
        <h2>Why learn with our courses?</h2>
        <div className="features">
          <Feature title={"1. Learn"} img={learn} />
          <Feature title={"2. Graduate"} img={graduate} />
          <Feature title={"3. Work"} img={work} />
        </div>
      </Container>
    </StyleFeatureContainer>
  );
};

export default FeatureContainer;
