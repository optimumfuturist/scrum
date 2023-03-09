import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Slides } from "./components/slides";
import { List } from "./components/lists";
import { Button, IconLink } from './components/btn'
import "./App.css";

function App() {
  return (
    <Router basename="/scrum">
      <div className="App">
        <IconLink to="/list" className="pinned"><span role="img" aria-label="Settings">⚙️</span></IconLink>
        <Routes>
          <Route path="/list" element={<List />} exact />
          <Route path="/" element={<Slides />} />
          <Route element={
            <section className="page">
              <div className="page-card">
                <h1 className="title">Not Found</h1>
                <Button to="/" text="Go Home" />
              </div>
            </section>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
