import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Home = (props) => {
  const { stroke } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke={stroke == "" || stroke == undefined ? "#8F959E" : stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.657 19.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924C18.445 21 20 19.46 20 17.562V8.838a2.44 2.44 0 0 0-.962-1.905l-6.58-5.248a3.18 3.18 0 0 0-3.945 0L1.962 6.943A2.42 2.42 0 0 0 1 8.847v8.715C1 19.46 2.555 21 4.473 21h1.924c.685 0 1.241-.55 1.241-1.229"
      />
    </Svg>
  );
};
export default Home;
