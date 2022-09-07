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
              <p>A Tradition Of Exceptional Services.</p>
            </div>
            <div className='contact-body'>
              <p><span className='cnt-icn'><FaMapMarkerAlt size={23} style = {{ color: "#050B18" }} /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span className='cnt-icn'><FaPhoneAlt size={23} style = {{ color: "#050B18" }} /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p><span className='cnt-icn'><FaEnvelopeSquare size={23} style = {{ color: "#050B18" }} /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.01207154104!2d3.2934881040693518!3d6.529530613361662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja!5e0!3m2!1sen!2sng!4v1662488835337"
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

