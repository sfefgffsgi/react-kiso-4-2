module.exports = function (api) {
  api.cache(true); // この変換設定関数をキャッシュする

  const presets = [["@babel/preset-env", "@babel/preset-react"]];

  return {
    presets,
  };
};
