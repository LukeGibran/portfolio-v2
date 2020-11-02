import React from 'react';

const SideNav = ({ isClicked, updateClick }) => {
  const height = '25';
  const width = '25';
  return (
    <div
      className={`sidenav ${isClicked ? 'open' : ''}`}
      id='sidenav'
      onClick={() => updateClick()}
    >
      <div className='header'></div>
      <li className='nav__lists menu'>
        <ul className='list__item' data-list='Home'>
          <a href='#home' className='nav__link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>Home</title>
              <path
                d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
              />
            </svg>
            Home
          </a>
        </ul>
        <ul className='list__item' data-list='Projects'>
          <a href='#projects' className='nav__link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>Projects</title>
              <path
                d='M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328'
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                d='M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z'
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
                d='M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192'
              />
              <path
                fill='#fff'
                d='M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z'
              />
            </svg>
            Projects
          </a>
        </ul>
        <ul className='list__item' data-list='About me'>
          <a href='#about' className='nav__link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>About Me</title>
              <path
                d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z'
                fill='none'
                stroke='currentColor'
                strokeMiterlimit='10'
                strokeWidth='32'
              />
            </svg>
            About Me
          </a>
        </ul>
        <ul className='list__item' data-list='Contact'>
          <a href='#contact' className='nav__link'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>Contact</title>
              <path
                d='M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z'
                fill='none'
                stroke='currentColor'
                strokeMiterlimit='10'
                strokeWidth='32'
              />
            </svg>
            Contact
          </a>
        </ul>
      </li>
      {/* Social Medias */}
      <li className='nav__lists socialmedia'>
        <ul className='list__item' data-list='Linkedin'>
          <a
            href='https://www.linkedin.com/in/liuk-jhivran-tulawie-460190175/'
            className='nav__link'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>My Linkedin</title>
              <path
                fill='#fff'
                d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'
              />
            </svg>
          </a>
        </ul>
        <ul className='list__item' data-list='Github'>
          <a
            href='https://github.com/LukeGibran'
            className='nav__link'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>My Github Repository</title>
              <path
                fill='#fff'
                d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z'
              />
            </svg>
          </a>
        </ul>
        <ul className='list__item' data-list='Instagram'>
          <a
            href='https://www.instagram.com/lukegibran/'
            className='nav__link'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ionicon'
              viewBox='0 0 512 512'
              height={height}
              width={width}
            >
              <title>My Instagram</title>
              <path
                fill='#fff'
                d='M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z'
              />
              <path
                fill='#fff'
                d='M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z'
              />
            </svg>
          </a>
        </ul>
      </li>
    </div>
  );
};

export default SideNav;
