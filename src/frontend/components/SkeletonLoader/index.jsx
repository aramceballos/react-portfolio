import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container } from './styles';

export const SkeletonLoader = () => {
  const times = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {times.map(() => (
        <Container>
          <Skeleton variant='rect' height={160} />
          <Skeleton variant='text' height={50} />
          <Skeleton variant='text' height={30} />
        </Container>
      ))}
    </>
  );
};
