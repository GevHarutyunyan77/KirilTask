import React, { memo } from 'react';
import {StyleSheet, View} from 'react-native';
import resho from "../../../constants/resho";

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 2*resho,
    backgroundColor: 'black',
    borderRadius: 2,
  },
});
