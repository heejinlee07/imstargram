import styled from 'styled-components';
import { borderGrey } from '../styles/variables';

export const PostHeaderBlock = styled.div`
  display: flex;
`;
export const PostProfile = styled.img`
  border-radius: 50%;
  border: 1px solid ${(props) => props.border || borderGrey};
  width: 42px;
  height: 42px;
`;

export const PostNickname = styled.div``;
export const PostMore = styled.button``;
