import React from "react";
import Statistic from "../Statistic";
import StyleAllStats from "./style";

const AllStats = () => {
  return (
    <StyleAllStats>
      <div className="orange"></div>
      <Statistic title="9/11" text="Overall courses satisfaction score" />
      <Statistic title="96%" text="Completition rate on all courses" />
      <Statistic title="10K+" text="Happy students worldwide" />
    </StyleAllStats>
  );
};

export default AllStats;
