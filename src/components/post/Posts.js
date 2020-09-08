import React from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostCommentList from './PostCommentList';

function Posts({ post }) {
  console.log('post', post);
  return (
    <div>
      <Cards padding={'0'}>
        <PostHeader post={post} />
        <PostContents post={post} />
        <PostCommentList />
      </Cards>
    </div>
  );
}

export default Posts;
