import styled from "styled-components";

const StyleNavbarContainer = styled.nav`
  position: relative;
  padding: 2.8rem 0;
  box-shadow: 0 6px 12px 0 rgb(6 43 86 / 4%);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    font-size: 2.8rem;
    line-height: 3.1rem;
    font-weight: 700;
    color: var(--color-dark-blue);
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    padding: 2rem 1.6rem;
    height: calc(100vh - 100%);
    transform: translateX(-100%);
    transition: all 0.5s;
    z-index: 1;
  }

  li a {
    transition: all 0.5s;
  }

  li a:hover {
    color: var(--color-accent);
  }

  .active {
    transform: translateX(0);
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 150px;
  }

  @media (min-width: 768px) {
    ul {
      position: static;
      font-size: 1.8rem;
      line-height: 2rem;
      flex-direction: row;
      background: transparent;
      padding: 0;
      transform: translateX(0);
      gap: 4rem;
      padding-right: 4rem;
      z-index: 0;
      height: auto;
    }
  }
`;

export default StyleNavbarContainer;
