import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function CustomTabBar({ state, descriptors, navigation }) {
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

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text style={{ color: isFocused ? "tomato" : "gray" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
