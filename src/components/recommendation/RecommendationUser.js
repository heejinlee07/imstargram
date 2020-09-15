import React, { useCallback } from 'react';
import useApi from '../../hooks/useApi';
import { getUserById } from '../../services/usersApi';
import { buttonSkyBlue } from '../../styles/variables';
import {
  RecommendationUsersInfo,
  LoginUserName,
  UserNickName,
} from './Recommendation.styles';
import ProfileImage from '../common/ProfileImage';
import { WhiteButtons } from '../common/Buttons';
import { Skeleton } from 'antd';

const RecommendationUser = ({ userId }) => {
  const getUser = useCallback(() => getUserById(userId), [userId]);
  const { data: user, isLoading, error } = useApi(getUser);

  if (error) return null;
  if (isLoading || !user) return <Skeleton paragraph={{ rows: 2 }} />;

  return (
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
  );
};

export default RecommendationUser;
