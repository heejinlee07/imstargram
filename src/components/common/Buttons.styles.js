import styled from 'styled-components';
import { buttonSkyBlue, bodyBgWhite } from '../../styles/variables';

export const ButtonUi = styled.div`
  width: ${(props) => props.btnWidth || 100}%;
  height: ${(props) => props.btnHeight || 100}%;
  background-color: ${(props) => props.bgColor || buttonSkyBlue};
  color: ${(props) => props.color || bodyBgWhite};
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.BtnPadding || 5}px;
  margin: ${(props) => props.BtnMargin || 0}px;
  border-radius: ${(props) => props.BtnBorderRad || 4}px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;
