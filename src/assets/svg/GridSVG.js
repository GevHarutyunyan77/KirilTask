import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function GridSVG(props) {
  return (
    <Svg
      width={18*resho}
      height={18*resho}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1h6.222v6.222H1V1zM10.778 1H17v6.222h-6.222V1zM10.778 10.778H17V17h-6.222v-6.222zM1 10.778h6.222V17H1v-6.222z"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default GridSVG
