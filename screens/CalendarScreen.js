import { React, useState, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CalendarList, Calendar } from "react-native-calendars";
import NavBar from "../components/navbar/NavBar";
import { DateContext, DateContextProvider } from "../store/date-context";

const CalendarScreen = () => {
  const todayDate = new Date();
  const dateCtx = useContext(DateContext);

  // const setDateHandler = (day) => {
  //   setPressedDate(day);
  //   console.log(pressedDate);
  // };

  return (
    <DateContextProvider>
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
            onDayPress={dateCtx.setActiveDate}
          />
        </View>
      </View>
    </DateContextProvider>
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
