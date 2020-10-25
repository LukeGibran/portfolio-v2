import React, { useState } from 'react';

const ProjectPage = ({ history, match }) => {
  const [projects, setProjects] = useState({
    dulang: {
      title: 'Dulang Online Reservation System',
      description:
        'This is a project I made of a restaurant here in our city. This system allows their customer to reserve online an order and pick up the day the customer has set. The client was so pleased with the overall design and implementation of the project. \n This project was developed with vanilla Javascript, PHP, HTML & CSS along with Sass',
      languages: ['HTML', 'CSS', 'Javascript', 'PHP', 'SCSS'],
      db: ['MySQL'],
    },
    holistic: {
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
    },
    sdm: {
      title: 'SDM Library System',
      description:
        'This is a project I developed for a Library at my recent workplace. In this system they can track the number of books they have, they can easily search for a book along with its information, they can track who borrowed the book and when will it be returned. This system can also serve as a research place for any researcher.',
      languages: ['HTML', 'CSS', 'Javascript', 'PHP', 'Bootstrap', 'Laravel'],
      db: ['MySQL'],
    },
  });

  const { title, description, languages, db } = projects[match.params.id];
  return (
    <div className='project' id='project'>
      <div className='wrapper'>
        <button className='btn btn-primary' onClick={() => history.goBack()}>
          Back
        </button>
        <h1>{title}</h1>
        <h2>Technologies used</h2>
        {languages.map((language, i) => (
          <div className='pill' key={i}>
            {language}
          </div>
        ))}
        <div className='pill'>{db}</div>
        <p>{description}</p>
        <div className='images'></div>
      </div>
    </div>
  );
};

export default ProjectPage;
