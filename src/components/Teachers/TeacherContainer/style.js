import styled from "styled-components";

const StyleTeacherContainer = styled.section`
  padding: 11.8rem 0 13.8rem;

  img {
    border-radius: var(--border-radius);
    width: 100%;
  }

  & > div {
    display: grid;
    gap: 5rem;
  }

  @media (min-width: 768px) {
    padding: 18.4rem 0 21.6rem;

    & > div {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;

export default StyleTeacherContainer;
