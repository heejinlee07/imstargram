import styled from 'styled-components';
import { borderGrey, buttonSkyBlue } from '../../styles/variables';

export const PostCommentsBlock = styled.div``;

export const PostCommentListBlock = styled.ul`
  margin: 0;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PostCommentList = styled.ul`
  & :last-child {
    color: ${borderGrey};
    margin-left: auto;
    &:hover {
      color: ${buttonSkyBlue};
      cursor: pointer;
    }
  }
`;

export const PostInputBlock = styled.div`
  display: flex;
  & :first-child {
    flex-grow: 1;
  }
`;
