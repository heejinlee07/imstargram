import React, { useState } from 'react';
import { HeartIcon, BookmarkIcon } from '../styles/commonIcons/SvgIcons';
import PostCarousel from './PostCarousel';

function PostContents() {
  const [active, setActive] = useState({
    heart: false,
    bookmark: false,
  });

  const heartClick = (e) => {
    if (active.heart) setActive({ ...active, heart: false });
    else setActive({ ...active, heart: true });
  };

  const bookmarkClick = (e) => {
    if (active.bookmark) setActive({ ...active, bookmark: false });
    else setActive({ ...active, bookmark: true });
  };

  return (
    <div>
      <PostCarousel />
      <HeartIcon isActive={active.heart} />
      <BookmarkIcon isActive={active.bookmark} />
    </div>
  );
}

export default PostContents;
