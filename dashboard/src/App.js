import React from "react";
import "./App.css";
import Analysis from "./components/Analysis.js";
import Ratings from "./components/Ratings.js";
import Reviews from "./components/Reviews.js";
import Sidebar from "./components/Sidebar.js";
import Visitors from "./components/Visitors.js";

function App() {
  return (
    <div className="App">
      <div class="title">Dashboard</div>
      <div className="container">
        <div className="gridBox">
          <div className="flexBoxRow c1rA">
            <div className="component" style={{ padding: "40px" }}>
              <Sidebar />
            </div>
          </div>
          <div className="flexBoxRow c2r1">
            <div className="component">
              <Reviews />
            </div>
            <div className="component">
              <Ratings />
            </div>
            <div className="component">
              <Analysis />
            </div>
          </div>
          <div className="flexBoxRow c2r2">
            <div className="component">
              <Visitors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
