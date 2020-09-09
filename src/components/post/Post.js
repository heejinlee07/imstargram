import React, { useCallback } from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostCommentList from './PostCommentList';
import useApi from '../../hooks/useApi';
import { getUserById } from '../../services/usersApi';

function Post({ post, users }) {
  const getUser = useCallback(() => getUserById(post.userId), [post.userId]);
  const { data: user } = useApi(getUser);

  return (
    <div>
      <Cards padding={'0'} margin={'20px 0'}>
        <PostHeader post={post} user={user} />
        <PostContents post={post} user={user} />
        <PostCommentList post={post} users={users} user={user} />
      </Cards>
    </div>
  );
}

export default Post;
