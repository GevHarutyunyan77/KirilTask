import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function GmailSVG(props) {
  return (
    <Svg
      width={15*resho}
      height={16*resho}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.63 6.722l-.077-.321H7.574v2.954h4.17a4.172 4.172 0 01-4.083 3.141 4.882 4.882 0 01-3.286-1.309 4.69 4.69 0 01-1.4-3.311A4.838 4.838 0 014.35 4.565a4.674 4.674 0 013.264-1.276 4.257 4.257 0 012.777 1.082l2.1-2.088a7.427 7.427 0 00-4.945-1.9 7.644 7.644 0 00-5.41 2.2 7.613 7.613 0 00-2.135 5.3 7.537 7.537 0 002.052 5.212 7.83 7.83 0 005.644 2.29 6.963 6.963 0 005.071-2.132 7.487 7.487 0 001.948-5.186c.006-.45-.023-.9-.087-1.345z"
        fill="#fff"
      />
    </Svg>
  )
}

export default GmailSVG
