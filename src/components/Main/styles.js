import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import img from '../../assets/img/Cover.jpg';

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Section = styled.section`
  display: grid;
  grid-column: 2;
  justify-items: center;
  height: 350px;
  margin-top: 80px;
`;

export const Text = styled.p`
  font-size: 30px;
  letter-spacing: 7px;
  color: black;
  text-align: center;
  color: white;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #47cfac;
  display: grid;
  align-items: center;
`;

export const Link = styled(LinkRouter)`
  font-weight: 700;
  font-size: 18px;
`;
