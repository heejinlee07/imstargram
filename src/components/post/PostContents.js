import React from 'react';
import PostIcons from './PostIcons';
import { PostPhoto, PostText } from './PostContent.styles';
import { WhiteButtons } from '../common/Buttons';
import { linkBlue } from '../../styles/variables';

function PostContents({ post, user }) {
  //todo: 한줄로 정리 split.map~~~이런식으로
  // 또는 함수에 {}쓰지말고 바로 연결해서 할 수 있다.

  const hashtagStyle = (hashtag) => {
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
      <PostIcons />
      <PostText>
        <WhiteButtons>{user?.name}</WhiteButtons>
        {hashtagStyle(post.text)}
      </PostText>
    </div>
  );
}

export default PostContents;
