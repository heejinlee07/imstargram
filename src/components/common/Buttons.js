import React from 'react';
import { ButtonUi, WhiteButtonUi } from './Buttons.styles';

const Buttons = ({ children, ...rest }) => {
  return <ButtonUi {...rest}>{children}</ButtonUi>;
};

export const WhiteButtons = ({ children, ...rest }) => {
  return <WhiteButtonUi {...rest}>{children}</WhiteButtonUi>;
};

export default Buttons;
