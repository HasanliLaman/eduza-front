import styled from "styled-components";

const StyleFeature = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
    margin: 3rem 0 0.6rem;
  }

  p {
    color: var(--color-darkish-gray);
  }

  img {
    width: 100%;
    height: 190px;
  }

  @media (min-width: 768px) {
    img {
      height: 230px;
    }

    span {
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }
`;

export default StyleFeature;
