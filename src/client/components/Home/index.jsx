import React from 'react';

import Earth from './earth';

const index = () => {
  return (
    <div className='section home' id='home'>
      <div className='header'>
        <div className='header-left'>
          <h1 className='my__name'>Liuk Jhivran Tulawie</h1>
        </div>
        <div className='header-right'>
          <h3>Welcome!</h3>
          <a
            href='https://drive.google.com/file/d/19U_zGpjUL6ZUTKiyRayN2F6_d5cuHKCY/view?usp=sharing'
            download
            target='_blank'
            className='btn btn-primary download'
          >
            Resume
          </a>
        </div>
      </div>
      <div className='content'>
        <div className='right'>
          <h1 className='job'>
            Web Developer <span>/</span>
          </h1>
          <h1 className='job'>Programmer</h1>
          <h2 className='job__description'>
            I create <span className='websites'>Websites</span> . I create{' '}
            <span className='web_apps'>Web Apps</span>
          </h2>
        </div>
        <div className='left'>
          <Earth />
        </div>

        <hr />
      </div>
    </div>
  );
};

export default index;
