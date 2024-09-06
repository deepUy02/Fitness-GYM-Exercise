import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RigthArrow from '../../assets/rightArrow.png';


const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((Programs)=>(
          <div className="category">
            {Programs.image}
            <span>{Programs.heading}</span>
            <span>{Programs.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RigthArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
