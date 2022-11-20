import styled from "styled-components";

const StyleHeroContainer = styled.section`
  padding: 8.1rem 0;
  position: relative;
  overflow: hidden;

  .yellow,
  .orange {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

  .orange {
    background-color: var(--color-accent);
    right: 0;
    bottom: 0;
    transform: translate(65%, 65%);
    z-index: -1;
  }

  .yellow {
    background-color: var(--color-secondary);
    left: 0;
    top: 0;
    transform: translate(-75%, -65%);
    z-index: -1;
  }

  .blue {
    background-color: var(--color-primary);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -2;
    height: 40%;
  }

  img {
    width: 100%;
    border-radius: 33px;
  }

  & > div {
    display: grid;
    gap: 5rem;
  }

  @media (min-width: 768px) {
    padding: 12rem 0;

    & > div {
      grid-template-columns: auto 1fr;
      gap: 3rem;
      align-items: center;
    }

    .orange {
      transform: translate(55%, 55%);
    }

    .blue {
      bottom: 0;
      top: 0;
      left: auto;
      right: 0;
      height: 90%;
      width: 40%;
    }

    @media (min-width: 1100px) {
      & > div {
        gap: 7rem;
      }
    }
  }
`;

export default StyleHeroContainer;
