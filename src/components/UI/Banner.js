import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyleBanner = styled.section`
  color: var(--color-darkish-gray);
  background: var(--color-primary);
  height: 281.5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &.secondary {
    background: rgba(225, 237, 251, 0.4);

    h2 {
      color: var(--color-dark-blue);
    }

    p {
      color: #62778f;
    }
  }

  h2 {
    color: var(--color-white);
    font-size: 3.5rem;
    line-height: 4.55rem;
    margin-bottom: 1rem;
  }

  .yellow,
  .orange {
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 50%;
  }

  .yellow {
    background: var(--color-secondary);
    top: -150px;
    right: -100px;
  }

  .orange {
    background: var(--color-accent);
    bottom: -150px;
    left: -100px;
  }

  @media (min-width: 768px) {
    height: 426px;

    .yellow,
    .orange {
      width: 450px;
      height: 450px;
    }

    .yellow {
      top: -250px;
      right: -230px;
    }

    .orange {
      bottom: -250px;
      left: -230px;
    }

    h2 {
      font-size: 6rem;
      line-height: 7.8rem;
    }

    p {
      max-width: 576px;
    }
  }
`;

const Banner = ({ text, primary }) => {
  return (
    <StyleBanner className={!primary ? "secondary" : ""}>
      <div className="orange"></div>
      <div className="yellow"></div>
      <Container>
        <h2>{text}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </Container>
    </StyleBanner>
  );
};

export default Banner;
