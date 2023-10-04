import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1D1E20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.313 3.125 9.688 7.5l-4.376 4.375"
    />
  </Svg>
);
export default RightArrow;
