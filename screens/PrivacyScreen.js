import { View, Text, StyleSheet, Button } from "react-native";

const PrivacyScreen = () => {
  const color = "#ee7600";
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Ferrut was created to provide a safe, private way to keep track of
          your sexual health. Manage your privacy with the following options.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Data Deletion</Text>
        <Text>Some text here.</Text>
        <View style={styles.button}>
          <Button title="manage data" color={color}></Button>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Enable PIN</Text>
        <Text>Some text here.</Text>
        <View style={styles.button}>
          <Button title="set pin" color={color}></Button>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Privacy Policy</Text>
        <Text>Some text here.</Text>
        <View style={styles.button}>
          <Button title="view policy" color={color}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 50,
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
  },
});

export default PrivacyScreen;
