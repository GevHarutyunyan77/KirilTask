import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShopSVG(props) {
  return (
    <Svg
      width={26}
      height={25}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.137 21.5a1 1 0 11-1-.96.981.981 0 011 .96v0zM22.137 21.5a1 1 0 11-1-.96.981.981 0 011 .96v0zM2.137 1.54h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61l1.6-8.39h-17"
        stroke="#333"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShopSVG
