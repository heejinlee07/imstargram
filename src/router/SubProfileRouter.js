import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Personal from '../components/pages/Personal';
import Saved from '../components/pages/Saved';
import Igtv from '../components/pages/Igtv';
import Tag from '../components/pages/Tag';
import IndividualFeed from '../components/individual/IndividualFeed';


const SubProfileRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Personal} />
      <Route path="/Personal/igtv" component={Igtv} />
      <Route path="/Personal/saved" component={Saved} />
      <Route path="/Personal/tag" component={Tag} />
      <Route path="/Personal/individual" component={IndividualFeed} />

    </Switch>
  );
};

export default SubProfileRouter;