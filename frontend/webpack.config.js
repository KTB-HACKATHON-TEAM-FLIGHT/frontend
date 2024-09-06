const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"), // 폴리필 추가
    },
  },
};
