import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/Home.jsx';
import { Projects } from '../Pages/Projects.jsx';
import { NotFound } from '../Pages/NotFound.jsx';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../components/NavBar/index.jsx';
import { Header } from '../components/Header/index.jsx';

export default () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
