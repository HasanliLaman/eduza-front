import styled from "styled-components";

const StyleCourseContainer = styled.section`
  background-color: var(--color-gray);
  padding: 13.2rem 0;
  position: relative;

  h2 {
    font-size: 3.2rem;
    line-height: 4.1rem;
    color: #0f437f;
    text-align: center;
    margin-bottom: 4rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 70px;
    height: 70px;
    background-color: var(--color-white);
    border-radius: 50%;
    box-shadow: var(--box-shadow);

    &:after {
      font-size: 2.4rem;
      color: #111;
    }
  }

  & > div > button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 4rem;

    &:hover {
      transform: translateX(-50%) scale(0.95);
    }
  }

  @media (min-width: 768px) {
    padding: 20.6rem 0;

    h2 {
      margin-bottom: 5.4rem;
      font-size: 3.8rem;
      line-height: 4.9rem;
    }

    & > div > button {
      margin-top: 5.6rem;
    }
  }
`;

export default StyleCourseContainer;
