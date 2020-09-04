import styled from 'styled-components';
import { bodyBgWhite, nonSelectGrey } from '../../styles/variables';

export const InputUi = styled.input`
  width: ${(props) => props.InputWidth || 215}px;
  height: ${(props) => props.InputHeight || 28}px;
  background-color: ${(props) => props.InputColor || bodyBgWhite};
  color: ${(props) => props.color || 'rgba(var(--i1d,38,38,38),1)'};
  text-decoration: none;
  font-size: 16px;
  padding: 3px 10px 3px 26px;
  margin: ${(props) => props.InputMargin || 3}px;
  border-radius: ${(props) => props.InputBorderRad || 3}px;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  line-height: 18px;

  &::placeholder {
    color: ${(props) => props.placeholderColor || nonSelectGrey};
    text-align: center;
    font-size: 13px;
    font-weight: 300;
  }
  &:hover {
    cursor: auto;
  }
`;
