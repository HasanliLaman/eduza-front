import styled from "styled-components";

const StyleNewsletter = styled.article`
  div:first-of-type {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: 2rem;
  }

  img {
    border-radius: 50%;
    grid-row: 1/3;
  }

  header {
    font-size: 2.2rem;
    line-height: 3.3rem;
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 1rem;
  }

  .newsletter {
    background: var(--color-white);
    border-radius: 1000px;
    padding: 1.2rem 1rem 1.2rem 2.3rem;
    display: flex;
    align-items: center;
    margin-top: 2.8rem;
  }

  input {
    background: var(--color-white);
    border: 0;
    font-size: 1.8rem;
    flex-grow: 1;
    outline: 0;
    width: 100%;
  }

  button {
    border: 0;
    outline: 0;
    background: var(--color-primary);
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: var(--color-white);
    text-transform: uppercase;
    padding: 1.5rem 2.4rem;
    border-radius: 1000px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 376px;

    div:first-of-type {
      grid-template-columns: auto;
      grid-template-rows: repeat(3, auto);
      column-gap: 0;
    }

    img {
      margin-bottom: 2.4rem;
    }
  }
`;

export default StyleNewsletter;
