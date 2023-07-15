import { styled } from 'styled-components'
export const DefaultTheme = {
  white: '#FFFFFF',
  black: '#000',
  yellow: '#ffff00',
  colorsbackground: 'linear-gradient(90deg, #ffa450, #ffed89)',
}

export const ImgIcons = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 4rem;
  margin-top: 5rem;
  font-weight: bold;
`
export const Titleh2 = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-right: 18.625rem;
  margin-top: 3rem;
`
export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 2.125rem;

  input {
    border: none;
    border-radius: 3px;
    padding: 0.625rem;
    height: 3rem;
    width: 28.125rem;
    @media (max-width: 600px) {
      width: 400px;
      margin-left: 20px;
    }
  }
  button {
    background: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin-left: 0.188rem;
    height: 1.8rem;
    width: 1.875rem;
  }
`
export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 28.125rem;
  margin-top: 2.5rem;
  margin-left: 27.5rem;
  margin-bottom: 3.125rem;
  text-align: center;

  @media (max-width: 600px) {
    margin-left: 0;
    width: auto;
  }

  table {
    width: 100%;
    color: ${(props) => props.theme.black};
  }
  th {
    font-weight: normal;
  }
  td {
    padding: 0.625rem;
    font-weight: bold;
  }
`
