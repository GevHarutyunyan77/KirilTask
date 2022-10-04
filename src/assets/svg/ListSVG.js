import * as React from "react"
import Svg, { Path } from "react-native-svg"
import resho from "../../constants/resho";

function ListSVG(props) {
  return (
    <Svg
      width={21*resho}
      height={16*resho}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.677 12.308H1.215a.616.616 0 00-.615.617v2.46a.615.615 0 00.615.615h2.462a.615.615 0 00.615-.615v-2.46a.616.616 0 00-.615-.617zM3.677 0H1.215A.615.615 0 00.6.615v2.462a.615.615 0 00.615.615h2.462a.615.615 0 00.615-.615V.615A.615.615 0 003.677 0zm0 6.154H1.215a.615.615 0 00-.615.615v2.462a.615.615 0 00.615.615h2.462a.615.615 0 00.615-.615V6.769a.615.615 0 00-.615-.615zm16 6.769H7.37a.615.615 0 00-.615.615v1.231a.615.615 0 00.615.615h12.308a.615.615 0 00.615-.615v-1.231a.615.615 0 00-.615-.613v-.002zm0-12.308H7.37a.615.615 0 00-.615.615v1.232a.615.615 0 00.615.615h12.308a.615.615 0 00.615-.615V1.231a.616.616 0 00-.615-.616zm0 6.154H7.37a.615.615 0 00-.615.615v1.231a.615.615 0 00.615.615h12.308a.615.615 0 00.615-.615v-1.23a.616.616 0 00-.615-.616z"
        fill="#333"
        fillOpacity={0.36}
      />
    </Svg>
  )
}

export default ListSVG
