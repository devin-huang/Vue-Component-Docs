## 快速上手

本节将介绍如何在项目中使用 Element。

### 使用插件


```javascript
import Sst from './plugin'
Vue.use(Sst)
new Vue({
})

```

### 插件开发

```javascript
export default install = (Vue, options) => {
  Vue.GlobalMethods = () => {}
  Vue.directive('my-directive', {})
  Vue.component('my-component', '<div>com</div>'), 
  Vue.mixin({})
  Vue.prototype.$xx = () => {}
}

```


### 目录结构

package 存放组件库
views 存放对应的maskdown格式展示内容
nav.config.json 存放对应的路由映射

我们提供了通用的[项目模板](https://github.com/ElementUI/element-starter)，你可以直接使用。对于 Laravel 用户，我们也准备了相应的[模板](https://github.com/ElementUI/element-in-laravel-starter)，同样可以直接下载使用。

如果不希望使用我们提供的模板，请继续阅读。

### 打包组件库

运行yarn/npm run lib 将会在 根目录下生成一个dist 目录。 里面包含打包压缩后的 common规范和umd规范的js 文件,在其他项目使用时，根据其他项目的使用规范引用相对应的js 文件。

###  其他项目使用组件库

上一步中可以看到已经打包出了 .css 文件和.js 文件， 如果在 jsp 这种单文件中可以分别引入 .css 文件和.js 文件就可以了。 但是在 其他的 vue 项目中引用情况会有些不同。
#### 项目依赖于 vue-cli@2 的情况。

a)	Vue-cli@2 项目的静态文件存放在根目录的static 目录， 这时可以把 打包后的组件库的 sstUi.css 和 sstUi.common.js 这两个文件放到 static 目录下。 
b)	找到 html-webpack-plugin 插件中配置的 index.html/index.tpl 模板(一般这个文件存放在根目录下)。在这个模板中手动插入 sstUi.css 依赖和sstUi.common.js 依赖。

```html
<link rel="stylesheet" href="/sstUi.css">
<script src="/sstUi.common.js"></script> // 这行放在body 下
```

#### 项目依赖于 vue0cli@3 的情况。
a)	Vue-cli@3 项目的静态文件存放在根目录的public目录， 这时可以把 打包后的组件库的 sstUi.css 和 sstUi.common.js 这两个文件放到 public目录下。 
b)	在public/index.html这个模板中手动插入 sstUi.css 依赖和sstUi.common.js 依赖。

```html
<link rel="stylesheet" href="/sstUi.css">
<script src="/sstUi.common.js"></script> // 这行放在body 下
```


#### 按需引入


接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/ElemeFE/element/blob/master/components.json) 为准）

```javascript
import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
```

