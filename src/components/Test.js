import React from 'react';
import Buttons from './common/Buttons';
import Inputs from './common/Inputs';

/**
 * @description
 * 이 Test.js 파일은 styles-componenst 예시이니
 * 삭제하셔도 좋습니다.
 * Test.js는 App.js에서 import 되고 있습니다.
 * 이 또한 삭제해야 합니다.
 */

function Test() {
  return (
    <div>
      <Buttons btnHeigth={20} btnWidth={40} btnMargin={2} bgColor="red" />
      <Buttons btnWidth={30}>팔로우</Buttons>
      <Buttons btnWidth={90}>팔로우</Buttons>
      <Inputs placeholder="검색" />
    </div>
  );
}

export default Test;
