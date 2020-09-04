import React from 'react';
import {
  PostHeaderBlock,
  PostInfo,
  PostProfile,
  PostNickname,
  PostMore,
} from './PostHeader.styles';

import { MoreIcon } from '../../styles/commonIcons/SvgIcons';

function PostHeader() {
  return (
    <PostHeaderBlock>
      <PostInfo>
        <PostProfile></PostProfile>
        <PostNickname>test</PostNickname>
      </PostInfo>
      <PostMore>
        <MoreIcon width="22" height="22" />
      </PostMore>
    </PostHeaderBlock>
  );
}

export default PostHeader;
