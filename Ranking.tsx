import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const RANKING_DATA = [
  { rank: 1, name: "연찬", score: 7 },
  { rank: 1, name: "현지", score: 7 },
  { rank: 1, name: "경원", score: 7 },
  { rank: 4, name: "연주", score: 6 },
  { rank: 4, name: "유진", score: 6 },
  { rank: 4, name: "사랑", score: 6 },
  { rank: 7, name: "지니", score: 4 },
  { rank: 8, name: "철수", score: 3 },
  { rank: 9, name: "영희", score: 2 },
  { rank: 10, name: "민수", score: 1 },
];

const renderHeader = () => (
  <View style={styles.headerRow}>
    <Text style={[styles.headerText, styles.rank]}>등수</Text>
    <Text style={[styles.headerText, styles.name]}>닉네임</Text>
    <Text style={[styles.headerText, styles.score]}>점수</Text>
  </View>
);

export default function RankingScreen() {
  const userName = useSelector((state) => state.user.name);
  const INITIAL_DATA_COUNT = 7; // 초기 표시 데이터 개수
  const [dataToShow, setDataToShow] = useState(INITIAL_DATA_COUNT); // 초기 데이터는 7개만 표시

  const handleShowAll = () => {
    setDataToShow(RANKING_DATA.length); // 데이터 전체를 보여줌
  };
  const handleCollapse = () => {
    setDataToShow(INITIAL_DATA_COUNT); // 초기 상태로 돌아가기
  };
  return (
    <View style={styles.container}>
      {/* 상단 사용자 메시지 */}
      <Text style={styles.title}>{userName} 님은 이번 주 7등이네요!</Text>

      {/* 순위 리스트 */}
      <View style={styles.rankList}>
        <FlatList
          data={RANKING_DATA.slice(0, dataToShow)}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => {
            const isCurrentUser = item.name === userName;

            return (
              <View
                style={[styles.row, isCurrentUser && styles.currentUserRow]}
              >
                <Text
                  style={[styles.rank, isCurrentUser && styles.currentUserText]}
                >
                  {item.rank}
                </Text>
                <Text
                  style={[styles.name, isCurrentUser && styles.currentUserText]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.score,
                    isCurrentUser && styles.currentUserText,
                  ]}
                >
                  {item.score}
                </Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        {/* 더보기/줄이기 버튼 */}
        {dataToShow < RANKING_DATA.length ? (
          <TouchableOpacity
            onPress={handleShowAll}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>등수 전체 보기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleCollapse}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>줄이기</Text>
          </TouchableOpacity>
        )}
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  currentUserRow: {
    backgroundColor: "#f0f8ff", // 현재 사용자의 행 배경색
    borderRadius: 8, // 모서리를 둥글게
  },
  currentUserText: {
    color: "#007bff", // 현재 사용자의 텍스트 색상(파란색)
    fontWeight: "bold", // 텍스트 강조
  },
  moreButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  moreButton: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
