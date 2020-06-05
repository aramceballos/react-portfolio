import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url('https://res.cloudinary.com/dh5iufklf/image/upload/v1591223199/assets/Cover_m0ilqu.jpg');
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
