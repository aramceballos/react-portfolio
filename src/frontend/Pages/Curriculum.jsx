import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100vw;
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
`;

export const Curriculum = () => (
  <Container>
    <Image
      src='https://res.cloudinary.com/dh5iufklf/image/upload/v1592981791/Desarrollador_Frontend_nnkjpx.png'
      alt='curriculum'
    />
  </Container>
);
