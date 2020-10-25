import React, { useState } from 'react';

// Images
import img1 from '../../assets/img/holistic/1.jpg';
import img2 from '../../assets/img/holistic/2.jpg';

const Holistic = ({ history }) => {
  const [project, setProject] = useState({
    title: 'Holisticare Website',
    description:
      'I have developed this project for an office in my recent company that is promoting a healthy lifestyle. In this website you can see what they are about, the products they offer and facts about the plants that can give you benefit in terms of your overall health issues.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'PHP',
      'Laravel',
      'React JS',
      'SCSS',
    ],
    db: ['MySQL'],
  });

  const { title, description, languages, db } = project;
  return (
    <div className='project' id='project'>
      <div className='wrapper'>
        <div className='close-btn' onClick={() => history.goBack()}>
          <div className='close-lines__btn'></div>
        </div>
        <h1 className='title'>{title}</h1>
        <h3 className='subtitle'>Technologies used</h3>
        <div className='pills'>
          {languages.map((language, i) => (
            <div className='pill-wrapper' key={i}>
              <div className='pill'>{language}</div>
            </div>
          ))}
        </div>
        <h3 className='subtitle'>Database</h3>
        <div className='pills'>
          <div className='pill-wrapper'>
            <div className='pill'>{db}</div>
          </div>
        </div>
        <p className='description'>{description}</p>
        <div className='images'>
          <img src={img1} alt='image 1' className='image' />
          <img src={img2} alt='image 2' className='image' />
        </div>
      </div>
    </div>
  );
};

export default Holistic;
