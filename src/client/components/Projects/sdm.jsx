import React, { useState } from 'react';

// Images
import img1 from '../../assets/img/sdm/1.jpg';
import img2 from '../../assets/img/sdm/2.jpg';

const SDM = ({ history }) => {
  const [project, setProject] = useState({
    title: 'SDM Library System',
    description:
      'This is a project I developed for a Library at my recent workplace. In this system they can track the number of books they have, they can easily search for a book along with its information, they can track who borrowed the book and when will it be returned. This system can also serve as a research place for any researcher.',
    languages: ['HTML', 'CSS', 'Javascript', 'PHP', 'Bootstrap', 'Laravel'],
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

export default SDM;
