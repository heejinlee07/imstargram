import React from 'react';
import SvgTest from '../../styles/SvgTest';
import Posts from '../post/Posts';
import { HomeWrap } from './Home.styles';

const Home = () => {
  return (
    <HomeWrap>
      <SvgTest />
      <Posts />
    </HomeWrap>
  );
};
export default Home;
