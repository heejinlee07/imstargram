import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Home.styles';
import Post from '../post/Post';
import useApi from '../../hooks/useApi';
import { getPostsByUser } from '../../services/postsApi';
import { getUserById } from '../../services/usersApi';
import RecommendationCarousel from '../recommendation/RecommendationCarousel';

const Home = () => {
  const { userId } = useParams();
  const getUser = useCallback(() => getUserById(userId), [userId]);
  const { data: user } = useApi(getUser);

  const getPosts = useCallback(() => getPostsByUser(userId), [userId]);
  const { data: posts, isLoading, error, invoke: invokePosts } = useApi(
    getPosts
  );

  return (
    <HomeBlock>
      <PostBlock>
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        <PostUploadCard invokePosts={invokePosts} />
        {posts?.map((post, idx) => (
          <>
            <Post post={post} user={user} />
            {idx !== 0 && idx % 3 === 0 && <RecommendationCarousel />}
          </>
        ))}
      </PostBlock>
      <Recommendation />
    </HomeBlock>
  );
};
export default Home;
