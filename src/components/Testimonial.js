import React from 'react';
import '../styles/Testimonial.css';
import Cardcarousel from './Card-carousel';

function Testimonial() {
  return (
    <div className='wrapper-testimonial'>
        <div className='testimonial-header'>
            <h1>Testimonials</h1>
        </div>
        <div className='testimonial-body'>
            <Cardcarousel />            
         </div>
    </div>
  )
}

export default Testimonial