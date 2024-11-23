import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ResultScreen from "./ResultScreen";
import PredictScreen from "./PredictScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="결과보기" component={ResultScreen} />
        <Stack.Screen
          name="오늘은 올라갈까 내려갈까?"
          component={PredictScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
