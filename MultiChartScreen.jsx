import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomLineChart from "./CustomLineChart";
import Amazon from "./stock/Amazon.json";
import Apple from "./stock/Apple.json";
import Google from "./stock/Google.json";
import Meta from "./stock/Meta.json";
import Microsoft from "./stock/Microsoft.json";
import Nvidia from "./stock/Nvidia.json";
import AmazonLogo from "./assets/Logo=Amazon.svg";
import AppleLogo from "./assets/Logo=Apple.svg";
import GoogleLogo from "./assets/Logo=Google.svg";
import MetaLogo from "./assets/Logo=Meta.svg";
import MsLogo from "./assets/Logo=Microsoft.svg";
import NvidiaLogo from "./assets/Logo=Nvidia.svg";

// 주식 데이터를 처리하는 함수
const processStockData = (name, rawData, logo) => {
  return {
    name,
    logo,
    closePrices: rawData.dailyResults.map((result) =>
      parseFloat(result.closePrice).toFixed(1)
    ),
    dates: rawData.dailyResults.map((result) =>
      parseFloat(result.date.split("-")[2])
    ),
  };
};

const MultiChartScreen = () => {
  const stockData = [
    processStockData("아마존", Amazon, AmazonLogo),
    processStockData("애플", Apple, AppleLogo),
    processStockData("구글", Google, GoogleLogo),
    processStockData("메타", Meta, MetaLogo),
    processStockData("마이크로소프트", Microsoft, MsLogo),
    processStockData("엔비디아", Nvidia, NvidiaLogo),
  ];

  const renderItem = ({ item }) => (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <item.logo width={50} height={50} />
      <CustomLineChart data={item.closePrices} labels={item.dates} />
    </View>
  );

  return (
    <FlatList
      data={stockData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  chartContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MultiChartScreen;
