import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function CloseSVG(props) {
  return (
    <Svg
      width={16*resho}
      height={16*resho}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 1.6L14.4 0 8 6.4 1.6 0 0 1.6 6.4 8 0 14.4 1.6 16 8 9.6l6.4 6.4 1.6-1.6L9.6 8 16 1.6z"
        fill="#000"
      />
    </Svg>
  )
}

export default CloseSVG
