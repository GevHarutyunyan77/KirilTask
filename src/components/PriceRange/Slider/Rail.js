import React, { memo } from 'react';
import { View, StyleSheet, Image } from "react-native";
import resho from "../../../constants/resho";

const Rail = () => {
  return (
    <View style={styles.root}>
      <Image source={require('../../../assets/images/PriceImage.png')}
             style={{position:'absolute', bottom:0}}/>
    </View>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 1*resho,
    borderRadius: 2,
    backgroundColor: '#E4E4E4',
    alignItems:'center',
    position:'relative'
  },
});
