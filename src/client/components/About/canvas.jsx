import React, { useRef, useEffect } from 'react';

// Icons
import JS from '../../assets/img/icons/javascript.svg';
import HTML from '../../assets/img/icons/html.png';
import CSS from '../../assets/img/icons/css.png';
import Bootstrap from '../../assets/img/icons/bootstrap.png';
import ReactJS from '../../assets/img/icons/react.svg';
import NodeJS from '../../assets/img/icons/node.png';
import Mongo from '../../assets/img/icons/mongo.png';
import MySQL from '../../assets/img/icons/mysql.png';

import Icon from './icon';

const Canvas = () => {
  const canvasRef = useRef(null);

  const icon = new Icon(50, 99, 2, -2);
  const icon1 = new Icon(80, 60, 1, 1);
  const icon2 = new Icon(70, 78, -2, 1);
  const icon3 = new Icon(90, 61, -1, -2);
  const icon4 = new Icon(79, 56, -1, 3);
  const icon5 = new Icon(83, 84, -2, -1);
  const icon6 = new Icon(97, 68, -2, -3);
  const icon7 = new Icon(68, 52, -1, 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    // const images = document.querySelectorAll('.techimage');
    const js = document.getElementById('js');
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const bootstrap = document.getElementById('bootstrap');
    const reactjs = document.getElementById('react');
    const nodejs = document.getElementById('mongo');
    const mongo = document.getElementById('nodejs');
    const mysql = document.getElementById('mysql');

    const render = () => {
      icon.moveIcon(context.canvas);
      icon1.moveIcon(context.canvas);
      icon2.moveIcon(context.canvas);
      icon3.moveIcon(context.canvas);
      icon4.moveIcon(context.canvas);
      icon5.moveIcon(context.canvas);
      icon6.moveIcon(context.canvas);
      icon7.moveIcon(context.canvas);

      context.clearRect(-1, 0, context.canvas.width, context.canvas.height);
      icon.draw(context, js);
      icon1.draw(context, html);
      icon2.draw(context, css);
      icon3.draw(context, bootstrap);
      icon4.draw(context, reactjs);
      icon5.draw(context, nodejs);
      icon6.draw(context, mongo);
      icon7.draw(context, mysql);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [icon.draw]);

  return (
    <div className='canvas'>
      <img src={JS} alt='' id='js' className='techimage' />
      <img src={HTML} alt='' id='html' className='techimage' />
      <img src={CSS} alt='' id='css' className='techimage' />
      <img src={Bootstrap} id='bootstrap' className='techimage' />
      <img src={ReactJS} id='react' className='techimage' />
      <img src={Mongo} id='mongo' className='techimage' />
      <img src={NodeJS} id='nodejs' className='techimage' />
      <img src={MySQL} id='mysql' className='techimage' />

      <canvas ref={canvasRef} height='300' width='300' />
    </div>
  );
};

export default Canvas;
