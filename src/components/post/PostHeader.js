import React from 'react';
import {
  PostHeaderBlock,
  PostInfo,
  PostProfile,
  PostNickname,
  PostMore,
} from './PostHeader.styles';
import ModalStyle from './ModalStyle';

function PostHeader({ user }) {
  return (
    <PostHeaderBlock>
      <PostInfo>
        <PostProfile />
        <PostNickname>{user?.name}</PostNickname>
      </PostInfo>
      <PostMore>
        <ModalStyle />
      </PostMore>
    </PostHeaderBlock>
  );
}

export default PostHeader;
