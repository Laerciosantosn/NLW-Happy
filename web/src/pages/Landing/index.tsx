import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Header, Main, Footer } from './styles';

import logoImg from '../../assets/images/Logo.svg';
import TitleSvg from '../../assets/images/Title.svg';

const Landing: React.FC = () => {
  return (
    <Container id="landing-page">
      <div className="content-wrapper">
        <Header>
          <img src={logoImg} alt="Logo happy" />

          <div className="location">
            <strong>São Paulo</strong>
            <span>São Paulo</span>
          </div>
        </Header>

        <Main>
          <img src={TitleSvg} alt="Title Leve Felicidade para o Mundo" />
        </Main>

        <Footer>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} />
          </Link>
        </Footer>
      </div>
    </Container>
  );
};

export default Landing;
