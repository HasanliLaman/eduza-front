import styled from "styled-components";

const StyleFeatureContainer = styled.section`
  background: var(--color-dark-blue);
  color: var(--color-white);
  padding: 9.6rem 0;
  position: relative;

  & > img {
    position: absolute;
    width: 55px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  h2 {
    font-size: 2.6rem;
    line-height: 3.35rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  @media (min-width: 768px) {
    padding: 17rem 0 19rem;

    h2 {
      font-size: 3.8rem;
      line-height: 4.9rem;
      margin-bottom: 5.2rem;
    }

    .features {
      display: flex;
      flex-direction: row;
      gap: 1.6rem;
      justify-content: space-between;
    }

    & > img {
      width: 77px;
    }
  }
`;

export default StyleFeatureContainer;
