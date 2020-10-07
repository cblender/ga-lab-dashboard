import React from "react";
import "./Analysis.css";
import "./universal.css";

function Analysis() {
  return (
    <div className="analysis">
      <h1>Analysis</h1>
      <div className="analysisGrid">
        <div
          className="Umeter col1 row1"
          style={{
            lineHeight: "0px",
            position: "relative",
            bottom: "20px",
          }}
        >
          <p>580</p>
        </div>
        <div
          className="Umeter col1 row2"
          style={{
            lineHeight: "0px",
            position: "relative",
            bottom: "20px",
          }}
        >
          <p>625</p>
        </div>
        <div
          className="Umeter col1 row3"
          style={{
            lineHeight: "0px",
            position: "relative",
            bottom: "20px",
          }}
        >
          <p>917</p>
        </div>
        <div
          className="Usubtitle col2 row1"
          style={{
            textAlign: "center",
            position: "relative",
            top: "25px",
          }}
        >
          (hot)
        </div>
        <div
          className="Usubtitle col2 row2"
          style={{
            textAlign: "center",
            position: "relative",
            top: "25px",
          }}
        >
          (cool)
        </div>
        <div
          className="Usubtitle col2 row3"
          style={{
            textAlign: "center",
            position: "relative",
            top: "25px",
          }}
        >
          (fun)
        </div>
      </div>
    </div>
  );
}

export default Analysis;
