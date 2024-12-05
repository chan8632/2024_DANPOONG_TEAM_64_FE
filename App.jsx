import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ResultScreen from "./ResultScreen";
import PredictScreen from "./PredictScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Ranking from "./Ranking";
import MultiChartScreen from "./MultiChartScreen";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 메뉴바 포함 화면 (Home, Result, Predict, Ranking, MultiChart)
function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="결과보기" component={ResultScreen} />

      <Tab.Screen name="랭킹" component={Ranking} />
      <Tab.Screen name="주식차트" component={MultiChartScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen
            name="오늘은 올라갈까 내려갈까?"
            component={PredictScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
