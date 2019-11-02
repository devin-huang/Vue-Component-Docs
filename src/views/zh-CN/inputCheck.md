# Input Check
常用的操作按钮。

### 基础用法

基础的输入框用法。

:::demo 通过正则验证

```html
<el-form ref="form" label-width="100px">
  <el-form-item label="验证输入">
    <input-check placeholder="正则表达式验证">
      <div slot="prepend">$</div>
      <div slot="append">.00</div>
    </input-check>
  </el-form-item>
</el-form>

```
:::

:::tip
基于element的el-input组件开发，支持原组件属性/方式
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data     | 默认值   | string   |    —     |    null     |
| regType     | 正则表达式   | regex    |   参考下表 |     `/^[1-9]\d*/`   |


### Regex
| 类型      | 说明    |
|---------- |-------- |
`/^[1-9]\d*/`   | 正整数 |
`/^((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}/` | 正数价格保留两位小数 |
`/^100$|^(\d|[1-9]\d)$/`  | 大于0小于100正整数 |
`/^[\-|0-9][0-9]*/`  | 负数 |


### Method
| name    |  参数  | 说明    | 
|---------- |-------- | -------- | 
| change     | 输入框前面插入内容   | Function(value)
| input      | 输入框后面插入内容   | Function(value)


### Slot
| name      | 说明    |
|---------- |-------- |
| prepend     | 输入框前面插入内容   |
| append      | 输入框后面插入内容   |