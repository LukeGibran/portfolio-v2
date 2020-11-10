import React, { useState, lazy, Suspense, useEffect } from 'react';
// Components
import About from './components/About/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';

// import Project from './components/Projects/index';
const Project = lazy(() => import('./components/Projects/index'));

// Background
import Building from './components/buildings';

// Footer
import Footer from './components/footer';

// Layouts
import Navbar from './layouts/Navs/Navbar';
import SideNav from './layouts/Navs/SideNav';

import LoadingPage from './components/Pages/LoadingPage';

const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const updateClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    isClicked
      ? document.body.classList.add('open')
      : document.body.classList.remove('open');
  }, [isClicked]);
  return (
    <div className='app'>
      <SideNav isClicked={isClicked} updateClick={updateClick} />
      <div className='main'>
        <Navbar />
        <Home isClicked={isClicked} updateClick={updateClick} />
        <Suspense fallback={<LoadingPage />}>
          <Project />
        </Suspense>
        <Building />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
