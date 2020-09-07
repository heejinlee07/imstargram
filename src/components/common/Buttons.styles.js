import styled from 'styled-components';
import { bodyBgWhite, fontColorBlack } from '../../styles/variables';

export const ButtonUi = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => props.color || fontColorBlack};
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.padding || 5}px;
  margin: ${(props) => props.margin || 0}px;
  border-radius: ${(props) => props.borderRadius || 4}px;
  background-color: ${(props) => props.bgColor || bodyBgWhite};
  opacity: ${(props) => props.opacity || 1};
`;

export const WhiteButtonUi = styled(ButtonUi)`
  border: 1px solid transparent;
`;
