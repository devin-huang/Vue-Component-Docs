# Page 布局
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 通过slot插槽方式实现

```html

<page
    :pagination="true"
>
    <section style="background-color: #9fcfff;padding: 15px;" slot="pageTitle">HEADER</section>
    <section style="background-color: #8bc34a;padding: 15px;">BODY</section>
    <section style="background-color: #00bcd4;padding: 15px;" slot="pageFooter">FOOTER</section>
</page>

```
:::

### 实际用法

基础的按钮用法。

:::demo 系统类项目时可以根据当前可显示范围展示TABLE数据

```html

<page
    :pagination="true"
>
    <section slot="pageTitle">HEADER > DEMO > TABLE</section>
    <section>
        <el-table
        :data="[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>
    </section>
</page>

```
:::

:::tip
根据屏幕自适应BODY内容的高度
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| pagination     | 是否显示分页组件   | Boolean   |    —     |    false     |
| total     | 数据总数  | number    |    —     |  0   |
| tHeight     | 正则表达式   | regex    |    —  |   0   |
| pageSizes     | 展示条数   | array    |    —  | [30, 60, 90, 120]  |


### Method
| name    |  参数  | 说明    | 
|---------- |-------- | -------- | 
| update:tHeight     | 改变屏幕尺寸时触发   | Function(height)


### Slot
| name      | 说明    |
|---------- |-------- |
| pageTitle     | 前面插入内容   |
| pageFooter      | 后面插入内容   |