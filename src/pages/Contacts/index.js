import React from 'react';
import '../../styles/Contact.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

function index() {
  return (
    <div
    name="contact"  
    className='wrapper-contact'>
        <div className='crow'>
          <div className='contact-details'>
            <div className='contact-title'>
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='contact-body'>
              <p><span><FaMapMarkerAlt /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span><FaPhoneAlt /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span><FaEnvelopeSquare /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='contact-map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.6855595254785!2d3.3345859790129833!3d6.600717138262638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91866b62e08f%3A0xbbd5b1b2852392a3!2sGems%20Consulting%20Company%20Limited!5e0!3m2!1sen!2sng!4v1661724641735!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            loading="lazy" 
            title="test"
            />
          </div>
        </div>
      </div>
  )
}

export default index