import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Saved from '../components/pages/Saved';

const SubRouter = () => {
  return (
    <Switch>
      <Route exact path="/saved" component={Saved} />

    </Switch>
  );
};

export default SubRouter;