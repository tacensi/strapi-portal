module.exports = (config, webpack) => {
  // add sass-loader
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  });
  console.log("sass loader added");
  return config;
};
