import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SortIcon = (props) => (
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
      d="M1.875 4.375h11.25M1.875 7.5h8.75M1.875 10.625h6.25"
    />
  </Svg>
);
export default SortIcon;
