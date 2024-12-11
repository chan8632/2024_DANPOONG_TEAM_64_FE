const path = require("path");
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  const {
    resolver: { sourceExts, assetExts },
  } = defaultConfig;

  return {
    transformer: {
      // SVG 변환기 추가
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      // extraNodeModules로 특정 경로 매핑
      extraNodeModules: {
        ...defaultConfig.resolver.extraNodeModules,
        "@react-navigation/elements": path.resolve(
          __dirname,
          "node_modules/@react-navigation/elements/lib/module/assets"
        ),
      },
      // SVG 관련 설정 병합
      assetExts: assetExts.filter((ext) => ext !== "svg"), // SVG 제거
      sourceExts: [...sourceExts, "svg"], // SVG 추가
    },
  };
})();
