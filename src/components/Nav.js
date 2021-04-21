import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

 
const Nav = () => {
  const {pathname} = useLocation();
  return(
    <StyledNav>
      <h1><Link id="logo" to="/">Cristi T.</Link></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/' ? '50%' : '0%'}} />
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
          <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/portfolio' ? '50%' : '0%'}} />
        </li>
        <li>
          <Link to="#">Roadmap</Link>
          <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/roadmap' ? '50%' : '0%'}} />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/contact' ? '50%' : '0%'}} />
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
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
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
  
  @media (max-width: 1300px){
    flex-direction: column;
    padding: 2rem 0rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`


const Line = styled(motion.div)`
  height: 0.3rem;
  background: #F54F33;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px){
    left: 0%
  }
`
;

export default Nav;