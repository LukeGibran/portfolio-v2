import React, { useState } from 'react';

// Images
import img1 from '../../assets/img/dulang/1.jpg';
import img2 from '../../assets/img/dulang/2.jpg';

const Dulang = ({ history }) => {
  const [project, setProject] = useState({
    title: 'Dulang Online Reservation System',
    description:
      "This is a project I made for the owner's son of this restaurant here in our city. This system allows their customer to reserve online an order and pick up the day the customer has set. The client was so pleased with the overall design and implementation of the project. \n This project was developed with vanilla Javascript, PHP, HTML & CSS along with Sass",
    languages: ['HTML', 'CSS', 'Javascript', 'PHP', 'SCSS'],
    db: ['MySQL'],
  });

  const { title, description, languages, db } = project;
  return (
    <div className='project' id='project'>
      <div className='wrapper'>
        <div className='close-btn' onClick={() => history.goBack()}>
          <div className='close-lines__btn'></div>
        </div>
        <h1 className='title' data-aos='fade-up'>
          {title}
        </h1>
        <h3 className='subtitle' data-aos='fade-up' data-aos-delay='100'>
          Technologies used:
        </h3>
        <div className='pills' data-aos='fade-up' data-aos-delay='100'>
          {languages.map((language, i) => (
            <div className='pill-wrapper' key={i}>
              <div className='pill'>{language}</div>
            </div>
          ))}
        </div>
        <h3 className='subtitle' data-aos='fade-up' data-aos-delay='200'>
          Database
        </h3>
        <div className='pills' data-aos='fade-up' data-aos-delay='200'>
          <div className='pill-wrapper'>
            <div className='pill'>{db}</div>
          </div>
        </div>
        <p className='description' data-aos='fade-up' data-aos-delay='300'>
          {description}
        </p>
        <div className='images'>
          <img
            src={img1}
            alt='image 1'
            className='image'
            data-aos='fade-up'
            data-aos-delay='300'
          />
          <img
            src={img2}
            alt='image 2'
            className='image'
            data-aos='fade-up'
            data-aos-delay='400'
          />
        </div>
      </div>
    </div>
  );
};

export default Dulang;
