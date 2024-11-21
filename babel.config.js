module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // Expo 프로젝트에서 사용하는 Babel 프리셋
    plugins: ["react-native-reanimated/plugin"], // 플러그인 추가
  };
};
