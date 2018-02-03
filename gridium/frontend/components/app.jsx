import React from "react";
import Power from "./power/power.jsx";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
  <div className="app">
    <Route exact path="/" component={Power} />
  </div>
);

export default App;
