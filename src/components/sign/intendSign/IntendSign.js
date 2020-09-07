import React from 'react';
import Cards from '../../common/Cards';
import { IntendSignQ, IntendSignLink } from './IntendSign.styles';

const IntendSign = () => {
  return (
    <Cards
      bgColor={'#fff'}
      padding={'10px 0px 10px 0px'}
      margin={'0px 0px 10px 0px'}
    >
      <IntendSignQ>
        계정이 없으신가요?
        <IntendSignLink>가입하기</IntendSignLink>
      </IntendSignQ>
    </Cards>
  );
};

export default IntendSign;
