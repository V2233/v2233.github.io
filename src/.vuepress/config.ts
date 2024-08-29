import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/micro",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "云崽开发管理平台",
      description: "云崽聊天机器人的低代码开发管理系统，包含了插件编辑器、图片可视化编辑器、文件管理系统、Shell终端、QQ仿真沙盒、代码编辑器、云崽配置编辑、状态可视化大屏等",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
