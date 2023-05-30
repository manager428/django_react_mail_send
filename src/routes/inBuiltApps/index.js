import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const InBuiltApps = ({match}) => (
  <Switch>
    <Route path={`${match.url}/contacts`} component={asyncComponent(() => import('./Contact'))}/>
  </Switch>
);

export default InBuiltApps;
