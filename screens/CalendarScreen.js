import { React, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CalendarList, Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/navbar/NavBar";

const CalendarScreen = () => {
  const todayDate = new Date();
  const [pressedDate, setPressedDate] = useState(new Date());
  const navigation = useNavigation();

  const setDateHandler = (day) => {
    setPressedDate(day);
    console.log(pressedDate);
    console.log(todayDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <CalendarList
          theme={{
            todayTextColor: "#fe347e",
            calendarBackground: "#242526",
            dayTextColor: "white",
          }}
          futureScrollRange={12}
          pastScrollRange={120}
          onDayPress={() => {
            navigation.navigate("Cycle");
            console.log(todayDate);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default CalendarScreen;