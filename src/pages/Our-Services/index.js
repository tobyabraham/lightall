import React from 'react';
import '../../styles/Service.css';
import installation from '../../assets/images/easy-installation.png';
import growth from '../../assets/images/growth.png';
import assembly from '../../assets/images/assembly-point.png';
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
            <p>Energy Optimization Delivery</p>
          </div>
          <div className='flip-box-back'>
          <h1>Energy Optimization Delivery</h1>
          <p>Leveraging our in-depth technical wherewithal, we provide comprehensive load analysis and modeling in your offices & household and help customize solution design for better energy optimization whilst saving cost.</p>
          </div>
          </div>
        </div>
        <div className='service-box flip-box'>
        <div className='flip-box-inner'>
          <div className='flip-box-front'>
          <div className='service-icon'>
            <img src={installation} alt='growth' />
          </div>
          <p>Site Installation and Management</p>
          </div>
          <div className='flip-box-back'>
          <h1>Site Installation and Management</h1>
          <p>We place particular interest in prioritizing safety, environmental compliance and quality in construction This ensures that Skill Storm Integrated Services unique approach to deployment design ensures client’s energy satisfaction the right way.</p>
          </div>
          </div>
        </div>
        <div className='service-box flip-box'>
        <div className='flip-box-inner'>
          <div className='flip-box-front'>
          <div className='service-icon'>
            <img src={analysis} alt='consulting' />
          </div>
          <p>Operations and Maintenance</p>
          </div>
          <div className='flip-box-back'>
            <h1>Operations and Maintenance</h1>
            <p>Reliable energy efficiency and delivery does not end at installation. At Skill Storm, we support your business and household energy demand for long term, utilizing precision monitoring, data analysis and offering end to end support and after sales services to maintain optimal energy usage.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index