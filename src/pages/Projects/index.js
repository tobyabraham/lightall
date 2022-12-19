import React from 'react';
import '../../styles/Project.css';
import MagicCard from '../../components/MagicCard';

function index() {
  return (
    <div
    name="project"
     className='project-wrapper'>
        <div className='project-title'>
            <h1>Projects</h1>
        </div>
        <div className='project-carousel'>
            <div className='card-container'>
                <MagicCard />
            </div> 
        </div>
    </div>
  )
}

export default index