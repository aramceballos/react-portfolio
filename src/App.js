import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import { NotFound } from './Pages/NotFound';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';

export default () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
