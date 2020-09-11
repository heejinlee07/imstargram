import React, { useCallback } from 'react';
import Cards from '../common/Cards';
import { CardsBlock } from './RecommendationCarousel.styles';
import { buttonSkyBlue } from '../../styles/variables';
import RecommendationTitle from './recommendationTitle';
import { useSelector } from 'react-redux';
import { getFollowInfo } from '../../services/followInfoApi';
import useApiWithRedux from '../../hooks/useApiWithRedux';
import { FOLLOWS } from '../../modules/FollowInfoReducer';
import RecommendationCard from './RecommendationCard';

function RecommendationCarousel({ users }) {
  const follows = useSelector(({ follows }) => follows.follows);

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

  return (
    <Cards padding={'20px 10px'}>
      <RecommendationTitle color={buttonSkyBlue} />
      <CardsBlock>
        {recommendationList?.map((userId) => (
          <RecommendationCard key={userId} userId={userId} />
        ))}
      </CardsBlock>
    </Cards>
  );
}

export default RecommendationCarousel;
