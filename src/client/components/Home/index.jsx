import React from 'react';

const index = () => {
  return (
    <div className='section home' id='home'>
      <div className='header'>
        <div className='header-left'>
          <h1 className='my__name'>Liuk Jhivran Tulawie</h1>
        </div>
        <div className='header-right'>
          <h3>Welcome!</h3>
          <button className='btn btn-primary download'>Resume</button>
        </div>
      </div>
      <div className='content'>
        <h1 className='job'>
          Web Developer <span>/</span>
        </h1>
        <h1 className='job'>Programmer</h1>
        <h2 className='job__description'>
          I create <span className='websites'>Websites</span> . I create{' '}
          <span className='web_apps'>Web Apps</span>
        </h2>

        <hr />
      </div>
    </div>
  );
};

export default index;
