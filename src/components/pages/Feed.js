import React, { useCallback } from 'react';
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
  // console.log('posts전체리스트', posts);
  // console.table(posts);

  // const sort = posts?.map((sort) => sort.id).sort((a, b) => b - a);

  let mapped = posts?.map(function (id, idx) {
    return { index: id, value: idx };
  });

  console.log('sort', mapped);
  return (
    <HomeBlock>
      <PostBlock>
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        <PostUploadCard invokePosts={invokePosts} users={users} />
        {posts?.map((post, idx) => (
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
