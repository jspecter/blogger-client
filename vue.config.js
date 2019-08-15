const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
  chainWebpack: config => {
    const types = ["vue", "normal"];
    types.forEach(type =>
      addStyleResources(config.module.rule("less").oneOf(type))
    );
  },
  devServer: {
    proxy:
      mode === "production" ? "http://yunbao.one" : "http://localhost:50080"
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
