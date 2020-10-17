import styled from 'styled-components';

import landing from '../../assets/images/Landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background: url(${landing}) no-repeat 80%;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .location {
    display: flex;
    flex-direction: column;

    & strong {
      font-weight: 800;
    }
  }
`;

export const Main = styled.main`
  & h1 {
    max-width: 394px;
    font-size: 80px;
    font-weight: 800;
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & p {
    width: 320px;
    font-size: 24px;
    line-height: 34px;
  }

  & a {
    width: 80px;
    height: 80px;
    border-radius: 30px;

    background: #ffd666;
    color: #8d734b;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;

    &:hover {
      background: #96feff;
      color: #15c3d6;
    }
  }
`;
