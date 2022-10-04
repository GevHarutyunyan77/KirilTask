import React, { useCallback, useEffect, useState } from "react";
import {View, Text, ScrollView} from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from './Slider/Thumb';
import Rail from './Slider/Rail';
import RailSelected from './Slider/RailSelected';
import Notch from './Slider/Notch';
import Label from './Slider/Label';


import styles from './styles';

const SliderScreen = (props) => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1500);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue, );
    setHigh(highValue);
  }, []);


  useEffect(()=>{
   props.sendValue(low,high)
  },[low, high])


  return (
    <View style={styles.mainContainer}>
        <Slider
          style={styles.slider}
          min={min}
          max={max}
          step={1}
          disableRange={rangeDisabled}
          floatingLabel={floatingLabel}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleValueChange}
        />
        <View style={styles.horizontalContainer}>
          <View style={styles.underline}>
            <Text style={styles.valueText}>{low} AED</Text>
          </View>
          <View style={styles.underline}>
          <Text style={styles.valueText}>{high} AED</Text>
          </View>
        </View>
    </View>
  );
};

export default SliderScreen;
