import React, { useState, useEffect } from 'react';
import { ExploreWrap } from './Explore.styles';
import ExploreTemplete from '../explore/ExploreTemplete';

const Explore = () => {
  const [templeteList, setTempleteList] = useState([]);

  const getNextPosts = () => {
    setTempleteList([...templeteList, 1]);
  };

  useEffect(() => {
    getNextPosts();
  }, []);

  return (
    <ExploreWrap onClick={getNextPosts}>
      {templeteList.map((num, index, all) => (
        <ExploreTemplete
          pageNum={num}
          key={`page${index}`}
          isLast={index === all.length - 1}
        />
      ))}
    </ExploreWrap>
  );
};

export default Explore;
