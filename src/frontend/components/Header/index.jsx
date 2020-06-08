import React from 'react';
import { Link } from 'react-router-dom';
import { HeadBar, Nav, H1, NavLink } from './styles';

export const Header = () => {
  return (
    <HeadBar>
      <section>
        <Link to='/'>
          <H1>Aram Ceballos</H1>
        </Link>
      </section>
      <section>
        <Nav>
          <NavLink to='/projects'>
            <span>Projects</span>
          </NavLink>
          <NavLink to='/certificates'>
            <span>Certificates</span>
          </NavLink>
          <NavLink to='/about'>
            <span>About Me</span>
          </NavLink>
        </Nav>
      </section>
    </HeadBar>
  );
};
