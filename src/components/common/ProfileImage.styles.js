import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const ProfileImageUi = styled.img`
  width: ${(props) => props.width || '42px'};
  height: ${(props) => props.height || '42px'};
  margin: ${(props) => props.margin || '0px'};
  border: 1px solid ${(props) => props.border || borderGrey};
  border-radius: ${(props) => props.borderRadius || '50%'};
  cursor: pointer;
`;
