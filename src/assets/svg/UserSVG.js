import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function UserSVG(props) {
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
        d="M7.16 0a4.219 4.219 0 100 8.438A4.219 4.219 0 007.16 0zM14.112 12.459a6.772 6.772 0 00-5.645-3.021H5.852a6.771 6.771 0 00-5.645 3.021l-.08.118V16h14.064v-3.423l-.08-.118z"
        fill="#333"
      />
    </Svg>
  )
}

export default UserSVG
