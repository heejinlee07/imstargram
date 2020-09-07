import React from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostCommentList from './PostCommentList';
import PostUpload from './PostUpload';

function Posts() {
  return (
    <div>
      <PostUpload />
      <Cards padding={'0'}>
        <PostHeader />
        <PostContents />
        <PostCommentList />
      </Cards>
    </div>
  );
}

export default Posts;
