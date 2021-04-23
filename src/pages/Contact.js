import React from 'react';

//PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';
import styled from 'styled-components';

const Contact = () => {
  return(
    <div>
      <h1>test</h1>
    </div>
    // <StyledContact  variants={pageAnimation} exit="exit" initial="hidden" animate="show">
    //   <Title>
    //     <Hide>
    //       <motion.h2 variants={titleAnimation}>CONTACT</motion.h2>
    //     </Hide>
    //   </Title>
    //   <div>
    //     <Hide>
    //       <SocialLinks variants={titleAnimation}>
    //         <Circle />
    //           <h2>Facebook</h2>
    //       </SocialLinks>
    //       <SocialLinks variants={titleAnimation}>
    //         <Circle />
    //           <h2>LinkedIn</h2>
    //       </SocialLinks>
    //       <SocialLinks variants={titleAnimation}>
    //         <Circle />
    //           <a href="http://github.com">GitHub</a>
    //       </SocialLinks>
    //     </Hide>
    //   </div>
    // </StyledContact>
  )
}

// const StyledContact = styled(motion.div)`
//   padding: 10rem 10rem;
//   color: black;
//   min-height: 90vh;
// `

// const Title = styled.div`
//   margin-bottom: 4rem;
//   color: black;
// `

// const Hide = styled.div`
//   overflow: hidden;
// `
// const Circle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: black;
// `

// const SocialLinks = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `

export default Contact;