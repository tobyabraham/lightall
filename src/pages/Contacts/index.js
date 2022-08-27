import React from 'react';
import '../../styles/Contact.css';
import { IoMdLocate } from 'react-icons/io';
//import map from '../../assets/images/map.png'
import Map from '../../components/Googlemap';

function index() {
  return (
    <div className='wrapper-contact'>
        <div className='crow'>
          <div className='contact-details'>
            <div className='contact-title'>
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='contact-body'>
              <p><span></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='contact-map'>
            
          </div>
        </div>
      </div>
  )
}

export default index