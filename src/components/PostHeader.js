import React from 'react';
import {
  PostHeaderBlock,
  PostProfile,
  PostNickname,
  PostMore,
} from './PostHeader.styles';

function PostHeader() {
  return (
    <PostHeaderBlock>
      <PostProfile></PostProfile>
      <PostNickname></PostNickname>
      <PostMore></PostMore>
    </PostHeaderBlock>
  );
}

export default PostHeader;
