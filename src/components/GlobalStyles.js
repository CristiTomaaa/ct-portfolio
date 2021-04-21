import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background: #E5E5E5; */
  background: #F6F6F6;
  font-family: 'Roboto', Arial;
}

button{
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #F54F33;
  border-radius: 1rem;
  background-color: #F6F6F6;
  color: black;
  transition: all 0.5s ease;
  font-family: 'Roboto', Arial;box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
  font-size: 2rem;
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

//MOBILE AND TABLET RESPONSIVE

html {
  @media (max-width: 1700px){
    font-size: 75%;
  }
}

`;

export default GlobalStyles;