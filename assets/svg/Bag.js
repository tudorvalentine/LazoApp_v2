import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Bag = (props) => {
  const { stroke } = props;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none">
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.798 22.396h8.696c3.194 0 5.644-1.154 4.948-5.797l-.81-6.293c-.43-2.317-1.907-3.204-3.204-3.204H6.826c-1.316 0-2.708.954-3.204 3.204l-.81 6.293c-.592 4.119 1.792 5.797 4.986 5.797Z"
        clipRule="evenodd"
      />
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.655 6.873a4.5 4.5 0 0 1 4.5-4.5 4.5 4.5 0 0 1 4.52 4.5M9.066 11.564h.048M15.14 11.564h.048"
      />
    </Svg>
  );
};
export default Bag;
