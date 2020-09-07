import styled from 'styled-components';
import { bodyBgWhite, borderGrey } from '../../styles/variables';

export const CardUi = styled.div`
  width: ${(props) => props.width || 100}%;
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.bgColor || bodyBgWhite};
  color: ${(props) => props.color};
  text-decoration: none;
  text-align: left;
  padding: ${(props) => props.padding || '0px 0px 0px 0px'};
  margin: ${(props) => props.margin || '0px 0px 0px 0px'};
  border-radius: ${(props) => props.borderRadius || 4}px;
  border: ${(props) => props.borderWeight || 1}px solid
    ${(props) => props.borderColor || borderGrey};
  ${(props) => (props.centerAlign ? 'margin: 0 auto; width: 80%' : '')}
`;
