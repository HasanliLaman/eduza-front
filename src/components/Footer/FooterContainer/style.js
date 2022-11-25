import styled from "styled-components";

const StyleFooterContainer = styled.footer`
  background: var(--color-dark-blue);
  color: #becad7;

  .contact {
    padding: 6rem 0 7.7rem;
    display: grid;
    gap: 6rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.6rem;

    li {
      font-size: 1.8rem;
      line-height: 2rem;
    }

    header {
      font-weight: 700;
      color: var(--color-white);
      margin-bottom: 0.9rem;
    }
  }

  @media (min-width: 768px) {
    ul {
      align-items: flex-start;
    }

    .contact {
      padding: 10rem 0;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default StyleFooterContainer;
