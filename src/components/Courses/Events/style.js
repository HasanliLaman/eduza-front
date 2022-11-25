import styled from "styled-components";

const StyleEvents = styled.div`
  box-shadow: var(--box-shadow);
  overflow: hidden;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.5s;
  position: relative;
  display: grid;

  .date {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    span {
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-primary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.84px;
    }

    p {
      font-size: 4rem;
      line-height: 4rem;
      font-weight: 700;
      color: var(--color-dark-blue);
    }
  }

  .category {
    position: absolute;
    padding: 1.4rem 2.4rem;
    background-color: var(--color-white);
    border-radius: 1000px;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: var(--color-dark-blue);
    font-weight: 700;
    top: 2.4rem;
    left: 2.4rem;
  }

  &:hover {
    transform: scale(0.97);
  }

  & > img {
    width: 100%;
  }

  & > div {
    padding: 4rem 3.5rem 5rem;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr auto;
  }

  article {
    p:first-of-type {
      font-size: 1.6rem;
      line-height: 1.8rem;
      font-weight: 700;
    }

    span {
      font-size: 2.2rem;
      line-height: 3.3rem;
      font-weight: 700;
      display: inline-block;
      color: var(--color-dark-blue);
      margin: 2rem 0 1rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;

    & > div {
      padding: 6.3rem 3.1rem 6.3rem 4.8rem;
    }
  }
`;

export default StyleEvents;
