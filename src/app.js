import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header";
import Login from "./screens/login/login";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
