import { View, Text, StyleSheet, TextInput } from "react-native";
import { React, useState } from "react";

const NotesScreen = () => {
  // const [textInput, onChangeTextInput] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a note."
        placeholderTextColor="grey"
        cursorColor="#fe347e"
        selectionColor="white"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242526",
  },
  textInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
    padding: 10,
    margin: 10,
  },
});

export default NotesScreen;
