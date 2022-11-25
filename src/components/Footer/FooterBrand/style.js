import styled from "styled-components";

const StyleFooterBrand = styled.section`
  padding: 7.2rem 0 5rem;
  border-bottom: 1px solid var(--color-darkish-gray);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    color: var(--color-white);
    font-weight: 500;
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;

    p {
      max-width: 468px;
    }
  }
`;

export default StyleFooterBrand;
