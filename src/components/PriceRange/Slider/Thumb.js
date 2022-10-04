import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import resho from "../../../constants/resho";

const THUMB_RADIUS_LOW = 22*resho;
const THUMB_RADIUS_HIGH = 22*resho;

const Thumb = ({name}) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW,
    height: THUMB_RADIUS_LOW,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#000',
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH,
    height: THUMB_RADIUS_HIGH,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#000',
  },
});

export default memo(Thumb);
