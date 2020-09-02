import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact='/' component={MainPage} />

    </Switch>
  );
};

export default MainRouter;