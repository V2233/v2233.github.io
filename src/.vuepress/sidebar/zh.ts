import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // "portfolio",
    // {
    //   text: "快速使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "使用指南",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
