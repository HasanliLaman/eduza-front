import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2.4rem 3rem;
  cursor: pointer;
  border-radius: 1000px;
  border: 0;
  outline: 0;
  color: ${(props) => (props.primary ? "#fff" : "#1e3d60")};
  background: ${(props) => (props.primary ? "#064ea4" : "#e7eaee")};
  transition: 0.5s;
  letter-spacing: 1.28px;

  &:hover {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    padding: 2.4rem 4rem;
  }
`;

const Button = ({ text, isPrimary }) => {
  return <StyleButton primary={isPrimary}>{text}</StyleButton>;
};

export default Button;
