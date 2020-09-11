import styled from 'styled-components';
import { fontColorBlack } from '../variables';

export const SvgStyle = styled.svg`
  fill: ${(props) => props.fill || fontColorBlack};
  width: ${(props) => props.width || 22}px;
  height: ${(props) => props.height || 22}px;
  margin: ${(props) => props.margin || '0'};
  cursor: pointer;
`;
