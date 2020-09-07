import React, { useState } from 'react';
import Cards from '../common/Cards';
import Inputs from '../common/Inputs';
import Buttons from '../common/Buttons';
import PostContents from './PostContents';

function PostUpload() {
  const [activePhoto, setActivePhoto] = useState(false);
  return (
    <div>
      <h1>업로드 컴포넌트 만드는중임</h1>
      <Cards>
        <Inputs
          height={200}
          width={300}
          placeholder="포스트를 업로드하세요:)"
        />
        {!activePhoto ? (
          <Buttons onClick={() => setActivePhoto(true)}>사진고르기</Buttons>
        ) : (
          <PostContents />
        )}
        <Buttons>게시</Buttons>
      </Cards>
    </div>
  );
}

export default PostUpload;
