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
        <Toggle title='I love your work! How do we start our colaboration ?'>
          <div className="question">
            <div className="answer">
              <p>If you'd like to start a project now or in the near future, or you're just curious to know how we can help, <a href="/contact">get in touch!</a></p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Are you're websites mobile responsive ?">
          <div className="question">
            <div className="answer">
              <p>Over 60% of internet users are now using mobile, it’s quick and easy and every site should work on all devices. </p>
              <p>So all of our sites are fully mobile responsive meaning your users can easily view your site and contact you about your great services on the go.</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Will the website be optimised for google search engine ?">
          <div className="question">
            <div className="answer">
              <p>All of our sites are optimised for speed we compress all images, HTML and enable compression. We also set up Google Analytics so you can see who visits your brand new site. </p>
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