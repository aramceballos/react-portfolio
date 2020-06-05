import React from 'react';
import { MediaCard } from '../Card/index.jsx';

export const LisOfCardsComponents = ({ projects = [] }) => {
  return (
    <>
      {projects.map((project) => (
        <MediaCard key={project._id} {...project} />
      ))}
    </>
  );
};
