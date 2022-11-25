import React from "react";
import StyleStatsArticle from "./style";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const StatsArticle = () => {
  return (
    <StyleStatsArticle>
      <h2>Bizim kurslarımız ilə təhsilinizi inkişaf etdirin</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Link to={"/courses"}>
        <Button isPrimary={false} text="Bütün kurslar" />
      </Link>
    </StyleStatsArticle>
  );
};

export default StatsArticle;
