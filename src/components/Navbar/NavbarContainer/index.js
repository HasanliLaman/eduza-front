import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyleNavbarContainer from "./style";
import logo from "../../../assets/images/logo.png";
import Container from "../../UI/Container";
import Hamburger from "../Hamburger";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyleNavbarContainer>
      <Container>
        <img src={logo} alt="logo" />
        <ul className={open ? "active" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
        <div className="icons">
          <svg
            width="20px"
            fill="#064ea4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <Hamburger setOpen={setOpen} open={open} />
        </div>
      </Container>
    </StyleNavbarContainer>
  );
};

export default NavbarContainer;
