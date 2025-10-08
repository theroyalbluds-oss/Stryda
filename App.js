// App.js
import React from "react";
import { ThemeProvider, useAppTheme } from "./config/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./navigation/BottomTabs";
import JournalScreen from "./screens/Journal/Journal";
import NewAccount from "./screens/HomeScreen/NewAccount";
import ScheduleScreen from "./screens/Schedule/Schedule";

const Stack = createNativeStackNavigator();

function AppInner() {
  const { theme } = useAppTheme();

  console.log("DEBUG theme: ", theme); // ✅ should always show colors, dark flag, etc.

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
