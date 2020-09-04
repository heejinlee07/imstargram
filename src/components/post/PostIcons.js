import React, { useState } from 'react';
import { PostIconsBlock } from './PostIcons.styles';
import {
  HeartIcon,
  ReplyIcon,
  PaperPlaneIcon,
  BookmarkIcon,
} from '../../styles/commonIcons/SvgIcons';

import { iconList } from '../../styles/commonIcons/path';

export default function PostIcons() {
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
    <PostIconsBlock>
      <HeartIcon onClick={clickHeart} fill={!iconStatus.heart || 'red'}>
        <path
          d={iconStatus.heart ? iconList.activeHeart : iconList.inactiveHeart}
        />
      </HeartIcon>
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
  );
}
