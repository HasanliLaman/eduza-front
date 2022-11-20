import React from "react";
import StyleFeature from "./style";

const Feature = ({ title, img }) => {
  return (
    <StyleFeature>
      <img src={img} alt="feature" />
      <span>{title}</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis
        donec massa aliqua.
      </p>
    </StyleFeature>
  );
};

export default Feature;
