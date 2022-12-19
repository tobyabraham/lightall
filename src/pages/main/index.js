import React from 'react';
import Navbar from '../../components/Navbar';
import Heroimage from '../../components/Heroimage';
import Aboutus from '../About-Us/index';
import Service from '../Our-Services/index';
//import Client from '../../components/Clients';
import Contact from '../Contacts/index';
import Quote from '../../components/Quote';
//import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';
import Project from '../Projects/index';
import SocialLinks from '../../components/SocialLinks';
import BackToTop from '../../components/BackToTop';
import Proservice from '../../components/proServices'

function index() {
  return (
    <>
    <div><Navbar /></div>
    <div name="home" ><Heroimage /></div>
    <div><Aboutus /></div>
    <div><Service /></div>
    <div><Proservice /></div>
    <div><Project /></div>
    <div><Contact /></div>
    <div><Quote /></div>
    <div><Footer /></div>
    <div><BackToTop /></div>
    <div><SocialLinks /></div>
    </>
  )
}

export default index