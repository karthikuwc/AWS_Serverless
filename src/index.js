import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Errpage from 'signupcommon/errPage';


import "assets/css/material-dashboard-react.css?v=1.4.1";

//Load all routes for pages that aren't within Dashboard
import indexRoutes from "routes/index.jsx";

//All components to be rendered passed to AsyncComponent as a prop to be "Lazy Loaded"
import AsyncComponent from 'signupcommon/AsyncComponent';

//To enable dynamic URL handling. Using history API (https://www.npmjs.com/package/history).
const hist = createBrowserHistory();

//React router handles all routes passed, both from browser and from links within site.
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {//For every route in indexroutes array return the relevant route. 
        indexRoutes.map((prop, key) => {
        const Component = prop.component;
        
        //(props)=><AsyncComponent {...props} /> ensures that props from one component are passed to next component rendered.
        if (prop.exact)
          return <Route exact path={prop.path} render={(props)=><AsyncComponent {...props} moduleProvider={Component}/>} key={key} />;
        return <Route path={prop.path} render={(props)=><AsyncComponent {...props} moduleProvider={Component}/>} key={key} />;
      })}
      <Route render={()=><Errpage/>} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
