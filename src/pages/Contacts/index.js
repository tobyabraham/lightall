import React from 'react';
import '../../styles/Contact.css';
import { FaRegMap } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

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
              <div><span className='cnt-icn'><FaRegMap size={30} style = {{ color: "#050B18" }} /></span><p>99 Address street, Ikeja, lagos, Nigeria.</p></div>
              <div><span className='cnt-icn'><MdPhoneInTalk size={30} style = {{ color: "#050B18" }} /></span><p><a href="tel:+2349098542959">+234 909 854 2959</a></p></div>
              <div><span className='cnt-icn'><HiOutlineMail size={30} style = {{ color: "#050B18" }} /></span><p><a href="mailto:lightall@lightall.com">lightall@lightall</a></p></div>
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

