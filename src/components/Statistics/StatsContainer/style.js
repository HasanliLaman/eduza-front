import styled from "styled-components";

const StyleStatsContainer = styled.section`
  padding: 6rem 0;
  background-color: var(--color-primary);
  position: relative;
  overflow: hidden;

  .yellow,
  .gray {
    position: absolute;
    border-radius: 50%;
  }

  article {
    z-index: 2;
  }

  .yellow {
    width: 285px;
    height: 285px;
    background: var(--color-secondary);
    top: 125px;
    left: -260px;
  }

  .gray {
    width: 268px;
    height: 268px;
    background: #e1edfb;
    right: 0px;
    bottom: -230px;
  }

  & > div {
    display: grid;
    gap: 5rem;
  }

  @media (min-width: 768px) {
    padding: 8.8rem 0;

    & > div {
      gap: 2rem;
      grid-template-columns: 1fr auto;
      align-items: center;
    }

    .yellow {
      width: 356px;
      height: 356px;
      top: -200px;
      left: -310px;
    }

    .gray {
      width: 336px;
      height: 336px;
      left: 50%;
      bottom: -250px;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 1050px) {
    & > div {
      gap: 13rem;
    }
  }
`;

export default StyleStatsContainer;
