# KeepAlive 缓存

使用 include / eventBus 以及 Vue export default 技巧使用 KeepAlive

### 基础用法

**图例**

通过点击路由 componentA / componentB 切换组件，初始化时 componentA 已默认使用 KeepAlive，所以切换到 componentB 再切回 componentA 时还处于前一个页码

![avatar](https://raw.githubusercontent.com/devin-huang/devin-huang.github.io/master/img/pubilc/vue-template-markdown/keepAlive.png)

**在线查看**

[ -------------- codesandbox：查看在线 Demo --------------](https://codesandbox.io/s/keepalive-jqbx1)

**在线下载**

链接：[https://share.weiyun.com/E4JKDeok](https://share.weiyun.com/E4JKDeok) 密码：6vf3jt

**使用方式**

```html
<template>
  <section>
    ...
  </section>
</template>

<script>
  import basePage from '../../keepAlive/basePage'
  export default basePage({
    name: 'ComponentA',
    keepAlive: true
  })
</script>
```

### KeepAlive/baseLayout.js

:::tip

- 只需要在主渲染区域组件引用一次即可

- 需要依据 `<router-view />`, 必须在主渲染区域使用`baseLayout`, 而且 `keepAliveList` 也定义在当前区域组件内,
  主渲染区域参考 [ 线上 DEMO ](https://codesandbox.io/s/keepalive-jqbx1) `/components/layout/Container/index`
  :::

| 参数          | 说明                   | 类型  | 可选值 | 默认值 |
| ------------- | ---------------------- | ----- | ------ | ------ |
| keepAliveList | 用于存放需要缓冲的组件 | Array | —      | []     |

### KeepAlive/basePage.js

:::tip

- 需要缓存的组件加入 `basePage` 并设置 `keepAlive: true`

- 将需要缓存组件设为 true 之后会自动保存全局的 eventBus 中

:::

| 参数 | 说明                                             | 类型  | 可选值 | 默认值 |
| ---- | ------------------------------------------------ | ----- | ------ | ------ |
| name | 唯一，keepAlive 是依据 name 来做标识，请避免重复 | Array | —      | []     |
