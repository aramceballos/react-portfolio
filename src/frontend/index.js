import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './routes/App';

const client = new ApolloClient({
  uri: 'https://portfolio-graphql-api.now.sh/graphql',
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app'),
);
