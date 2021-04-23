import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledHeader} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';

const FAQSection = () => {
  return(
    <FAQ>
      <h2>Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title='How do I start ?'>
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eius esse ipsum odio nesciunt quam sit doloremque maiores nostrum at?</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How do I start2 ?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How do I start3 ?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  )
}

const FAQ = styled(StyledHeader)`
  display: block;
  span {
    display: block;
    font-size: 3.5rem;
  }
  h2 {
    padding-bottom: 4rem;
    font-weight: lighter;
  }
  h4 {
    font-size: 1.7rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p{
      padding: 1rem 0rem;
    }
  }

`;

export default FAQSection;