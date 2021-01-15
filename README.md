# vue-docs-template

一个基于 Element-ui 风格的文档模板。 渲染 `Markdown` 中写的 vue 的代码。

> .gitignore `# Editor directories and files` 去掉 `*.md` 否则上传 Github 缺文件

- Markdown 文件

```
:::demo
<template>
  <div>devider component</div>
</template>
:::
```

- 渲染结果

<!-- ![](https://user-gold-cdn.xitu.io/2019/7/4/16bbb33ed92c4f32?w=904&h=256&f=gif&s=116678) -->

![avatar](https://raw.githubusercontent.com/devin-huang/devin-huang.github.io/master/img/pubilc/vue-template-markdown/template.png)

## `Markdown` 文件中使用到的 Vue 组件需要在 `src/main.js` 中注册

- src/main.js

```vue
import Star from '@/packages' Vue.use(Star)
```

- packages/index.js

```js
import Divider from './divider'

const install = Vue => {
  Vue.component(Divider.name, Divider)
}

export default {
  install
}
```

## 组件路由设置

模板中的组件路由根据 `nav.config.json` 文件生成

## 组件路径

组件路径 `packages/...`

## MarkDown

MarkDown 文件路径 `view/zh-CN/...md`

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### release log

```
yarn run release
```
