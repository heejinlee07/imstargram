import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const PostIconsBlock = styled.div`
  display: flex;

  & svg:last-child {
    margin-left: auto;
  }
`;

export const PostLikeCount = styled.button`
  margin: 0;
  border: none;
`;
