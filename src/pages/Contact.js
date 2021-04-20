import React from 'react';

//PAGE ANIMATIONS
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const Contact = () => {
  return(
    <motion.div  variants={pageAnimation} exit="exit" initial="hidden" animate="show">
      <h1>Contact</h1>
    </motion.div>
  )
}

export default Contact;