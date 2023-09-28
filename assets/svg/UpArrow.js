import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UpArrow = (props) => (
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
      strokeWidth={1.3}
      d="M3.125 9.688 7.5 5.311l4.375 4.375"
    />
  </Svg>
);
export default UpArrow;
