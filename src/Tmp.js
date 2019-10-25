import React, { useState, useEffect } from "react";
import { timeSubject } from "./time";
import styled from "styled-components";

function App() {
  return (
    <svg style={{ backgroundColor: "grey" }} width="100" height="100">
      <text
        textAnchor="middle"
        alignmentBaseline="central"
        x="50"
        y="50"
        class="small"
      >
        12
      </text>
      <circle cx="50" cy="50" r="5"/>
    </svg>
  );
}

export default App;
