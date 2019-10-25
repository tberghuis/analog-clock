import React, { useState, useEffect } from "react";
import { timeSubject, getTime } from "./time";
import styled from "styled-components";

function useTime() {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const sub = timeSubject.subscribe(_time => setTime(_time));
    return () => sub.unsubscribe();
  }, []);

  return time;
}

function App() {
  const { hours, minutes, seconds } = useTime();
  return (
    <Svg viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r="110"
        stroke="black"
        fill="transparent"
        strokeWidth="10"
      />
      {/* hours */}
      <g
        transform={`rotate(${hours * 30 + (minutes / 60) * 30},150,150)`}
        style={{ stroke: "black" }}
      >
        <line strokeWidth="4" x1="150" y1="150" x2="150" y2="90" />
      </g>
      {/* minutes */}
      <g
        transform={`rotate(${minutes * 6},150,150)`}
        style={{ stroke: "black" }}
      >
        <line strokeWidth="2" x1="150" y1="150" x2="150" y2="70" />
      </g>
      {/* seconds */}
      <SecondsHand
        transform={`rotate(${seconds * 6},150,150)`}
      >
        <line x1="150" y1="150" x2="150" y2="50" />
      </SecondsHand>

      {markers.map((m, i) => (
        <React.Fragment key={i}>{drawMarker(m)}</React.Fragment>
      ))}
      {markers5Min.map((m, i) => (
        <React.Fragment key={i}>{draw5MinMarker(m)}</React.Fragment>
      ))}

      {labels.map((l, i) => (
        <React.Fragment key={i}>{drawLabel(l, i)}</React.Fragment>
      ))}
    </Svg>
  );
}

export default App;

const Svg = styled.svg`
  /* background-color: pink; */
`;

const SecondsHand = styled.g`
  stroke: black;
`;
const MinutesHand = styled.g``;
const HoursHand = styled.g``;

const markers = Array.from(new Array(60), (x, i) => i);
const markers5Min = markers.filter(m => m % 5 === 0);

const labels = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"];

const drawLabel = (label, markerPos) => {
  return (
    <g transform="translate(150,150)">
      <text
        textAnchor="middle"
        alignmentBaseline="central"
        x={80 * Math.cos((Math.PI / 30) * markerPos * 5)}
        y={80 * Math.sin((Math.PI / 30) * markerPos * 5)}
      >
        {label}
      </text>
    </g>
  );
};

const drawMarker = markerPos => {
  return (
    <g transform="translate(150,150) rotate(-90)" style={{ stroke: "black" }}>
      <line
        x1={94 * Math.cos((Math.PI / 30) * markerPos)}
        y1={94 * Math.sin((Math.PI / 30) * markerPos)}
        x2={100 * Math.cos((Math.PI / 30) * markerPos)}
        y2={100 * Math.sin((Math.PI / 30) * markerPos)}
      />
    </g>
  );
};

const draw5MinMarker = markerPos => {
  return (
    <g transform="translate(150,150) rotate(-90)" style={{ stroke: "black" }}>
      <line
        strokeWidth="2"
        x1={90 * Math.cos((Math.PI / 30) * markerPos)}
        y1={90 * Math.sin((Math.PI / 30) * markerPos)}
        x2={100 * Math.cos((Math.PI / 30) * markerPos)}
        y2={100 * Math.sin((Math.PI / 30) * markerPos)}
      />
    </g>
  );
};
