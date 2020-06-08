import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ListOfCardsComponent } from '../components/ListOfCards/index.jsx';

const query = gql`
  query {
    projects {
      _id
      title
      description
      technologies
      src
      url
      repository
    }
  }
`;

export const ListOfCards = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;
      const { projects = [] } = data;

      return <ListOfCardsComponent projects={projects} />;
    }}
  </Query>
);
