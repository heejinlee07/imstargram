import React from 'react';
import { Link } from 'react-router-dom';
import {
  PersonalWrap,
  Profile,
  IdWrap,
  FollowWrap,
  ProfileNav
} from './Personal.styles';
import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';

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
              <h3>아이디</h3>
              <button>
                프로필 편집
              </button>
              <div>
                <SvgIcon aria-label="설정">
                  <path d={iconList.setUp}></path>
                </SvgIcon>
              </div>
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
            <span>
              <SvgIcon
                aria-label="게시물"
                width={12}
                height={12}
              >
                <path d={iconList.post}></path>
              </SvgIcon>
            </span>
            게시물
          </Link>
        </li>
        <li>
          <Link to="/Personal/igtv">
            <span>
              <SvgIcon
                aria-label="IGTV"
                width={12}
                height={12}
              >
                <path d={iconList.igtv}></path>
              </SvgIcon>
            </span>
            IGTV
          </Link>
        </li>
        <li>
          <Link to="/Personal/saved">
            <span>
              <SvgIcon
                aria-label="저장됨"
                width={12}
                height={12}
              >
                <path d={iconList.saved}></path>
              </SvgIcon>
            </span>
            저장됨
          </Link>
        </li>
        <li>
          <Link to="/Personal/tag">
            <span>
              <SvgIcon
                aria-label="태그됨"
                width={12}
                height={12}
              >
                <path d={iconList.tag}></path>
              </SvgIcon>
            </span>
            태그됨
          </Link>
        </li>
      </ProfileNav>
    </>
  )
};
export default Personal;