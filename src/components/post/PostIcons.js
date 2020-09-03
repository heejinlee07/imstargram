import React from 'react';
import { PostIconsBlock } from './PostIcons.styles';
import { DmIcon } from '../../styles/commonIcons/SvgIcons';

export default function PostIcons() {
  return (
    <PostIconsBlock>
      <button>좋아요</button>
      <button>말풍선</button>
      <button>비행기</button>
      <button>책갈피</button>
    </PostIconsBlock>
  );
}
