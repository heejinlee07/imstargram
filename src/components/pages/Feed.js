import React, { useCallback } from 'react';
import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Feed.styles';
import Post from '../post/Post';
import useApi from '../../hooks/useApi';
import { getPosts } from '../../services/postsApi';
import { getUsers } from '../../services/usersApi';
import RecommendationCarousel from '../recommendation/RecommendationCarousel';
import { useSelector } from 'react-redux';

const Feed = () => {
  const posts = useSelector(({ posts }) => posts.posts);
  const status = useSelector(({ posts }) => posts.status);

  const getAllUsers = useCallback(() => getUsers(), []);
  const { data: users } = useApi(getAllUsers);

  const getFeed = useCallback(() => getPosts(), []);
  const { invoke: invokePosts } = useApi(getFeed);
  // console.log('전체 피드', posts);

  const descendingOrder = posts?.sort((a, b) => {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  });

  return (
    <HomeBlock>
      <PostBlock>
        {status === 'loading' && <div>로딩 중...</div>}
        {status === 'error' && <div>에러 발생...</div>}
        <PostUploadCard invokePosts={invokePosts} users={users} />
        <RecommendationCarousel users={users} />
        {descendingOrder?.map((post, idx) => (
          <>
            <Post key={post.id} post={post} users={users} />
            {/* {idx !== 0 && idx % 2 === 0 && (
              <RecommendationCarousel users={users} />
            )} */}
          </>
        ))}
      </PostBlock>
      <Recommendation users={users} />
    </HomeBlock>
  );
};
export default Feed;
