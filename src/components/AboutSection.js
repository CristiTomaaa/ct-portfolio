import React from 'react';
import aboutimg from '../img/aboutimg.png';

//ADDING THE STYLES
import styled from 'styled-components';

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

const StyledHeader = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: black;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 1.5rem;
  h2{
    font-weight:lighter;
  }
`;

const SyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`

export default AboutSection;