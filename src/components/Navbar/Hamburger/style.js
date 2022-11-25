import styled from "styled-components";

const StyleHamburger = styled.div`
  align-items: center;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  height: 46px;
  justify-content: center;
  transform: all 0.5s;
  width: 46px;

  div {
    background: var(--color-white);
    width: 20px;
    height: 2px;
    transform: all 0.5s;
  }

  &:hover {
    background: var(--color-accent);
  }

  &.active div:last-of-type {
    transform: translate3d(0px, -9px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(40deg) skew(0deg, 0deg);
  }

  &.active div:first-of-type {
    transform: translate3d(0px, 9px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(140deg) skew(0deg, 0deg);
  }

  &.active div:nth-of-type(2) {
    opacity: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StyleHamburger;
