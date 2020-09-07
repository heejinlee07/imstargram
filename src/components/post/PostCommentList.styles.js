import styled from 'styled-components';

export const PostCommentsBlock = styled.div``;

export const PostCommentListBlock = styled.ul`
  margin: 0;
  & > * {
    display: flex;
  }
`;

export const PostInputBlock = styled.div`
  display: flex;
  & :first-child {
    flex-grow: 1;
  }
`;
