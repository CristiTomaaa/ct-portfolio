import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #E5E5E5;
}

button{
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #F54F33;
  border-radius: 1.5rem;
  color: black;
  transition: all 0.5s ease;
  &:hover{
    background-color: #F54F33;
    color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size: 3rem;
}

h3 {
  color: black;
}

h4 {
  font-weight: bold;
  color: black;
}

a{
  font-size: 1.1 rem;
}

span {
  font-weight: bold;
  color: #F54F33;
}

p {
  padding: 3rem 0rem;
  color: black;
  font-size: 1.4rem;
  line-height: 150%;
}

`;

export default GlobalStyles;