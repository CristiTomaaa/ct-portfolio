import React from "react";
import styled from 'styled-components';

const Nav = () => {
  return(
    <StyledNav>
      <h1><a id="logo" href="#">Cristi T.</a></h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #FFFFFF;
  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size:2.5rem;
    font-family: 'Reenie Beanie', Arial;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
`;

export default Nav;