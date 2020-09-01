import React from 'react';
import { SvgStyle } from './Svg.styles';

export const HomeIcon = ({ children, ...rest }) => {
  return (
    <SvgStyle aria-label="홈" viewBox="0 0 48 48" {...rest}>
      {children}
    </SvgStyle>
  );
};

export const DmIcon = ({ children, ...rest }) => {
  return (
    <SvgStyle aria-label="다이렉트 메세지" viewBox="0 0 48 48" {...rest}>
      {children}
    </SvgStyle>
  );
};
