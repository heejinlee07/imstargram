import React, { useCallback } from 'react';
import {
  PostHeaderBlock,
  PostInfo,
  PostProfile,
  PostNickname,
  PostMore,
} from './PostHeader.styles';

import { MoreIcon } from '../../styles/commonIcons/SvgIcons';
import useApi from '../../hooks/useApi';
import { getUserById } from '../../services/usersApi';
import { getFollowingsByFollowerId } from '../../services/followInfoApi';

function PostHeader({ post }) {
  // console.log('postid', post.userId);

  const getUser = useCallback(() => getUserById(post.userId), [post.userId]);

  const { data } = useApi(getUser);
  // console.log('data', data);
  return (
    <PostHeaderBlock>
      <PostInfo>
        <PostProfile></PostProfile>
        <PostNickname>{data?.name}</PostNickname>
      </PostInfo>
      <PostMore>
        <MoreIcon width="22" height="22" />
      </PostMore>
    </PostHeaderBlock>
  );
}

export default PostHeader;
