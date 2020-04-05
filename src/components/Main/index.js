import React from 'react';
import { MainWrapper, Section, Text, Button, Link } from './styles';

export const Main = () => {
  return (
    <MainWrapper>
      <Section>
        <Text>
          Hi my name is Aram Ceballos and i am a JavaScript Full Stack
          Developer, you can find more information about me, my skills and
          projects i have worked on by pressing the button down below
        </Text>
        <Button>
          <Link to='/projects'>Projects</Link>
        </Button>
      </Section>
    </MainWrapper>
  );
};
