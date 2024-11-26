import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Amazon from "./stock/Amazon.json";
import Apple from "./stock/Apple.json";
import Google from "./stock/Google.json";
import Meta from "./stock/Meta.json";
import Microsoft from "./stock/Microsoft.json";
import Nvidia from "./stock/Nvidia.json";
import Up from "./assets/예상하기/올라간다.svg";
import Down from "./assets/예상하기/내려간다.svg";

const PredictScreen = ({ route }) => {
  const [closePrices, setClosePrices] = useState([]);
  const [date, setDate] = useState([]);
  const { stock } = route.params;
  const LogoComponent = stock.logo || (() => <Text>Default Logo</Text>);

  // JSON 데이터를 객체로 정리
  const stockData = {
    AMZN: Amazon,
    AAPL: Apple,
    GOOGL: Google,
    META: Meta,
    MSFT: Microsoft,
    NVDA: Nvidia,
  };

  const getLocalStockData = () => {
    const selectedStock = stockData[stock.ticker]; // ticker를 키로 데이터 가져옴
    if (!selectedStock) return;

    setClosePrices(
      selectedStock.dailyResults.map((result) =>
        parseFloat(result.closePrice).toFixed(1)
      )
    );

    setDate(
      selectedStock.dailyResults.map((result) =>
        parseFloat(result.date.split("-")[2])
      )
    );
  };

  useEffect(() => {
    getLocalStockData();
  }, []);

  const reducedLabels = date.map((value, index) => {
    if (index % Math.ceil(date.length / 5) === 0) {
      return value; // 표시할 레이블
    }
    return ""; // 빈 문자열로 출력되지 않도록
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoComponent width={100} height={100} style={styles.logo} />
        <Text style={styles.stockName}>{stock.name}</Text>
      </View>
      <Text style={styles.stockPrice}>${closePrices.at(-1)}</Text>
      <View>
        {closePrices.length > 0 && date.length > 0 ? (
          <LineChart
            data={{
              labels: reducedLabels,
              datasets: [
                {
                  data: closePrices,
                },
              ],
            }}
            width={Dimensions.get("window").width - 40}
            height={200}
            yAxisSuffix="$"
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={styles.chart}
          />
        ) : (
          <Text>Loading chart data...</Text>
        )}
      </View>
      <TouchableOpacity style={styles.newsButton}>
        <Text style={styles.newsButtonText}>뉴스 보러가기</Text>
      </TouchableOpacity>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Up />
          <Text style={styles.buttonText}>올라간다</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Down />
          <Text style={styles.buttonText}>내려간다</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stockInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  stockName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  stockPrice: {
    fontSize: 22,
    color: "black",
  },
  stockChange: {
    fontSize: 16,
    color: "red",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  newsButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  newsButtonText: {
    fontSize: 16,
    color: "black",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  button: {
    width: "48%", // 버튼 너비를 동일하게 설정
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8.5,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  buttonText: {
    fontSize: 16,
    marginTop: 5,
    color: "black", // 텍스트 색
  },
});

export default PredictScreen;
