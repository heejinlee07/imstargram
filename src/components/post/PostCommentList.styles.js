import styled from 'styled-components';
import { borderGrey } from '../../styles/variables';

export const PostCommentsBlock = styled.div``;

export const PostCommentListBlock = styled.ul`
  margin: 0;
  & > * {
    display: flex;
  }
`;

export const PostInputBlock = styled.div`
  border: 1px solid ${borderGrey};
  display: flex;
  & :first-child {
    flex-grow: 1;
  }
`;
