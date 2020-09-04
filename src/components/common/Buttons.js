import React from 'react';
import { ButtonUi } from './Buttons.styles';

/**
 * @Description
 *
 * 팔로우용 파판 버튼
 */

const Buttons = ({ children, ...rest }) => {
  return <ButtonUi {...rest}>{children}</ButtonUi>;
};

export default Buttons;
