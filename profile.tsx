import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

function profile() {
  const userName = useSelector((state) => state.user.name);
  return (
    <View style={styles.container}>
      {/* 사용자 프로필 정보 */}
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{userName} 님</Text>
          <TouchableOpacity>
            <Text style={styles.profileEdit}>프로필 수정</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 메뉴 항목 */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="person-outline" size={24} color="blue" />
          <Text style={styles.menuText}>프로필</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="log-out-outline" size={24} color="blue" />
          <Text style={styles.menuText}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="person-remove-outline" size={24} color="blue" />
          <Text style={styles.menuText}>탈퇴하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: "blue",
  },
  profileTextContainer: {
    flexDirection: "column",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEdit: {
    marginTop: 4,
    color: "blue",
    fontSize: 14,
  },
  menuContainer: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default profile;
