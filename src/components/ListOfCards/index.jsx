import React from 'react';
import { MediaCard } from '../Card/index.jsx';

export const ListOfCardsComponent = ({ projects = [] }) => {
  return (
    <>
      {projects.map((project) => (
        <MediaCard key={project._id} {...project} />
      ))}
    </>
  );
};
