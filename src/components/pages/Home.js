import React from 'react';
import PostUploadCard from '../postUpload/PostUploadCard';
import Recommendation from '../recommendation/Recommendation';
import { HomeBlock, PostBlock } from './Home.styles';
import Posts from '../post/Posts';
const Home = () => {
  return (
    <HomeBlock>
      <PostBlock>
        <PostUploadCard />
        <Posts />
      </PostBlock>
      <Recommendation />
    </HomeBlock>
  );
};
export default Home;
