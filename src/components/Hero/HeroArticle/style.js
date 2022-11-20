import styled from "styled-components";

const StyleHeroArticle = styled.article`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 4.2rem;
    line-height: 5.46rem;
    color: #0f437f;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    margin: 1.6rem 0 4rem;
  }

  @media (min-width: 480px) {
    .buttons {
      flex-direction: row;
      gap: 1rem;
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
    max-width: none;
    width: 483px;
    text-align: left;

    h1 {
      font-size: 5.5rem;
      line-height: 7.3rem;
    }

    .buttons {
      justify-content: space-between;
    }

    p {
      margin: 2.4rem 0 5.6rem;
    }
  }
`;

export default StyleHeroArticle;
