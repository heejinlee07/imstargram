import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import {
  HeaderBlock,
  HeaderNav,
  HeaderWrap,
} from './Header.styles';
import HeaderModal from './HeaderModal';
import { bodyBgWhite } from '../../styles/variables';

const Header = () => {
  const [navState, setNavState] = useState(false)
  const onClick = () => {
    navState === true ? setNavState(false) : setNavState(true);
  }

  return (
    <HeaderWrap>
      <HeaderBlock>
        <div>
          <h1>logo</h1>
          <div>
            <Inputs
              InputColor={bodyBgWhite}
              placeholder="검색" />
            <span></span>
            <div></div>
          </div>
        </div>
        <HeaderNav>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/direct">디엠</Link>
          </li>
          <li>
            <Link to="/explore">랜덤</Link>
          </li>
          <li onClick={onClick}>좋아</li>
          {navState ? <HeaderModal /> : null}
          <li onClick={onClick}>프로필</li>
          {navState ? <HeaderModal /> : null}
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrap>
  );
};
export default Header;
