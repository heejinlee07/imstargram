import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import DirectContainer from '../containers/DirectContainer';
import ExploreContainer from '../containers/ExploreContainer';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/direct" component={DirectContainer} />
      <Route path="/explore" component={ExploreContainer} />
    </Switch>
  );
};

export default MainRouter;

