# Input 
常用的操作。

### 基础用法

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<sst-input></sst-input>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     | 默认宽度   | [String, Number]  |   —     |   200     |
| value     | 默认值   | [String, Number]  |   —     |    null     |
| size     | 尺寸   | string  |   —     |    mini     |
| editTitle     | 默认标题   | string  |   —     |    Edit     |
| confirmTitle     | 默认按钮  | string  |   —     |    Save value     |
| cancelTitle     | 默认按钮   | string  |   —     |    To cancel     |
| placeAlign     | 对齐   | string  |   —     |    left     |
| align     | 文字对齐   | string  |   —     |    left     |
| border     | 边框   | string  |   —     |    null     |
| placeholder     | 提示   | string  |   —     |    null     |


### Methods
| name      | 说明    | 参数      |
|---------- |-------- |---------- |
| input     | 输入时触发   |  Function(value)     | 
| confirm     | 确认时触发   | Function(value)   | 
| cancel     | 取消时触发   |  —     | 