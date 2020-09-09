import styled from 'styled-components';
import { buttonSkyBlue } from '../../styles/variables';

export const IgtvWrap = styled.div`
  width: 935px;
  margin: 0 auto;
  padding: 30 20 0;
  text-align: center;
  div {
    width: 62px;
    height: 62px;
    margin: 50px auto 30px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_felix_2x_90d41aa74a11.png/90d41aa74a11.png);
    background-repeat: no-repeat;
    background-size: 180px 141px;
    background-position: -118px 0;
  }
  h3 {
    display: inline-block;  
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 400;
  }
  p {
    font-size: 14px;
    margin-bottom: 30px;
  }

  button {
    width: 94px;
    height: 30px;
    padding: 5px 9px;
    font-size: 14px;
    color: #ffffff;
    background-color: ${buttonSkyBlue};
    border: 1px solid transparent;
    border-radius: 4px;
  }
`;
