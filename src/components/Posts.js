import React from 'react';
import Cards from './common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostComments from './PostComments';

function Posts() {
  return (
    <div>
      <Cards>
        <PostHeader></PostHeader>
        <PostContents></PostContents>
        <PostComments></PostComments>
      </Cards>
    </div>
  );
}

export default Posts;
