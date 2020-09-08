import React, { useState } from 'react';
import PostCarousel from './PostCarousel';
import PostIcons from './PostIcons';
import PhotoSelect from '../postUpload/PhotoSelect';
import { PostPhoto, PostText, HashTag } from './PostContent.styles';
import { WhiteButtons } from '../common/Buttons';

function PostContents({ post }) {
  console.log('post', post);

  const hashtagStyle = (hashtag) => {
    // let hash = hashtag;
    // console.log(hash);

    const pattern = '#';

    for (let i = 0; i < hashtag.length; i++) {
      if (hashtag.match(pattern)) {
        console.log('hi');
        return <HashTag>{hashtag}</HashTag>;
      } else {
        return <PostText>{post.text}</PostText>;
      }
    }
  };

  return (
    <div>
      <PostPhoto src={post.image} />
      {/* <PostCarousel /> */}
      <PostIcons />
      <PostText>
        <WhiteButtons>유저아이디{post.userId}</WhiteButtons>
        {/* <PostTexts>{post.text}</PostTexts> */}
        {hashtagStyle(post.text)}
      </PostText>
    </div>
  );
}

export default PostContents;
