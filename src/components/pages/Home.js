import React, { useCallback, useState, useEffect } from 'react';
import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Home.styles';
import Posts from '../post/Posts';
import useApi from '../../hooks/useApi';
import { getPostsByUser } from '../../services/postsApi';
import { getFollowingsByFollowerId } from '../../services/followInfoApi';
import { getUserById } from '../../services/usersApi';
import api from '../../services/api';

const Home = () => {
  const [user, setUser] = useState();
  const [feed, setFeed] = useState([]);

  const userId = 1;

  // const getUser = useCallback(() => getUserById(userId), [userId]);
  // const { data: users } = useApi(getUser);
  // setUser(users);
  // console.log(users);

  const getFollowingUsers = useCallback(
    () => getFollowingsByFollowerId(userId),
    [userId]
  );

  const { data: followingUser } = useApi(getFollowingUsers);
  console.log(followingUser);
  let targetUserId = followingUser?.map((user) => user.followingId);
  console.log('targetid', targetUserId);

  const getPosts = useCallback(() => getPostsByUser(userId), [userId]);
  const { data: posts, isLoading, error, invoke: invokePosts } = useApi(
    getPosts
  );

  return (
    <HomeBlock>
      <PostBlock>
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        <PostUploadCard />
      </PostBlock>
      <Recommendation />
    </HomeBlock>
  );
};
export default Home;
