import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const NavBar = styled.nav`
  width: 100%;
  background-color: #1d1d1f;
  height: 3.9rem;
  display: flex;
  align-items: center;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: white;
  margin: 0 auto;
`;
