import React from 'react';
import styled from 'styled-components';
import {StyledHeader} from '../styles';

const FAQSection = () => {
  return(
    <FAQ>
      <h2>Questions <span>FAQ</span></h2>
      <div className="question">
        <h4>How do I start ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do I start ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do I start ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How do I start ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, assumenda?</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FAQ>
  )
}

const FAQ = styled(StyledHeader)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    marging: 2rem 0rem;
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