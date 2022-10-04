import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function FacebookSVG(props) {
  return (
    <Svg
      width={9*resho}
      height={15*resho}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.072 8.477l.414-2.7H5.9V4.028A1.349 1.349 0 017.418 2.57H8.6V.272A14.355 14.355 0 006.506.09 3.294 3.294 0 002.98 3.722v2.057H.609v2.7h2.37V15H5.9V8.477h2.173z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FacebookSVG
