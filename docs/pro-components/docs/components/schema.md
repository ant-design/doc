### 通用配置

- `key` 字段：用于确定列的唯一值，主要应用于 dataIndex 重复的情况。
- `dataIndex` 字段：与实体映射的 key，如果是数组形式，会被转化为 `[a,b] => Entity.a.b`。
- `valueType` 字段：用于指定数据的渲染方式，ProComponents 项目中已提供一部分预定义的 valueType，也可以自定义。
- `title` 字段：用于指定标题的内容，在 form 中相当于 label。
- `tooltip` 字段：在标题旁边展示一个图标，在鼠标浮动后显示相关信息。
- `valueEnum` 字段：定义值的枚举类型，可以是 object 或 Map，Map 支持其他基础类型作为 key。
- `fieldProps` 字段：用于传递给渲染组件的 props，在自定义时也会传递该字段。
- `formItemProps` 字段：用于传递给 Form.Item 的配置。
- `renderText` 函数：用于修改数据，数据会根据 valueType 定义的渲染组件消费。
- `render` 函数：用于自定义只读模式下的内容，`render` 方法只控制只读模式，编辑模式需要使用 `renderFormItem`。
- `renderFormItem` 函数：用于自定义编辑模式下的内容，返回一个 ReactNode，在显示 value 和处理 onChange 时会自动包裹。
- `request` 函数：用于从远程请求网络数据，主要应用于选择类组件。
- `params` 字段：额外传递给 `request` 的参数，组件内部不进行处理，但是参数变化会导致 `request` 再次请求数据。
- `hideInForm` 字段：在 Form 中隐藏该字段。
- `hideInTable` 字段：在 Table 中隐藏该字段。
- `hideInSearch` 字段：在 Table 的查询表单中隐藏该字段。
- `hideInDescriptions` 字段：在 descriptions 中隐藏该字段。
- `rowProps` 属性：在开启 `grid` 模式时传递给 Row，在 `ProFormGroup`、`ProFormList`、`ProFormFieldSet` 中有效。
- `colProps` 属性：在开启 `grid` 模式时传递给 Col。

### 字段说明

字段名称：`key` 类型：`React.key` 说明：用于确定这个列的唯一值，一般用于 dataIndex 重复的情况。

字段名称：`dataIndex` 类型：`React.key` \| `React.key[]` 说明：与实体映射的 key，如果是数组形式，会转化为 `[a,b] => Entity.a.b`。

字段名称：`valueType` 类型：`ProFieldValueType` 说明：数据的渲染方式，ProComponents 项目内部提供了一部分预定义的 valueType，也可以自定义。

字段名称：`title` 类型：`ReactNode` \| `(props,type,dom)=> ReactNode` 说明：标题的内容，在 form 中相当于 label。

字段名称：`tooltip` 类型：`string` 说明：会在标题旁边展示一个图标，鼠标浮动后显示相关信息。

字段名称：`valueEnum` 类型：`(Entity)=> ValueEnum` \| `ValueEnum` 说明：支持 object 和 Map，Map 支持其他基础类型作为 key。

字段名称：`fieldProps` 类型：`(form,config)=>fieldProps`\| `fieldProps` 说明：传递给渲染组件的 props，自定义时也会传递该字段。

字段名称：`formItemProps` 类型：`(form,config)=>formItemProps` \| `formItemProps` 说明：传递给 Form.Item 的配置。

字段名称：`renderText` 类型：`(text: any, record: Entity, index: number, action: ProCoreActionType) => any` 说明：修改的数据会根据 valueType 定义的渲染组件消费。

字段名称：`render` 类型：`(dom,entity,index, action, schema) => React.ReactNode` 说明：自定义只读模式下的内容，`render` 方法只控制只读模式，编辑模式需要使用 `renderFormItem`。

