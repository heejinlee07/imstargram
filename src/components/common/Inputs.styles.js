import styled from 'styled-components';
import { bodyBgWhite, nonSelectGrey, borderGrey } from '../../styles/variables';

export const InputUi = styled.input`
  width: ${(props) => props.InputWidth || 215}px;
  height: ${(props) => props.InputHeight || 28}px;
  background-color: ${(props) => props.InputColor || bodyBgWhite};
  color: ${(props) => props.color || bodyBgWhite};
  text-decoration: none;
  font-size: ${(props) => props.InputHeight || 16}px;
  padding: 3px 10px 3px 26px;
  margin-top: ${(props) => props.InputMargin || 3}px;
  margin-bottom: ${(props) => props.InputMargin || 3}px;
  margin-left: ${(props) => props.InputMargin || 3}px;
  margin-right: ${(props) => props.InputMargin || 3}px;
  border-radius: ${(props) => props.InputBorderRad || 3}px;
  border: solid 1px ${borderGrey};
  line-height: 18px;

  &::placeholder {
    color: ${(props) => props.placeholderColor || nonSelectGrey};
    text-align: center;
    vertical-align: middle;
    font-size: 13px;
    font-weight: 300;
  }
  &:hover {
    cursor: auto;
  }
`;
