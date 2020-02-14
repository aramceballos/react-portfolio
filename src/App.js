import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/GlobalStyles';
import { Router } from '@reach/router';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);
