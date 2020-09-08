import React, { useState } from 'react';
import PostCarousel from './PostCarousel';
import PostIcons from './PostIcons';
import PhotoSelect from '../postUpload/PhotoSelect';
import { PostPhoto, PostText } from './PostContent.styles';
import { WhiteButtons } from '../common/Buttons';
import { linkBlue } from '../../styles/variables';

function PostContents({ post }) {
  //todo: 한줄로 정리 split.map~~~이런식으로
  // 또는 함수에 {}쓰지말고 바로 연결해서 할 수 있다.
  const hashtagStyle = (hashtag) => {
    // let hash = hashtag;
    // console.log(hash);

    const hashtagList = hashtag.split(' ');
    return hashtagList.map((tag) => {
      if (tag.match('#')) {
        return (
          <WhiteButtons color={linkBlue} fontWeight={'normal'}>
            {tag}
          </WhiteButtons>
        );
      }
      return <PostText>{tag}</PostText>;
    });
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
