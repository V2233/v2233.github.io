---
title: 安装
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - 插件安装
---

插件可用git和npm安装两种方式，如果你使用Yunzai Next框架，那么推荐你使用npm安装，该方式可避免使用pnpm安装可能发生的依赖冲突情况。

<!-- more -->

## Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

## Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

::: important Frontmatter

Frontmatter 是 VuePress 中很重要的一个概念，请阅读 [Frontmatter 介绍](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter) 了解详情。

:::

## Markdown 扩展

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

### VuePress 扩展

为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。

关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。

### 主题扩展

通过 [`vuepress-plugin-md-enhance`][md-enhance]，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

#### 选项卡

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html)

#### 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html)

#### 导入文件

<!-- @include: ./README.md{11-17} -->

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html)

#### TeX 语法

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html)

#### 任务列表

- [x] 计划 1
- [ ] 计划 2

[查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html)

### 图片增强

支持为图片设置颜色模式和大小。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)

#### 上下角标

19^th^ H~2~O

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html)

#### 组件

```component VPCard
title: Mr.Hope
desc: Where there is light, there is hope
logo: https://mister-hope.com/logo.svg
link: https://mister-hope.com
background: rgba(253, 230, 138, 0.15)
```

- [查看详情](https://theme-hope.vuejs.press/zh/guide/component/grammar.html)

#### 提示容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#提示容器)。

```js
const a = 1;
```

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: caution 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::

- [GitHub 警示](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)
- [提示框](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)

#### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html)

#### 属性支持

一个拥有 ID 的 **单词**{#word}。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html)

#### 标记

你可以标记 ==重要的内容== 。

- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html)


