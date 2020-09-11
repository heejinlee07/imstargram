import React from 'react';
import Cards from '../common/Cards';
import {
  CardsBlock,
  CardBlock,
  UserName,
} from './RecommendationCarousel.styles';
import Buttons, { WhiteButtons } from '../common/Buttons';
import {
  buttonSkyBlue,
  fontColorWhite,
  bodyBgtGrey,
} from '../../styles/variables';
import ProfileImage from '../common/ProfileImage';
import RecommendationTitle from './recommendationTitle';

function RecommendationCarousel({ users }) {
  return (
    <Cards padding={'20px 10px'}>
      <RecommendationTitle color={buttonSkyBlue} />
      <CardsBlock>
        {users?.map((user) => (
          <CardBlock>
            <Cards width={'150px'} height={'150px'}>
              <WhiteButtons
                color={bodyBgtGrey}
                fontWeight={'normal'}
                fontSize={12}
              >
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
              <Buttons
                width={'90%'}
                bgColor={buttonSkyBlue}
                color={fontColorWhite}
              >
                팔로우
              </Buttons>
            </Cards>
          </CardBlock>
        ))}
      </CardsBlock>
    </Cards>
  );
}

export default RecommendationCarousel;
