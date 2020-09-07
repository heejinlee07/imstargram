import React from 'react';
import {
  FacebookSignIn,
  FacebookLogo,
  FacebookSignInLink,
} from './FacebookSign.styles';

const FacebookSign = () => {
  return (
    <FacebookSignIn aria-label="button">
      <FacebookLogo />
      <FacebookSignInLink>Facebook으로 로그인</FacebookSignInLink>
    </FacebookSignIn>
  );
};

export default FacebookSign;
