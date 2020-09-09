import React from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostCommentList from './PostCommentList';

function Post({ post, user }) {
  return (
    <div>
      <Cards padding={'0'}>
        <PostHeader post={post} user={user} />
        <PostContents post={post} />
        <PostCommentList />
      </Cards>
    </div>
  );
}

export default Post;
