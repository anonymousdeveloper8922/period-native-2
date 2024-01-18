import { useContext, useEffect } from "react";
import { Pressable, Button, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DateContext } from "../store/date-context";
import * as SQLite from "expo-sqlite";

const CycleScreen = () => {
  const db = SQLite.openDatabase("example.db");
  const [dates, setDates] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      "CREATE TABLE IF NOT EXISTS dates (date DATE PRIMARY KEY, symptoms TEXT)";
    });

    db.transaction((tx) => {
      tx.executeSql("SELECT # FROM dates", null, (textObj, resultSet) =>
        setDates(resultSet.rows._array)
      );
    });
  });

  const navigation = useNavigation();
  const dateCtx = useContext(DateContext);

  return (
    <View style={styles.container}>
      <Text style={styles.dateHeader}>{`${dateCtx.activeDate}`}</Text>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="view calendar"
          color="#fe347e"
          onPress={() => {
            navigation.navigate("Calendar");
          }}
        ></Button>
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Log Symptoms")}
      >
        <Text style={styles.pressable_text}>Add Symptoms</Text>
        <Text style={styles.pressable_plus}>+</Text>
      </Pressable>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Notes")}
      >
        <Text style={styles.pressable_text}>Add Notes</Text>
        <Text style={styles.pressable_plus}>+</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242526",
  },

  button: {
    alignSelf: "center",
    margin: 50,
  },

  pressable: {
    backgroundColor: "#3a3b3c",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "black",
  },
  pressable_text: {
    color: "#fe347e",
    paddingHorizontal: 10,
    fontSize: 15,
  },

  pressable_plus: {
    color: "#fe347e",
    paddingHorizontal: 10,
    fontSize: 30,
  },

  dateHeader: {
    color: "white",
    alignSelf: "center",
  },
});

export default CycleScreen;
