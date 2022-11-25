import styled from "styled-components";

const StyleAllCategories = styled.section`
  padding: 8.7rem 0 11.8rem;

  h2 {
    margin-bottom: 4rem;
    color: #0f437f;
    font-size: 3.2rem;
    line-height: 4.12rem;
    text-align: center;
  }

  .categories {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media (min-width: 768px) {
    padding: 13.6rem 0 18.4rem;

    h2 {
      font-size: 3.8rem;
      line-height: 4.9rem;
      margin-bottom: 4.8rem;
    }

    .categories {
      flex-direction: row;
      gap: 2.6rem;
    }
  }
`;

export default StyleAllCategories;
