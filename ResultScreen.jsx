import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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

    "nvidiaOff",
    "metaOn",
    "appleOff",
    "amazonOff",
    "microsoftOff",
    "metaOff",
  ];

  // 데이터를 행 단위로 분리 (3개, 4개, 3개)
  const rows = [
    datas.slice(0, 3), // 첫 번째 행
    datas.slice(3, 7), // 두 번째 행
    datas.slice(7, 10), // 세 번째 행

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

      {/* 결과 텍스트 */}
      <Text style={styles.titleText}>지니 님은</Text>
      <Text style={styles.highlightText}>
        총 <Text style={styles.highlightNumber}>7번</Text> 맞히셨네요!
      </Text>


      {/* 로고 그리드 */}
      <View style={styles.logoContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key, index) => {
              const LogoComponent = svgMapping[key];
              return (
                <View
                  key={index}
                  style={{
                    marginHorizontal: 10,
                    width: logoSize,
                    height: logoSize,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 35,
                    borderWidth: 1,
                    borderColor: "#ddd",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <LogoComponent width={logoSize} height={logoSize} />
                </View>
              );
            })}
          </View>
        ))}

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

  logoContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  logoWrapper: {},

});

export default ResultScreen;
