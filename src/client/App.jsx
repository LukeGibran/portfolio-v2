import React from 'react';
import './scss/main.scss';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Page
import MainPage from './MainPage';

// Project Pages
import Dulang from './components/Projects/dulang';
import Holistic from './components/Projects/holistic';
import SDM from './components/Projects/sdm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/project/holistic' component={Holistic} />
        <Route exact path='/project/dulang' component={Dulang} />
        <Route exact path='/project/sdm' component={SDM} />
      </Switch>
    </Router>
  );
};

export default App;
