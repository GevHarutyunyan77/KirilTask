import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function FavoriteSVG(props) {
  return (
    <Svg
      width={24*resho}
      height={24*resho}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.962 9.691a.774.774 0 00-.634-.528l-7.4-.987L12.7 1.44a.773.773 0 00-1.4 0L8.076 8.179l-7.4.987a.774.774 0 00-.431 1.328l5.41 5.15L4.3 22.987a.774.774 0 001.13.821L12 20.254l6.57 3.553a.775.775 0 001.13-.821l-1.35-7.345 5.41-5.15a.774.774 0 00.202-.8z"
        fill={props.color? props.color : '#A0A0A0'}
      />
    </Svg>
  )
}

export default FavoriteSVG
