import styled from "styled-components";

const StyleAllEvents = styled.section`
  padding: 11.8rem 0;
  position: relative;

  & > img {
    width: 40px;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 4.12rem;
    color: var(--color-blue);
  }

  .events {
    display: grid;
    gap: 4rem;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    background: var(--color-gray);
    border-radius: var(--border-radius);
    padding: 1.8rem 2rem;
    margin: 3rem 0 4rem;

    button {
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: var(--color-dark-blue);
      background: var(--color-white);
      border-radius: 1000px;
      border: 0;
      outline: 0;
      border: 1px solid var(--color-darkish-gray);
      padding: 1.5rem 2.4rem 1.7rem;
      font-weight: 700;
      cursor: pointer;
    }

    .active {
      color: var(--color-white);
      background: var(--color-blue);
      border: 1px solid var(--color-blue);
    }
  }

  @media (min-width: 768px) {
    padding: 16rem 0 18.4rem;

    & > img {
      width: 61px;
    }

    & > div {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      align-items: center;
      column-gap: 1.5rem;
      row-gap: 5.3rem;
    }

    .categories {
      border-radius: 1000px;
      justify-self: end;
      gap: 2.8rem;
      margin: 0;
    }

    .events {
      gap: 4.8rem;
      grid-column: 1/3;
    }

    h1 {
      font-size: 3.8rem;
      line-height: 4.9rem;
    }
  }
`;

export default StyleAllEvents;
