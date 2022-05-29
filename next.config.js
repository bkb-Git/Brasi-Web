const withPluginAntdLess = require("next-plugin-antd-less");
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
// primary-color options : dark blue #000073
// secondary-color : light blue #ADD8E6
// Silver Chalice:  #73777B

module.exports = withPluginAntdLess({
  modifyVars: {
    "@primary-color": "#023059",
    "@layout-header-background": "#ffffff",
    "@menu-item-height": "50px",
    "@menu-dark-item-active-bg": "#ccc",
    "@menu-dark-highlight-color": "#333",

    // Typography
    "@font-family": '"Montserrat", sans-serif',

    "@font-size-base": "16px",
    "@font-size-lg": "@font-size-base + 2px",
    "@font-size-sm": "14px",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
