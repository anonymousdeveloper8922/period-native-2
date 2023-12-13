import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { CalendarList, Calendar } from "react-native-calendars";
import { DateContext } from "./store/date-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavBar from "./components/navbar/NavBar";
import CalendarScreen from "./screens/CalendarScreen";
import CycleScreen from "./screens/CycleScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import SymptomsScreen from "./screens/SymptomsScreen";
import NotesScreen from "./screens/NotesScreen";

const Stack = createNativeStackNavigator();
const themeColor = "yellow";

export default function App() {
  const headerStyles = {
    headerStyle: {
      backgroundColor: "#242526",
    },
    headerTintColor: "white",
    headerTitleStyle: { color: "white" },
  };
  return (
    <DateContext.Provider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Cycle"
              component={CycleScreen}
              options={headerStyles}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={headerStyles}
            />
            <Stack.Screen name="Privacy" component={PrivacyScreen} />
            <Stack.Screen
              name="Log Symptoms"
              component={SymptomsScreen}
              options={headerStyles}
            />
            <Stack.Screen
              name="Notes"
              component={NotesScreen}
              options={headerStyles}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </DateContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3b3c",
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
