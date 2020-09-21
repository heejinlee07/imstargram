import React from 'react';
import {
  PostHeaderBlock,
  PostInfo,
  PostNickname,
  PostMore,
} from './PostHeader.styles';
import ModalStyle from './ModalStyle';
import ProfileImage from '../common/ProfileImage';

function PostHeader({ user }) {
  return (
    <PostHeaderBlock>
      <PostInfo>
        <ProfileImage />
        <PostNickname>{user?.name}</PostNickname>
      </PostInfo>
      <PostMore>
        <ModalStyle />
      </PostMore>
    </PostHeaderBlock>
  );
}

export default PostHeader;
