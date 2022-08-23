import React from 'react';
import '../styles/Banner.css';
import solarcell from '../assets/images/solar-cell.png';
import migration from '../assets/images/migration.png';
import custservice from '../assets/images/customer-service.png';

function Banner() {
  return (
    <div className='banner-wrapper'>
      <div className='banner-box'>
        <div className='banner-container'>
          <div className='banner-content'>
            <div className='icon-wrapper'>
              <img src={migration} alt='Global' />  
            </div>
            <div className='icon-text'>
              <h3>Global Experience</h3>
              <p>14 years global expertise</p>
            </div>
          </div>
        </div>
        <div className='banner-container'>
          <div className='banner-content'>
            <div className='icon-wrapper'>
              <img src={solarcell} alt='Solar-cell' />  
            </div>
            <div className='icon-text'>
              <h3>Trusted Services</h3>
              <p>We are trusted by our clients.</p>
            </div>
          </div>
        </div>
        <div className='banner-container'>
          <div className='banner-content'>
            <div className='icon-wrapper'>
              <img src={custservice} alt='Customer-service' />  
            </div>
            <div className='icon-text'>
              <h3>24/7 Support</h3>
              <p>(+234) 8002 999 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
