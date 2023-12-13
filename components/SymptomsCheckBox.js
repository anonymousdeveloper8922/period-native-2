import { React, useState } from "react";
import { CheckBox } from "react-native-elements";

const SymptomsCheckBox = (props) => {
  return (
    <CheckBox
      title={props.title}
      checked={props.checked}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checkedColor="#fe347e"
      onPress={() => {
        props.setChecked(!props.checked);
        console.log(props.checked);
      }}
    />
  );
};

export default SymptomsCheckBox;
