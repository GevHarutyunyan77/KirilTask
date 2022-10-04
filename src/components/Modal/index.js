import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import myStyle from "./style";

import CloseSVG from "../../assets/svg/CloseSVG";
import { RadioButton } from "react-native-paper";
import Size from "../Size";
import _ from "lodash";
import ColorBox from "../Color";
import SliderScreen from "../PriceRange/index";
import { applyData, setShowModal } from "../../store/actions/app";
import { useDispatch, useSelector } from "react-redux";

function MyModal(props) {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.app);
  const [checked, setChecked] = useState("unchecked");
  const [checkedPop, setCheckedPop] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500);

  const sizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"];
  const colors = ["#FF5A5A", "#FFFFFF", "#2878D5", "#000000"];

  const handleChecked = useCallback((current) => {
    if (checked === current) {
      setChecked("unchecked");
    } else {
      setChecked(current);
    }
  }, [checked]);

  const handleClose = () => {
    dispatch(setShowModal(false));
  };
  const sortFunc = (arr, type)=>{
    let sorted =[]
    if(type === 'first'){
      sorted = [...arr].sort((a, b) => a.price - b.price);
      // const compareFn = (a, b) => a > b ? -1 : 0;
      // arr.sort(compareFn);

    }
    if(type === 'second'){
      sorted = [...arr].sort((a, b) => b.price - a.price);
    }

    return sorted
  }

  const handleApply = () => {
    const arr = data.filter(item => item.price >= minPrice && item.price <= maxPrice);
    if(checked === 'first'){
      console.log('first');
      sortFunc(arr,'first')
    }
    if(checked === 'second'){
      console.log('second');
      sortFunc(arr,'second')
    }
    dispatch(applyData(arr));
    handleClose();
  };




  return (

    <View style={myStyle.modalView}>
      <View style={myStyle.modal}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={myStyle.modalContainer}>
            <View style={myStyle.titleLine}>
              <Text style={myStyle.titleText}>Filters</Text>
              <Pressable onPress={handleClose} style={myStyle.closeView}>
                <CloseSVG />
              </Pressable>
            </View>


            <Text style={myStyle.mediumText}>Sort By</Text>
            <View style={myStyle.radioButtonsView}>
              <Pressable style={myStyle.checkLine} onPress={() => setCheckedPop(!checkedPop)}>
                <RadioButton
                  uncheckedColor={"black"}
                  color={"black"}
                  status={checkedPop ? "checked" : "unchecked"}
                  onPress={() => setCheckedPop(!checkedPop)}
                />
                <Text style={myStyle.priceText}>Popularity</Text>
              </Pressable>


              <Pressable style={myStyle.checkLine} onPress={() => handleChecked("first")}>
                <RadioButton
                  uncheckedColor={"black"}
                  color={"black"}
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => handleChecked("first")}
                />
                <Text style={myStyle.priceText}>Price: High - Low</Text>
              </Pressable>

              <Pressable style={myStyle.checkLine} onPress={() => handleChecked("second")}>
                <RadioButton
                  uncheckedColor={"black"}
                  color={"black"}
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => handleChecked("second")}
                />
                <Text style={myStyle.priceText}>Price: Low - High</Text>
              </Pressable>
            </View>

            <Text style={myStyle.sizeText}>Size US</Text>
            <View style={myStyle.sizeBoxes}>
              {sizes.map((size) =>
                <View key={_.uniqueId()}>
                  <Size size={size} />
                </View>,
              )}
            </View>

            <Text style={myStyle.sizeText}>Color</Text>
            <View style={myStyle.colorView}>
              {
                colors.map((color) =>
                  <View key={_.uniqueId()}>
                    <ColorBox color={color} />
                  </View>,
                )}
            </View>
            <Text style={myStyle.sizeText}>Price</Text>
            {/*<View style={myStyle.priceView}>*/}
            {/*  <PriceSVG/>*/}
            {/*</View>*/}

            <SliderScreen sendValue={(low, high) => {
              setMinPrice(low);
              setMaxPrice(high);
            }} />

            <View style={myStyle.applyView}>
              <Pressable>
                <Text style={myStyle.clearText}>Clear All</Text>
              </Pressable>

              <Pressable style={myStyle.apply} onPress={handleApply}>
                <Text style={myStyle.clearText}>Apply</Text>
              </Pressable>
            </View>


          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MyModal;
