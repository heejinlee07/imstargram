import styled from 'styled-components';
import { fontColorBlack } from '../variables';

export const SvgStyle = styled.svg`
  fill: ${(props) => props.svgFill || fontColorBlack};
  width: ${(props) => props.svgWidth || 22}px;
  height: ${(props) => props.svgHeight || 22}px;
`;
