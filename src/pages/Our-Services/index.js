import React from 'react';
import '../../styles/Service.css';
import installation from '../../assets/images/easy-installation.png';
import growth from '../../assets/images/growth.png';
import assembly from '../../assets/images/assembly-point.png';
import analysis from '../../assets/images/analysis.png';

function index() {
  return (
    <div className='service-wrapper service-box'>
      <div className='service-title'>
        <h1>Our Services</h1>
      </div>
      <div className='service-row'>
        <div className='service-box'>
          <div className='service-icon'>
            <img src={assembly} alt='assembly' />
          </div>
          <p>Solar PV Module Assembling</p>
        </div>
        <div className='service-box'>
          <div className='service-icon'>
            <img src={installation} alt='installation' />
          </div>
          <p>Solar PV Design and Installation Services</p>
        </div>
        <div className='service-box'>
          <div className='service-icon'>
            <img src={growth} alt='growth' />
          </div>
          <p>Solar Component Sales</p>
        </div>
        <div className='service-box'>
          <div className='service-icon'>
            <img src={analysis} alt='consulting' />
          </div>
          <p>General Consulting</p>
        </div>
      </div>
    </div>
  )
}

export default index