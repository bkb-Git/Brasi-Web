const withPluginAntdLess = require("next-plugin-antd-less");
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
// primary-color options : dark blue #000073
// secondary-color : light blue #ADD8E6
// Silver Chalice:  #aaa7a7

module.exports = withPluginAntdLess({
  modifyVars: {
    "@primary-color": "#000073",
    "@layout-header-background": "#ffffff",
    "@menu-item-height": "50px",
    "@menu-dark-item-active-bg": "#fff",
    "@menu-dark-highlight-color": "#333",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
