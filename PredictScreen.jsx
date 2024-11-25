import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import { API_URL } from "@env";

const PredictScreen = ({ route }) => {
  const [closePrices, setClosePrices] = useState([]);
  const [date, setDate] = useState([]);
  const { stock } = route.params;
  const LogoComponent = stock.logo || (() => <Text>Default Logo</Text>);

  const getStock = async () => {
    try {
      const response = await axios.get(`${API_URL}/stocks/AAPL`);
      const datas = response.data;

      setClosePrices(
        datas.dailyResults.map((result) =>
          parseFloat(result.closePrice).toFixed(1)
        )
      );
      setDate(
        datas.dailyResults.map((result) => {
          return parseFloat(result.date.split("-")[2]);
        })
      );
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoComponent width={100} height={100} style={styles.logo} />
        <Text style={styles.stockName}>{stock.name}</Text>
      </View>
      <Text style={styles.stockPrice}>{stock.price}</Text>
      <View>
        {closePrices.length > 0 && date.length > 0 ? (
          <LineChart
            data={{
              labels: date,
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
    width: "48%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  downButton: {
    backgroundColor: "#e0e0e0",
  },
  upButton: {
    backgroundColor: "#ffdddd",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PredictScreen;
