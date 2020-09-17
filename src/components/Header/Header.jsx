import React from "react";
import HeaderStyle from "./HeaderStyle.css";
export default function Header() {
  return (
    <div id="header-div">
      <button className="header-btn">Next</button>

      <div id="header-txt">
        <h1>Gallery</h1>
      </div>

      <button className="header-btn">Back</button>
    </div>
  );
}
