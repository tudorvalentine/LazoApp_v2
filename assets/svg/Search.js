import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8F959E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.805 17.296a7.49 7.49 0 1 0 0-14.981 7.49 7.49 0 0 0 0 14.981ZM15.015 15.404l2.937 2.93"
    />
  </Svg>
);
export default SearchSvg;
