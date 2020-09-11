import React, { useCallback } from 'react';
import RecommendationTitle from './recommendationTitle';
import {
  fontColorBlack,
  buttonSkyBlue,
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
import {
  getFollowInfo,
  getFollowersByFollowingId,
  getFollowingsByFollowerId,
} from '../../services/followInfoApi';
import useApi from '../../hooks/useApi';

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
  console.log('kkkk', users);
  // const filteredUsers = users?.filter((user) => user.id < 6);

  //고정 Id === 1, 추후 로그인한 유저 id로 바꿔야함.
  // const userId = users
  //   ?.filter((user) => user.id !== 1)
  //   .map((targetId) => targetId.id);
  // console.log('id', userId);

  const TargetId = 1;

  //전체 팔로우리스트 가져오기
  // const getFollowList = useCallback(() => getFollowInfo(), []);

  // const { data: followlist, isLoading, error, invoke: invokeFollow } = useApi(
  //   getFollowList
  // );

  // const a = followlist
  //   ?.filter((user) => user.id !== 1)
  //   .map((targetId) => targetId.id);
  // console.log('idddd', a);

  const getFollowerUser = useCallback(
    () => getFollowingsByFollowerId(TargetId),
    [TargetId]
  );

  const {
    data: followerUser,
    isLoading,
    error,
    invoke: invokeFollower,
  } = useApi(getFollowerUser);

  console.log('what?', followerUser);

  const c = followerUser?.map((id) => id.followingId);
  console.log('ywe', c);

  const filteredUsers = followerUser?.filter((user) => user.id < 6);
  console.log(filteredUsers);

  //팔로잉 유저 정보 가져오기
  // const getFollowingUsers = useCallback(
  //   () => getFollowersByFollowingId(TargetId),
  //   [TargetId]
  // );

  // const { data: followingUser, invoke: invokefollows } = useApi(
  //   getFollowingUsers
  // );
  // console.log('dd', followlist);

  return (
    <RecommendationBlock>
      <LoginUserInfo>
        <ProfileImage />
        <LoginUserName>
          <WhiteButtons padding={'0'}>{followerUser?.followerId}</WhiteButtons>
          <UserNickName>로그인한 유저 설정 이름</UserNickName>
        </LoginUserName>
      </LoginUserInfo>
      <RecommendationTitle
        color={fontColorBlack}
        fontSize={12}
        fontWeight={'normal'}
      />
      {filteredUsers?.map((user) => (
        <RecommendationUsersInfo key={user.id}>
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
        {footerList.map((footerName) => (
          <WhiteButtons fontWeight={'normal'} color={borderGrey} fontSize={12}>
            <RecommendationFooter>{footerName}</RecommendationFooter>
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
