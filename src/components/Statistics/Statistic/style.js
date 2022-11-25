import styled from "styled-components";

const StyleStatistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 4.9rem 2.6rem 4.1rem;
  text-align: center;

  h3 {
    color: var(--color-dark-blue);
    font-size: 3.8rem;
    line-height: 3.94rem;
  }

  @media (min-width: 522px) {
    h3 {
      font-size: 5.4rem;
      line-height: 5.6rem;
    }
  }
`;

export default StyleStatistics;
