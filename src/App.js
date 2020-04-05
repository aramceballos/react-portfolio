import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { GlobalStyles } from './styles/GlobalStyles';

export default () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
