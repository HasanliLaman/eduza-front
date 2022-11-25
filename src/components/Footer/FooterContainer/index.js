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
              <header>Keçid</header>
            </li>
            <li>Ana səhifə</li>
            <li>Kurslar</li>
            <li>Qeydiyyat</li>
            <li>Canlı dərslər</li>
          </ul>
          <ul>
            <li>
              <header>Detallar</header>
            </li>
            <li>Qiymətlər</li>
            <li>Müəllimlər</li>
            <li>Rəylər</li>
            <li>Haqqımızda</li>
          </ul>
          <ul>
            <li>
              <header>Əlaqə</header>
            </li>
            <li>Baku, AZ 10020</li>
            <li>eduza@example.com</li>
            <li>+9945554422</li>
          </ul>
        </div>
      </Container>
    </StyleFooterContainer>
  );
};

export default FooterContainer;
