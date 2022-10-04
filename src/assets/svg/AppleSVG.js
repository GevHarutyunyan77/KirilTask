import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function AppleSVG(props) {
  return (
    <Svg
      width={13*resho}
      height={15*resho}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.28 3.511c-1.312 0-1.867.644-2.781.644-.937 0-1.652-.64-2.788-.64a3.789 3.789 0 00-3.054 1.89c-1.058 1.679-.88 4.842.836 7.537C2.106 13.907 2.926 14.988 4 15h.02c.933 0 1.21-.629 2.5-.637h.02c1.265 0 1.519.633 2.449.633h.02c1.074-.012 1.937-1.211 2.55-2.171.373-.575.689-1.184.945-1.82a3.341 3.341 0 01-.426-5.971 3.671 3.671 0 00-2.792-1.523H9.28z"
        fill="#fff"
      />
      <Path
        d="M8.99 0c-.872.11-1.67.551-2.225 1.234a3.106 3.106 0 00-.726 2.374H6.1A2.9 2.9 0 008.28 2.433c.549-.685.804-1.56.71-2.433z"
        fill="#fff"
      />
    </Svg>
  )
}

export default AppleSVG
