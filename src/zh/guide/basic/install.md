# 安装

该管理面板依赖云崽机器人框架运行，如果你还没有安装此应用，请查看以下教程进行安装:

<a href="https://yunzai-org.github.io/docs/">https://yunzai-org.github.io/docs/</a>

## 安装插件

插件提供了以下两种安装方式，请根据你的yunzai版本选择适合的安装方式：

1. 使用npm模块(Yunzai-next)：
   
- 下载依赖

```sh
yarn add yunzai-micro-plugin -W
```

- 如下示例写入配置文件

```ts
// yunzai.config.js
import { defineConfig } from 'yunzai'
import micro from 'yunzai-micro-plugin'

export default defineConfig({
  // 应用
  applications: [micro()],
  // 中间件
  middlewares: []
})
```

2. 使用git(yunzai各版本通用)：
   
- 克隆源码

```sh
git clone --depth=1 https://github.com/V2233/micro-plugin.git ./plugins/micro-plugin
```
或者使用gitee镜像
```sh
git clone --depth=1 https://gitee.com/V2233/micro-plugin.git ./plugins/micro-plugin
```

- 安装依赖

```sh
pnpm i --filter ./plugins/micro-plugin
```

- 重启Yunzai

```sh
pnpm run restart
```
