import styled from 'styled-components';
import { bodyBgWhite, borderGrey } from '../../styles/variables';

export const CardUi = styled.div`
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 100}%;
  background-color: ${(props) => props.bgColor || bodyBgWhite};
  color: ${(props) => props.color};
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.padding}px;
  margin: ${(props) => props.margin}px;
  border-radius: ${(props) => props.borderRadius || 4}px;
  border: ${(props) => props.borderWeight || 1}px solid
    ${(props) => props.borderColor || borderGrey};
  ${(props) => (props.centerAlign ? 'margin: 0 auto; width: 80%' : '')}
`;
