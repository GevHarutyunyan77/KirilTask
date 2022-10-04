import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function CheckedSVG(props) {
  return (
    <Svg
      width={20*resho}
      height={20*resho}
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.785 1.106a.737.737 0 00-1.042 0l-8.83 8.83-3.394-3.394A.737.737 0 10.476 7.584L4.39 11.5a.737.737 0 001.042 0l9.35-9.35a.737.737 0 00.002-1.043z"
        fill="#309D00"
      />
    </Svg>
  )
}

export default CheckedSVG
