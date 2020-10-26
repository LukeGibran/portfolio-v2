import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = ({ history: { goBack } }) => {
  return (
    <div className='notfound' id='notfound'>
      <div className='container-1'>
        <div className='text-glitch-container'>
          <h1 className='text-glitch' data-text='404 Not Found'>
            404 Not Found
          </h1>
        </div>

        <div className='container-2'>
          <h3>
            Woah! You've stumbled upon the legendary 404 Error! Go back before
            it's too late!
          </h3>
          <Link to='/' className='btn btn-primary' onClick={() => goBack()}>
            Take me Home!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
