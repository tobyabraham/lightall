import React from 'react';
import '../styles/Client.css';
import Clientslider from './clientslider';
import logocomp from '../assets/images/Logo-Design1.webp'

function Clients() {
  return (
    <div className='wrapper-clients'>
        <div className='top-client'>
            <h1>Meet Our Clients</h1>
        </div>
        <div className='middle-client'>
          <Clientslider />
          <div className='client-logo-cont'>
          <div className='client-logo'>
          <img src={logocomp} alt='logo' />
          </div>
          <div className='client-logo'>
          <img src={logocomp} alt='logo' />
          </div>
          <div className='client-logo'>
          <img src={logocomp} alt='logo' />
          </div>
          <div className='client-logo'>
          <img src={logocomp} alt='logo' />
          </div>
          </div>
        </div>
        <div className='bottom-client'></div>
    </div>
  )
}

export default Clients