import React from 'react';
import styled from 'styled-components';
import MediaCard from '../components/Card/index.jsx';

const projects = [
  {
    id: 1,
    title: 'Petgram',
    description: 'A social network for share pictures of your pets',
    technologies: ['ReactJS', 'GraphQL', 'Reach', 'Router', 'Webpack'],
  },
  {
    id: 2,
    title: 'PlatziVideo',
    description: 'An app for watch your favorite movies',
    technologies: [
      'ReactJS',
      'React Router',
      'Redux',
      'ExpressJS',
      'Jest',
      'Webpack',
      'SASS',
    ],
  },
  {
    id: 3,
    title: 'Portfolio',
    description:
      'My portfolio which i show my projects and a little info about me',
    technologies: ['ReactJS', 'React Router', 'ExpressJS', 'Jest', 'Webpack'],
  },
];

const Section = styled.section`
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const MediaCardContainer = styled.div`
  width: 345px;
  margin: 20px 15px;
`;

export const Projects = () => {
  return (
    <main>
      <Section>
        {projects.map(({ id, title, description }) => (
          <MediaCardContainer key={id}>
            <MediaCard title={title} description={description} />
          </MediaCardContainer>
        ))}
      </Section>
    </main>
  );
};
