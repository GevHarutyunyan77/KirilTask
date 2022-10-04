import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function PasswordSVG(props) {
  return (
    <Svg
      width={14*resho}
      height={16*resho}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 7h-.75V4.75a4.75 4.75 0 10-9.5 0V7H1.5A1.5 1.5 0 000 8.5v6A1.5 1.5 0 001.5 16h11a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0012.5 7zM9.25 7h-4.5V4.75a2.25 2.25 0 114.5 0V7z"
        fill="#333"
      />
    </Svg>
  )
}

export default PasswordSVG
