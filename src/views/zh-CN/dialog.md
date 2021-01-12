# Dialog 弹出框

函数式的对 el-dialog 二次封装, 通过 vue.extend 方式插入 DOM 中，当页面需要多个弹出框时无需生成多个 el-dialog，而是将之前已存在的 el-dialog 内容更新

### 基础用法

**图例**

![avatar](https://raw.githubusercontent.com/devin-huang/devin-huang.github.io/master/img/pubilc/vue-template-markdown/fun-dialog.png)

**在线查看**

[ -------------- 查看在线 Demo -------------- ](https://codesandbox.io/s/fun-dialog-uxlji)

**默认加载弹出框**

```js
showDialog({
  title: '弹出框标题',
  width: '800px',
  component: <HelloWorld />
})
```

**异步加载弹出框**

```js
showAsyncDialog(
  ComponentAsync,
  { title: '异步弹出框标题', width: '550px', top: '25vh' },
  { item: item },
  { close: closeCallback }
)
```

# fun-Dialog

### showDialog Attributes （默认加载弹出框）

| 参数      | 说明                                                             | 类型  | 可选值 | 默认值 |
| --------- | ---------------------------------------------------------------- | ----- | ------ | ------ |
| component | 必需，Dialog 中渲染的组件                                        | VNode | —      | —      |
| title     | 必需,用于展示标题同同时也是 Dialog 显示的判断属性                | Array | —      | []     |
| width     | 宽度                                                             | Array | —      | []     |
| ...       | 继承 el-dialog 属性，如：showDialog({top: '25vh', component:{}}) | —     | —      | —      |

### showAsyncDialog Attributes （异步加载弹出框）

| 参数          | 说明                      | 类型   | 可选值 | 默认值 |
| ------------- | ------------------------- | ------ | ------ | ------ |
| component     | 必需, Dialog 中渲染的组件 | VNode  | —      | —      |
| dialogOptions | 必需, Dialog 的属性       | Object | —      | {}     |
| attrs         | 子组件属性集合            | Object | —      | {}     |
| events        | 子组件方法集合            | Object | —      | {}     |

:::tip
嵌套目前最多时三个弹出框
:::
