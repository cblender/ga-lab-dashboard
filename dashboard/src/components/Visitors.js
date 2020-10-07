import React from "react";
import "./Visitors.css";
import "./universal.css";

function Visitors() {
  return (
    <div className="visitors">
      <h1>Visitors</h1>
      <div class="UflexRow">
        <div>
          <div class="Umeter">70</div>
          <div className="Usubtitle">(day)</div>
        </div>
        <div>
          <div class="Umeter">572</div>
          <div className="Usubtitle">(week)</div>
        </div>
        <div>
          <div class="Umeter">2104</div>
          <div className="Usubtitle">(month)</div>
        </div>
        <div>
          <div class="Umeter">26569</div>
          <div className="Usubtitle">(year)</div>
        </div>
      </div>
    </div>
  );
}

export default Visitors;
