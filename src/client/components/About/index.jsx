import React from 'react';

// Icons
import JS from '../../assets/img/icons/javascript.svg';
import HTML from '../../assets/img/icons/html.png';
import CSS from '../../assets/img/icons/css.png';
import Bootstrap from '../../assets/img/icons/bootstrap.png';
import ReactJS from '../../assets/img/icons/react.svg';
import NodeJS from '../../assets/img/icons/node.png';
import Mongo from '../../assets/img/icons/mongo.png';
import MySQL from '../../assets/img/icons/mysql.png';

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
          <h1>Heyy! I'm Liuk!</h1>
          <br />
          <p>Your above average web developer </p>
          <p>
            who loves to create <span>amazing</span> , <span>responsive</span>
          </p>
          <p>
            & <span> efficient</span> websites or web apps
          </p>
          <br />
          <p>
            I mostly use <span>Javascript</span>
          </p>
          <p>I love to use Mongo DB, Express JS </p>
          <p id='last'>
            React JS & Nodejs a.k.a <span>MERN</span> Stack!{' '}
          </p>
          <hr />
        </div>

        <div className='skills'>
          <img src={JS} alt='' className='icon' />
          <img src={HTML} alt='' className='icon' />
          <img src={CSS} alt='' className='icon' />
          <img src={Bootstrap} alt='' className='icon' />
          <img src={ReactJS} alt='' className='icon' />
          <img src={NodeJS} alt='' className='icon' />
          <img src={Mongo} alt='' className='icon' />
          <img src={MySQL} alt='' className='icon' />
        </div>
      </div>
    </div>
  );
};

export default index;
