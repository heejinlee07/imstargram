import styled from 'styled-components';
import { buttonSkyBlue, bodyBgWhite } from '../../styles/variables';

export const ButtonUi = styled.div`
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 100}%;
  background-color: ${(props) => props.bgColor || buttonSkyBlue};
  color: ${(props) => props.color || bodyBgWhite};
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.padding || 5}px;
  margin: ${(props) => props.margin || 0}px;
  border-radius: ${(props) => props.borderRadius || 4}px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;
