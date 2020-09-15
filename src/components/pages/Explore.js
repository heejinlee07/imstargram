import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ExploreWrap } from './Explore.styles';
import ExploreTemplete from '../explore/ExploreTemplete';
import { useSelector } from 'react-redux';

const Explore = () => {
  const infiniteScroll = useSelector((state) => state.infiniteScroll);
  const [templeteList, setTempleteList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getNextPosts = () => {
    setTempleteList([...templeteList, pageCount + 1]);
    setPageCount(pageCount + 1);
    return templeteList;
  };

  console.log(infiniteScroll);
  useEffect(() => {
    getNextPosts();
  }, []);

  return (
    <ExploreWrap>
      <InfiniteScroll
        dataLength={templeteList.length}
        next={getNextPosts}
        style={{ display: 'flex', flexDirection: 'column' }} //To put endMessage and loader to the top.
        inverse={false} //
        hasMore={!infiniteScroll.isLast}
        loader={<h4>Loading...</h4>}
        style={{ overflow: 'hidden' }}
      >
        {templeteList.map((v, index) => (
          <ExploreTemplete pageNum={v} key={`templeteNum${index}`} />
        ))}
      </InfiniteScroll>
    </ExploreWrap>
  );
};

export default Explore;
