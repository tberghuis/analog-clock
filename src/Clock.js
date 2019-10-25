import React from "react";
import { useTime } from "./time2";
import styled from "styled-components";

const Clock = () => {
  const { hours, minutes, seconds } = useTime();

  return (
    <Svg viewBox="0 0 300 300">
      <g transform="translate(150,150)">
        <Frame r="110" />

        {minuteMarkers.map((m, i) => (
          <React.Fragment key={i}>{drawMarker(m)}</React.Fragment>
        ))}
        {fiveMinuteMarkers.map((m, i) => (
          <React.Fragment key={i}>{draw5MinMarker(m)}</React.Fragment>
        ))}
        {hourLabels.map((l, i) => (
          <React.Fragment key={i}>{drawHourLabel(l, i)}</React.Fragment>
        ))}

        <HoursHand
          transform={`rotate(${hours * 30 + (minutes / 60) * 30},0,0)`}
        >
          <line strokeWidth="4" x1="0" y1="15" x2="0" y2="-60" />
        </HoursHand>

        <MinutesHand transform={`rotate(${minutes * 6},0,0)`}>
          <line strokeWidth="2" x1="0" y1="20" x2="0" y2="-80" />
        </MinutesHand>

        <SecondsHand transform={`rotate(${seconds * 6},0,0)`}>
          <line x1="0" y1="30" x2="0" y2="-100" />
        </SecondsHand>
        <circle fill="red" r="3" />
      </g>
    </Svg>
  );
};
export default Clock;

const Svg = styled.svg`
  /* background-color: pink; */
`;

const Frame = styled.circle`
  stroke: black;
  fill: transparent;
  stroke-width: 10;
`;

const SecondsHand = styled.g`
  stroke: red;
`;
const MinutesHand = styled.g`
  stroke: black;
`;
const HoursHand = styled.g`
  stroke: black;
`;

const minuteMarkers = Array.from(new Array(60), (x, i) => i);
const fiveMinuteMarkers = minuteMarkers.filter(m => m % 5 === 0);

const drawMarker = markerPos => {
  return (
    <g style={{ stroke: "black" }}>
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
    <g style={{ stroke: "black" }}>
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

const hourLabels = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2"
];

const drawHourLabel = (label, markerPos) => {
  return (
    <text
      textAnchor="middle"
      alignmentBaseline="central"
      x={80 * Math.cos((Math.PI / 30) * markerPos * 5)}
      y={80 * Math.sin((Math.PI / 30) * markerPos * 5)}
    >
      {label}
    </text>
  );
};
