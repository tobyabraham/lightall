import React from 'react';
import Heroimage from '../../components/Heroimage';
import Aboutus from '../About-Us/index';
import Service from '../Our-Services/index';
import Client from '../../components/Clients';
import Contact from '../Contacts/index';
import Quote from '../../components/Quote';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';

function index() {
  return (
    <>
    <div><Heroimage /></div>
    <div><Aboutus /></div>
    <div><Service /></div>
    <div><Client /></div>
    <div><Contact /></div>
    <div><Quote /></div>
    <div><Testimonial /></div>
    <div><Footer /></div>
    </>
  )
}

export default index