import React from 'react';
import Home from '../components/pages/Home';
import SubRouter from '../router/SubRouter';

const HomeContainer = () => {
  return (
    <div>
      <Home />
      <div>하이하이</div>
      <SubRouter />
    </div>
  );
};
export default HomeContainer;
