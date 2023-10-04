import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AddCardIconBtn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9775FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 5.705v4.579M9.792 7.994H5.209"
    />
    <Path
      stroke="#9775FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.429 1.75H4.57C2.53 1.75 1.25 3.195 1.25 5.24v5.52c0 2.045 1.274 3.49 3.321 3.49h5.858c2.047 0 3.321-1.445 3.321-3.49V5.24c0-2.045-1.274-3.49-3.321-3.49Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default AddCardIconBtn;
