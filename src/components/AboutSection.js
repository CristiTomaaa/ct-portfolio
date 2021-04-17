import React from 'react';
import aboutimg from '../img/aboutimg.png';

const AboutSection = () => {
  return(
    <div>
      <div className="desctiption">
        <div className="title">
          <div className="hide">
            <h2>Make your <span>ideas</span></h2>
          </div>
          <div className="hide">
            <h2>become reality.</h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum .</p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img src={aboutimg} alt="red circle with brackets"/>
      </div>
    </div>
  )
}

export default AboutSection;