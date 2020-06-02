import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeadBar = styled.header`
  width: 100%;
  height: 140px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const HeaderIcons = styled.section`
  width: 100%;
  height: 50px;
  display: grid;
  background-color: #4e4e4e;
`;

export const IconsContainer = styled.section`
  width: 100px;
  height: auto;
  display: flex;
  justify-items: flex-end;
  justify-content: space-between;
  align-items: center;
  justify-self: end;
  margin-right: 30px;
`;

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90px;
`;

export const LogoContainer = styled.section`
  margin-left: 50px;
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.section`
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  color: black;
  border-bottom: 1px solid black;
`;

export const Logo = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;
