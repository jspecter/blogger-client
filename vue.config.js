const path = require("path");

module.exports = {
  chainWebpack: config => {
    const types = ["vue", "normal"];
    types.forEach(type =>
      addStyleResources(config.module.rule("less").oneOf(type))
    );
  },
  devServer: {
    proxy: "http://localhost:3000"
  }
};

function addStyleResources(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/less/var.less")]
    });
}
