import React from 'react';
import '../styles/Proservices.css';
import analysisEne from '../assets/images/slide.png';


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
                <h2>Our unique service offerings and project delivery approach  </h2>
                <p>We deliver high quality and cost-effective renewable energy solutions to our clients through our bespoke service offerings aimed at:</p>
                <div className='delmeth'>
                    <div className='servicebcontent'><img src={analysisEne} alt="flowchart" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default proServices;