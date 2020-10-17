import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  & .leaflet-container {
    z-index: 5;
  }

  & a.create-orphanage {
    position: absolute;
    bottom: 40px;
    right: 40px;

    z-index: 10;

    background: #15c3d6;
    border-radius: 20px;
    height: 64px;
    width: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;

    &:hover {
      background: #17d6eb;
    }
  }
`;

export const Aside = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 42px;
    margin-top: 80px;
  }

  & p {
    font-weight: 600;

    font-size: 18px;
    line-height: 28px;
    margin-top: 24px;
  }

  & footer {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    font-size: 18px;
    line-height: 28px;
    color: #ffffff;

    & strong {
      font-weight: 800;
    }

    & span {
      font-weight: 600;
    }
  }
`;
