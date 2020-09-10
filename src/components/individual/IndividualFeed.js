import React, { useCallback } from 'react';
import {
  IndividualFeedWrap,
} from './IndividualFeed.styles';
import useApi from '../../hooks/useApi';
import { getPostsByUser } from '../../services/postsApi';
import Post from '../post/Post';
import IndividualNoFeed from './IndividualNoFeed';


const IndividualFeed = () => {

  const getPostByUser = useCallback(() => getPostsByUser(), []);
  const { data: userId } = useApi(
    getPostByUser
  );

  return (
    <IndividualFeedWrap>
      <IndividualNoFeed />
    </IndividualFeedWrap >
  );
}

export default IndividualFeed;
