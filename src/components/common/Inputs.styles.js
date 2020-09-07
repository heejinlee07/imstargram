import styled from 'styled-components';
import { bodyBgWhite, nonSelectGrey, borderGrey } from '../../styles/variables';

export const InputUi = styled.input`
  width: ${(props) => props.width || 215}px;
  height: ${(props) => props.height || 28}px;
  background-color: ${(props) => props.bgColor || bodyBgWhite};
  color: ${(props) => props.color};
  text-decoration: none;
  font-size: ${(props) => props.fontSize || 16}px;
  padding: ${(props) => props.padding || '3px 10px 3px 26px'};
  margin: ${(props) => props.margin || '3px 3px 3px 3px'};
  border-radius: ${(props) => props.borderRadius || 3}px;
  border: solid 1px ${borderGrey};
  line-height: 18px;

  &::placeholder {
    color: ${(props) => props.placeholderColor || nonSelectGrey};
    text-align: ${(props) => props.textAlign || 'center'};
    font-size: 13px;
    font-weight: 300;
  }
  &:hover {
    cursor: auto;
  }
`;
