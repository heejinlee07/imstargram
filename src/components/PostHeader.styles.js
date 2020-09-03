import styled from 'styled-components';
import { borderGrey } from '../styles/variables';

export const PostHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.border || borderGrey};
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfile = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid ${(props) => props.border || borderGrey};
  border-radius: 50%;
  cursor: pointer;
`;

export const PostNickname = styled.div`
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
`;
export const PostMore = styled.button`
  border: none;
  cursor: pointer;
`;
