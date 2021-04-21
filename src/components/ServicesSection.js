import React from 'react';
import servicesimg from '../img/servicesimg.png';
import styled from 'styled-components';

//IMPORT ICONS
import clock from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//IMPORT REUSABLE STYLES
import {StyledHeader, StyledDescription, StyledHide, SyledImage} from '../styles';

const ServicesSection = () => {
  return(
    <Services>
      <StyledDescription>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock icon"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphgram} alt="clock icon"/>
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="clock icon"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <SyledImage>
        <img src={servicesimg} alt="connected laptop"/>
      </SyledImage>
    </Services>
  )
}

const Services = styled(StyledHeader)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px){
  }
`;

const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
  @media (max-width: 1300px){
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display:flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1300px){
    justify-content: center;
  }
  /* @media (max-width: 1300px){
    display: block;
    align-items: center;
    flex-direction: column;
  } */
`;

export default ServicesSection;