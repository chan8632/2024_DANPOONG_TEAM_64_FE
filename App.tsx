import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Provider } from "react-redux";
import store from "./src/store/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TouchableOpacity, Text } from "react-native";

import ResultScreen from "./src/screens/results/ResultScreen";
import PredictScreen from "./src/screens/dashboard/PredictScreen";
import NewsScreen from "./src/screens/dashboard/NewsScreen";
import RankingScreen from "./src/screens/results/RankingScreen";
import MultiChartScreen from "./src/screens/MultiChartScreen";
import Profile from "./src/screens/ProfileScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";
import HomeScreen from "./src/screens/dashboard/HomeScreen";
import CustomTabBar from "./src/components/CustomTabBar.tsx"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ paddingLeft: 10 }}
    >
      <Text style={{ color: "#0063FC" }}>뒤로가기</Text>
    </TouchableOpacity>
  );
}
// 메뉴바 포함 화면 (Home, Result, Predict, Ranking, MultiChart)
function MainTabs() {
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      {/* 홈 화면 */}
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
              name="HomeTab"
              component={HomeScreen}
              options={{
                headerShown: false, // 헤더를 숨김
              }}
            />
            <Stack.Screen name="결과보기" component={ResultScreen} />
            <Stack.Screen
              name="오늘은 올라갈까 내려갈까?"
              component={PredictScreen}
            />
            <Stack.Screen name="뉴스" component={NewsScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      {/* 랭킹 화면 */}
      <Tab.Screen
        name="랭킹"
        component={RankingScreen}
        options={{
          headerLeft: () => <BackButton />,
        }}
      />
      {/* 주식차트 화면 */}
      <Tab.Screen name="주식차트" component={MultiChartScreen} />
      {/* 프로필 화면 */}
      <Tab.Screen name="프로필" component={Profile} />
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
          {/* 로그인 페이지 */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />

          {/* 로그인 이후 화면은 MainTabs를 사용 */}
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
