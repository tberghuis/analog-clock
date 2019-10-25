import React from "react";
import { useTime } from "./time2";
import styled from "styled-components";

const Clock = () => {
  const { hours, minutes, seconds } = useTime();

  return (
    <Svg viewBox="0 0 300 300">
      <g transform="translate(150,150)">
        <Frame r="110" />
      </g>
    </Svg>
  );
};
export default Clock;

const Svg = styled.svg`
  background-color: pink;
`;

const Frame = styled.circle`
  stroke: black;
  fill: transparent;
  stroke-width: 10;
`;
