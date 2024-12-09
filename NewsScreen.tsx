import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const newsData = [
  { id: "1", title: "아마존, 클라우드 시장 점유율 상승 전망", ticker: "AMZN" },
  { id: "2", title: "아마존, 프라임 서비스 가입자 수 증가", ticker: "AMZN" },
  { id: "3", title: "아마존, 드론 배송 서비스 확대 계획 발표", ticker: "AMZN" },
  { id: "4", title: "아마존, 신규 물류 센터 건설 착수", ticker: "AMZN" },
  { id: "5", title: "애플, 새로운 아이폰 출시 임박", ticker: "AAPL" },
  { id: "6", title: "애플, 증강현실 헤드셋 개발 중", ticker: "AAPL" },
  { id: "7", title: "애플, 새로운 M1 칩 공개", ticker: "AAPL" },
  { id: "8", title: "애플, 자율주행 자동차 프로젝트 가속화", ticker: "AAPL" },
  { id: "9", title: "구글, AI 연구 성과 발표", ticker: "GOOGL" },
  { id: "10", title: "구글, 클라우드 사업 확장 계획 발표", ticker: "GOOGL" },
  { id: "11", title: "구글, 새로운 안드로이드 버전 출시", ticker: "GOOGL" },
  { id: "12", title: "구글, 유튜브 프리미엄 구독자 증가", ticker: "GOOGL" },
  { id: "13", title: "메타, 메타버스 프로젝트 확대 계획 발표", ticker: "META" },
  { id: "14", title: "메타, 개인정보 보호 정책 업데이트", ticker: "META" },
  { id: "15", title: "메타, VR 헤드셋 신제품 출시 예정", ticker: "META" },
  { id: "16", title: "메타, 광고 수익 증가 전망 발표", ticker: "META" },
  {
    id: "17",
    title: "마이크로소프트, 차세대 윈도우 업데이트 공개",
    ticker: "MSFT",
  },
  {
    id: "18",
    title: "마이크로소프트, 게임 패스 구독자 수 증가",
    ticker: "MSFT",
  },
  {
    id: "19",
    title: "마이크로소프트, 클라우드 서비스 매출 급증",
    ticker: "MSFT",
  },
  {
    id: "20",
    title: "마이크로소프트, 새로운 서피스 제품 발표",
    ticker: "MSFT",
  },
  { id: "21", title: "엔비디아, GPU 신제품 출시 예정", ticker: "NVDA" },
  { id: "22", title: "엔비디아, AI 칩 개발 계획 발표", ticker: "NVDA" },
  { id: "23", title: "엔비디아, 데이터 센터 매출 성장", ticker: "NVDA" },
  { id: "24", title: "엔비디아, 자율주행 기술 협력 강화", ticker: "NVDA" },
];

const NewsScreen = ({ route }) => {
  const { stockTicker } = route.params; // stockTicker로 전달된 주식 정보
  // 전달된 주식 ticker에 맞는 뉴스 필터링
  const filteredNewsData = newsData.filter(
    (news) => news.ticker === stockTicker
  );
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      <View style={styles.placeholderImage} />
      <Text style={styles.newsTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>뉴스</Text>
      <FlatList
        data={filteredNewsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  newsItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
    marginHorizontal: 8,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  placeholderImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#d0d0d0",
    borderRadius: 4,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default NewsScreen;
