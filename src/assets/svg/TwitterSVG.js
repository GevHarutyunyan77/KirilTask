import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function TwitterSVG(props) {
  return (
    <Svg
      width={18*resho}
      height={14*resho}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.466 3.489c.011.153.011.306.011.459A9.983 9.983 0 015.425 14 9.983 9.983 0 010 12.414a7.3 7.3 0 00.853.044 7.074 7.074 0 004.386-1.509 3.54 3.54 0 01-3.3-2.45c.22.035.444.053.667.055.314 0 .626-.041.93-.12A3.533 3.533 0 01.7 4.965v-.046c.49.274 1.039.427 1.6.448A3.538 3.538 0 011.2.645a10.042 10.042 0 007.284 3.7 3.988 3.988 0 01-.084-.812 3.536 3.536 0 016.114-2.414 6.955 6.955 0 002.242-.853A3.523 3.523 0 0115.2 2.209a7.081 7.081 0 002.034-.547 7.595 7.595 0 01-1.768 1.827z"
        fill="#fff"
      />
    </Svg>
  )
}

export default TwitterSVG