字段名称：`renderFormItem` 类型：`(schema,config,form) => React.ReactNode` 说明：自定义编辑模式下的内容，返回一个 ReactNode，在显示 value 和处理 onChange 时会自动包裹。

字段名称：`request` 类型：`(params,props) => Promise<{label,value}[]>` 说明：从远程请求网络数据，主要应用于选择类组件。

字段名称：`params` 类型：`Record<string, any>` 说明：额外传递给 `request` 的参数，组件内部不进行处理，但是参数变化会导致 `request` 再次请求数据。

字段名称：`hideInForm` 类型：`boolean` 说明：在 Form 中隐藏该字段。

字段名称：`hideInTable` 类型：`boolean` 说明：在 Table 中隐藏该字段。

字段名称：`hideInSearch` 类型：`boolean` 说明：在 Table 的查询表单中隐藏该字段。

字段名称：`hideInDescriptions` 类型：`boolean` 说明：在 descriptions 中隐藏该字段。

字段名称：`rowProps` 类型：[RowProps](https://ant.design/components/grid/#Row) 说明：在开启 `grid` 模式时传递给 Row，仅在 `ProFormGroup`、`ProFormList`、`ProFormFieldSet` 中有效。

字段名称：`colProps` 类型：[ColProps](https://ant.design/components/grid/#Col) 说明：在开启 `grid` 模式时传递给 Col。

### 示例

以下是一些通用配置的示例：

示例 1：

````jsx
{
  key: 'age',
  dataIndex: 'age',
  valueType: 'number',
  title: '年龄',
}

示例 2：

```jsx
{
  key: 'name',
  dataIndex: 'name',
  valueType: 'text',
  title: '姓名',
  tooltip: '点击查看更多信息',
}

示例 3：

```jsx
{
  key: 'gender',
  dataIndex: 'gender',
  valueType: {
    type: 'select',
    options: ['男', '女'],
  },
  title: '性别',
  hideInSearch: true,
}
````

以上是关于通用配置的说明和示例。

1. 什么是 ProSchema？

ProSchema 是一个 TypeScript 中定义的类型，用于描述一个表单或者列表的字段配置。它包含了各种属性，如字段的唯一值、与实体的映射、渲染方式、标题、提示信息等等。

2. ProSchema 中的 valueType 属性有什么作用？

valueType 属性用于选择如何渲染相应的模式。它可以是一个函数，根据实体和类型返回一个值，也可以直接是一个值。这个属性在 ProSchema 的配置中起到指导渲染方式的作用。

3. ProSchema 中的 renderFormItem 属性是干什么用的？

renderFormItem 属性是一个函数，用于自定义编辑模式。它会在表单项的渲染中被调用，返回一个 React 节点并自动包裹 value 和 onChange。这个属性可以用来自定义表单项的编辑方式，增加交互性和灵活性。

### valueType 列表

valueType 是 ProComponents 的灵魂，ProComponents 会根据 valueType 来映射成不同的表单项。以下是支持的常见表单项：

- `password`：密码输入框
- `money`：金额输入框
- `textarea`：文本域
- `date`：日期
- `dateTime`：日期时间
- `dateWeek`：周
- `dateMonth`：月
- `dateQuarter`：季度输入
- `dateYear`：年份输入
- `dateRange`：日期区间
- `dateTimeRange`：日期时间区间
- `time`：时间
- `timeRange`：时间区间
- `text`：文本框
- `select`：下拉框
- `treeSelect`：树形下拉框
- `checkbox`：多选框
- `rate`：星级组件
- `radio`：单选框
- `radioButton`：按钮单选框
- `progress`：进度条
- `percent`：百分比组件
- `digit`：数字输入框
- `second`：秒格式化
- `avatar`：头像
- `code`：代码框
- `switch`：开关
- `fromNow`：相对于当前时间
- `image`：图片
- `jsonCode`：代码框，但是带了 json 格式化
- `color`：颜色选择器
- `cascader`：级联选择器
- `segmented`：分段器
- `group`：分组
- `formList`：表单列表
- `formSet`：表单集合
- `divider`：分割线
- `dependency`：依赖项

你可以通过以下的 demo 来了解各个 valueType 的展示效果。

### 如何使用传入 function 的方式定义 valueType？

如果我们想要在 Ant Design 中使用传入 function 的方式定义 valueType，我们可以按照以下步骤进行操作：

1. 创建一个名为 `columns` 的对象，用于定义表格的列信息。
2. 在 `columns` 对象中，设置 `valueType` 属性为一个函数。
3. 在函数中，传入一个名为 `item` 的参数，用于表示表格中的每一项数据。
4. 在函数体内，返回一个对象，该对象包含 `type` 和 `status` 属性。
5. 在 `type` 属性中，设置进度条类型为 'progress'。
6. 在 `status` 属性中，根据 `item` 的状态进行判断。如果 `item` 的状态不是 'error'，则设置进度条的状态为 'active'；否则，设置进度条的状态为 'exception'。

通过以上步骤，我们就可以使用传入 function 的方式定义 valueType，并在 Ant Design 中创建自定义的进度条列。

### valueEnum 是什么？

valueEnum 是一个用于定义列值的枚举对象，可以在 ProTable 组件中根据值获取对应的枚举信息，并在表单中生成下拉框。它可以是一个常量对象，也可以是一个函数，根据不同的条件返回不同的枚举对象。

### 如何定义 valueEnum？

可以通过以下方式来定义 valueEnum：

1. 使用常量对象：

```ts
const valueEnum = {
  open: {
    text: "未解决",
    status: "Error",
  },
  closed: {
    text: "已解决",
    status: "Success",
  },
};
```

2. 使用函数：

```ts
const valueEnum = (row) =>
  row.isMe
    ? {
        open: {
          text: "未解决",
          status: "Error",
        },
        closed: {
          text: "已解决",
          status: "Success",
        },
      }
    : {
        open: {
          text: "等待解决",
          status: "Error",
        },
        closed: {
          text: "已回应",
          status: "Success",
        },
      };
```

> 在表单中，由于没有 `row` 的值，可以根据 `row` 为 `null` 来判断要显示哪个选项。

### valueEnum 的类型定义是什么？

`valueEnum` 的类型定义如下：

```typescript
interface IValueEnum {
  [key: string]:
    | ReactNode
    | {
        text: ReactNode;
        status: "Success" | "Error" | "Processing" | "Warning" | "Default";
      };
}
```

### 如何使用 Map 来定义 valueEnum？

可以使用 Map 来定义更灵活的 valueEnum，例如在某些场景下需要使用 number 类型或 boolean 类型，可以像下面这样使用 Map：

```ts
const valueEnum = new Map([
  [0, { text: "未解决", status: "Error" }],
  [1, { text: "已解决", status: "Success" }],
  [true, { text: "是", status: "Success" }],
  [false, { text: "否", status: "Error" }],
]);
```

这样就可以根据不同的值获取对应的枚举信息了。

以上就是关于 valueEnum 的一些基本信息和用法。希望对你有帮助！

### Select 组件如何支持远程数据？

Select 组件可以通过以下属性来支持远程数据：

- `request`：用于发送远程请求的函数，比如通过 `fetch` 函数发送异步请求获取数据。
- `params`：请求参数对象，用于传递额外的参数给远程接口。
- `fieldProps.options`：用于配置下拉选项的数据源，可以是一个数组或者一个返回数组的函数。

使用上述属性来配置 Select 组件，可以实现从远程接口获取数据并显示在组件的下拉选项中。

### TreeSelect 组件如何支持远程数据？

TreeSelect 组件可以通过以下属性来支持远程数据：

- `request`：用于发送远程请求的函数，比如通过 `fetch` 函数发送异步请求获取数据。
- `params`：请求参数对象，用于传递额外的参数给远程接口。
- `fieldProps.options`：用于配置树型下拉选项的数据源，可以是一个数组或者一个返回数组的函数。

使用上述属性来配置 TreeSelect 组件，可以实现从远程接口获取数据并显示在组件的树型下拉选项中。

### Cascader 组件如何支持远程数据？

Cascader 组件可以通过以下属性来支持远程数据：

- `request`：用于发送远程请求的函数，比如通过 `fetch` 函数发送异步请求获取数据。
- `params`：请求参数对象，用于传递额外的参数给远程接口。
- `fieldProps.options`：用于配置级联选择器的数据源，可以是一个数组或者一个返回数组的函数。

使用上述属性来配置 Cascader 组件，可以实现从远程接口获取数据并显示在组件的级联选择器中。

### Checkbox 组件如何支持远程数据？

Checkbox 组件可以通过以下属性来支持远程数据：

- `request`：用于发送远程请求的函数，比如通过 `fetch` 函数发送异步请求获取数据。
- `params`：请求参数对象，用于传递额外的参数给远程接口。
- `fieldProps.options`：用于配置多选框的数据源，可以是一个数组或者一个返回数组的函数。

使用上述属性来配置 Checkbox 组件，可以实现从远程接口获取数据并显示在组件的多选框中。

### Radio 组件如何支持远程数据？

Radio 组件可以通过以下属性来支持远程数据：

- `request`：用于发送远程请求的函数，比如通过 `fetch` 函数发送异步请求获取数据。
- `params`：请求参数对象，用于传递额外的参数给远程接口。
- `fieldProps.options`：用于配置单选框的数据源，可以是一个数组或者一个返回数组的函数。

使用上述属性来配置 Radio 组件，可以实现从远程接口获取数据并显示在组件的单选框中。

### RadioButton 组件如何支持远程数据？

RadioButton 组件是 Radio 组件的一个变体，同样可以通过以上属性来支持远程数据。具体配置方式与 Radio 组件相同。

使用上述属性来配置 RadioButton 组件，可以实现从远程接口获取数据并显示在组件的单选按钮中。

### `valueEnum` 是什么？

`valueEnum` 是一个用于定义选项值的对象或映射。它可以用于在表格等组件中展示不同的选项状态，比如常见的 [badge](https://ant.design/components/badge-cn/#Badge)。

### 如何使用 `valueEnum`？

可以通过传入一个 `Object` 或者 `Map` 来定义 `valueEnum`。下面是一个示例：

```tsx | pure
const valueEnum = {
  all: { text: "全部", status: "Default" },
  open: {
    text: "未解决",
    status: "Error",
  },
  closed: {
    text: "已解决",
    status: "Success",
  },
};
```

这个示例中，`valueEnum` 定义了三个选项值，每个选项值都包含 `text` 和 `status` 属性。在使用 `ProFormSelect` 组件时，可以将 `valueEnum` 作为 `valueEnum` 属性传入，从而展示对应的选项。

### 如何在组件中使用 `valueEnum`？

可以通过引入 `ProFormSelect` 组件，并在组件中使用 `valueEnum`。下面是一个示例：

```tsx | pure
import { ProFormSelect } from "@ant-design/pro-components";

const valueEnum = {
  all: { text: "全部", status: "Default" },
  open: {
    text: "未解决",
    status: "Error",
  },
  closed: {
    text: "已解决",
    status: "Success",
  },
};

export default () => (
  <ProFormSelect
    name="select2"
    label="Select"
    params={{}}
    valueType="select"
    valueEnum={valueEnum}
    placeholder="Please select a country"
  />
);
```

在此示例中，我们将 `valueEnum` 作为 `valueEnum` 属性传递给 `ProFormSelect` 组件，并设置了其他相关属性，如 `name`、`label`、`valueType` 和 `placeholder`。这将生成一个带有下拉选项的表单组件，并使用 `valueEnum` 定义的文本和状态来展示选项。

希望以上信息对你有所帮助，如有其他问题，请随时提问。

### `fieldProps.options` 是 Ant Design 中的什么标准？

`fieldProps.options` 是 Ant Design 中的一个标准，用于定义 `select`, `checkbox`, `radio`, `radioButton` 等组件的选项。这些选项可以是一个对象数组，每个对象包含 `label` 和 `value` 属性，用于显示选项的文本和对应的值。另外，也可以直接使用一个字符串数组作为选项，不需要显示文本。

### `fieldProps.options` 的用法有哪些示例？

1. 在代码中定义 `options` 数组：

```tsx
const options = [
  { label: "全部", value: "all" },
  { label: "未解决", value: "open" },
  { label: "已解决", value: "closed" },
  { label: "解决中", value: "processing" },
  {
    label: "特殊选项",
    value: "optGroup",
    optionType: "optGroup",
    options: [
      { label: "不解决", value: "no" },
      { label: "已废弃", value: "clear" },
    ],
  },
];

// 或者不需要 label
const options = ["chapter", "chapter2"];
```

上述示例中定义了一个 `options` 数组，包含了不同的选项，可以使用这个数组作为 `fieldProps.options` 的值。

2. 在组件中直接定义 `options`：

```tsx
import { ProFormSelect } from "@ant-design/pro-components";

const options = [
  { label: "item 1", value: "a" },
  { label: "item 2", value: "b" },
  { label: "item 3", value: "c" },
];

export default () => (
  <ProFormSelect
    name="select2"
    label="Select"
    valueType="select"
    fieldProps={{ options }}
    placeholder="Please select a country"
  />
);
```

在上述示例中，通过 `ProFormSelect` 组件的 `fieldProps.options` 属性直接定义了选项数组。

### `fieldProps.options` 支持哪些组件？

`fieldProps.options` 支持多个组件，包括 `select`, `checkbox`, `radio`, `radioButton` 等。通过设置 `fieldProps.options` 属性，可以在这些组件中定义选项，以便用户进行选择。同时，`ProComponents` 扩展了这些组件，使得它们都支持了 `options` 的用法。以上示例中的代码片段展示了 `fieldProps.options` 在 `ProFormSelect` 组件中的用法。

### 什么是 `request` 和 `params`？

`request` 和 `params` 是用于获取数据的工具。

- `request` 是一个 promise，可以返回与 options 相同的数据。
- `params` 一般用于触发 `request` 的重新请求。

### 如何使用 `request` 和 `params`？

可以通过以下代码示例来了解如何使用 `request` 和 `params`：

```tsx
const request = async () => [
  { label: "全部", value: "all" },
  { label: "未解决", value: "open" },
  { label: "已解决", value: "closed" },
  { label: "解决中", value: "processing" },
];

<ProFormSelect
  name="select2"
  label="Select"
  params={{}}
  valueType="select"
  debounceTime={1000}
  request={request}
  placeholder="Please select a country"
/>;

// 列中定义
const columns = [
  {
    title: "创建者",
    width: 120,
    dataIndex: "creator",
    valueType: "select",
    request,
    params: {},
  },
];
```

在上述代码中，我们通过`request`函数获取了一组数据，并将其作为下拉选择框的选项。同时，我们还可以在表格的列定义中使用`request`和`params`来实现动态的数据加载。

### 如何解决 `request` 缓存导致的数据更新不及时问题？

在实际使用中，`request`函数增加了一个 5 秒的缓存，可能会导致数据更新不及时。如果需要频繁更新数据，建议使用`state`+`fieldProps.options`来手动更新数据。

另外，建议使用`debounceTime`参数来调整请求的防抖时间，以减少不必要的请求。默认的防抖时间为 10 毫秒。

注意：以上内容基于 Ant Design 组件库的使用情景，其他组件库可能具有不同的实现方式。
