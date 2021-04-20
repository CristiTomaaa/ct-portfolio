import React from 'react';
import aboutimg from '../img/aboutimg.png';
//FRAMER MOTION
import {motion} from 'framer-motion';
import {titleAnimation, fade} from '../animation';
import Wave from './wave';

//ADDING THE STYLES
import styled from 'styled-components';
import {StyledHeader, StyledDescription, StyledHide, SyledImage} from '../styles';

const AboutSection = () => {
  return(
    <StyledHeader>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnimation}>Make your <span>ideas</span></motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>become reality.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum .</motion.p>
        <motion.button variants={fade} >Contact</motion.button>
      </StyledDescription>
      <SyledImage>
        <img  src={aboutimg} alt="red circle with brackets"/>
      </SyledImage>
    </StyledHeader>
  )
}

//STYLING COMPONENTS


export default AboutSection;