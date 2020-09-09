import React from 'react';
import { ExploreWrap } from './Explore.styles';
import ExploreTemplete from '../explore/ExploreTemplete';

const Explore = () => {
  return (
    <ExploreWrap>
      <ExploreTemplete pageNum={1} />
    </ExploreWrap>
  );
};

export default Explore;
