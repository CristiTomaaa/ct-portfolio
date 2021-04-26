import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//IMPORT IMAGES
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';

//PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
const Portfolio = () => {
  return(
    <Work variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <Project>
        <h2>AddFlight.com</h2>
        <div className="line"></div>
        <Link to="/portfolio/addflight">
          <img src={athlete} alt="Project Overview image"/>
        </Link>
      </Project>
      {/* <Project>
        <h2>Project 2</h2>
        <div className="line"></div>
        <Link to="/portfolio/good-times">
          <img src={theracer} alt="Project Overview image"/>
        </Link>
      </Project> */}
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 1rem;
  }
  @media (max-width: 1300px){
    padding: 2rem 0rem;
  }
`
const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.35rem;
    background: #F54F33;
    margin-bottom: 3rem;
    @media (max-width: 1300px){
      margin: 0rem 1rem 1rem 1rem;
    }
  }
  img {
    width: 100%;
    height: 65vh;
    object-fit: cover;
  @media (max-width: 1300px){
    /* padding: 1rem 0rem; */
    object-fit: contain;
    margin-top: -10rem;
    margin-bottom: -18rem;
  }
  }
  @media (max-width: 1300px){
    h2 {
      display: flex;
      justify-content: center;
    }
  }
`

export default Portfolio;