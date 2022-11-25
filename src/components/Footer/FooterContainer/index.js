import React from "react";
import FooterBrand from "../FooterBrand";
import Newsletter from "../Newsletter";
import Container from "../../UI/Container";
import StyleFooterContainer from "./style";

const FooterContainer = () => {
  return (
    <StyleFooterContainer>
      <Container>
        <FooterBrand />
        <div className="contact">
          <Newsletter />
          <ul>
            <li>
              <header>Pages</header>
            </li>
            <li>Home</li>
            <li>Courses</li>
            <li>Register</li>
            <li>Events</li>
          </ul>
          <ul>
            <li>
              <header>Details</header>
            </li>
            <li>Pricing</li>
            <li>Teachers</li>
            <li>Reviews</li>
            <li>About</li>
          </ul>
          <ul>
            <li>
              <header>Contact</header>
            </li>
            <li>Baku, AZ 10020</li>
            <li>eduza@example.com</li>
            <li>+9945555555</li>
          </ul>
        </div>
      </Container>
    </StyleFooterContainer>
  );
};

export default FooterContainer;
