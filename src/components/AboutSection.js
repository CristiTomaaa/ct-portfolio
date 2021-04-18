import React from 'react';
import aboutimg from '../img/aboutimg.png';

//ADDING THE STYLES
import styled from 'styled-components';
import {StyledHeader, StyledDescription, StyledHide, SyledImage} from '../styles';

const AboutSection = () => {
  return(
    <StyledHeader>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>Make your <span>ideas</span></h2>
          </StyledHide>
          <StyledHide>
            <h2>become reality.</h2>
          </StyledHide>
        </div>
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