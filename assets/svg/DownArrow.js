import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownArrow = (props) => (
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
      d="M11.875 5.313 7.5 9.688 3.125 5.311"
    />
  </Svg>
);
export default DownArrow;
