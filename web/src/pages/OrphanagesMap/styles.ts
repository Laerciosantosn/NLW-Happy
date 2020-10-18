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

  & .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255 0.8);
    border-radius: 20px;
    box-shadow: none;
    text-align: center;
  }

  & .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 16px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      width: 35px;
      height: 35px;
      background: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .map-popup .leaflet-popup-tip-container {
    display: none;
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
