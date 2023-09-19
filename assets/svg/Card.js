import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Card = (props) => {
  const { stroke } = props;
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} fill="none">
      <Path
        stroke={stroke == "" || stroke == undefined ? "#8F959E" : stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.07 12.56H16.02a2.692 2.692 0 0 1 0-5.383h4.049m-3.59 2.63h-.312M5.466 5.702h5.4M6.177 1.164h8.644A5.248 5.248 0 0 1 20.07 6.41v7.178a5.248 5.248 0 0 1-5.248 5.247H6.178A5.248 5.248 0 0 1 .931 13.59V6.41a5.248 5.248 0 0 1 5.247-5.247Z"
      />
    </Svg>
  );
};
export default Card;
