import React from 'react';
import servicesimg from '../img/servicesimg.png';
import styled from 'styled-components';

//IMPORT ICONS
import clock from '../img/clock.svg';
import diaphgram from '../img/100.svg';
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
            <p>We craft award-winning responsive websites that look amazing on any device and are proven to convert.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock icon"/>
              <h3>Teamwork</h3>
            </div>
            <p>Our expert web design and development team have years of experience in helping businesses stand out online.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphgram} alt="clock icon"/>
              <h3>Satisfaction</h3>
            </div>
            <p>Before, during and many months after your site is built, we will be here to support you.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="clock icon"/>
              <h3>Affordable</h3>
            </div>
            <p>We believe out sites are reasonably priced after all they are all hand built, easy to use and built to last.</p>
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
    justify-content: center;
  }
`;

const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
  @media (max-width: 1300px){
    justify-content: center;
    margin-left: 4rem;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display:flex;
    align-items: center;
    max-width: 50px;
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