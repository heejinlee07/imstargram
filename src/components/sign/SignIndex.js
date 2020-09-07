import React from 'react';
import { SignBody, SignContainder, Mockup } from './SignIndex.styles';
import SignFormContainer from './signForm/SignFormContainer';

const SignIndex = () => {
  /**
   * 이미지 저장 주소
   * 배경 https://instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png
   * 내부 이미지
   * https://instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg
   * https://instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg
   * https://instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg
   * https://instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg
   * https://instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg
   */
  return (
    <SignBody>
      <SignContainder>
        <Mockup />
        <SignFormContainer />
      </SignContainder>
    </SignBody>
  );
};

export default SignIndex;
