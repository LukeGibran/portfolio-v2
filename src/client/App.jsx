import React, { lazy, Suspense, useEffect } from 'react';
import './scss/main.scss';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Page
const MainPage = lazy(() => import('./MainPage'));
// import MainPage from './MainPage';

// Project Pages
const Dulang = lazy(() => import('./components/Projects/dulang'));
const Holistic = lazy(() => import('./components/Projects/holistic'));
const SDM = lazy(() => import('./components/Projects/sdm'));

// 404 Error  Page
import NotFound from './components/Pages/NotFound';

import LoadingPage from './components/Pages/LoadingPage';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import ReactGA from 'react-ga'

const App = () => {
  useEffect(() => {
    AOS.init();
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/project/holistic' component={Holistic} />
          <Route exact path='/project/dulang' component={Dulang} />
          <Route exact path='/project/sdm' component={SDM} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
