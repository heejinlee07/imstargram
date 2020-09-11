import React, { useCallback } from 'react';
import { CardBlock, UserName } from './RecommendationCarousel.styles';
import Cards from '../common/Cards';
import Buttons, { WhiteButtons } from '../common/Buttons';
import {
  bodyBgtGrey,
  buttonSkyBlue,
  fontColorWhite,
} from '../../styles/variables';
import ProfileImage from '../common/ProfileImage';
import { getUserById } from '../../services/usersApi';
import useApi from '../../hooks/useApi';

function RecommendationCard({ userId }) {
  const getUser = useCallback(() => getUserById(userId), [userId]);
  const { data: user, isLoading, error } = useApi(getUser);

  if (error) return null;
  if (isLoading || !user) return null;

  return (
    <CardBlock>
      <Cards width={'150px'} height={'150px'}>
        <WhiteButtons color={bodyBgtGrey} fontWeight={'normal'} fontSize={12}>
          X
        </WhiteButtons>
        <ProfileImage margin={'0 0 10px 0'} />
        <UserName>{user.name}</UserName>
        <WhiteButtons
          color={bodyBgtGrey}
          fontWeight={'normal'}
          fontSize={12}
          margin={'0 0 10px 0'}
        >
          누구누구님이 외 3명이 팔로우합니다
        </WhiteButtons>
        <Buttons width={'90%'} bgColor={buttonSkyBlue} color={fontColorWhite}>
          팔로우
        </Buttons>
      </Cards>
    </CardBlock>
  );
}

export default RecommendationCard;
