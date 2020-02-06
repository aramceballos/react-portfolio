import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.header`
  display: flex;
  background-color: #2d2d2d;
  width: 100%;
  height: 4rem;
  /* padding: 1em; */
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 1em;
`;
