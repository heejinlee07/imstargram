import React, { useState } from 'react';
import { PostIconsBlock, PostLikeCount } from './PostIcons.styles';
import { SvgIcon } from '../../styles/commonIcons/SvgIcons';
import { heartRed } from '../../styles/variables';

import { iconList } from '../../styles/commonIcons/path';

export default function PostIcons() {
  const likeCount = 100;

  const [iconStatus, setIconStatus] = useState({
    heart: false,
    bookmark: false,
  });

  const clickHeart = () => {
    setIconStatus({ ...iconStatus, heart: !iconStatus.heart });
  };

  const clickReply = () => {};

  const clickPaperPlane = () => {};

  const clickBookmark = () => {
    setIconStatus({ ...iconStatus, bookmark: !iconStatus.bookmark });
  };

  return (
    <>
      <PostIconsBlock>
        <SvgIcon
          onClick={clickHeart}
          fill={iconStatus.heart ? heartRed : undefined}
        >
          <path
            d={iconStatus.heart ? iconList.activeHeart : iconList.inactiveHeart}
          />
        </SvgIcon>
        <SvgIcon onClick={clickReply}>
          <path d={iconList.reply} />
        </SvgIcon>
        <SvgIcon onClick={clickPaperPlane}>
          <path d={iconList.inactivePaperPlane} />
        </SvgIcon>
        <SvgIcon onClick={clickBookmark}>
          <path
            d={
              iconStatus.bookmark
                ? iconList.activeBookmark
                : iconList.inactiveBookmark
            }
          />
        </SvgIcon>
      </PostIconsBlock>
      {!likeCount || <PostLikeCount>좋아요 {likeCount}개</PostLikeCount>}
    </>
  );
}
