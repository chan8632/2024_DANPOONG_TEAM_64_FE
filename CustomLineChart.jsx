import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const CustomLineChart = ({ data, labels }) => {
  const reducedLabels = labels.map((value, index) => {
    if (index % Math.ceil(labels.length / 5) === 0) {
      return value; // 표시할 레이블
    }
    return ""; // 빈 문자열로 출력되지 않도록
  });

  return (
    <LineChart
      data={{
        labels: reducedLabels,
        datasets: [
          {
            data: data,
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
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default CustomLineChart;
