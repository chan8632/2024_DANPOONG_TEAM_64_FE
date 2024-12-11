import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Amazon from "../../stock/Amazon.json";
import Apple from "../../stock/Apple.json";
import Google from "../../stock/Google.json";
import Meta from "../../stock/Meta.json";
import Microsoft from "../../stock/Microsoft.json";
import Nvidia from "../../stock/Nvidia.json";
import AmazonLogo from "../../assets/LogoAmazon.svg";
import AppleLogo from "../../assets/Logo=Apple.svg";
import GoogleLogo from "../../assets/Logo=Google.svg";
import MetaLogo from "../../assets/Logo=Meta.svg";
import MsLogo from "../../assets/Logo=Microsoft.svg";
import NvidiaLogo from "../../assets/Logo=Nvidia.svg";
import { SvgProps } from "react-native-svg";
import CustomLineChart from "../components/CustomLineChart";

// TypeScript 타입 정의
type StockData = {
  name: string;
  logo: React.FC<SvgProps>;
  closePrices: number[];
  dates: number[];
};

type RawStockData = {
  dailyResults: {
    closePrice: number | string;
    date: string;
  }[];
};

// 주식 데이터를 처리하는 함수
const processStockData = (
  name: string,
  rawData: RawStockData,
  logo: React.FC<SvgProps>
): StockData => {
  return {
    name,
    logo,
    closePrices: rawData.dailyResults.map((result) =>
      Math.round(
        typeof result.closePrice === "string"
          ? parseFloat(result.closePrice)
          : result.closePrice
      )
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
      <View style={styles.largeTitle}>
        <Text style={styles.title}>{item.name}</Text>
        <item.logo style={styles.logo} width={25} height={25} />
      </View>
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
    elevation: 8,
  },
  largeTitle: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,

    marginBottom: 10,
  },
  logo: {
    marginLeft: 7,
  },
});

export default MultiChartScreen;
