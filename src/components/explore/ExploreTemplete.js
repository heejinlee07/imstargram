import React, { useCallback, useRef, useEffect } from 'react';
import ThumbnailPost from '../common/ThumbnailPost';
import useApi from '../../hooks/useApi';
import { useDispatch } from 'react-redux';
import { setLast } from '../../modules/InfiniteScrollReducer';

import {
  ExploreTempleteUl,
  ExploreTempleteUlLtTwo,
} from './ExploreTemplete.style';

// api 요청
import { getRandomPost } from '../../services/postsApi';
import { getCommentByPostIds } from '../../services/commentsApi';

export default function ExploreTemplete({ pageNum }) {
  const dispatch = useDispatch();
  const $ExploreTempleteUl = useRef();
  // random post data 구하기
  const getRandom = useCallback(() => getRandomPost(pageNum), [pageNum]);
  const { data: posts, headers } = useApi(getRandom);

  // reply 구하기
  const postIds = posts !== undefined ? posts.map((post) => post.id) : [];
  const getReply = useCallback(() => getCommentByPostIds(postIds), []);
  const { data: comments } = useApi(getReply);

  // 총 좋아요 수 구하는 함수
  const getReplayCount = (postId) => {
    return comments !== undefined
      ? comments.filter((reply) => reply.postId === postId).length
      : 0;
  };

  const click = () => {};

  useEffect(() => {
    if (!headers) return;
    if (!headers.link.includes('next'))
      dispatch(
        // setTarget($ExploreTempleteUl.current.lastElementChild, 'explore')
        setLast()
      );
    // else dispatch(setTarget(null, 'explore'));
  }, [$ExploreTempleteUl.current]);

  return posts === undefined ? (
    <div>로딩중...</div>
  ) : posts.length > 2 ? (
    <ExploreTempleteUl ref={$ExploreTempleteUl}>
      {posts.map((post, i, a) => {
        if (i === 1) return;
        return i === 0 ? (
          <li key="itemWrap">
            <ul>
              <li key="post0">
                <ThumbnailPost
                  likeCount={post.likeCount}
                  replyCount={getReplayCount(post.id)}
                  imgUrl={post.image}
                  onClick={click}
                  // isCarousel={post.image.length > 1}
                />
              </li>
              <li key="post1">
                <ThumbnailPost
                  likeCount={a[1].likeCount}
                  replyCount={getReplayCount(a[1].id)}
                  imgUrl={a[1].image}
                  onClick={click}
                  // isCarousel={a[1].image.length > 1}
                />
              </li>
            </ul>
          </li>
        ) : (
          <li key={`post${i}`}>
            <ThumbnailPost
              likeCount={post.likeCount}
              replyCount={getReplayCount(post.id)}
              imgUrl={post.image}
              onClick={click}
              // isCarousel={post.image.length > 1}
            />
          </li>
        );
      })}
    </ExploreTempleteUl>
  ) : (
    <ExploreTempleteUlLtTwo ref={$ExploreTempleteUl}>
      {posts.map((post, i) => (
        <li key={`post${i}`}>
          <ThumbnailPost
            imgUrl={post.image}
            onClick={click}
            // isCarousel={post.image.length > 1}
          />
        </li>
      ))}
    </ExploreTempleteUlLtTwo>
  );
}
