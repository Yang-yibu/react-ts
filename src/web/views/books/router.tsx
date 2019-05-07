
import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";

export default class BRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/> 
        </App>
      </HashRouter>
    )
  }
}
