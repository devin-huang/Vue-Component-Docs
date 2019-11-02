# Filter 下拉框
常用的操作按钮。

### 基础用法

基础的下拉框用法。

:::demo 当option为对象时可以自定义组件组合，如下Demo。 当option为数组则全是复选框

```html
<sst-filter
:options="{
    '区间设置': {'template': ['FilterValue']}, 
    '时间设置': {'template': ['FilterDate']},
    '下拉选择设置': {
        'template': ['FilterSelect'],
        'data': {
            selectList: [
                {value:1 , label: '1'},
                {value:2 , label: '2'}
            ]
        }
    },
    '混合设置': {
        'data': {
            min: 2,
            max: 10,
            select: [1,2],
            date: ['07/01/2019', '07/15/2019'],
            selectList: [
                {value:1 , label: '1'},
                {value:2 , label: '2'},
                {value:3 , label: '3'},
                {value:4 , label: '4'}
            ]
        },
        'template': ['FilterDate', 'FilterValue', 'FilterSelect']
    },
    '自定义': {'template': null}
}"
>
    <template slot="自定义">
        <div>
            <el-input value='自定义 -- Hello World'  placeholder="TEST" ></el-input>
        </div>
    </template>
</sst-Filter>
```
:::

:::tip
filter组件升级版， 使用方式与旧的方式一样
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| effect     | 显示方式   | string  |  light |    light     |
| options     | 数据   | Array / Object    |   —  | [] / {}  |
| selectedList     | 已选中选项   | Array    | — | []   |


### methods
| name      | 说明     | 参数   |
|---------- |-------- |---------- |
| change     |  改变值时回调函数   | Function(value) |


### slot
| name      | 说明 |
|---------- |-------- |
| 非 FilterValue / FilterSelect / FilterDate   | 通过覆盖默认slot内容实现