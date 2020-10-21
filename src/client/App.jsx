import React from 'react';
import './scss/main.scss';

// Components
import About from './components/About/index';
import Home from './components/Home/index';
import Contact from './components/Contact/index';
import Project from './components/Projects/index';

// Background
import Building from './components/buildings';

// Footer
import Footer from './components/footer';
// Layouts
import Navbar from './layouts/Navs/Navbar';

const App = () => {
  return (
    <div className='app'>
      <div className='main'>
        <Navbar />
        <Home />
        <Project />
        <Building />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
