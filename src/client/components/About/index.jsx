import React, { useEffect } from 'react';

import Canvas from './canvas';

const index = () => {
  return (
    <div className='section about' id='about'>
      <div className='header'>
        <div className='title--bg bg__text'>ABOUT ME</div>
        <div className='title--fg fg__text'>Your Ideal Web Developer</div>
      </div>
      <div id='spacer'></div>

      <div className='description'>
        <div className='text'>
          <h1 data-aos='flip-up' data-aos-delay='100'>
            Heyy! I'm Liuk!
          </h1>
          <br />
          <p data-aos='fade-up' data-aos-delay='200'>
            Your above average web developer{' '}
          </p>
          <p data-aos='fade-up' data-aos-delay='300'>
            who loves to create <span>amazing</span> , <span>responsive</span>
          </p>
          <p data-aos='fade-up' data-aos-delay='400'>
            & <span> efficient</span> websites or web apps
          </p>
          <br />
          <p data-aos='fade-up' data-aos-delay='500'>
            I mostly use <span>Javascript</span>
          </p>
          <p data-aos='fade-up' data-aos-delay='550'>
            I love to use Mongo DB, Express JS{' '}
          </p>
          <p id='last' data-aos='fade-up' data-aos-delay='600'>
            React JS & Nodejs a.k.a <span>MERN</span> Stack!{' '}
          </p>
          <hr />
        </div>

        {/* <div className='skills'>
          <img src={JS} alt='' className='icon' />
          <img src={HTML} alt='' className='icon' />
          <img src={CSS} alt='' className='icon' />
          <img src={Bootstrap} alt='' className='icon' />
          <img src={ReactJS} alt='' className='icon' />
          <img src={NodeJS} alt='' className='icon' />
          <img src={Mongo} alt='' className='icon' />
          <img src={MySQL} alt='' className='icon' />
        </div> */}

        <Canvas />
      </div>
    </div>
  );
};

export default index;
