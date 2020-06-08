import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ListOfCertificatesComponent } from '../components/ListOfCertificates/index.jsx';

const query = gql`
  query {
    certificates {
      _id
      name
      src
    }
  }
`;

export const ListOfCertificates = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;
      const { certificates = [] } = data;

      return <ListOfCertificatesComponent certificates={certificates} />;
    }}
  </Query>
);
