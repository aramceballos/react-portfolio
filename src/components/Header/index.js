import React from 'react';
import { Section, Link } from './styles';

export const Header = () => (
  <Section>
    <Link to='/'>Aram Ceballos</Link>
    <Link style={{ float: 'right' }} to='/certificates'>
      Certificates
    </Link>
    <Link to='/about'>About Me</Link>
  </Section>
);
