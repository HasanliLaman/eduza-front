import React from "react";
import StyleStatsArticle from "./style";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const StatsArticle = () => {
  return (
    <StyleStatsArticle>
      <h2>Grow your career today with the Educationic courses</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Link to={"/courses"}>
        <Button isPrimary={false} text="Explore courses" />
      </Link>
    </StyleStatsArticle>
  );
};

export default StatsArticle;
