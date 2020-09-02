import styled from 'styled-components';
import { bodyBgWhite } from '../../styles/variables';

export const InputUi = styled.input`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  background-color: ${(props) => props.bgcolor || bodyBgWhite};
  color: ${(props) => props.color || 'rgba(var(--i1d,38,38,38),1)'};
  text-decoration: none;
  font-size: 16px;
  padding: ${(props) => props.padding || 5}px;
  margin: ${(props) => props.margin || 3}px;
  border-radius: ${(props) => props.borderRadius || 3}px;
  border: ${(props) => props.border || 1}px solid
    rgba(var(--b6a, 219, 219, 219), 1);

  &:hover {
    cursor: auto;
  }
`;
