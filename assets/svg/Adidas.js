import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const Adidas = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={17}
    viewBox="0 0 25 17"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#1D1E20"
        d="M23.084 16.985c-1.169 0-1.862-.601-1.915-1.468h1.118c0 .289.159.673.85.697.48 0 .745-.288.745-.505-.053-.337-.48-.361-.904-.435-.48-.07-.85-.167-1.118-.286-.371-.194-.585-.604-.585-1.036 0-.77.64-1.372 1.756-1.372 1.065 0 1.757.553 1.808 1.396h-1.063c0-.216-.053-.578-.692-.578-.426 0-.691.072-.744.385 0 .434.904.41 1.595.577.639.17 1.065.578 1.065 1.157 0 1.06-.85 1.468-1.916 1.468ZM2.714 9.877l3.67-2.143 1.968 3.395H3.405M10.431 16.857v-4.285 4.285Z"
      />
      <Path stroke="#1D1E20" d="M10.431 16.857v-4.285" />
      <Path
        fill="#1D1E20"
        d="M1.01 14.778c0 .673.585 1.227 1.222 1.227.694 0 1.224-.554 1.224-1.227 0-.65-.53-1.227-1.224-1.227-.637 0-1.222.577-1.222 1.227Zm1.17 2.214c-1.17 0-2.18-.987-2.18-2.214 0-1.227 1.01-2.19 2.18-2.19.478 0 .905.12 1.276.384v-.337h1.065v4.26H3.456v-.265c-.318.24-.797.362-1.277.362Zm14.205-5.864-5.107-8.954 3.67-2.166 6.384 11.12h-4.947Zm-10.48 3.65c0 .673.532 1.227 1.223 1.227.637 0 1.224-.554 1.224-1.227 0-.65-.587-1.227-1.224-1.227-.691 0-1.224.577-1.224 1.227Zm1.17 2.214c-1.224 0-2.18-.987-2.18-2.214 0-1.227.956-2.19 2.18-2.19.478 0 .904.12 1.277.384v-1.805h1.063v5.728H8.352v-.265c-.373.24-.8.362-1.277.362ZM7.023 6.05l3.723-2.117 4.097 7.195h-3.885v1.06H9.895v-1.06L7.023 6.05ZM24.31 12.22a.552.552 0 0 1-.532-.53c0-.289.265-.53.532-.53.319 0 .533.242.533.53 0 .289-.214.53-.533.53Zm0-.986c-.267 0-.426.215-.426.456 0 .241.16.458.426.458s.425-.217.425-.458c0-.24-.16-.456-.425-.456Z"
      />
      <Path
        fill="#1D1E20"
        d="m24.42 11.982-.106-.241h-.106v.24h-.08v-.577h.24c.052 0 .158.074.158.17a.171.171 0 0 1-.106.167l.106.24h-.106Zm-.106-.504h-.106v.191h.106c.106 0 .106-.024.106-.096 0-.049 0-.095-.106-.095Zm-7.03 3.3c0 .673.533 1.227 1.225 1.227.638 0 1.222-.554 1.222-1.227 0-.65-.584-1.227-1.222-1.227-.692 0-1.224.578-1.224 1.227Zm1.17 2.214c-1.222 0-2.18-.987-2.18-2.214 0-1.227.958-2.19 2.18-2.19.48 0 .905.12 1.277.384v-.337h1.012v4.26H19.73v-.265a2.296 2.296 0 0 1-1.277.362Zm-6.06-2.214c0 .673.585 1.227 1.224 1.227.692 0 1.224-.554 1.224-1.227 0-.65-.532-1.227-1.224-1.227-.639 0-1.224.578-1.224 1.227Zm2.448-3.61h1.063v5.727h-1.063v-.265c-.32.241-.746.362-1.224.362-1.224 0-2.234-.987-2.234-2.214 0-1.227 1.01-2.19 2.234-2.19.477 0 .904.12 1.224.384v-1.805Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Adidas;
