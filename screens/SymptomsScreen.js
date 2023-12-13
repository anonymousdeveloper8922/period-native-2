import { View, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import { CheckBox } from "react-native-elements";
import SymptomsCheckBox from "../components/SymptomsCheckBox";

const SymptomsScreen = () => {
  const [lightChecked, setLightChecked] = useState(false);

  const symptoms = {
    light: { lightChecked },
  };

  return (
    <View style={styles.container}>
      <Text title="Flow"></Text>
      <SymptomsCheckBox
        title="Light"
        checked={lightChecked}
        setChecked={setLightChecked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242526",
  },
});

export default SymptomsScreen;
