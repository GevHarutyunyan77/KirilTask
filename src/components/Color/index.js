import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import myStyle from './style'
import ChechedSVG from "../../assets/svg/ChechedSVG";


function ColorBox(props) {
  const [checked, setChecked] = useState(false)
  return (
   <TouchableOpacity onPress={()=>setChecked(!checked)}
     style={{...myStyle.box, backgroundColor: props.color}}>
     { checked? <ChechedSVG/> : null }
   </TouchableOpacity>
  );
}

export default ColorBox;
