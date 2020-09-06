import React, { useCallback } from 'react';
import Cards from '../common/Cards';
import PostHeader from './PostHeader';
import PostContents from './PostContents';
import PostCommentList from './PostCommentList';

import {
  getPostsByUser,
  addPost,
  editPost,
  deletePost,
} from '../../services/postsApi';

import useApi from '../../hooks/useApi';

function Posts() {
  const userId = 1;
  const postId = 1;

  const getPosts = useCallback(() => getPostsByUser(userId), [userId]);
  const { data: posts, isLoading, error, invoke: invokePosts } = useApi(
    getPosts
  );

  return (
    <div>
      <Cards padding={'0'}>
        <PostHeader />
        <PostContents />
        <PostCommentList />
        {isLoading && <div>로딩 중...</div>}
        {error && <div>{error.message}</div>}
        {posts?.map((post) => (
          <div key={post.id}>{post.text}</div>
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
