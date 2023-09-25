import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TimeIco = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8F959E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 13.125a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Z"
    />
    <Path
      stroke="#8F959E"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 4.375V7.5l1.25 1.875"
    />
  </Svg>
);
export default TimeIco;
