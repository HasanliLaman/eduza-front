import React from "react";
import StyleStatsContainer from "./style";
import Container from "../../UI/Container";
import StatsArticle from "../StatsArticle";
import AllStats from "../AllStats";

const StatsContainer = () => {
  return (
    <StyleStatsContainer>
      <div className="yellow"></div>
      <div className="gray"></div>
      <Container>
        <StatsArticle />
        <AllStats />
      </Container>
    </StyleStatsContainer>
  );
};

export default StatsContainer;
