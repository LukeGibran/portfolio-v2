import React from 'react';

import Earth from './earth';

const index = ({ isClicked, updateClick }) => {
  return (
    <div className='section home' id='home'>
      <div className='header'>
        <div className='header-left'>
          <h1 className='my__name'>Liuk Jhivran Tulawie</h1>
        </div>
        <div className='header-right'>
          <h3>Welcome!</h3>
          <a
            href='https://drive.google.com/file/d/1435CpI8D_ZAnrtGQ1yTVI4-OtAZfVmcO/view?usp=sharing'
            download
            target='_blank'
            className='btn btn-primary download'
          >
            Resume
          </a>
        </div>

        <div
          className={`menu-btn ${isClicked ? 'open' : ''}`}
          onClick={() => updateClick()}
        >
          <div className='menu-btn__lines'></div>
        </div>
      </div>
      <div className='content'>
        <div className='left'>
          <h1 className='job' data-aos='fade-up'>
            Web Developer <span>/</span>
          </h1>
          <h1 className='job' data-aos='fade-up' data-aos-delay='100'>
            Programmer
          </h1>
          <h2
            className='job__description'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            I create <span className='websites'>Websites</span> . I create{' '}
            <span className='web_apps'>Web Apps</span>
          </h2>
        </div>
        <div className='right'>
          <Earth />
        </div>

        <hr />
      </div>
    </div>
  );
};

export default index;
