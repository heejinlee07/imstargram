import React, { useCallback, useState } from 'react';
import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Feed.styles';
import Post from '../post/Post';
import useApi from '../../hooks/useApi';
import { getPosts } from '../../services/postsApi';
import { getUsers } from '../../services/usersApi';
import RecommendationCarousel from '../recommendation/RecommendationCarousel';

const Feed = () => {
  const getAllUsers = useCallback(() => getUsers(), []);
  const { data: users } = useApi(getAllUsers);
  // console.log('users전체리스트', users);

  const getFeed = useCallback(() => getPosts(), []);
  const { data: posts, isLoading, error, invoke: invokePosts } = useApi(
    getFeed
  );

  // console.log('전체 피드', posts);

  const descendingOrder = posts?.sort((a, b) => {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  });

  return (
    <HomeBlock>
      <PostBlock>
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        <PostUploadCard invokePosts={invokePosts} users={users} />
        {descendingOrder?.map((post, idx) => (
          <>
            <Post key={post.id} post={post} users={users} />
            {idx !== 0 && idx % 3 === 0 && <RecommendationCarousel />}
          </>
        ))}
      </PostBlock>
      <Recommendation />
    </HomeBlock>
  );
};
export default Feed;
