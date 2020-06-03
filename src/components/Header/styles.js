import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';

export const HeadBar = styled.header`
  width: 100vw;
  position: sticky;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4e4e4e;
  box-shadow: 0px 0px 7px 1px black;
  top: 0;
  left: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 62px;
`;

export const H1 = styled.h1`
  color: white;
  margin: 0 15px;
  font-size: 33px;
  font-weight: 100;
`;

export const NavLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 15px;
  height: 100%;

  &[aria-current] {
    border-bottom: 1px solid white;
  }
`;
