import React, { lazy, Supense, Suspense } from 'react';
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

import LoadingPage from './components/Pages/LoadingPage';

const MainPage = () => {
  return (
    <div className='app'>
      <div className='main'>
        <Navbar />
        <Home />
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
