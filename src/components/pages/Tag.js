import React from 'react';
import { TagWrap } from './Tag.styles';

const Tag = () => {
  return (
    <TagWrap>
      <main>
        <div aria-label="태그 아이콘"></div>
        <h3>내가 나온 사진</h3>
        <p>사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.</p>
      </main>
    </TagWrap>
  );
};

export default Tag;