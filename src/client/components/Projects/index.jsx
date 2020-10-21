import React from 'react';

const index = () => {
  return (
    <div className='section projects' id='projects'>
      <div className='header'>
        <div className='title--bg bg__text'>PROJECTS</div>
        <div className='title--fg fg__text'>Simple, efficient projects</div>
      </div>

      <div id='spacer'></div>

      <div className='thumbnails'>
        <a href='#' className='thumbnail__links'>
          <div
            className='thumbnail Dulang'
            data-img='Dulang Ordering System'
          ></div>
        </a>
        <a href='#' className='thumbnail__links'>
          <div
            className='thumbnail Holistic'
            data-img='Holisticare Website'
          ></div>
        </a>
        <a href='#' className='thumbnail__links'>
          <div className='thumbnail SDM' data-img='SDM Library System'></div>
        </a>
      </div>
    </div>
  );
};

export default index;
