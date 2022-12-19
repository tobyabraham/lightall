import React from 'react';
import '../../styles/About-us.css';
import featimg from '../../assets/images/AboutFeat.jpeg';
import bulb from '../../assets/images/bulb.png';
import globeabt from '../../assets/images/globeabt.png';

function index() {
  return (
    <div
    name="about" 
    className='aboutus-wrapper'>
      <section className='box left'>
        <h1>About Lightall</h1>
        <p>Lightall provides renewable energy solutions to households and businesses across Africa including the 600 million Africans who currently lack access to electricity. 
          Our goal is to empower Africans in urban centres and rural communities with sustainable and clean energy.</p>
        <p>We are committed to curbing the negative impact of climate change and making Africa habitable for more than 2 billion people who will live and work in Africa by 2050.
</p>
        <article className='article top'>
          <span><img className='abtimg' src={bulb} alt='bulb' /></span>
          <p>
          At Lightall, providing innovative alternative power solutions for your offices and homes is our forte. 
          This we deliver with our experts ensuring your home is made eco-friendly and entirely self-sufficient.
          </p>
        </article>

        <article className='article bottom'>
        <span><img className='abtimg' src={globeabt} alt='globe' /></span>
        <p>
        With over Six Hundred and Eight (680) Installations that cut across homes and offices, our delivery is laced with the interventions of the best of energy experts with the right know-how in the delivery of our services.
        </p>
        </article>
      </section>
      <section className='box right'>
        <img className='featimg' src= {featimg} alt= 'featureImage' />
      </section>
    </div>
  )
}

export default index