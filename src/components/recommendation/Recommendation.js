import React, { useCallback } from 'react';
import RecommendationTitle from './recommendationTitle';
import { fontColorBlack, borderGrey } from '../../styles/variables';
import ProfileImage from '../common/ProfileImage';
import { WhiteButtons } from '../common/Buttons';
import {
  RecommendationBlock,
  LoginUserInfo,
  LoginUserName,
  UserNickName,
  RecommendationFotterBlock,
  RecommendationFooter,
} from './Recommendation.styles';
import { getFollowInfo } from '../../services/followInfoApi';
import useApi from '../../hooks/useApi';
import { useSelector } from 'react-redux';
import useApiWithRedux from '../../hooks/useApiWithRedux';
import { FOLLOWS } from '../../modules/FollowInfoReducer';
import { getUserById } from '../../services/usersApi';
import RecommendationUser from './RecommendationUser';

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

function Recommendation() {
  const follows = useSelector(({ follows }) => follows.follows);
  const status = useSelector(({ follows }) => follows.status);

  const userId = 1;

  //전체 follows info가져오기
  const getFollows = useCallback(() => getFollowInfo(), []);
  const { invoke: invokeFollows } = useApiWithRedux(FOLLOWS, getFollows);

  //5,6,7,,8,9,10
  const exceptUserIdList = follows
    .filter(
      ({ followerId, followingId }) =>
        followerId !== userId && followingId !== userId
    )
    .map((recommendation) => recommendation.id);

  const recommendationList = exceptUserIdList.filter(
    (item, index) => exceptUserIdList.indexOf(item) === index
  );

  //유저 정보 가져오기
  const getUser = useCallback(() => getUserById(userId), [userId]);
  const { data: user } = useApi(getUser);

  return (
    <RecommendationBlock>
      {status === 'loading' && <div>로딩 중...</div>}
      {status === 'error' && <div>에러 발생...</div>}
      <LoginUserInfo>
        <ProfileImage />
        <LoginUserName>
          <WhiteButtons padding={'0'}>{user?.name}</WhiteButtons>
          <UserNickName>{user?.name}</UserNickName>
        </LoginUserName>
      </LoginUserInfo>
      <RecommendationTitle
        color={fontColorBlack}
        fontSize={12}
        fontWeight={'normal'}
      />
      {recommendationList?.map((userId) => (
        <RecommendationUser key={userId} userId={userId} />
      ))}
      <RecommendationFotterBlock>
        {footerList.map((footerName) => (
          <WhiteButtons
            key={footerName}
            fontWeight={'normal'}
            color={borderGrey}
            fontSize={12}
          >
            <RecommendationFooter key={footerName}>
              {footerName}
            </RecommendationFooter>
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
