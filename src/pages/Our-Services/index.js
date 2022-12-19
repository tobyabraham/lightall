import React from 'react';
import '../../styles/Service.css';
import installation from '../../assets/images/easy-installation.png';
import growth from '../../assets/images/growth.png';
import analysis from '../../assets/images/analysis.png';

function index() {
  return (
    <div
    name="service"  
    className='service-wrapper service-box'>
      <div className='service-title'>
        <h1>What we offer</h1>
      </div>
      <div className='service-row service-row-pad'>
        <div className='service-box flip-box'>
          <div className='flip-box-inner'>
          <div className='flip-box-front'>
            <div className='service-icon'>
              <img src={installation} alt='installation' />
            </div>
            <p>Energy Optimization</p>
          </div>
          <div className='flip-box-back'>
          <h1>Energy Optimization</h1>
          <p>LightAll assesses the energy needs of homes and offices to deliver optimised energy solutions</p>
          </div>
          </div>
        </div>
        <div className='service-box flip-box'>
        <div className='flip-box-inner'>
          <div className='flip-box-front'>
          <div className='service-icon'>
            <img src={growth} alt='growth' />
          </div>
          <p>Project Execution</p>
          </div>
          <div className='flip-box-back'>
          <h1>Project Execution</h1>
          <p>LightAll deploys energy solutions to meet client needs in line with international best practices for safety and quality</p>
          </div>
          </div>
        </div>
        <div className='service-box flip-box'>
        <div className='flip-box-inner'>
          <div className='flip-box-front'>
          <div className='service-icon'>
            <img src={analysis} alt='consulting' />
          </div>
          <p>Facility Management</p>
          </div>
          <div className='flip-box-back'>
            <h1>Facility Management</h1>
            <p>LightAll offers post deployment operations and maintenance support to existing clean energy facilities.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index