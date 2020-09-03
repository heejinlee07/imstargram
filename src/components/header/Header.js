import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import {
  HeaderBlock,
  HeaderNav,
  HeaderWrap,
  HeaderProfile
} from './Header.styles';



const Header = () => {

  const [headerProfileNavState, setHeaderProfileNavState] = useState(false)
  const onClick = () => setHeaderProfileNavState(true)
  return (
    <HeaderWrap>
      <HeaderBlock>
        <div>
          <h1>logo</h1>
          <div>
            <Inputs placeholder="검색" />
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
            <Link to="/explore">랜덤 추천</Link>
          </li>
          <li>좋아요</li>
          <li onClick={onClick}>프로필
            {headerProfileNavState ? <HeaderProfile /> : null}
          </li>
          <HeaderProfile>
            <li><span></span>프로필</li>
            <li><span></span>저장됨</li>
            <li><span></span>설정</li>
            <div>로그아웃</div>
          </HeaderProfile>
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrap>
  );
};
export default Header;
