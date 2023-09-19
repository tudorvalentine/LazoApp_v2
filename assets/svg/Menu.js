import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1D1E20"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 18h12.5M3 13h18.75M3 8h12.5"
    />
  </Svg>
);
export default MenuSvg;
