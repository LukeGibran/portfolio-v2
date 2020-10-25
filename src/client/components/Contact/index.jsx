import React from 'react';

// Maps

import MapChart from './MapChart';
const index = () => {
  return (
    <div className='section contact' id='contact'>
      <div className='header'>
        <div className='title--bg bg__text'>CONTACTS</div>
        <div className='title--fg fg__text'>Email me, message me, call me</div>
      </div>
      <div id='spacer'></div>
      <div id='contact-space'></div>
      <div className='content'>
        <form className='form'>
          <div className='form-name-email'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              className='form-input'
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              className='form-input'
            />
          </div>
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
            className='form-input'
          />
          <textarea
            name='message'
            id='message'
            cols='60'
            rows='10'
            placeholder='Message'
            className='form-input'
          ></textarea>

          <button className='btn btn-primary'>Submit</button>
        </form>
        <div id='map'>
          <MapChart />
          <div className='card'>
            <p>Liuk Jhivran Tulawie</p>
            <p>(+63) 995-155-7495</p>
            <p>
              <span>@</span> liukjhivran@gmail.com
            </p>
            <p>
              <span>Skype:</span> live:threallexz_2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
