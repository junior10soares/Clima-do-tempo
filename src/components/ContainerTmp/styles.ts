import { styled } from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.white};
  height: 13rem;
  width: fit-content;
  margin-left: 29.375rem;
  margin-top: 0.938rem;
  padding: 1.25rem;
  border-radius: 3px;
  color: ${(props) => props.theme.black};

  @media (max-width: 600px) {
    margin: auto;
    width: auto;
    width: fit-content;
  }

  button {
    display: flex;
    margin-left: 350px;
    cursor: pointer;
    color: orange;
    background: transparent;
    border: none;
  }

  header {
    font-size: 1.563rem;
  }

  div {
    display: flex;
    margin-top: 0.625rem;
    gap: 3.125rem;
    font-size: 3.75rem;
  }

  footer {
    display: flex;
    margin-top: 0.625rem;
    gap: 0.625rem;
    font-size: 0.875rem;
  }
`
