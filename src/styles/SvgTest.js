import React, { useState } from 'react';
import {
  HomeIcon,
  PaperPlaneIcon,
  FindPeopleIcon,
  HeartIcon,
  ReplyIcon,
  BookMarkIcon,
} from './commonIcons/SvgIcons';
import { iconList } from '../styles/commonIcons/path';

const SvgTest = () => {
  const [isActive, setActive] = useState({
    home: true,
    direct: false,
    findpeople: false,
    heart: false,
    bookmark: false,
  });

  const clickHome = () => {
    setActive({
      home: true,
      direct: false,
      findpeople: false,
      heart: false,
      bookmark: false,
    });
  };

  const clickDirect = () => {
    setActive({
      home: false,
      direct: true,
      findpeople: false,
      heart: false,
      bookmark: false,
    });
  };

  const clickFindPeople = () => {
    setActive({
      home: false,
      direct: false,
      findpeople: true,
      heart: false,
      bookmark: false,
    });
  };

  const clickHeart = () => {
    setActive({
      home: false,
      direct: false,
      findpeople: false,
      heart: true,
      bookmark: false,
    });
  };

  const clickBookMark = () => {
    setActive({
      home: false,
      direct: false,
      findpeople: false,
      heart: false,
      bookmark: true,
    });
  };

  return (
    <div>
      <HomeIcon onClick={clickHome}>
        {isActive.home === false ? (
          <path d={iconList.inactiveHome}></path>
        ) : (
          <path d={iconList.activeHome}></path>
        )}
      </HomeIcon>

      <PaperPlaneIcon onClick={clickDirect}>
        {isActive.direct === false ? (
          <path d={iconList.inactiveDirect}></path>
        ) : (
          <path d={iconList.activeDirect}></path>
        )}
      </PaperPlaneIcon>

      <FindPeopleIcon onClick={clickFindPeople}>
        {isActive.findpeople === false ? (
          <path d={iconList.inactiveFindPeople}></path>
        ) : (
          <path d={iconList.activeFindPeople}></path>
        )}
      </FindPeopleIcon>

      <HeartIcon
        fill={isActive.heart ? '#ed4956' : '#262626'}
        aria-label="활동 피드"
        onClick={clickHeart}
      >
        {isActive.heart === false ? (
          <path d={iconList.inactiveHeart}></path>
        ) : (
          <path d={iconList.activeHeart}></path>
        )}
      </HeartIcon>

      <ReplyIcon>
        <path d={iconList.reply}></path>
      </ReplyIcon>

      <BookMarkIcon onClick={clickBookMark}>
        {isActive.bookmark === false ? (
          <path d={iconList.inactiveBookmark}></path>
        ) : (
          <path d={iconList.activeBookmark}></path>
        )}
      </BookMarkIcon>
    </div>
  );
};

export default SvgTest;
