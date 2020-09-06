import React from 'react';
import Inputs from '../common/Inputs';

import {
  PostCommentsBlock,
  PostCommentList,
  PostInputBlock,
} from './PostCommentsBlock.style';
import { WhiteButtons } from '../common/Buttons';

const commentsApi = ['댓', '글', '이', '야'];

function PostComments() {
  return (
    <PostCommentsBlock>
      <PostCommentList>
        {commentsApi.map((c) => (
          <li>
            <WhiteButtons>닉네임</WhiteButtons> {c}
          </li>
        ))}
      </PostCommentList>
      <WhiteButtons>시간표시</WhiteButtons>
      <PostInputBlock>
        <Inputs placeholder="댓글달기..." border={'none'} borderRadius={'0'} />
        <WhiteButtons>게시</WhiteButtons>
      </PostInputBlock>
    </PostCommentsBlock>
  );
}

export default PostComments;
