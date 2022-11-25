import styled from "styled-components";

const StyleTeacherArticle = styled.article`
  text-align: center;

  h2 {
    color: #0f437f;
    font-size: 3.2rem;
    line-height: 4.12rem;
    margin-bottom: 1.6rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    text-align: left;

    h2 {
      font-size: 3.8rem;
      line-height: 4.9rem;
    }

    .buttons {
      align-items: flex-start;
      margin-top: 3.5rem;
    }
  }
`;

export default StyleTeacherArticle;
