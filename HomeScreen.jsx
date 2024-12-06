import dayjs from "dayjs";

import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AmazonLogo from "./assets/Logo=Amazon.svg";
import AppleLogo from "./assets/Logo=Apple.svg";
import GoogleLogo from "./assets/Logo=Google.svg";
import MetaLogo from "./assets/Logo=Meta.svg";
import MsLogo from "./assets/Logo=Microsoft.svg";
import NvidiaLogo from "./assets/Logo=Nvidia.svg";
import MainLogo from "./assets/홈스크린/주식 한입 작은버전.svg";
import { useSelector } from "react-redux";
import duration from "dayjs/plugin/duration"; // 플러그인 가져오기
dayjs.extend(duration); // 플러그인 활성화
const HomeScreen = ({ navigation }) => {
  const userName = useSelector((state) => state.user.name);
  const currentScore = useSelector((state) => state.score.currentScore);
  const stocks = [
    {
      id: "1",
      name: "애플",
      price: "$228.02",
      logo: AppleLogo,
      ticker: "AAPL",
    },
    {
      id: "2",
      name: "엔비디아",
      price: "$228.02",
      logo: NvidiaLogo,
      ticker: "NVDA",
    },
    {
      id: "3",
      name: "마이크로소프트",
      price: "$228.02",
      logo: MsLogo,
      ticker: "MSFT",
    },
    {
      id: "4",
      name: "구글",
      price: "$228.02",
      logo: GoogleLogo,
      ticker: "GOOGL",
    },
    {
      id: "5",
      name: "아마존",
      price: "$228.02",
      logo: AmazonLogo,
      ticker: "AMZN",
    },
    { id: "6", name: "메타", price: "$228.02", logo: MetaLogo, ticker: "META" },
  ];
  const [remainingTime, setRemainingTime] = useState("");

  const calculateRemainingTime = () => {
    const now = dayjs();
    const startTime = dayjs().hour(23).minute(0).second(0);
    const endTime = startTime.add(7, "hour");

    if (now.isBefore(startTime)) {
      //현재 시각이 오후 11시 이전이면 타이머 멈춤
      return "시작 전";
    } else if (now.isBefore(endTime)) {
      //현재 시각이 오후 11시 이후 오전 6시 이전
      const duration = endTime.diff(now);
      return formatDuration(duration);
    } else {
      //현재 시각이 오후 11시 이후(타이머 종료 상태)
      return "시작 전";
    }
  };

  const formatDuration = (duration) => {
    const hours = Math.floor(dayjs.duration(duration).asHours());
    const minutes = Math.floor(dayjs.duration(duration).asMinutes() % 60);
    const seconds = Math.floor(dayjs.duration(duration).asSeconds() % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateRemainingTime();
      setRemainingTime(time);
      if (time === "시작 전") {
        return;
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <MainLogo width={100} height={40} />
      <Text style={styles.greeting}>
        {userName}님,{"\n"}안녕하세요!
      </Text>

      <View style={styles.cardContainer}>
        {/* 결과보기 카드 */}
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("결과보기");
            }}
          >
            <Text style={styles.cardText}> {currentScore} / 10</Text>
          </TouchableOpacity>
          <Text style={styles.cardSubtext}>결과 보기</Text>
        </View>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{remainingTime}</Text>
          </View>
          <Text style={styles.cardSubtext}>
            {remainingTime === "시작 전"
              ? "시작 전"
              : "남은 시간 안에 맞춰보세요!"}
          </Text>
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
            onPress={() =>
              navigation.navigate("오늘은 올라갈까 내려갈까?", { stock: item })
            }
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
    paddingTop: 30,
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
