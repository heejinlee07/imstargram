import React from 'react';
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
        <li><span></span>게시물</li>
        <li><span></span>IGTV</li>
        <li><span></span>저장됨</li>
        <li><span></span>태그됨</li>
      </ProfileNav>
    </>
  )
};
export default Personal;