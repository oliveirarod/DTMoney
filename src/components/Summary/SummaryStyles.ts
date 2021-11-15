import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  gap: 2rem;
  margin-top: -6.5rem;
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 886px) {
    justify-content: center;

    div {
      width: 80vw;
    }
  }
  
  @media (min-width: 887px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: none;
  }

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: white;
    }
  }
`