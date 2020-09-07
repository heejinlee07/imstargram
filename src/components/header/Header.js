import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import {
  HeaderBlock,
  Logo,
  HeaderNav,
  HeaderWrap,
  HeaderProfile,
} from './Header.styles';
import HeaderModal from './HeaderModal';
import { bodyBgWhite } from '../../styles/variables';
import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';

const Header = () => {
  const [navState, setNavState] = useState(false);

  const state = {
    home: true,
    direct: false,
    findpeople: false,
    heart: false,
    profile: false,
  };

  const [isActive, setActive] = useState(state);

  const clickHome = () => {
    setActive({
      home: true,
      direct: false,
      findpeople: false,
      heart: false,
      profile: false,
    });
  };

  const clickDirect = () => {
    setActive({
      home: false,
      direct: true,
      findpeople: false,
      heart: false,
      profile: false,
    });
  };

  const clickFindPeople = () => {
    setActive({
      home: false,
      direct: false,
      findpeople: true,
      heart: false,
      profile: false,
    });
  };

  const clickHeart = () => {
    navState
      ? setActive(state)
      : setActive({
          home: false,
          direct: false,
          findpeople: false,
          heart: true,
          profile: false,
        });
  };

  const clickProfile = () => {
    const test = isActive;
    navState
      ? setActive(test)
      : setActive({
          home: false,
          direct: false,
          findpeople: false,
          heart: false,
          profile: true,
        });
    console.log(test);
  };

  const onClick = () => {
    navState === true ? setNavState(false) : setNavState(true);
  };
  return (
    <HeaderWrap>
      <HeaderBlock>
        <div>
          <Logo>I'mstargram</Logo>
          <div>
            <Inputs
              InputWidth={176}
              InputMargin={'0'}
              InputColor={bodyBgWhite}
              placeholder="검색"
            />
            <span></span>
            <div></div>
          </div>
        </div>
        <HeaderNav>
          <li>
            <Link to="/">
              <SvgIcon aria-label="home" onClick={clickHome}>
                {isActive.home === false ? (
                  <path d={iconList.inactiveHome}></path>
                ) : (
                  <path d={iconList.activeHome}></path>
                )}
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/direct">
              <SvgIcon aria-label="direct" onClick={clickDirect}>
                {isActive.direct === false ? (
                  <path d={iconList.inactivePaperPlane}></path>
                ) : (
                  <path d={iconList.activePaperPlane}></path>
                )}
              </SvgIcon>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <SvgIcon aria-label="사람 찾기" onClick={clickFindPeople}>
                {isActive.findpeople === false ? (
                  <path d={iconList.inactiveFindPeople}></path>
                ) : (
                  <path d={iconList.activeFindPeople}></path>
                )}
              </SvgIcon>
            </Link>
          </li>
          <li onClick={onClick}>
            <SvgIcon aria-label="활동 피드" onClick={clickHeart}>
              {isActive.heart === false ? (
                <path d={iconList.inactiveHeart}></path>
              ) : (
                <path d={iconList.activeHeart}></path>
              )}
            </SvgIcon>
          </li>
          {navState ? <HeaderModal /> : null}
          <li onClick={onClick}>
            <HeaderProfile onClick={clickProfile}></HeaderProfile>
          </li>
          {navState ? <HeaderModal /> : null}
          {/* 가입화면 테스트 연결페이지 */}
          <li>
            <Link to="/signIndex">Signin</Link>
          </li>
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrap>
  );
};
export default Header;
