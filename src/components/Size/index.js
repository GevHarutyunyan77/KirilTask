import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import myStyle from "../Modal/style";

function Size(props) {
  const [checked, setChecked] = useState(false)


  return (
    <Pressable style={checked ? myStyle.checkedBox : myStyle.box}
               onPress={()=>{setChecked(!checked)}}>
      <Text style={checked ? myStyle.checkedSize : myStyle.size}>{props.size}</Text>
    </Pressable>
  );
}

export default Size;
