import React, { useState, useEffect, useCallback } from 'react';
import Items from '../common/ThumbnailPost';
import useApi from '../../hooks/useApi';

import {
  ExploreTempleteUl,
  ExploreTempleteUlLtTwo,
} from './ExploreTemplete.style';

import { getRandomPost } from '../../services/postsApi';

export default function ExploreTemplete({ pageNum }) {
  const getRandom = useCallback(() => getRandomPost(pageNum), [pageNum]);
  const { data: posts } = useApi(getRandom);

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
                  replyCount={0}
                  imgUrl={post.image}
                  // isCarousel={post.image.length > 1}
                />
              </li>
              <li key="item1">
                <Items
                  likeCount={post.likeCount}
                  replyCount={0}
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
              replyCount={0}
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
