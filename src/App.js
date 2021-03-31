import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Slides } from "./components/slides";
import { List } from "./components/lists";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <List />
          </Route>
          <Route path="/slides">
            <Slides />
          </Route>
          <Route>
            <section className="page">
              <div className="page-card">
                <h1 className="title">Not Found</h1>
                <Link className="pushable" to="/">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span class="front">Go Home</span>
                </Link>
              </div>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
