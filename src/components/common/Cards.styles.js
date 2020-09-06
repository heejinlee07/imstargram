import styled from 'styled-components';
import { bodyBgWhite, borderGrey } from '../../styles/variables';

export const CardUi = styled.div`
  width: ${(props) => props.width || 614}px;
  height: ${(props) => props.height || 100}px;
  background-color: ${(props) => props.bgColor || bodyBgWhite};
  color: ${(props) => props.color};
  text-decoration: none;
  text-align: left;
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  padding-left: ${(props) => props.paddingLeft}px;
  padding-right: ${(props) => props.paddingRight}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRigth}px;
  border-radius: ${(props) => props.borderRadius || 4}px;
  border: ${(props) => props.borderWeight || 1}px solid
    ${(props) => props.borderColor || borderGrey};
  ${(props) => (props.centerAlign ? 'margin: 0 auto; width: 80%' : '')}
`;
