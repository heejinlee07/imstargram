import React from 'react';
import { Link } from 'react-router-dom';
import {
  PersonalWrap,
  Profile,
  IdWrap,
  FollowWrap,
  ProfileNav
} from './Personal.styles';

const Personal = () => {
  return (
    <>
      <PersonalWrap>
        <main>
          <header>
            <Profile aria-label="프로필">
            </Profile>
          </header>
          <div>
            <IdWrap>
              <div>아이디</div>
              <button>
                프로필 편집
              </button>
              <div></div>
            </IdWrap>
            <FollowWrap>
              <li>
                게시물
              <span>100</span>
              </li>
              <li>
                팔로워
              <span>5000</span>
              </li>
              <li>
                팔로우
              <span>500</span>
              </li>
            </FollowWrap>
          </div>
        </main>
      </PersonalWrap>
      <ProfileNav>
        <li>
          <Link to="/Personal">
            <span></span>
             게시물
          </Link>
        </li>
        <li>
          <Link to="/Personal/igtv">
            <span></span>
            IGTV
          </Link>
        </li>
        <li>
          <Link to="/Personal/saved">
            <span></span>
            저장됨
          </Link>
        </li>
        <li>
          <Link to="/Personal/tag">
            <span></span>
            태그됨
          </Link>
        </li>
      </ProfileNav>
    </>
  )
};
export default Personal;