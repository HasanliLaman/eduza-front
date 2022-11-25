import React from "react";
import StyleHamburger from "./style";

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyleHamburger
      onClick={() => setOpen(!open)}
      className={open ? "active" : ""}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyleHamburger>
  );
};

export default Hamburger;
