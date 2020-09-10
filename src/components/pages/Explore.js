import React, { useRef, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import { ExploreWrap } from './Explore.styles';
import ExploreTemplete from '../explore/ExploreTemplete';

const Explore = () => {
  const [templeteList, setTempleteList] = useState([1]);
  const [isDataEnd, setDataEnd] = useState(false);
  const $wrap = useRef();

  useEffect(() => {
    if (!$wrap.current) return;
    console.log($wrap.current);
  }, [$wrap.current]);

  return (
    <ExploreWrap ref={$wrap}>
      {templeteList.map((num) => (
        <ExploreTemplete
          pageNum={num}
          setDataEnd={setDataEnd}
          key={`page${num}`}
        />
      ))}
    </ExploreWrap>
  );
};

export default Explore;
