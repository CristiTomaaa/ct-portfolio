import React from 'react';
import ContactSection from '../components/ContactSection';

// PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
import styled from 'styled-components';

const Contact = () => {
  return(
    <StyledContact  variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <SocialMedia>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>CONTACT</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <SocialLinks variants={titleAnimation}>
              <Circle />
                <h2>Facebook</h2>
            </SocialLinks>
            <SocialLinks variants={titleAnimation}>
              <Circle />
                <h2>LinkedIn</h2>
            </SocialLinks>
            <SocialLinks variants={titleAnimation}>
              <Circle />
                <a href="http://github.com">GitHub</a>
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
  padding: 0rem 5rem;
  min-width: 50vh;
`

const ContactForm = styled.div`
  display: block;
  margin: 0rem 5rem;
  min-width: 50vh;
`

const StyledContact = styled(motion.div)`
  justify-content: center;
  align-items: center;
  padding: 10rem 10rem;
  color: black;
  min-height: 90vh;
  display: flex;
`

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`

const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: black;
`

const SocialLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`

export default Contact;