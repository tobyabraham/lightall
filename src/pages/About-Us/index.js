import React from 'react';
import '../../styles/About-us.css'
import featimg from '../../assets/images/featimage.jpg'

function index() {
  return (
    <div
    name="about" 
    className='aboutus-wrapper'>
      <section className='box left'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <article className='article top'>
          <span></span>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </article>

        <article className='article bottom'>
        <span></span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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