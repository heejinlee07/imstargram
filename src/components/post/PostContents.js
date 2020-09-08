import React from 'react';
import PostCarousel from './PostCarousel';
import PostIcons from './PostIcons';
import PhotoSelect from '../postUpload/PhotoSelect';
import { PostPhoto, PostText } from './PostContent.styles';

function PostContents({ post }) {
  return (
    <div>
      <PostPhoto src={post.image} />
      {/* <PostCarousel /> */}
      <PostIcons />
      <PostText>
        <div>유저아이디{post.userId}</div>
        <div>{post.text}</div>
      </PostText>
    </div>
  );
}

export default PostContents;
