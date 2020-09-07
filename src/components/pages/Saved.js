import React from 'react';
import { SavedWrap } from './Saved.styles';


const Saved = () => {
  return (
    <SavedWrap>
      <main>
        <div aria-label="저장 아이콘"></div>
        <h3>저장</h3>
        <p>다시 보고 싶은 사진과 동영상을 저장하세요. 콘텐츠를 저장해도 다른사람에게 알림이 전송되지 않으며,
        저장된 콘텐츠는 회원님만 볼 수 있습니다.
        </p>
      </main>
    </SavedWrap>
  );
};

export default Saved;