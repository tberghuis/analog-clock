import React, { useState, useEffect } from "react";
import { timeSubject } from "./time";
import styled from "styled-components";

function useTime() {
  // const [time, setTime] = useState(Date.now());
  const [time, setTime] = useState(null);
  useEffect(() => {
    const sub = timeSubject.subscribe(_time => setTime(_time));
    return () => sub.unsubscribe();
  }, []);

  return time;
}

function App() {
  const time = useTime();

  if (!time) {
    return null;
  }
  console.log("TCL: App -> time", time);
  const { hours, minutes, seconds } = time;
  return (
    <Svg width="300" height="300">
      <circle cx="150" cy="150" r="100" fill="green" />
      <g
        id="hours"
        transform={`rotate(${hours * 30 + (minutes / 60) * 30},150,150)`}
        style={{ stroke: "black" }}
      >
        <line x1="150" y1="150" x2="150" y2="90" />
      </g>
      <g
        id="minutes"
        transform={`rotate(${minutes * 6},150,150)`}
        style={{ stroke: "black" }}
      >
        <line x1="150" y1="150" x2="150" y2="70" />
      </g>
      <g
        id="seconds"
        transform={`rotate(${seconds * 6},150,150)`}
        style={{ stroke: "black" }}
      >
        <line x1="150" y1="150" x2="150" y2="50" />
      </g>

      {marker(0)}
      {marker(15)}
      {marker(30)}
      {marker(45)}
    </Svg>
  );
}

export default App;

const Svg = styled.svg`
  background-color: pink;
`;

const marker = markerPos => {
  return (
    <g transform="translate(150,150) rotate(-90)" style={{ stroke: "black" }}>
      <line
        x1={90 * Math.cos((Math.PI / 30) * markerPos)}
        y1={90 * Math.sin((Math.PI / 30) * markerPos)}
        x2={100 * Math.cos((Math.PI / 30) * markerPos)}
        y2={100 * Math.sin((Math.PI / 30) * markerPos)}
      />
    </g>
  );
};
