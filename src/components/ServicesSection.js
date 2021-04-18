import React from 'react';
import servicesimg from '../img/servicesimg.png';

//IMPORT ICONS
import clock from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';


const ServicesSection = () => {
  return(
    <div className="services">
      <div className="description">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
        <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="clock icon"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphgram} alt="clock icon"/>
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="clock icon"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={servicesimg} alt="connected laptop"/>
      </div>
    </div>
  )
}

export default ServicesSection;