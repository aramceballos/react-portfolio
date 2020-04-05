import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  HeadBar,
  HeaderIcons,
  IconsContainer,
  NavBar,
  LogoContainer,
  ProfileContainer,
  Img,
  LinkStyled,
} from './styles';

import logo from '../../assets/img/Logo-negro.png';

export const Header = () => {
  return (
    <HeadBar>
      <HeaderIcons>
        <IconsContainer>
          <a
            href='https://github.com/armc7'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={30} color={'white'} />
          </a>
          <a
            href='https://www.linkedin.com/in/aram-ceballos-2258b717b/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={30} color={'white'} />
          </a>
        </IconsContainer>
      </HeaderIcons>
      <NavBar>
        <LogoContainer>
          <Link to='/'>
            <Img src={logo} alt='logo' />
          </Link>
        </LogoContainer>
        <ProfileContainer>
          <LinkStyled to='/profile'>About me</LinkStyled>
        </ProfileContainer>
      </NavBar>
    </HeadBar>
  );
};
