import React, { useCallback } from 'react';
import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Feed.styles';
import Post from '../post/Post';
import useApiWithRedux from '../../hooks/useApiWithRedux';
import { getPosts } from '../../services/postsApi';
import { getUsers } from '../../services/usersApi';
import RecommendationCarousel from '../recommendation/RecommendationCarousel';
import { useSelector } from 'react-redux';
import { POSTS } from '../../modules/PostsReducer';
import { USERS } from '../../modules/UsersReducer';

const Feed = () => {
  const posts = useSelector(({ posts }) => posts.posts);
  const status = useSelector(({ posts }) => posts.status);
  const users = useSelector(({ users }) => users.users);

  const getAllUsers = useCallback(() => getUsers(), []);
  const { invoke: invokeUsers } = useApiWithRedux(USERS, getAllUsers);

  const getFeed = useCallback(() => getPosts(), []);
  const { invoke: invokePosts } = useApiWithRedux(POSTS, getFeed);

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
            {idx !== 0 && idx % 3 === 0 && (
              <RecommendationCarousel key={users.id} users={users} />
            )}
          </>
        ))}
      </PostBlock>
      <Recommendation users={users} />
    </HomeBlock>
  );
};

export default Feed;
