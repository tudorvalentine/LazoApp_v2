import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Heart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8F959E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.24 5.053a2.782 2.782 0 0 1 1.916 2.422m-5.895 11.379a34.845 34.845 0 0 1-6.022-4.689 11.99 11.99 0 0 1-2.866-4.57c-1.076-3.345.18-7.174 3.698-8.307a5.978 5.978 0 0 1 5.425.913 5.987 5.987 0 0 1 5.425-.913c3.517 1.133 4.783 4.962 3.707 8.307a11.99 11.99 0 0 1-2.866 4.57 34.844 34.844 0 0 1-6.022 4.689l-.235.146-.244-.146Z"
    />
  </Svg>
);
export default Heart;
