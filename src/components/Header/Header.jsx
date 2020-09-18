import React from "react";
import "./HeaderStyle.css";
export default function Header() {
  return (
    <div className="header-div">
      <div className="header-section">
        <button className="header-btn">Next</button>
      </div>
      <div className="header-section center-section">
        <h1>Gallery</h1>
      </div>
      <div className="header-section">
        <button className="header-btn">Back</button>
      </div>
    </div>
  );
}
