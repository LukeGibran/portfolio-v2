import React from 'react';

// Router
import { NavLink } from 'react-router-dom';

const index = () => {
  return (
    <div className='section projects' id='projects'>
      <div className='header'>
        <div className='title--bg bg__text'>PROJECTS</div>
        <div className='title--fg fg__text'>Simple, efficient projects</div>
      </div>

      <div id='spacer'></div>

      <div className='thumbnails'>
        <NavLink to='/project/dulang' className='thumbnail__links'>
          <div
            className='thumbnail Dulang'
            data-img='Dulang Reservation System'
          ></div>
        </NavLink>
        <NavLink to='/project/holistic' className='thumbnail__links'>
          <div
            className='thumbnail Holistic'
            data-img='Holisticare Website'
          ></div>
        </NavLink>
        <NavLink to='/project/sdm' className='thumbnail__links'>
          <div className='thumbnail SDM' data-img='SDM Library System'></div>
        </NavLink>
      </div>
    </div>
  );
};

export default index;
