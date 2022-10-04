import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FilterSVG(props) {
  return (
    <Svg
      width={14}
      height={17}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.245.76H.725a.723.723 0 00-.593 1.137L4.912 8.4c.112.16.171.351.171.547v6.528a.764.764 0 001.221.612l2.121-1.6a1.162 1.162 0 00.467-.93v-4.61c0-.196.06-.387.171-.547l4.778-6.5a.723.723 0 00-.596-1.14zm-4.92 7.108a1.859 1.859 0 00-.343 1.079v4.613a.25.25 0 01-.1.2l-1.894 1.428V8.947a1.86 1.86 0 00-.337-1.07l-3.12-4.245h8.905l-3.11 4.236zm3.778-5.143H1.865l-.777-1.058H12.88l-.777 1.058z"
        fill="#000"
      />
    </Svg>
  )
}

export default FilterSVG
