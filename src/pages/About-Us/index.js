import React from 'react';
import '../../styles/About-us.css';
import featimg from '../../assets/images/featimage.jpg';
import bulb from '../../assets/images/bulb.png';
import globeabt from '../../assets/images/globeabt.png';

function index() {
  return (
    <div
    name="about" 
    className='aboutus-wrapper'>
      <section className='box left'>
        <h1>About Lightall</h1>
        <p>Lightall is a full-fledged power engineering service provider primarily into the provision of alternative power supply solutions for various households and businesses across various sectors of the economy.
        <br/>From Trading companies to Service, Manufacturing, and Agro-allied companies (farms), the organization has been responsible for transforming several businesses via great energy solution deployments. 
        <br/>The company is also in the business of deploying solar pump solutions. 
          Incorporated in 2014, the goal of the company remains the delivery of comprehensive, end-to-end alternative power that helps businesses and homes to reduce their annual energy costs, boost energy efficiency whilst improving their carbon footprint. 
        <br/>Reliable energy is becoming truly a competitive advantage. 
          Hence, having the right energy solution that creates un-interrupted power supply for your business and in recent times, your home is at the core of improved human productivity.
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