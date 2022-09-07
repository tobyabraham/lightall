import React from 'react';
import '../styles/MagicCard.css';
import Slider from 'react-slick';
import LeftArrow from '../assets/svg/left-arrow.svg';
import RightArrow from '../assets/svg/right-arrow.svg';
import {projects} from '../assets/data/projects'

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
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
      {projects.map((projects) => (
      <div key={projects.index} className='mflex'>
        <div className='mcard hov' style={{backgroundImage: `url(${projects.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
          <p>{projects.pname}</p>
        </div>
      </div>
      ))}
    </Slider>
  );
}

export default MagicCard;
