import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import { API_URL } from "@env";
const PredictScreen = ({ route }) => {
  const getStock = async () => {
    try {
      const response = await axios.get(`${API_URL}/stocks/AAPL`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const { stock } = route.params; // HomeScreen에서 전달받은 데이터

  const LogoComponent = stock.logo; // 동적으로 렌더링할 SVG 컴포넌트

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoComponent width={100} height={100} style={styles.logo} />
        <Text style={styles.stockName}>{stock.name}</Text>
      </View>
      <TouchableOpacity onPress={() => getStock()}>
        <Text>통신해보기</Text>
      </TouchableOpacity>
      <Text style={styles.stockPrice}>{stock.price}</Text>

      {/* Chart */}
      <View>
        <LineChart
          data={{
            labels: ["10:30", "12:00", "14:30"],
            datasets: [
              {
                data: [340, 330, 328],
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
      </View>

      {/* News Button */}
      <TouchableOpacity style={styles.newsButton}>
        <Text style={styles.newsButtonText}>뉴스 보러가기</Text>
      </TouchableOpacity>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.button, styles.downButton]}>
          <Text style={styles.buttonText}>내려간다</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.upButton]}>
          <Text style={styles.buttonText}>올라간다</Text>
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
