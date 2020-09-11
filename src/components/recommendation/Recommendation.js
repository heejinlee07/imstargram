import React from 'react';
import RecommendationTitle from './recommendationTitle';
import {
  fontColorBlack,
  buttonSkyBlue,
  bodyBgtGrey,
  borderGrey,
} from '../../styles/variables';
import ProfileImage from '../common/ProfileImage';
import { WhiteButtons } from '../common/Buttons';
import {
  RecommendationBlock,
  LoginUserInfo,
  LoginUserName,
  UserNickName,
  RecommendationUsersInfo,
  RecommendationFotterBlock,
  RecommendationFooter,
} from './Recommendation.styls';

const footerList = [
  '소개·',
  '도움말·',
  '홍보 센터·',
  'API·',
  '채용 정보·',
  '개인정보처리방침·',
  '약관·',
  '위치·',
  '인기 계정·',
  '해시태그·',
  '언어',
];

function Recommendation({ users }) {
  const filteredUsers = users?.filter((user) => user.id < 6);

  return (
    <RecommendationBlock>
      <LoginUserInfo>
        <ProfileImage />
        <LoginUserName>
          <WhiteButtons padding={'0'}>로그인한 유저 아이디</WhiteButtons>
          <UserNickName>로그인한 유저 설정 이름</UserNickName>
        </LoginUserName>
      </LoginUserInfo>
      <RecommendationTitle
        color={fontColorBlack}
        fontSize={12}
        fontWeight={'normal'}
      />
      {filteredUsers?.map((user) => (
        <RecommendationUsersInfo>
          <ProfileImage width={'30px'} height={'25px'} />
          <LoginUserName>
            <WhiteButtons padding={'0'} fontSize={12}>
              {user.name}
            </WhiteButtons>
            <UserNickName>{user.name} 님 외 12명이 팔로우합니다</UserNickName>
          </LoginUserName>
          <WhiteButtons color={buttonSkyBlue} fontSize={12}>
            팔로우
          </WhiteButtons>
        </RecommendationUsersInfo>
      ))}
      <RecommendationFotterBlock>
        {footerList.map((name) => (
          <WhiteButtons fontWeight={'normal'} color={borderGrey} fontSize={12}>
            <RecommendationFooter>{name}</RecommendationFooter>
          </WhiteButtons>
        ))}
        <WhiteButtons
          margin={'15px 0'}
          fontWeight={'normal'}
          color={borderGrey}
          fontSize={12}
        >
          © 2020 INSTAGRAM FROM FACEBOOK
        </WhiteButtons>
      </RecommendationFotterBlock>
    </RecommendationBlock>
  );
}

export default Recommendation;
