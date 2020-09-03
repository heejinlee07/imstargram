import React from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import { HeaderBlock, HeaderNav } from './Header.styles';

const Header = () => {
  return (
    <HeaderBlock>
      <h1>logo</h1>
      <Inputs placeholder="검색" />
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
        <li>프로필</li>
      </HeaderNav>
    </HeaderBlock>
  );
};
export default Header;
