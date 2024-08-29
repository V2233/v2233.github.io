import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
//   "/zh/portfolio",
//   "/zh/demo/",
  {
    text: "使用文档",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "快速开始",
        icon: "lightbulb",
        prefix: "basic/",
        children: [
            "", { text: "", icon: "", link: "" }
        ],
      },
      {
        text: "模块",
        icon: "lightbulb",
        prefix: "modules/",
        children: [
            "", { text: "", icon: "", link: "" }
        ],
      },
    ],
  }
]);
