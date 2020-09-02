import React from 'react';
import Inputs from '../common/Inputs';

const Header = () => {
  return (
    <header>
      <h1>logo</h1>
      <div>
        <Inputs placeholder="검색" />
      </div>
      <ul>
        <li>홈</li>
        <li>디엠</li>
        <li>랜덤 추천</li>
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