import React from 'react';
import styled from 'styled-components';
import { ListOfCards } from '../containers/ListOfCards.jsx';

const Section = styled.section`
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  box-shadow: 0px 0px 7px 1px #adadad;
  background-color: #f5f5f5;
`;

export const Projects = () => {
  return (
    <main>
      <Section>
        <ListOfCards />
      </Section>
    </main>
  );
};
