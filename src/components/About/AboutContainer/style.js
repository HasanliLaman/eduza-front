import styled from "styled-components";

const StyleAboutContainer = styled.section`
  text-align: center;
  border-bottom: 1px solid var(--color-darkish-gray);
  padding: 11.8rem 0;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .content > img {
    border-radius: var(--border-radius);
    width: 100%;
  }

  h2 {
    color: #0f437f;
    font-size: 3.2rem;
    line-height: 4.12rem;
    margin-bottom: 1.6rem;
  }

  .content {
    margin: 4rem 0;
    display: grid;
    gap: 5rem;
  }

  @media (min-width: 768px) {
    padding: 18rem 0;

    & > div > p {
      max-width: 500px;
    }

    .content {
      margin: 5.5rem 0;
      gap: 3rem;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .content img {
      order: -1;
    }

    h2 {
      font-size: 3.8rem;
      line-height: 4.9rem;
    }
  }

  @media (min-width: 1050px) {
    .content {
      gap: 6rem;
    }
  }
`;

export default StyleAboutContainer;
