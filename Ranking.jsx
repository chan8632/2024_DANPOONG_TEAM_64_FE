import React from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const RANKING_DATA = [
  { rank: 1, name: "연찬", score: 7 },
  { rank: 1, name: "현지", score: 7 },
  { rank: 1, name: "경원", score: 7 },
  { rank: 4, name: "연주", score: 6 },
  { rank: 4, name: "유진", score: 6 },
  { rank: 4, name: "사랑", score: 6 },
  { rank: 7, name: "지니", score: 4 },
];

export default function RankingScreen() {
  return (
    <View style={styles.container}>
      {/* 상단 사용자 메시지 */}
      <Text style={styles.title}>지니 님은 이번 주 7등이네요!</Text>

      {/* 순위 리스트 */}
      <View style={styles.rankList}>
        <FlatList
          data={RANKING_DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.rank}>{item.rank}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.score}>{item.score}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rankList: {
    backgroundColor: "#fff", // 그림자가 보이게 하려면 배경색 추가
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 }, // 그림자의 방향
        shadowOpacity: 0.3, // 그림자 투명도
        shadowRadius: 10, // 그림자 퍼짐 정도
      },
      android: {
        elevation: 10, // Android 그림자
      },
    }),
    borderRadius: 10, // 박스 모서리 둥글게
    padding: 30,
    marginVertical: 10, // 위아래 간격 추가
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  rank: {
    fontSize: 16,
    width: 50,
    textAlign: "center",
  },
  name: {
    fontSize: 16,
    flex: 1,
    textAlign: "left",
  },
  score: {
    fontSize: 16,
    width: 50,
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderTopWidth: 1,
  },
});
