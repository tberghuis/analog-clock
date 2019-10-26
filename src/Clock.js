import React from "react";
import { useTime } from "./time";
import styled from "styled-components";

const Clock = () => {
  const { hours, minutes, seconds } = useTime();

  return (
    <Svg viewBox="0 0 300 300">
      <g transform="translate(150,150)">
        <Frame r="110" />

        {minuteMarkers.map((m, i) => (
          <React.Fragment key={i}>{drawMinuteMarker(m)}</React.Fragment>
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
  max-width: 500px;
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

const markerIndexToRadians = markerIndex => (Math.PI * markerIndex) / 30;

const drawMinuteMarker = markerIndex => {
  return (
    <g style={{ stroke: "black" }}>
      <line
        x1={94 * Math.cos(markerIndexToRadians(markerIndex))}
        y1={94 * Math.sin(markerIndexToRadians(markerIndex))}
        x2={100 * Math.cos(markerIndexToRadians(markerIndex))}
        y2={100 * Math.sin(markerIndexToRadians(markerIndex))}
      />
    </g>
  );
};

const draw5MinMarker = markerIndex => {
  return (
    <g style={{ stroke: "black" }}>
      <line
        strokeWidth="2"
        x1={90 * Math.cos(markerIndexToRadians(markerIndex))}
        y1={90 * Math.sin(markerIndexToRadians(markerIndex))}
        x2={100 * Math.cos(markerIndexToRadians(markerIndex))}
        y2={100 * Math.sin(markerIndexToRadians(markerIndex))}
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

const drawHourLabel = (label, hourLabelIndex) => {
  return (
    <text
      textAnchor="middle"
      alignmentBaseline="central"
      x={80 * Math.cos(markerIndexToRadians(hourLabelIndex * 5))}
      y={80 * Math.sin(markerIndexToRadians(hourLabelIndex * 5))}
    >
      {label}
    </text>
  );
};
