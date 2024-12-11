import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";
import HomeIconOff from "../../assets/menuBar/HomeOff.svg";
import HomeIconOn from "../../assets/menuBar/HomeOn.svg";
import ProfileIconOff from "../../assets/menuBar/profileOff.svg";
import ProfileIconOn from "../../assets/menuBar/profileOn.svg";
import RankingIconOff from "../../assets/menuBar/rankingOff.svg";
import RankingIconOn from "../../assets/menuBar/rankingOn.svg";
import StocksIconOff from "../../assets/menuBar/stocksOff.svg";
import StocksIconOn from "../../assets/menuBar/stocksOn.svg";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: "white", padding: 10 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        // 탭 라벨에 맞는 아이콘 설정 (예시)
        let IconComponent: React.FC<SvgProps> | undefined;
        if (label === "Home") {
          IconComponent = isFocused ? HomeIconOn : HomeIconOff;
        } else if (label === "랭킹") {
          IconComponent = isFocused ? RankingIconOn : RankingIconOff;
        } else if (label === "주식차트") {
          IconComponent = isFocused ? StocksIconOn : StocksIconOff;
        } else if (label === "프로필") {
          IconComponent = isFocused ? ProfileIconOn : ProfileIconOff;
        }
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {IconComponent && (
              <IconComponent
                width={24}
                height={24}
                style={{ marginBottom: 4 }}
              />
            )}
            {typeof label === "string" ? ( // label이 문자열인 경우만 Text에 렌더링
              <Text style={{ color: isFocused ? "#0063FC" : "#8E98A8" }}>
                {label}
              </Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
