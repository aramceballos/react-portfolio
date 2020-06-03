import React from 'react';
import { Link } from 'react-router-dom';

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

export const Projects = () => {
  return (
    <main>
      <section>
        {projects.map(({ id, title, description }) => (
          <>
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>
                <img src='' alt='project-image' />
              </div>
            </div>
          </>
        ))}
      </section>
    </main>
  );
};
