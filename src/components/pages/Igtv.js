import React from 'react';
import { IgtvWrap } from '../pages/Igtv.styles';
import { WhiteButtons } from '../common/Buttons';

const Igtv = () => {
  return (
    <IgtvWrap>
      <h2>동영상 업로드</h2>
      <p>동영상은 길이가 1~60분 사이여야 합니다.</p>
      <WhiteButtons>업로드</WhiteButtons>
    </IgtvWrap>
  );
};

export default Igtv;