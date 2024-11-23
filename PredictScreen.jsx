import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PredictScreen = ({ route }) => {
  const { stock } = route.params; // HomeScreen에서 전달받은 데이터

  const LogoComponent = stock.logo; // 동적으로 렌더링할 SVG 컴포넌트

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoComponent width={100} height={100} style={styles.logo} />
        <Text style={styles.stockName}>{stock.name}</Text>
      </View>
      <Text style={styles.stockPrice}>{stock.price}</Text>
      <Text style={styles.question}>오늘은 올라갈까? 내려갈까?</Text>
      <View style={styles.buttons}>
        <Text style={styles.button}>올라간다</Text>
        <Text style={styles.button}>내려간다</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    marginBottom: 10,
  },
  stockName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  stockPrice: {
    fontSize: 20,
    color: "#666",
    marginVertical: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default PredictScreen;
