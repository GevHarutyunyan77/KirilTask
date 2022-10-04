import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function UserIconSVG(props) {
  return (
    <Svg
      width={19*resho}
      height={24*resho}
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 21.326a12.491 12.491 0 00-2.7-7.877 8.234 8.234 0 00-12.9 0 12.488 12.488 0 00-2.7 7.868 22.298 22.298 0 009.151 2.333A20.361 20.361 0 0019 21.326z"
        fill={props.color? props.color : '#A0A0A0'}
      />
      <Path
        d="M9.848 9.503a4.576 4.576 0 100-9.152 4.576 4.576 0 000 9.152z"
        fill={props.color? props.color : '#A0A0A0'}
      />
    </Svg>
  )
}

export default UserIconSVG
