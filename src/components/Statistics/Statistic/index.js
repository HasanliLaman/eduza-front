import React from "react";
import StyleStatistics from "./style";

const Statistics = ({ title, text }) => {
  return (
    <StyleStatistics>
      <h3>{title}</h3>
      <p>{text}</p>
    </StyleStatistics>
  );
};

export default Statistics;
