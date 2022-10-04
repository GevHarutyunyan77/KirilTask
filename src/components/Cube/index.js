import React from 'react';
import {Image, Text, View} from 'react-native';
import myStyle from './style';

function Cube({title, price, images}) {
  return (
    <View style={myStyle.content}>
      <Image source={{uri: images[0]}} style={myStyle.image} />
      <Text style={myStyle.brandText}>Aldo</Text>
      <Text style={myStyle.brandName}>{title}</Text>
      <Text style={myStyle.price}>AED {price}</Text>
    </View>
  );
}

export default Cube;
