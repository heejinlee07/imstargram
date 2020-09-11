import React, { useCallback } from 'react';
import {
  IndividualFeedWrap,
} from './IndividualFeed.styles';
import useApi from '../../hooks/useApi';
import { getPostsByUser } from '../../services/postsApi';
import IndividualNoFeed from './IndividualNoFeed';


const IndividualFeed = () => {

  // const getPostByUser = useCallback(() => getPostsByUser(), []);
  // const { data: userId } = useApi(
  //   getPostByUser
  // );

  return (
    <IndividualFeedWrap>
      {/* 게시물이 없는경우.
      해당 아이디에 게시물이 있으면 아래 컴퍼넌트 제거하고, 게시물 삽입? */}
      <IndividualNoFeed />
    </IndividualFeedWrap >
  );
}

export default IndividualFeed;
