import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import DirectContainer from '../containers/DirectContainer';
import ExploreContainer from '../containers/ExploreContainer';
import PersonalContainer from '../containers/PersonalContainer';
import AccountsContainer from '../containers/AccountsContainer';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/direct" component={DirectContainer} />
      <Route path="/explore" component={ExploreContainer} />
      <Route path="/personal" component={PersonalContainer} />
      <Route path="/accounts" component={AccountsContainer} />
      <Route path="/user/:userId" component={HomeContainer} />
    </Switch>
  );
};

export default MainRouter;
