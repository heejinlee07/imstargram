import React, { useState, useEffect } from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import { HeaderBlock, HeaderNav, HeaderWrap } from './Header.styles';
import HeaderModal from './HeaderModal';
import HeaderLikeModal from './HeaderLikeModal';
import { bodyBgWhite } from '../../styles/variables';
import {
  HomeIcon,
  PaperPlaneIcon,
  FindPeopleIcon,
} from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';


const Header = () => {
  const [navState, setNavState] = useState(false);
  const [navLikeState, setNavLikeState] = useState(false);

  const state = {
    home: true,
    direct: false,
    findpeople: false,
    heart: false,
    bookmark: false,
  };

  const [isActive, setActive] = useState(state);

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

  const onClickProfile = () => {
    navState === true ? setNavState(false) : setNavState(true);
  };

  const onClickLike = () => {
    navLikeState === true ? setNavLikeState(false) : setNavLikeState(true);
  }

  return (
    <HeaderWrap>
      <HeaderBlock>
        <div>
          <h1>logo</h1>
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
              <HomeIcon onClick={clickHome}>
                {isActive.home === false ? (
                  <path d={iconList.inactiveHome}></path>
                ) : (
                    <path d={iconList.activeHome}></path>
                  )}
              </HomeIcon>
            </Link>
          </li>
          <li>
            <Link to="/direct">
              <PaperPlaneIcon aria-label="direct" onClick={clickDirect}>
                {isActive.direct === false ? (
                  <path d={iconList.inactivePaperPlane}></path>
                ) : (
                    <path d={iconList.activePaperPlane}></path>
                  )}
              </PaperPlaneIcon>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <FindPeopleIcon onClick={clickFindPeople}>
                {isActive.findpeople === false ? (
                  <path d={iconList.inactiveFindPeople}></path>
                ) : (
                    <path d={iconList.activeFindPeople}></path>
                  )}
              </FindPeopleIcon>
            </Link>
          </li>
          <li onClick={onClickLike}>좋아</li>
          {navLikeState ? <HeaderLikeModal /> : null}
          <li onClick={onClickProfile}>프로필</li>
          {navState ? <HeaderModal /> : null}
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrap>
  );
};
export default Header;
