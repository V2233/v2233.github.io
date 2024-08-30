# 源码贡献

插件鼓励社区贡献代码，你可以在项目根目录添加你的个人名片作为贡献留证。

![develop](/docs/images/contribute/1.png)

![develop](/docs/images/contribute/2.png)

## 说明

- 你可直接克隆github的主分支，该分支编译后可直接作为生产代码用于v3或next版本拉取或是直接npm publish到npm上，如果想开发前端，直接在插件根目录删除frontend目录并执行

```sh
git clone --depth=1 https://github.com/V2233/micro-web.git frontend
```

## 后端编译提交

- 如果你还没有yarn，请执行以下命令安装：
  ```sh
  npm i yarn -g
  ```
- 安装开发依赖
  ```sh
  yarn install:dev
  ```
- 启动插件
  ```sh
  yarn app
  ```
- 编译插件
  ```sh
  yarn build
  ```
- 发布到npm上
  - 这里解决请求超时问题
  ```sh
  npm config set proxy false
  ```
  ```sh
  npm publish -d
  ```

## 关于前端编译提交方式

- 启动开发模式
  ```sh
  yarn dev
  ```
- 执行编译：
  ```sh
  yarn build
  ```
- 另外注意提交规范，否则无法提交成功！

## 前端技术栈

```json
{
  "name": "micro_panel",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -p tsconfig.build.json && vite build --mode production",
    "preview": "vite preview",
    "lint": "eslint src",
    "fix": "eslint src --fix",
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "prepare-bak": "husky install",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
    "preinstall": "node scripts/check-path.mjs",
    "build:test": "vue-tsc -p tsconfig.build.json && vite build --mode test",
    "build:pro": "vue-tsc -p tsconfig.build.json && vite build --mode production"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.1.0",
    "@es-drager/editor": "link:src/plugins/editor",
    "@floating-ui/dom": "^1.6.7",
    "@xterm/addon-fit": "^0.10.0",
    "@xterm/xterm": "^5.5.0",
    "ace-builds": "^1.35.0",
    "axios": "^1.3.5",
    "color": "^4.2.3",
    "crypto-js": "^4.2.0",
    "echarts": "^5.4.2",
    "echarts-liquidfill": "^3.1.0",
    "element-plus": "^2.7.6",
    "emoji-mart-vue-fast": "^15.0.2",
    "es-drager": "^1.2.11",
    "file-type": "^19.4.1",
    "highlight.js": "^11.10.0",
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.1",
    "lodash": "^4.17.21",
    "marked": "^14.0.0",
    "mitt": "^3.0.1",
    "moment": "^2.29.4",
    "nprogress": "^0.2.0",
    "path": "^0.12.7",
    "pinia": "^2.0.34",
    "pinia-plugin-persistedstate": "^3.2.1",
    "progress": "^2.0.3",
    "vue": "^3.2.47",
    "vue-i18n": "^9.13.1",
    "vue-router": "^4.1.6",
    "vue3-ace-editor": "^2.2.4"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.21.3",
    "@commitlint/cli": "^17.5.1",
    "@commitlint/config-conventional": "^17.4.4",
    "@fontsource/roboto-mono": "^5.0.18",
    "@types/marked": "^6.0.0",
    "@types/nprogress": "^0.2.0",
    "@typescript-eslint/eslint-plugin": "^5.57.1",
    "@typescript-eslint/parser": "^5.57.1",
    "@vitejs/plugin-vue": "^4.1.0",
    "eslint": "^8.38.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-vue": "^9.10.0",
    "husky": "^8.0.0",
    "mockjs": "^1.1.0",
    "postcss": "^8.4.21",
    "postcss-html": "^1.5.0",
    "postcss-scss": "^4.0.6",
    "prettier": "^2.8.7",
    "sass": "^1.61.0",
    "sass-loader": "^13.2.2",
    "stylelint": "^15.4.0",
    "stylelint-config-prettier": "^9.0.5",
    "stylelint-config-recess-order": "^4.0.0",
    "stylelint-config-recommended": "^11.x.x",
    "stylelint-config-recommended-scss": "^9.0.1",
    "stylelint-config-standard": "^32.0.0",
    "stylelint-config-standard-scss": "^7.0.1",
    "stylelint-config-standard-vue": "^1.0.0",
    "stylelint-order": "^6.0.3",
    "stylelint-scss": "^4.6.0",
    "typescript": "^5.5.3",
    "vite": "^4.2.0",
    "vite-plugin-mock": "^2.9.6",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-tsc": "^2.0.26"
  },
  "optionalDependencies": {}
}
```

## 后端技术栈

```json
{
  "name": "yunzai-micro-plugin",
  "version": "0.1.0-Beta.9",
  "description": "Yunzai低代码开发管理平台",
  "main": "dist/index.js",
  "type": "module",
  "scripts": {
    "app": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.ts",
    "dev": "nodemon",
    "test": "node --no-warnings=ExperimentalWarning --loader ts-node/esm test/test.ts",
    "build": "rollup --config rollup.config.js",
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
    "install:dev": "node --experimental-modules scripts/install-dev.mjs"
  },
  "keywords": [
    "yunzai",
    "micro-plugin",
    "low-code-platform"
  ],
  "author": "Smallv",
  "license": "GPL-3.0-only",
  "dependencies": {
    "@koa/multer": "^3.0.2",
    "directory-tree": "^3.5.1",
    "file-type": "^19.3.0",
    "get-urls": "^12.1.0",
    "iconv-lite": "^0.6.3",
    "jsonwebtoken": "^9.0.2",
    "koa": "^2.15.3",
    "koa-body": "^6.0.1",
    "koa-router": "12.0.1",
    "koa-static": "^5.0.0",
    "mime": "^4.0.4",
    "systeminformation": "^5.22.11",
    "ws": "^8.17.1"
  },
  "imports": {
    "#bot": "./src/adapter/index.js",
    "#env": "./src/env.js",
    "#utils": "./src/utils/index.js",
    "#cfg": "./src/config/index.js"
  },
  "devDependencies": {
    "@commitlint/config-conventional":"^19.1.0",  
    "@rollup/plugin-terser":"^0.4.4",  
    "@rollup/plugin-alias":"^5.1.0",
    "@rollup/plugin-typescript":"^11.1.6",  
    "@types/koa-router":"^7.4.8",  
    "rollup":"^4.18.1",  
    "ts-node":"^10.9.2",  
    "typescript":"^5.4.5",  
    "yunzai":"latest"
  },
  "peerDependencies": {
    "ws": "^8.17.1"
  },
  "files": [
    "src/**/*",
    "dist/**/*",
    "public/**/*",
    "config/**/*"
  ],
  "types": "dist/types",
  "exports": {
    ".": {
      "import": "./dist/index.js"
    }
  },
  "publishConfig": {
    "registry": "https://registry.npmjs.org"
  }
}
```