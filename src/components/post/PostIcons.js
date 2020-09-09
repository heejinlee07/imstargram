import React, { useState } from 'react';
import { PostIconsBlock, PostLikeCount } from './PostIcons.styles';
import {
  ReplyIcon,
  HeartIcon,
  PaperPlaneIcon,
  BookmarkIcon,
} from '../../styles/commonIcons/SvgIcons';
import { heartRed } from '../../styles/variables';

import { iconList } from '../../styles/commonIcons/path';

export default function PostIcons() {
  const [count, setCount] = useState(1);
  const [likeToggle, setLikeToggle] = useState(true);

  const [iconStatus, setIconStatus] = useState({
    bookmark: false,
  });

  const clickHeart = () => {
    setLikeToggle(false);
    setCount((prevNumber) => prevNumber - 1);
  };

  const UnClickHeart = () => {
    setLikeToggle(true);
    setCount((prevNumber) => prevNumber + 1);
  };

  const clickReply = () => {};

  const clickPaperPlane = () => {};

  const clickBookmark = () => {
    setIconStatus({ ...iconStatus, bookmark: !iconStatus.bookmark });
  };

  return (
    <>
      <PostIconsBlock>
        {likeToggle ? (
          <HeartIcon onClick={clickHeart} fill={heartRed}>
            <path d={iconList.activeHeart} />
          </HeartIcon>
        ) : (
          <HeartIcon onClick={UnClickHeart} fill={undefined}>
            <path d={iconList.inactiveHeart} />
          </HeartIcon>
        )}
        <ReplyIcon onClick={clickReply}>
          <path d={iconList.reply} />
        </ReplyIcon>
        <PaperPlaneIcon onClick={clickPaperPlane}>
          <path d={iconList.inactivePaperPlane} />
        </PaperPlaneIcon>
        <BookmarkIcon onClick={clickBookmark}>
          <path
            d={
              iconStatus.bookmark
                ? iconList.activeBookmark
                : iconList.inactiveBookmark
            }
          />
        </BookmarkIcon>
      </PostIconsBlock>
      {count !== 0 && <PostLikeCount>좋아요 {count}개</PostLikeCount>}
    </>
  );
}
