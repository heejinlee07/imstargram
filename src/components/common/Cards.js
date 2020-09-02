import React from 'react';
import { CardUi } from './Cards.styles';

export default function Cards({ children, ...rest }) {
  return <CardUi {...rest}>{children}</CardUi>;
}
