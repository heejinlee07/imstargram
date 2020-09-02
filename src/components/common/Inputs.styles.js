import styled from 'styled-components';
import { bodyBgWhite, nonSelectGrey } from '../../styles/variables';

export const InputUi = styled.input`
  width: ${(props) => props.InputWidth}%;
  height: ${(props) => props.InputHeight}%;
  background-color: ${(props) => props.InputColor || bodyBgWhite};
  color: ${(props) => props.color || 'rgba(var(--i1d,38,38,38),1)'};
  text-decoration: none;
  font-size: 16px;
  padding: ${(props) => props.InputPadding || 5}px;
  margin: ${(props) => props.InputMargin || 3}px;
  border-radius: ${(props) => props.InputBorderRad || 3}px;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);

  &::placeholder {
  color: ${(props) => props.placeholderColor || nonSelectGrey};
    text-align: center;
  }

  &:hover {
    cursor: auto;
  }
`;
