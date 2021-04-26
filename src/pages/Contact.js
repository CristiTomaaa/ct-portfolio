import React from 'react';
import ContactSection from '../components/ContactSection';

// PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
import styled from 'styled-components';

import git from '../img/git.png';
import fb from '../img/fb.png';
import linkedin from '../img/linkedin.png';


const Contact = () => {
  return(
    <StyledContact  variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <SocialMedia>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>Get in touch !</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <SocialLinks variants={titleAnimation}>
              <img src={fb} alt="fabook logo"/><a href="https://www.facebook.com/cristi.toma">Facebook</a>
            </SocialLinks>
            <SocialLinks variants={titleAnimation}>
              <img src={linkedin} alt="linkedin logo"/><a href="https://www.linkedin.com/in/cristi-toma-b5791217a/">LinkedIn</a>
            </SocialLinks>
            <SocialLinks variants={titleAnimation}>
                <img src={git} alt="gihub logo"/><a href="https://github.com/CristiTomaaa">GitHub</a>
            </SocialLinks>
          </Hide>
        </div>
      </SocialMedia>
      <ContactForm>
        <ContactSection />
      </ContactForm>
    </StyledContact>
  )
}

const SocialMedia = styled.div`
  display: block;
  padding: 0rem 3rem;
  min-width: 50vh;
  h2 {
    color: #F54F33;
  }
  @media (max-width: 1300px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`

const ContactForm = styled.div`
  display: block;
  padding-top: 0;
  margin: 0rem 5rem;
  min-width: 50vh;
  @media (max-width: 1300px){
    min-width: 40vh;
  }
`

const StyledContact = styled(motion.div)`
  justify-content: center;
  align-items: center;
  padding: 5rem 10rem;
  color: black;
  min-height: 90vh;
  display: flex;
  @media (max-width: 1300px){
    display: flex;
    flex-direction: column;
  }
  overflow-x: hidden;

`

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`

const Hide = styled.div`
  overflow: hidden;
`

const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  img {
    margin: 2rem;
    max-width: 40px;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    color: #000;
  }
`

export default Contact;