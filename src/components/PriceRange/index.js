import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from './Slider/Thumb';
import Rail from './Slider/Rail';
import RailSelected from './Slider/RailSelected';
import Notch from './Slider/Notch';
import Label from './Slider/Label';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {setMinMaxPrice} from '../../store/actions/app';

const SliderScreen = () => {
  const dispatch = useDispatch();
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );

  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const handleTouchEnd = useCallback((lowValue, highValue) => {
    dispatch(setMinMaxPrice(lowValue, highValue));
  }, []);

  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Slider
        style={styles.slider}
        min={0}
        max={1500}
        step={1}
        disableRange={false}
        floatingLabel={false}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onSliderTouchEnd={handleTouchEnd}
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
