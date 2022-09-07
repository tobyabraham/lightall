import React from 'react';
import '../styles/Proservices.css';
import analysisEne from '../assets/images/analysisEne.png';
import designEne from '../assets/images/Design.png';
import installationEne from '../assets/images/Installation.png';
import assetsEne from '../assets/images/assets.png';
import advisory from '../assets/images/advisory.png';

function proServices() {
  return (
    <div className='wrapper-proservice'>
        <div className='top-proservice'>
            <h1>Professional Service</h1>
            <p></p>
        </div>
        <div className='content-proservice flex-s'>
            <div className='box-proservice'>
                <h2>Why Lightall?</h2>
                <p>Our tailored delivery strategy is aimed that our clients whether it be businesses or household benefit from our interventions in the following areas:</p>
                <div className='box-content'>
                    <ul>
                        <li>Drastically reduce your Power cost.</li>
                        <li>Provides a more predictive and reliable power source.</li>
                        <li>Protects the environment by reducing your carbon footprint.</li>
                        <li>Avoid high cost and increase in grid tariff.</li>
                        <li>Increase your property value.</li>
                        <li>Minimize the degree of maintenance of power assets.</li>
                    </ul> 
                </div>
            </div>
            <div className='box-proservice'>
                <h2>Project Delivery Methodology</h2>
                <div className='delmeth'>
                    <div className='servicebcontent'><span><img src={analysisEne} alt="Analysis" /></span><p>Analysis of Energy Needs</p></div>
                    <div className='servicebcontent'><span><img src={designEne} alt="Design" /></span><p>Design of Energy Solution</p></div>
                    <div className='servicebcontent'><span><img src={installationEne} alt="Installation" /></span><p>Installation of Energy Solution</p></div>
                    <div className='servicebcontent'><span><img src={assetsEne} alt="Asset" /></span><p>Asset Management & Post Sales Support</p></div>
                    <div className='servicebcontent'><span><img src={advisory} alt="Advisory" /></span><p>Advisory</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default proServices;