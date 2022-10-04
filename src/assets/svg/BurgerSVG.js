import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function BurgerSVG(props) {
  return (
    <Svg
      width={24*resho}
      height={20*resho}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 9.754h22M1 1h22M1 18.508h22"
        stroke="#333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BurgerSVG
