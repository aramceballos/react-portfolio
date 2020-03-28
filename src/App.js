import React from 'react';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Route } from 'react-router';
import { GlobalStyle } from './css/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
};
