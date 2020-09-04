import React from 'react';
import Inputs from '../common/Inputs';

import { PostCommentsBlock, PostCommentList } from './PostCommentsBlock.style';

const commentsApi = ['댓', '글', '이', '야'];

function PostComments() {
  return (
    <PostCommentsBlock>
      <PostCommentList>
        {commentsApi.map((c) => (
          <li>
            <button>닉네임</button> {c}
          </li>
        ))}
      </PostCommentList>
      <Inputs placeholder="댓글달기..." border={'none'} borderRadius={'0'} />
    </PostCommentsBlock>
  );
}

export default PostComments;
