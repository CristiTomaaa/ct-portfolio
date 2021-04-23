import React from 'react';
import timelineElements from '../timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '../img/clock.svg';
import SchoolIcon from '../img/clock.svg';

//PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
import styled from 'styled-components';

const Roadmap = () => {
  const workIconStyles = {background: "#a9a9a9 "};
  const schoolIconStyles = {background: "#F54F33"};
  return (
    <div>
      <StyledTitle>Project Roadmap</StyledTitle>
      <VerticalTimeline>
        {
          timelineElements.map(element => {
            const isWorkIcon = element.icon === "work";
            const showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
            return( 
              <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p id="description">{element.description}</p>
                <StyledButton>{showButton && <a className="button" href={element.link}>{element.buttonText}</a>}</StyledButton>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}


const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  font-size: 3rem;
`

const StyledButton = styled.div`
  a {
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: #fff;
    background-color: #F54F33;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`

export default Roadmap;