import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function SearchSVG(props) {
  return (
    <Svg
      width={26*resho}
      height={26*resho}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.556 11.778a9.778 9.778 0 11-19.557 0 9.778 9.778 0 0119.557 0v0zM24 24l-5.317-5.317"
        stroke={props.color? props.color : '#A0A0A0'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchSVG
