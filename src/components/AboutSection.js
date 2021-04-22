import React from 'react';
import {Link} from 'react-router-dom';
import aboutimg from '../img/aboutimg.png';
//FRAMER MOTION
import {motion} from 'framer-motion';
import {titleAnimation, fade} from '../animation';

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
        <motion.p variants={fade} >Ensuring that your website is consistent with your brand and connects with your audience is essential.</motion.p>
        <Link to="/contact"><motion.button variants={fade} >Contact</motion.button></Link>
      </StyledDescription>
      <SyledImage>
        <img  src={aboutimg} alt="red circle with brackets"/>
      </SyledImage>
    </StyledHeader>
  )
}

//STYLING COMPONENTS


export default AboutSection;