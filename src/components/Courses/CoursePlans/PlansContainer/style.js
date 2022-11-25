import styled from "styled-components";

const StylePlansContainer = styled.section`
  background-color: var(--color-gray);
  padding: 13.2rem 0;
  position: relative;

  h2 {
    font-size: 3.2rem;
    line-height: 4.1rem;
    color: #0f437f;
    text-align: center;
    margin-bottom: 4rem;
  }

  .plans {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (min-width: 768px) {
    padding: 15rem 0;

    h2 {
      margin-bottom: 5.4rem;
      font-size: 3.8rem;
      line-height: 4.9rem;
    }

    .plans {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    }
  }
`;

export default StylePlansContainer;
