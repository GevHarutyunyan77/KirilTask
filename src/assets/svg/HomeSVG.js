import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function HomeSVG(props) {
  return (
    <Svg
      width={31*resho}
      height={24*resho}
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.022 6.226l-9.878 8.135v8.785a.857.857 0 00.857.854l6-.016a.857.857 0 00.853-.857v-5.128a.857.857 0 01.857-.857h3.429a.857.857 0 01.857.857v5.124a.857.857 0 00.857.86l6 .017a.857.857 0 00.857-.857v-8.787l-9.869-8.13a.653.653 0 00-.82 0zm15.6 5.53l-4.479-3.692V.646A.643.643 0 0025.5.003h-3a.643.643 0 00-.643.643v3.89l-4.8-3.947a2.572 2.572 0 00-3.268 0L.233 11.755a.643.643 0 00-.086.905l1.366 1.661a.642.642 0 00.906.087l12.6-10.38a.653.653 0 01.82 0l12.6 10.38a.642.642 0 00.905-.086l1.366-1.661a.643.643 0 00-.091-.907l.003.002z"
        fill={props.color? props.color : '#A0A0A0'}
      />
    </Svg>
  )
}

export default HomeSVG
