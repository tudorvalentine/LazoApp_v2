import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AddReviewIconSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.182 1.743H4.846c-1.922 0-3.127 1.36-3.127 3.287v5.196c0 1.926 1.2 3.287 3.127 3.287h5.515c1.928 0 3.127-1.36 3.127-3.287V7.71m-4.01-4.832 2.854 2.853M5.517 6.826l4.67-4.671a1.49 1.49 0 0 1 2.108 0l.76.76a1.49 1.49 0 0 1 0 2.107L8.362 9.716c-.254.254-.6.397-.96.397h-2.34l.058-2.362c.01-.348.15-.68.397-.925Z"
    />
  </Svg>
);
export default AddReviewIconSvg;
