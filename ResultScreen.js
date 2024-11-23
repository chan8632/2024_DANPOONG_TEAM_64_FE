import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppleOn from "./assets/Stamp/appleOn.svg";
import GoogleOn from "./assets/Stamp/googleOn.svg";
import NvidiaOn from "./assets/Stamp/nvidiaOn.svg";
import AmazonOn from "./assets/Stamp/amazonOn.svg";
import MicrosoftOn from "./assets/Stamp/msOn.svg";
import MetaOn from "./assets/Stamp/metaOn.svg";

import AppleOff from "./assets/Stamp/appleOff.svg";
import GoogleOff from "./assets/Stamp/googleOff.svg";
import NvidiaOff from "./assets/Stamp/nvidiaOff.svg";
import AmazonOff from "./assets/Stamp/amazonOff.svg";
import MicrosoftOff from "./assets/Stamp/msOff.svg";
import MetaOff from "./assets/Stamp/metaOff.svg";

import Nullsvg from "./assets/Stamp/null.svg";

const ResultScreen = () => {
  const logoSize = 55;
  const datas = [
    "appleOn",
    "appleOff",
    "amazonOff",
    "null",
    "null",
    "metaOn",
    "appleOff",
    "amazonOff",
    "null",
    "null",
  ];

  // 상태와 SVG를 매핑
  const svgMapping = {
    appleOn: AppleOn,
    appleOff: AppleOff,
    googleOn: GoogleOn,
    googleOff: GoogleOff,
    nvidiaOn: NvidiaOn,
    nvidiaOff: NvidiaOff,
    amazonOn: AmazonOn,
    amazonOff: AmazonOff,
    microsoftOn: MicrosoftOn,
    microsoftOff: MicrosoftOff,
    metaOn: MetaOn,
    metaOff: MetaOff,
    null: Nullsvg,
  };
  return (
    <View style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* 결과 텍스트 */}
      <Text style={styles.titleText}>지니 님은</Text>
      <Text style={styles.highlightText}>
        총 <Text style={styles.highlightNumber}>7번</Text> 맞히셨네요!
      </Text>

      {/* 로고 목록 */}
      <View style={styles.logoContainer}>
        {datas.map((key, index) => {
          const LogoComponent = svgMapping[key]; // 데이터 값에 따라 SVG 매핑
          return (
            <View
              key={index}
              style={{
                margin: 10,
                width: { logoSize } + 0,
                height: { logoSize } + 0,
                borderRadius: 35,
                backgroundColor: "#ffffff",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <LogoComponent width={logoSize} height={logoSize} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlightText: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
  },
  highlightNumber: {
    color: "blue",
    fontWeight: "bold",
  },
  dropdown: {
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  logoContainer: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2, // 안드로이드 그림자
    shadowColor: "#000", // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default ResultScreen;
