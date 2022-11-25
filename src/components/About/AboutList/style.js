import styled from "styled-components";

const StyleAboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  img {
    border-radius: 50%;
  }

  h3 {
    color: var(--color-dark-blue);
    font-size: 2.2rem;
    line-height: 3.3rem;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    margin: 2rem 0 0.8rem;
  }

  li {
    display: grid;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: 768px) {
    li {
      text-align: start;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      justify-items: start;
      column-gap: 3.3rem;
    }

    img {
      grid-row: 1/3;
    }

    h3 {
      margin: 0 0 0.8rem;
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }
`;

export default StyleAboutList;
