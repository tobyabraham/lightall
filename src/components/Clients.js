import React from 'react';
import '../styles/Client.css';
import Slider from 'react-slick';
import logocomp from '../assets/images/Logo-Design1.webp'

function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <div style={{
      }}>
        <ul className='bottom-client'> {dots} </ul>
      </div>
    )
  };
  return (
    <div className='wrapper-clients'>
        <div className='top-client'>
            <h1>Meet Our Clients</h1>
        </div>
        <div className='middle-client'>
          <Slider {...settings} className='client-logo-cont'>
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
          <div className='client-logo'>
          <img src={logocomp} alt='logo' />
          </div>
          </Slider>
          </div>
          {/* <div className='bottom-client'>
          </div> */}
    </div>
  )
}

export default Clients