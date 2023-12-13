import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  const color = "#ee7600";

  return (
    <View style={styles.navBar}>
      <View style={styles.button}>
        <Button
          title="cycle"
          color={color}
          onPress={() => {
            navigation.navigate("Cycle");
          }}
        />
      </View>
      <Button
        title="calendar"
        color={color}
        onPress={() => {
          navigation.navigate("Calendar");
        }}
      />
      <Button
        title="privacy"
        color={color}
        onPress={() => {
          navigation.navigate("Privacy");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    borderWidth: 1,
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    position: "fixed",
  },
  button: {
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default NavBar;
