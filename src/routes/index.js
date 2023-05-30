import React from "react";
import { Route, Switch} from "react-router-dom";

import InBuiltApps from "./inBuiltApps/index";


const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps}/>
    </Switch>
  </div>
);

export default App;
