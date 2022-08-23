import React from 'react';
import '../styles/Client.css';
import Clientslider from './clientslider';

function Clients() {
  return (
    <div className='wrapper-clients'>
        <div className='top-client'>
            <h1>Meet Our Clients</h1>
        </div>
        <div className='middle-client'>
          <Clientslider />
        </div>
        <div className='bottom-client'></div>
    </div>
  )
}

export default Clients