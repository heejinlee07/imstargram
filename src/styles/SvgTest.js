import React, { useState } from 'react';
import { SvgIcon } from './commonIcons/SvgIcons';
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
    // const exam = isActive;
    // console.log(isActive);
    // const key = ['home', 'direct'];
    // const value = [true, false];
    // let test = new Map();
    // for (let i = 0; i < key.length; i++) {
    //   test.set(`${key[i]}`, value[i]);
    // }
    // console.log(test);
    // for (let item of test.entries()) {
    //   console.log(item);
    // }
    // console.log(test.forEach((item, key) => console.log(`${key}: ${item}`)));
    // setActive({ ...isActive, home: true }, () => test);
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
      <SvgIcon aria-label="home" onClick={clickHome}>
        {isActive.home === false ? (
          <path d={iconList.inactiveHome}></path>
        ) : (
          <path d={iconList.activeHome}></path>
        )}
      </SvgIcon>

      <SvgIcon aria-label="direct" onClick={clickDirect}>
        {isActive.direct === false ? (
          <path d={iconList.inactivePaperPlane}></path>
        ) : (
          <path d={iconList.activePaperPlane}></path>
        )}
      </SvgIcon>

      <SvgIcon aria-label="사람 찾기" onClick={clickFindPeople}>
        {isActive.findpeople === false ? (
          <path d={iconList.inactiveFindPeople}></path>
        ) : (
          <path d={iconList.activeFindPeople}></path>
        )}
      </SvgIcon>

      <SvgIcon
        fill={isActive.heart ? '#ed4956' : '#262626'}
        aria-label="활동 피드"
        onClick={clickHeart}
      >
        {isActive.heart === false ? (
          <path d={iconList.inactiveHeart}></path>
        ) : (
          <path d={iconList.activeHeart}></path>
        )}
      </SvgIcon>

      <SvgIcon aria-label="리플 달기">
        <path d={iconList.reply}></path>
      </SvgIcon>

      <SvgIcon aria-label="북마크" onClick={clickBookMark}>
        {isActive.bookmark === false ? (
          <path d={iconList.inactiveBookmark}></path>
        ) : (
          <path d={iconList.activeBookmark}></path>
        )}
      </SvgIcon>
    </div>
  );
};

export default SvgTest;
