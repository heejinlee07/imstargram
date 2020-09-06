import React, { useCallback } from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostComments from './PostComments';

import {
  getPostsByUser,
  getCommentsByPost,
  addPost,
  editPost,
  deletePost,
  getFollowingsByFollowerId,
  addFollowInfo,
  deleteFollowInfo,
  getFollowersByFollowingId,
} from '../../services/posts';
import useApi from '../../hooks/useApi';

function Posts() {
  const userId = 1;
  const postId = 1;

  const getPosts = useCallback(() => getPostsByUser(userId), [userId]);
  const getComments = useCallback(() => getCommentsByPost(postId), [postId]);
  const { data: posts, isLoading, error, invoke: invokePosts } = useApi(
    getPosts
  );
  const { data: comments } = useApi(getComments);
  const getfollowings = useCallback(() => getFollowingsByFollowerId(userId), [
    userId,
  ]);
  const getfollowers = useCallback(() => getFollowersByFollowingId(userId), [
    userId,
  ]);
  const { data: followings, invoke: invokefollowinfos } = useApi(getfollowings);
  const { data: followers, invoke: invokefollowerInfos } = useApi(getfollowers);

  return (
    <div>
      <Cards padding={'0'}>
        <PostHeader />
        {followings?.map((following) => (
          <>
            <div>{following.followingId}</div>
          </>
        ))}
        <hr />
        {followers?.map((follower) => (
          <>
            <div>{follower.followerId}</div>
          </>
        ))}
        <button
          onClick={async () => {
            await addFollowInfo({ followerId: 3, followingId: 1 });
            invokefollowinfos();
          }}
        >
          팔로우하기
        </button>
        <button
          onClick={async () => {
            await deleteFollowInfo(7);
            await invokefollowinfos();
          }}
        >
          취소하기
        </button>
        <PostContents />
        <PostComments />
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        {posts?.map((post) => (
          <div>{post.text}</div>
        ))}
        <hr />
        {comments?.map((comment) => (
          <div>{comment.text}</div>
        ))}
        <button
          type="button"
          onClick={async () => {
            await addPost({
              userId: 1,
              text: '3번은 금요일 제일 좋다',
              image: 'something url 3',
              location: 'seoul',
              likeCount: 12,
              uploadDate: '2020/09/04',
            });

            await invokePosts();
          }}
        >
          Add Post
        </button>
        <button
          type="button"
          onClick={async () => {
            await editPost(1, {
              userId: 1,
              text: '실제로 업데이트 해보니 좋네요',
              image: 'something url 3',
              location: 'seoul',
              likeCount: 15,
              uploadDate: '2020/09/04',
            });

            await invokePosts();
          }}
        >
          Edit Post
        </button>
        <button
          type="button"
          onClick={async () => {
            await deletePost(1);
            await invokePosts();
          }}
        >
          Delete Post
        </button>
      </Cards>
    </div>
  );
}

export default Posts;
