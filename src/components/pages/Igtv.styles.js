import styled from 'styled-components';
import { buttonSkyBlue } from '../../styles/variables';

export const IgtvWrap = styled.div`
  width: 935px;
  margin: 0 auto;
  padding: 30 20 0;
  text-align: center;
  h3 {
    display: inline-block;  
    margin: 30px 0 24px;
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
