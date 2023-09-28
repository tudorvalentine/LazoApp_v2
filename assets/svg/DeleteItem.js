import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DeleteItem = (props) => (
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
      d="M12.078 5.918s-.34 4.209-.536 5.982c-.094.847-.617 1.343-1.474 1.359-1.63.03-3.263.031-4.893-.003-.825-.017-1.339-.52-1.43-1.351-.199-1.79-.536-5.987-.536-5.987M12.942 3.9H2.345m8.556 0a1.03 1.03 0 0 1-1.01-.828l-.151-.76a.8.8 0 0 0-.773-.593H6.32a.8.8 0 0 0-.773.593l-.152.76a1.03 1.03 0 0 1-1.01.828"
    />
  </Svg>
);
export default DeleteItem;
