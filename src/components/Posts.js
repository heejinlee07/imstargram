import React from 'react';
import Cards from './common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostComments from './PostComments';
import PostCarousel from './PostCarousel';

function Posts() {
  return (
    <div>
      <Cards padding={'0'}>
        <PostHeader />
        <PostContents />
        <PostComments />
      </Cards>
    </div>
  );
}

export default Posts;
