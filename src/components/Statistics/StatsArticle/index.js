import React from "react";
import StyleStatsArticle from "./style";
import Button from "../../UI/Button";

const StatsArticle = () => {
  return (
    <StyleStatsArticle>
      <h2>Grow your career today with the Educationic courses</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button isPrimary={false} text="Explore courses" />
    </StyleStatsArticle>
  );
};

export default StatsArticle;
