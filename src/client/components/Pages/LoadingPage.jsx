import React from 'react';

// Loader
import Loader from '../Utilities/Loader';

function LoadingPage() {
  return (
    <div className='loading-container' id='loadingpage'>
      <div className='text-glitch-container'>
        <div className='text-glitch' data-text='Loading'>
          Loading
        </div>
      </div>

      <Loader />
    </div>
  );
}

export default LoadingPage;
