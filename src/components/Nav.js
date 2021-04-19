import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
  return(
    <StyledNav>
      <h1><Link id="logo" to="/">Cristi T.</Link></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="#">Roadmap</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
  padding: 1rem 18.5rem;
  background-color: #FFFFFF;
  box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.13);
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