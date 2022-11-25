import styled from "styled-components";

const StyleCourse = styled.div`
  overflow: hidden;
  border-radius: 2rem;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
  }

  .duration {
    position: absolute;
    padding: 1.4rem 2.4rem;
    border-radius: 1000px;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    color: var(--color-dark-blue);
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 700;
    top: 3rem;
    right: 2.4rem;
  }

  & > img {
    width: 100%;
  }

  article {
    padding: 3.8rem 4rem 4rem;

    span {
      color: var(--color-dark-blue);
      font-size: 2.2rem;
      line-height: 3.3rem;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 1rem;
    }
  }

  .teacher {
    margin-top: 3rem;
    color: var(--color-dark-blue);
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
`;

export default StyleCourse;
