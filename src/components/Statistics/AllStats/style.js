import styled from "styled-components";

const StyleAllStats = styled.div`
  position: relative;
  display: grid;
  gap: 2rem;
  margin: 0 auto;

  .orange {
    position: absolute;
    width: 268px;
    height: 268px;
    background-color: var(--color-accent);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > div:not(:first-of-type) {
    z-index: 2;
  }

  @media (min-width: 522px) {
    width: 490px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    & > div:nth-of-type(4) {
      align-self: center;
      grid-row: 1/3;
      grid-column: 2/3;
    }
  }
`;

export default StyleAllStats;
