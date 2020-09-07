import React from 'react';
import Cards from '../../common/Cards';
import { SignInBody, SignLogo } from './SignFormContainer.styles';
import SignInFormContainer from '../signIn/signInFormContainer/SignInFormContainer';
import IntendSign from '../intendSign/IntendSign';
import AppLink from '../appLink/AppLink';

const SignFormContainer = () => {
  return (
    <SignInBody>
      <Cards
        bgColor={'#fff'}
        padding={'10px 0px 10px 0px'}
        margin={'0px 0px 10px 0px'}
      >
        <SignLogo>I'mstargram</SignLogo>
        <SignInFormContainer />
      </Cards>
      <IntendSign />
      <AppLink />
    </SignInBody>
  );
};

export default SignFormContainer;
