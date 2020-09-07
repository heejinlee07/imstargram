import React from 'react';
import { buttonSkyBlue } from '../../../../styles/variables';
import Inputs from '../../../common/Inputs';
import Buttons from '../../../common/Buttons';
import {
  SignInForm,
  OtherSign,
  OtherSignLine,
  OtherSignWord,
  PasswordReset,
} from './SignInFormContainer.styles';
import FacebookSign from '../facebookSign/FacebookSign';

const SignInFormContainer = () => {
  return (
    <SignInForm>
      <form>
        <fieldset>
          <legend>로그인 폼</legend>
          <div>
            <label htmlFor="userID">아이디</label>
            <Inputs
              width={268}
              height={38}
              placeholder={'전화번호, 사용자 이름 또는 이메일'}
              margin={'0px 0px 6px 0px'}
            ></Inputs>
          </div>
          <div>
            <label htmlFor="userID">비밀번호</label>
            <Inputs
              width={268}
              height={38}
              placeholder={'비밀번호'}
              margin={'0px 0px 6px 0px'}
            ></Inputs>
          </div>
          <Buttons
            bgColor={buttonSkyBlue}
            color={'#fff'}
            opacity={0.3}
            margin={'8px 3px 8px 3px'}
          >
            로그인
          </Buttons>
        </fieldset>
      </form>
      <OtherSign>
        <OtherSignLine />
        <OtherSignWord>또는</OtherSignWord>
      </OtherSign>
      <FacebookSign />
      <PasswordReset>비밀번호를 잊으셨나요?</PasswordReset>
    </SignInForm>
  );
};

export default SignInFormContainer;
