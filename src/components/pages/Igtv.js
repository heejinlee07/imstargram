import React from 'react';
import { IgtvWrap } from '../pages/Igtv.styles';

const Igtv = () => {
  return (
    <IgtvWrap>
      <main>
        <div aria-label="동영상 아이콘"></div>
        <h3>동영상 업로드</h3>
        <p>동영상은 길이가 1~60분 사이여야 합니다.</p>
        <button>
          업로드
      </button>
      </main>
    </IgtvWrap >
  );
};

export default Igtv;