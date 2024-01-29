## 1：如何使用 Ant Design 的基础组件？

Ant Design 提供了很多基础组件，你可以通过以下步骤来使用它们：

1. 首先，在你的代码中导入需要的基础组件的模块。

```tsx
import { Button, Input, Checkbox } from 'antd';
```

2. 在页面中使用这些组件，例如：

```tsx
<>
  <Button type="primary">Primary Button</Button>
  <Input placeholder="Please input" />
  <Checkbox>Checkbox</Checkbox>
</>
```

这样就可以在页面中展示 Ant Design 提供的基础组件了。

3. 根据需要，你可以根据 Ant Design 的文档定制组件的样式和功能。

   通过查阅 [Ant Design 官方文档](https://ant.design/)，你可以了解每个组件的使用方法和可用属性，以及如何通过样式和配置来自定义组件。

### 2：如何在 Ant Design 中使用搜索功能？

如果你需要在 Ant Design 中使用搜索功能，可以参考以下步骤：

1. 导入相应的组件：

```tsx
import { Input, Button, Table } from 'antd';
```

2. 在页面上创建一个搜索框组件：

```tsx
const Search = Input.Search;

<Search
  placeholder="请输入搜索内容"
  onSearch={(value) => console.log(value)}
  style={{ width: 200 }}
/>;
```

这样就在页面上创建了一个搜索框。

3. 结合 Table 组件使用搜索功能：

```tsx
   const columns = [
     {
       title: '姓名',
       dataIndex: 'name',
       key: 'name',
     },
     ...
   ];

   <Table columns={columns} dataSource={data} />
```

使用 Ant Design 的 Table 组件可以将搜索和表格结合起来，实现搜索功能。

4. 根据需要配置搜索功能的逻辑和样式，在搜索框中输入内容后，可以通过相关的事件或回调函数处理搜索逻辑。

### 3：如何在 Ant Design 中使用下拉选择框？

Ant Design 提供了下拉选择框组件，你可以按照以下步骤来使用它：

1. 首先，在你的代码中导入下拉选择框组件的模块：

```tsx
import { Select } from 'antd';
```

2. 创建一个 Select 组件，并配置选项：

```tsx
const { Option } = Select;

<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
  <Option value="jack">Jack</Option>
  <Option value="lucy">Lucy</Option>
  <Option value="disabled" disabled>
    Disabled
  </Option>
</Select>;
```

通过添加 Option 组件可以配置下拉选择框的选项。

3. 根据需要，你可以使用 onChange 属性来监听选择变化的事件，并在回调函数中处理选择逻辑。

```tsx
function handleChange(value) {
  console.log(`selected ${value}`);
}
```

通过回调函数可以获取用户选择的值，并进行相应的操作。

以上是在 Ant Design 中使用搜索功能和下拉选择框的基本步骤，具体使用方法可以参考 Ant Design 的官方文档。

### text 参数

- 说明：需要格式化的值
- 类型：any
- 默认值：-

### valueType 参数

- 说明：格式化的类型
- 类型：ValueType
- 默认值：-

### mode 参数

- 说明：组件的模式
- 默认值：-
- 类型：-

### plain 参数

- 说明：精简模式
- 默认值：-
- 类型：-

### renderFormItem 参数

- 说明：自定义 `mode=update \| edit` 下的 dom 表现，一般用于渲染编辑框
- 默认值：-
- 类型：-

### render 参数

- 说明：自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式
- 默认值：-
- 类型：-
