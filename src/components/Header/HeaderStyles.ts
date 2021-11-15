import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(min-width: 768px) {
    width: 90%;
  }

  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem 7rem;

  button {
    font-size: 1rem;
    color: #ffff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  @media(max-width: 576px) {
    button {
      padding: 0 0.75rem;
    }
  }
`