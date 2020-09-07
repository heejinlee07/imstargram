import React from 'react';
import {
  SignBody,
  SignContainder,
  Mockup,
  SignInBody,
  // SignInputContainer,
  SignLogo,
  SignFormContainer,
  // IntendSignUp,
  IntendSignQ,
  IntendSignLink,
  DownloadApp,
  LinkContainer,
  AppLink,
} from './SignIn.styles';

import Inputs from '../common/Inputs';
import Cards from '../common/Cards';
import Buttons from '../common/Buttons';
import { buttonSkyBlue } from '../../styles/variables';

const SignIn = () => {
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
        <SignInBody>
          <Cards bgColor={'#fff'} height={60}>
            {/* <SignInputContainer> */}
            <SignLogo>I'mstargram</SignLogo>
            <SignFormContainer>
              <form>
                <fieldset>
                  <legend>로그인 폼</legend>
                  <div>
                    <label for="userID">아이디</label>
                    <Inputs
                      InputWidth={258}
                      InputHeight={36}
                      placeholder={'전화번호, 사용자 이름 또는 이메일'}
                    ></Inputs>
                  </div>
                  <div>
                    <label for="userID">비밀번호</label>
                    <Inputs
                      InputWidth={258}
                      InputHeight={36}
                      placeholder={'비밀번호'}
                    ></Inputs>
                  </div>
                  <Buttons
                    width={100}
                    bgColor={buttonSkyBlue}
                    color={'#fff'}
                    opacity={0.3}
                  >
                    로그인
                  </Buttons>
                </fieldset>
              </form>
            </SignFormContainer>
            {/* </SignInputContainer> */}
          </Cards>
          <Cards height={10} bgColor={'#fff'}>
            <IntendSignQ>
              계정이 없으신가요?
              <IntendSignLink>가입하기</IntendSignLink>
            </IntendSignQ>
          </Cards>
          {/* <IntendSignUp></IntendSignUp> */}
          <DownloadApp>
            앱을 다운로드하세요.
            <LinkContainer>
              <AppLink
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                alt="App Store에서 이용 가능"
              />
              <AppLink
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                alt="Google Play에서 이용 가능"
              />
            </LinkContainer>
          </DownloadApp>
        </SignInBody>
      </SignContainder>
    </SignBody>
  );
};

export default SignIn;
