import styled from "styled-components";

const StyleCategoryComponent = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.5s;

  &:hover {
    transform: translateY(-7px);
  }

  .quantity {
    align-items: center;
    background: var(--color-white);
    border-radius: 1000px;
    box-shadow: var(--box-shadow);
    color: var(--color-dark-blue);
    display: flex;
    font-size: 1.4rem;
    font-weight: 700;
    gap: 0.8rem;
    line-height: 1.4rem;
    padding: 1.6rem 2.4rem;
    position: absolute;
    right: 2.6rem;
    top: 2.3rem;
  }

  .content {
    padding: 2.8rem 2.5rem 3rem;

    span {
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 700;
      color: var(--color-dark-blue);
      margin-bottom: 1rem;
    }
  }

  & > img {
    width: 100%;
    transition: all 0.5s;
  }

  @media (min-width: 768px) {
    .content {
      padding: 4rem 3.2rem 4.2rem;

      span {
        font-size: 2.4rem;
        line-height: 3.6rem;
      }
    }
  }
`;

export default StyleCategoryComponent;
