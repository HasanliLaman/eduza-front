import styled from "styled-components";

const StyleStatsArticle = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--color-darkish-gray);
    padding: 1.6rem 0 3rem;
  }

  h2 {
    color: var(--color-white);
    font-size: 3.2rem;
    line-height: 4.12rem;
  }

  button {
    background: var(--color-white);
    color: #0f437f;
  }

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;

    p {
      padding: 1.6rem 0 3.8rem;
    }

    h2 {
      font-size: 3.8rem;
      line-height: 4.9rem;
    }
  }
`;

export default StyleStatsArticle;
