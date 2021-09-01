import React, { useState } from 'react';

// Maps
import MapChart from './MapChart';

// Alert
import Alert from '../Utilities/Alert';

const index = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: '',
    alertMessage: '',
  });
  const [messageState, setMessageState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { show, type, alertMessage } = showAlert;
  const { name, email, subject, message } = messageState;

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const submit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...messageState }),
    })
      .then(() => {
        setShowAlert({
          show: true,
          type: 'success',
          alertMessage: 'Thank you for your message!',
        });

        setMessageState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch(() =>
        setShowAlert({
          show: true,
          type: 'danger',
          alertMessage: 'Sorry, there was an error in processing your message.',
        })
      );

    setTimeout(() => {
      setShowAlert({ ...showAlert, show: false });
    }, 3500);
  };

  const handleChange = (e) =>
    setMessageState({ ...messageState, [e.target.name]: e.target.value });

  return (
    <div className='section contact' id='contact'>
      <div className='header'>
        <div className='title--bg bg__text'>CONTACTS</div>
        <div className='title--fg fg__text'>Email me, message me, call me</div>
      </div>
      <div id='spacer'></div>
      <div id='contact-space'></div>
      <div className='content'>
        <form
          name='contact'
          className='form'
          onSubmit={submit}
          data-aos='fade-up'
        >
          {show && <Alert message={alertMessage} type={type} />}
          <div className='form-name-email'>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              placeholder='Name'
              className='form-input'
              required
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Email'
              className='form-input'
              onChange={handleChange}
              required
            />
          </div>
          <input
            type='text'
            name='subject'
            id='subject'
            value={subject}
            placeholder='Subject'
            className='form-input'
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            id='message'
            cols='60'
            rows='10'
            value={message}
            placeholder='Message'
            className='form-input'
            onChange={handleChange}
            required
          ></textarea>

          <button className='btn btn-primary'>Submit</button>
        </form>
        <div id='map' data-aos='fade-up' data-aos-delay='100'>
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
