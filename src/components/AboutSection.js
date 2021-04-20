import React from 'react';
import aboutimg from '../img/aboutimg.png';
//FRAMER MOTION
import {motion} from 'framer-motion';

//ADDING THE STYLES
import styled from 'styled-components';
import {StyledHeader, StyledDescription, StyledHide, SyledImage} from '../styles';

const AboutSection = () => {
  return(
    <StyledHeader>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2>Make your <span>ideas</span></motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>become reality.</motion.h2>
          </StyledHide>
        </motion.div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum .</p>
        <button>Contact</button>
      </StyledDescription>
      <SyledImage>
        <img src={aboutimg} alt="red circle with brackets"/>
      </SyledImage>
    </StyledHeader>
  )
}

//STYLING COMPONENTS


export default AboutSection;