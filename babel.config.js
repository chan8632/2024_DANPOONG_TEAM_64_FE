module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // Expo 프로젝트에서 사용하는 Babel 프리셋
    plugins: [
      "react-native-reanimated/plugin", // 기존 플러그인 유지
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env", // .env 파일의 값을 불러올 때 사용할 이름
          path: ".env", // .env 파일 경로
          blacklist: null, // 제외할 키
          whitelist: null, // 허용할 키
          safe: false, // .env.example 사용 여부
          allowUndefined: true, // 정의되지 않은 값 허용 여부
        },
      ],
    ],
  };
};
