import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "./routes";
import NotFound from './pages/NotFound';
import { QueryParamProvider } from 'use-query-params';

function RouterSwitches(): JSX.Element[] {

  let doms: JSX.Element[] = [];

  for (let routeDetail of routes) {
    let exact = true;  // Default true
    if (routeDetail.exact === false) {
      exact = false;
    }

    var children;

    if (routeDetail.redirectTo) {
      children = <Redirect to={routeDetail.redirectTo} />;
    } else {
      children = <routeDetail.component routeDetail={routeDetail} />
       
    }
    doms.push(
      <Route 
        key={routeDetail.id}
        exact={exact} 
        path={routeDetail.path} 
      >
        {children}
      </Route>
    )
  }
  return doms;
}

function App() {

  console.log(process.env);
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          {RouterSwitches()}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
