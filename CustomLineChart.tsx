import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface CustomLineChartProps {
  data: number[]; // 데이터 배열
  labels: string[]; // 레이블 배열
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data, labels }) => {
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
      width={Dimensions.get("window").width - 50}
      height={200}
      yAxisSuffix="$"
      chartConfig={{
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForBackgroundLines: {
          strokeWidth: 1, // 축 선 두께를 지정
          strokeDasharray: "0", // 실선으로 설정 (점선 제거)
          stroke: "rgba(0, 0, 255, 1)", // 검은색 실선
        },
      }}
      withInnerLines={false} // 내부 점선 제거
      withOuterLines={true}
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
