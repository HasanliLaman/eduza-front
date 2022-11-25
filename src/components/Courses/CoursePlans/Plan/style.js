import styled from "styled-components";

const StylePlan = styled.div`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.4rem 3.6rem 3.6rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & > p {
    text-align: center;
    line-height: 2.8rem;
    font-size: 2rem;
    margin-bottom: 3.4rem;
  }

  header {
    font-weight: 700;
    color: var(--color-dark-blue);
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin-top: 1rem;
  }

  li {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`;

export default StylePlan;
