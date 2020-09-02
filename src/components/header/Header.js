import React from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>logo</h1>
      <div>
        <Inputs placeholder="검색" />
      </div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/direct">디엠</Link></li>
        <li><Link to="/explore">랜덤 추천</Link></li>
        <li>좋아요</li>
        <li>
          <ul>
            <li>프로필</li>
            <li>저장됨</li>
            <li>설정</li>
          </ul>
          <div>로그아웃</div>
        </li>
      </ul>
    </header>
  )
}

export default Header;