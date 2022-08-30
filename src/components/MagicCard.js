import React from 'react';
import '../styles/MagicCard.css';
import Slider from 'react-slick';
import LeftArrow from '../assets/svg/left-arrow.svg';
import RightArrow from '../assets/svg/right-arrow.svg';

function MagicCard() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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
    ]
  };
  return ( 
    <Slider {...settings} className='mcard_container'>
      <div className='mflex'>
        <div className='mcard'>
          thththth
        </div>
      </div>
      <div className='mflex'>
        <div className='mcard'>
          thththth
        </div>
      </div> 
      <div className='mflex'>
        <div className='mcard'>
          thththth
        </div>
      </div> 
      <div className='mflex'>
        <div className='mcard'>
          thththth
        </div>
      </div> 
      <div className='mflex'>
        <div className='mcard'>
          thththth
        </div>
      </div> 
    </Slider>
  );
}

export default MagicCard;
