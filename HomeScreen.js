import dayjs from "dayjs";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GoogleLogo from "./assets/Logo=Google.svg";
import AppleLogo from "./assets/Logo=Apple.svg";
import NvidiaLogo from "./assets/Logo=Nvidia.svg";
import MsLogo from "./assets/Logo=Microsoft.svg";
import AmazonLogo from "./assets/Logo=Amazon.svg";
import MetaLogo from "./assets/Logo=Meta.svg";
import MainLogo from "./assets/홈스크린/주식 한입 작은버전.svg";

const HomeScreen = ({ navigation }) => {
  const [selectedStock, setSelectedStock] = useState(null);

  const stocks = [
    { id: "1", name: "애플", price: "$228.02", logo: AppleLogo },
    { id: "2", name: "엔비디아", price: "$228.02", logo: NvidiaLogo },
    { id: "3", name: "마이크로소프트", price: "$228.02", logo: MsLogo },
    { id: "4", name: "구글", price: "$228.02", logo: GoogleLogo },
    { id: "5", name: "아마존", price: "$228.02", logo: AmazonLogo },
    { id: "6", name: "메타", price: "$228.02", logo: MetaLogo },
  ];

  const handleStockSelect = (id) => {
    setSelectedStock(id);
    alert(`You selected ${id}!`);
  };

  return (
    <View style={styles.container}>
      <MainLogo width={100} height={40} />
      <Text style={styles.greeting}>지니님,{"\n"}안녕하세요!</Text>
      <View style={styles.cardContainer}>
        {/* 결과보기 카드 */}
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Result");
            }}
          >
            <Text style={styles.cardText}>7 / 10</Text>
          </TouchableOpacity>
          <Text style={styles.cardSubtext}>결과 보기</Text>
        </View>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{dayjs().format("HH:mm:ss")}</Text>
          </View>
          <Text style={styles.cardSubtext}>남은 시간 안에 맞춰보세요!</Text>
        </View>
      </View>
      <Text style={styles.subTitle}>주식을 골라주세요!</Text>
      <FlatList
        data={stocks}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.stockButton}
            onPress={() => handleStockSelect(item.name)}
          >
            <item.logo width={50} height={50} />
            <Text style={styles.stockName}>{item.name}</Text>
            <Text style={styles.stockPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 35,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  cardWrapper: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 100,
    margin: 5,
    elevation: 3, // Android 그림자
    shadowColor: "#000", // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  cardText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubtext: {
    fontSize: 12,
    color: "#888",
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stockButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },

  stockName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stockPrice: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
