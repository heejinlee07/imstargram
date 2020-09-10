import React, { useState, useEffect, useCallback } from 'react';
import Items from '../common/ThumbnailPost';
import useApi from '../../hooks/useApi';

import {
  ExploreTempleteUl,
  ExploreTempleteUlLtTwo,
} from './ExploreTemplete.style';

import { getRandomPost } from '../../services/postsApi';
import { getCommentByPostIds } from '../../services/commentsApi';

export default function ExploreTemplete({ pageNum }) {
  const getRandom = useCallback(() => getRandomPost(pageNum), [pageNum]);
  const { data: posts } = useApi(getRandom);
  // reply 구하기
  const postIds = posts !== undefined ? posts.map((post) => post.id) : [];
  const getReply = useCallback(() => getCommentByPostIds(postIds), []);
  const { data: comments } = useApi(getReply);

  console.log(comments);

  const getReplayCount = (postId) => {
    return comments !== undefined
      ? comments.filter((reply) => reply.postId === postId).length
      : 0;
  };

  return posts === undefined ? (
    <div>로딩중...</div>
  ) : posts.length > 2 ? (
    <ExploreTempleteUl>
      {posts.map((post, i, a) => {
        if (i === 1) return;
        return i === 0 ? (
          <li key="itemWrap">
            <ul>
              <li key="item0">
                <Items
                  likeCount={post.likeCount}
                  replyCount={getReplayCount(post.id)}
                  imgUrl={post.image}
                  // isCarousel={post.image.length > 1}
                />
              </li>
              <li key="item1">
                <Items
                  likeCount={a[1].likeCount}
                  replyCount={getReplayCount(a[1].id)}
                  imgUrl={a[1].image}
                  // isCarousel={a[1].image.length > 1}
                />
              </li>
            </ul>
          </li>
        ) : (
          <li key={`item${i}`}>
            <Items
              likeCount={post.likeCount}
              replyCount={getReplayCount(post.id)}
              imgUrl={post.image}
              // isCarousel={post.image.length > 1}
            />
          </li>
        );
      })}
    </ExploreTempleteUl>
  ) : (
    <ExploreTempleteUlLtTwo>
      {posts.map((post, i) => (
        <li key={`item${i}`}>
          <Items
            imgUrl={post.image}
            // isCarousel={post.image.length > 1}
          />
        </li>
      ))}
    </ExploreTempleteUlLtTwo>
  );
}
