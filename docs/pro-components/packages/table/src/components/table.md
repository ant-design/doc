### ProTable 是什么？有什么作用？

ProTable 是一个高级表格组件，它的出现是为了解决在项目中频繁编写表格代码的问题。通过封装了很多常用的逻辑和行为，ProTable 可以简化表格的开发过程。

### ProTable 与 ProForm 有什么关系？

ProTable 依托于 ProForm 的能力，可以通过切换查询表单类型、设置变形为简单的 Form 表单等方式，执行新建等功能。 ProForm 是一个多形态的组件，能够灵活适应不同的需求。

### TechUI Studio 是什么？如何使用？

TechUI Studio 是一个可视化配置生成初始代码的工具。如果您是内网用户，您可以使用 [TechUI Studio](https://techui-studio.antfin-inc.com/) 来快速生成 ProTable 的初始代码。通过 TechUI Studio，您可以在可视化界面上配置参数和选项，生成符合您需求的代码。

### ProTable 的 `request` API 是什么？

`request` 是 ProTable 组件中最重要的 API，通过 `request` 可以配置数据请求的相关参数。它接收一个对象作为参数，对象中必须包含 `data` 和 `success` 字段，同时如果需要手动分页，则还需要包含 `total` 字段。`request` API 会自动处理数据加载过程中的 loading 状态，同时在查询表单查询时和 `params` 参数发生修改时会重新执行。查询表单的值和 `params` 参数也会传入 `request` API。下面是一个使用 `request` API 的例子：

```tsx
<ProTable
  params={params}
  request={async (
    params: T & {
      pageSize: number;
      current: number;
    },
    sort,
    filter,
  ) => {
    const msg = await myQuery({
      page: params.current,
      pageSize: params.pageSize,
    });
    return {
      data: msg.result,
      success: true,
      total: 100,
    };
  }}
/>
```

### 如何使用 `request` API 进行数据请求？

要使用 `request` API 进行数据请求，首先需要将它配置在 ProTable 组件上。在 `request` API 函数中，第一个参数 `params` 是查询表单和 `params` 参数的结合，其中一定包含 `pageSize` 和 `current` 这两个参数，它们是 antd 的规范。你可以在 `request` API 中进行数据转化，也可以修改参数。最后，通过返回一个 Promise 对象，将数据返回给 ProTable 组件。下面是一个示例：

```tsx
async (
  params: T & {
    pageSize: number;
    current: number;
  },
  sort,
  filter,
) => {
  const msg = await myQuery({
    page: params.current,
    pageSize: params.pageSize,
  });
  return {
    data: msg.result,
    success: true,
    total: 100,
};
```

### 列配置中如何使用 `request` API？

在 ProTable 的列配置中，也可以使用 `request` API。不过，只有特定的 [valueType](/components/schema#valuetype) 类型支持使用 `request` API。通过设置相应的 `valueType`，可以使用 `request` API 获取和展示列数据。具体用法可以参考 ProTable 的文档。

### ProTable 属性：request

描述：获取 `dataSource` 的方法

类型：`(params?: {pageSize,current},sort,filter) => {data,success,total}`

默认值：-

注意事项：需要注意该方法的参数和返回值格式，以确保正确获取和处理数据。

### ProTable 属性：params

描述：用于 `request` 查询的额外参数，一旦变化会触发重新加载

类型：`object`

默认值：-

注意事项：当额外参数发生变化时，会触发重新加载数据，需要保证参数格式正确且与后台接口对应。

### ProTable 属性：postData

描述：对通过 `request` 获取的数据进行处理

类型：`(data: T[]) => T[]`

默认值：-

注意事项：可以对从后台获取的数据进行处理，例如对数组进行排序、筛选等操作。

### ProTable 属性：defaultData

描述：默认的数据

类型：`T[]`

默认值：-

### ProTable 属性：dataSource

描述：Table 的数据，ProTable 推荐使用 `request` 来加载

类型：`T[]`

默认值：-

### ProTable 属性：onDataSourceChange

描述：Table 的数据发生改变时触发

类型：`(dataSource: T[]) => void`

默认值：-

### ProTable 属性：actionRef

描述：Table action 的引用，便于自定义触发

类型：`MutableRefObject<ActionType>`

默认值：-

### ProTable 属性：formRef

描述：可以获取到查询表单的 form 实例，用于一些灵活的配置

类型：`MutableRefObject<FormInstance>`

默认值：-

### ProTable 属性：toolBarRender

描述：渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right

类型：`(action) => ReactNode[]`

默认值：-

### ProTable 属性：onLoad

描述：数据加载完成后触发，会多次触发

类型：`(dataSource: T[]) => void`

默认值：-

### ProTable 属性：onLoadingChange

描述：loading 被修改时触发，一般是网络请求导致的

类型：`(loading:boolean)=>void`

默认值：-

### ProTable 属性：onRequestError

描述：数据加载失败时触发

类型：`(error) => void`

默认值：-

### ProTable 属性：tableClassName

描述：封装的 table 的 className

类型：`string`

默认值：-

### ProTable 属性：tableStyle

描述：封装的 table 的 style

类型：[CSSProperties](https://www.htmlhelp.com/reference/css/properties.html)

默认值：-

### ProTable 属性：options

描述：table 工具栏，设为 false 时不显示，传入 function 会点击时触发

类型：`{{ density?: boolean, fullScreen?: boolean \| function, reload?: boolean \| function, reloadIcon?: React.ReactNode, densityIcon?: React.ReactNode, setting?: boolean \| [SettingOptionType](#菜单栏-options-配置) }}`

默认值：`{ fullScreen: false, reload: true, density: true, setting: true }`

注意事项：可以根据具体需求配置 table 工具栏的显示方式和功能。

### ProTable 属性：search

描述：是否显示搜索表单，传入对象时为搜索表单的配置

类型：`false` \| [SearchConfig](#search-搜索表单)

默认值：-

### ProTable 属性：defaultSize

描述：默认的 size

类型：SizeType

默认值：-

### ProTable 属性：dateFormatter

描述：转化 moment 格式数据为特定类型，false 不做转化

类型：`"string"` \| `"number"` \| ((value: Moment, valueType: string) => string \| number) \| `false`

默认值：`"string"`

### ProTable 属性：beforeSearchSubmit

描述：搜索之前进行一些修改

类型：`(params:T)=>T`

默认值：-

### ProTable 属性：onSizeChange

描述：table 尺寸发生改变

类型：`(size: 'default' \| 'middle' \| 'small') => void`

默认值：-

### ProTable 属性：type

描述：pro-table 类型

类型：`"form"`

默认值：-

### ProTable 属性：form

描述：antd form 的配置

类型：[FormProps](https://ant.design/components/form-cn/#API)

默认值：-

### ProTable 属性：onSubmit

描述：提交表单时触发

类型：`(params: U) => void`

默认值：-

### ProTable 属性：onReset

描述：重置表单时触发

类型：`() => void`

默认值：-

### ProTable 属性：columnEmptyText

描述：空值时的显示，不设置时显示 `-`， false 可以关闭此功能

类型：`string` \| `false`

默认值：false

### ProTable 属性：tableRender

描述：自定义渲染表格函数

类型：`(props,dom,domList:{ toolbar,alert,table}) => ReactNode`

默认值：-

### ProTable 属性：toolbar

描述：透传 `ListToolBar` 配置项

类型：[ListToolBarProps](#listtoolbarprops)

默认值：-

### ProTable 属性：tableExtraRender

描述：自定义表格的主体函数

类型：`(props: ProTableProps<T, U>, dataSource: T[]) => ReactNode;`

默认值：-

### ProTable 属性：manualRequest

描述：是否需要手动触发首次请求，配置为 `true` 时不可隐藏搜索表单

类型：`boolean`

默认值：false

### ProTable 属性：editable

描述：可编辑表格的相关配置

类型：[TableRowEditable](/components/editable-table#editable-编辑行配置)

默认值：-

### ProTable 属性：cardBordered

描述：Table 和 Search 外围 Card 组件的边框

类型：`boolean` \| `{search?: boolean, table?: boolean}`

默认值：false

### ProTable 属性：ghost

描述：幽灵模式，即是否取消表格区域的 padding

类型：`boolean`

默认值：false

### ProTable 属性：debounceTime

描述：防抖时间

类型：`number`

默认值：10

### ProTable 属性：revalidateOnFocus

描述：窗口聚焦时自动重新请求

类型：`boolean`

默认值：`true`

### ProTable 属性：columnsState

描述：受控的列状态，可以操作显示隐藏

类型：`ColumnStateType`

默认值：-

### ProTable 属性：ErrorBoundary

描述：自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界

类型：`ReactNode`

默认值：内置 ErrorBoundary

注意事项：可以根据具体需求配置错误处理功能的显示与隐藏。

#### Q1：RecordCreator 组件的 record 属性是什么作用？

A1：record 属性用于指定需要新增的行数据，一般包含唯一 key。

#### Q2：RecordCreator 组件的 position 属性有哪些取值？

A2：position 属性可以取值为 "top" 或者 "bottom"，用于指定新增行的位置是在表格的开头还是结尾。

#### Q3：RecordCreator 组件还有其他属性吗？

A3：是的，除了 record 和 position 属性之外，RecordCreator 组件还可以传递 antd 的 ButtonProps 属性，具体可以参考 [ButtonProps](https://ant.design/components/button-cn/#API) 的文档。

问题1：
#### ColumnStateType 的 defaultValue 属性是什么类型的?

答案1：
defaultValue 属性的类型是 `Record<string, ColumnsState>`。

问题2：
#### ColumnStateType 的 value 属性是什么类型的?

答案2：
value 属性的类型是 `Record<string, ColumnsState>`。

问题3：
#### ColumnStateType 的 onChange 属性是什么类型的?

答案3：
onChange 属性的类型是 `(value:Record<string, ColumnsState>)=>void`。

问题4：
#### ColumnStateType 的 persistenceKey 属性是什么类型的?

答案4：
persistenceKey 属性的类型是 `string | number`。

问题5：
#### ColumnStateType 的 persistenceType 属性是什么类型的?

答案5：
persistenceType 属性的类型是 `localStorage | sessionStorage`。

1. 什么是 Search 搜索表单？

Search 搜索表单是一个用于进行搜索操作的组件。它提供了一组属性来配置搜索表单的外观和行为，包括过滤表单类型、查询按钮文本、重置按钮文本、提交按钮文本、标签宽度等。

2. Search 搜索表单有哪些属性？

Search 搜索表单具有以下属性：

- filterType: 过滤表单类型，可选值为 `'query'` 和 `'light'`。
- searchText: 查询按钮的文本。
- resetText: 重置按钮的文本。
- submitText: 提交按钮的文本。
- labelWidth: 标签的宽度，可选值为 `'number'` 和 `'auto'`。
- span: 配置查询表单的列数。
- className: 封装的搜索 Form 的 className。
- collapseRender: 收起按钮的 render。
- defaultCollapsed: 默认是否收起。
- collapsed: 是否收起。
- onCollapse: 收起按钮的事件。
- optionRender: 自定义操作栏。
- showHiddenNum: 是否显示收起之后显示隐藏个数。

3. Search 搜索表单的默认配置是什么样的？

Search 搜索表单的默认配置为：

- filterType: `'query'`
- searchText: `'查询'`
- resetText: `'重置'`
- submitText: `'提交'`
- labelWidth: `'number'`
- span: `defaultColConfig`
- defaultCollapsed: `true`
- showHiddenNum: `false`

#### 问题 1: 菜单栏 options 配置中的 OptionsType 是什么类型？

答案 1: OptionsType 是一个联合类型，可以是一个回调函数、一个布尔值或者是两者的组合。

#### 问题 2: 菜单栏 options 配置中的 OptionConfig 的属性有哪些？

答案 2: OptionConfig 中有以下属性：
- density: 一个布尔值，用于配置密度选项。
- fullScreen: 一个 OptionsType 类型，用于配置全屏选项。
- reload: 一个 OptionsType 类型，用于配置刷新选项。
- setting: 可以是一个布尔值或者 SettingOptionType 类型，用于配置设置选项。
- search: 可以是一个 OptionSearchProps & { name?: string } 类型的对象或者是布尔值，用于配置搜索选项。
- reloadIcon: 一个 React 组件，用于自定义刷新图标。
- densityIcon: 一个 React 组件，用于自定义密度图标。

#### 问题 3: 菜单栏 options 配置中的 SettingOptionType 的属性有哪些？

答案 3: SettingOptionType 中有以下属性：
- draggable: 一个布尔值，用于配置设置面板是否可拖拽。
- checkable: 一个布尔值，用于配置列表项是否可勾选。
- showListItemOption: 一个布尔值，用于配置是否显示列表项的选项。
- checkedReset: 一个布尔值，用于配置是否在重置时取消勾选。
- listsHeight: 一个数字，用于配置列表的高度。
- extra: 一个 React 组件，用于自定义额外的内容。
- children: 一个 React 组件，用于自定义子元素。
- settingIcon: 一个 React 组件，用于自定义设置图标。

#### ActionRef 是用来做什么的？

ActionRef 是用来手动触发 ProTable 组件中的操作的引用。通过创建一个 ref，然后将其传递给 ProTable 的 actionRef 属性，我们就可以在其他地方通过该 ref 来操作 ProTable。

#### ActionRef 提供了哪些操作方法？

ActionRef 提供了以下操作方法：

1. `reload(resetPageIndex?: boolean)`: 用于重新加载表格数据。如果传入参数 `resetPageIndex` 为 `true`，则会重置分页索引，默认为 `false`。

2. `reloadAndRest()`: 刷新表格并清空表单数据，同时会重置分页索引。

3. `reset()`: 重置表格的筛选条件和表单数据，并清空分页索引。

4. `clearSelected()`: 清空表格中的选中项。

5. `startEditable(rowKey: Key)`: 开始编辑指定行的数据，rowKey 是要编辑的行的唯一标识。

6. `cancelEditable(rowKey: Key)`: 取消编辑指定行的数据，rowKey 是要取消编辑的行的唯一标识。

通过调用这些方法，我们可以手动触发 ProTable 的各种操作，以满足特定的需求。

#### 如何使用 ActionRef？

要使用 ActionRef，首先需要创建一个 ref 对象，然后将其传递给 ProTable 组件的 actionRef 属性，示例代码如下：

```tsx | pure
import React, { useRef } from 'react';
import { ProTable } from 'antd';

interface ActionType {
  reload: (resetPageIndex?: boolean) => void;
  reloadAndRest: () => void;
  reset: () => void;
  clearSelected?: () => void;
  startEditable: (rowKey: Key) => boolean;
  cancelEditable: (rowKey: Key) => boolean;
}

const MyComponent: React.FC = () => {
  const ref = useRef<ActionType>();

  return (
    <ProTable actionRef={ref} />
  );
};
```

以上代码演示了如何在组件中使用 ActionRef。一旦将 ref 对象传递给 ProTable 的 actionRef 属性，就可以在其他地方使用 ref.current 来调用 ActionRef 提供的操作方法，从而手动触发 ProTable 的操作。

### Columns 列定义 - title 属性

- 描述：与 antd 中基本相同，但是支持通过传入一个方法。
- 类型：`ReactNode` 或 `(config: ProColumnType<T>, type: ProTableTypes) => ReactNode`。
- 默认值：无。

### Columns 列定义 - tooltip 属性

- 描述：会在 title 之后展示一个 icon，hover 之后提示一些信息。
- 类型：`string`。
- 默认值：无。

### Columns 列定义 - ellipsis 属性

- 描述：是否自动缩略。
- 类型：`boolean` 或 `{showTitle?: boolean}`。
- 默认值：无。

### Columns 列定义 - copyable 属性

- 描述：是否支持复制。
- 类型：`boolean`。
- 默认值：无。

### Columns 列定义 - valueEnum 属性

- 描述：值的枚举，会自动转化把值当成 key 来取出要显示的内容。
- 类型：`valueEnum`。
- 默认值：无。

### Columns 列定义 - valueType 属性

- 描述：值的类型，会生成不同的渲染器。
- 类型：`valueType`。
- 默认值：`text`。

### Columns 列定义 - order 属性

- 描述：查询表单中的权重，权重大排序靠前。
- 类型：`number`。
- 默认值：无。

### Columns 列定义 - fieldProps 属性

- 描述：查询表单的 props，会透传给表单项，如果渲染出来是 Input，就支持 Input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入。
- 类型：`(form, config) => Record \| Record`。
- 默认值：无。

### Columns 列定义 - formItemProps 属性

- 描述：传递给 Form.Item 的配置，可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules`。
- 类型：`(form, config) => formItemProps` 或 `formItemProps`。
- 默认值：无。

### Columns 列定义 - renderText 属性

- 描述：类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 valueEnum。
- 类型：`(text: any, record: T, index: number, action: UseFetchDataAction<T>) => string`。
- 默认值：无。

### Columns 列定义 - render 属性

- 描述：类似 table 的 render，第一个参数变成了 dom，增加了第四个参数 action。
- 类型：`(text: ReactNode, record: T, index: number, action: UseFetchDataAction<T>) => ReactNode \| ReactNode[]`。
- 默认值：无。

### Columns 列定义 - renderFormItem 属性

- 描述：渲染查询表单的输入组件。
- 类型：`(item, { type, defaultRender, formItemProps, fieldProps, ...rest }, form) => ReactNode`。
- 默认值：无。

### Columns 列定义 - search 属性

- 描述：配置列的搜索相关，false 为隐藏。
- 类型：`false` 或 `{ transform: (value: any) => any }`。
- 默认值：true。

### Columns 列定义 - search.transform 属性

- 描述：转化值的 key, 一般用于时间区间的转化。
- 类型：`(value: any) => any`。
- 默认值：无。

### Columns 列定义 - editable 属性

- 描述：在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样。
- 类型：`false` 或 `(text: any, record: T, index: number) => boolean`。
- 默认值：true。

### Columns 列定义 - colSize 属性

- 描述：一个表单项占用的格子数量，占比= colSize * span，colSize 默认为 1，span 为 8，span 是 form={{span:8}} 全局设置的。
- 类型：`number`。
- 默认值：无。

### Columns 列定义 - hideInSearch 属性

- 描述：在查询表单中不展示此项。
- 类型：`boolean`。
- 默认值：无。

### Columns 列定义 - hideInTable 属性

- 描述：在 Table 中不展示此列。
- 类型：`boolean`。
- 默认值：无。

### Columns 列定义 - hideInForm 属性

- 描述：在 Form 中不展示此列。
- 类型：`boolean`。
- 默认值：无。

### Columns 列定义 - hideInDescriptions 属性

- 描述：在 Descriptions 中不展示此列。
- 类型：`boolean`。
- 默认值：无。

### Columns 列定义 - filters 属性

- 描述：表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成。
- 类型：`boolean` 或 `object[]`。
- 默认值：false。

### Columns 列定义 - onFilter 属性

- 描述：筛选表单，为 true 时使用 ProTable 自带的，为 false 时关闭本地筛选。
- 类型：`(value, record) => boolean` 或 `false`。
- 默认值：false。

### Columns 列定义 - request 属性

- 描述：从服务器请求枚举。
- 类型：`request`。
- 默认值：无。

### Columns 列定义 - initialValue 属性

- 描述：查询表单项初始值。
- 类型：`any`。
- 默认值：无。

### Columns 列定义 - disable 属性

- 描述：列设置中 disabled 的状态。
- 类型：`boolean` 或 `{ checkbox: boolean; }`。
- 默认值：无。

### pro-table 如何开启批量操作？

与 antd 相同，pro-table 需要设置 `rowSelection` 属性来开启批量操作。在 pro-table 中，你可以通过以下属性来控制批量操作的展示和行为：

- `alwaysShowAlert`：是否总是展示 alert，默认为无选择时不展示。这个属性是 `rowSelection` 的内置属性。

- `tableAlertRender`：用于自定义批量操作工具栏左侧信息区域的显示内容。你可以通过设置一个函数来自定义显示的内容，函数的参数包括 `selectedRowKeys`（选中行的 keys）、`selectedRows`（选中的行数据）和 `onCleanSelected`（清空选中行的函数）。如果你不需要显示批量操作工具栏左侧信息区域，可以将该属性设置为 `false`。

- `tableAlertOptionRender`：用于自定义批量操作工具栏右侧选项区域的显示内容。与 `tableAlertRender` 类似，你可以设置一个函数来自定义显示的内容。函数的参数包括 `selectedRowKeys`、`selectedRows` 和 `onCleanSelected`。如果你不需要显示批量操作工具栏右侧选项区域，可以将该属性设置为 `false`。

### pro-table 怎样关闭批量操作？

要关闭 pro-table 的批量操作功能，你可以通过以下方式设置相应的属性：

- 将 `alwaysShowAlert` 属性设置为 `false`，这样当没有选择任何行时，将不会展示批量操作工具栏。

- 将 `tableAlertRender` 属性设置为 `false`，这样左侧信息区域将不会显示。

- 将 `tableAlertOptionRender` 属性设置为 `false`，这样右侧选项区域将不会显示。

请根据你的需求选择适当的方式关闭批量操作功能。

### ProTable 如何生成搜索表单？

ProTable 根据列的配置自动生成一个表单，用于筛选列表数据。你可以通过 `request` 参数来获取表单中用户选择的筛选条件。

下面是一个示例：

```jsx
<ProTable request={(params, sort, filter) => {
  // 在这里使用参数来发起查询请求
}} />
```

按照规范，表单不需要任何必选参数，当用户点击搜索或重置时，会自动触发 `request` 来发起查询。

表单的字段类型是根据每个列的 `valueType` 属性来生成的，你可以在[通用配置](/components/schema#valuetype)中查看详细的值类型。

需要注意的是，如果列的 `valueType` 为 `index`、`indexBorder`、`option` 或者该列没有 `dataIndex` 和 `key` 属性，那么该列将被忽略，不会显示在搜索表单中。

### ProTable 的搜索表单如何实现？

ProTable 根据列的配置自动生成搜索表单，具体实现如下：

1. 根据每个列的 `valueType` 属性生成对应类型的表单字段。
2. 当用户点击搜索按钮或者重置按钮时，ProTable 会自动触发 `request` 函数来发起查询。
3. 用户输入的筛选条件将作为参数传递给 `request` 函数。
4. 根据传入的参数，开发者需要在 `request` 函数中发起相应的查询请求并返回结果。

需要注意的是，ProTable 规定搜索表单不需要任何必选参数，所有的筛选逻辑都由开发者自行处理。

### 如何配置 ProTable 的搜索表单项？

你可以通过配置每个列的属性来定制 ProTable 的搜索表单项。

具体步骤如下：

1. 使用 `valueType` 属性来指定搜索表单项的字段类型，具体可选类型请查看[通用配置](/components/schema#valuetype)。
2. 设置 `dataIndex` 和 `key` 属性，这两个属性用于生成表单字段的名称和唯一标识符。
3. 如果你想要隐藏某些列，可以将 `valueType` 设置为 `index`、`indexBorder` 或 `option`，或者在列的配置中不设置 `dataIndex` 和 `key`。

通过以上配置，你可以灵活地定制 ProTable 的搜索表单项，满足不同查询需求。

## QA 1

**问题：** 什么是 ListToolBarProps？

**回答：** ListToolBarProps 是用于列表和表格的工具栏配置属性。它包含了一系列参数，用于设置工具栏的标题、子标题、tooltip 描述、查询区、操作区、设置区、过滤区等。其中一些参数还可以以 ReactNode 或特定类型作为值。比如，search 参数可以是 ReactNode 类型或 SearchProps 类型。而 tabs 参数仅在 multipleLine 参数为 true 时有效，并配置标签页的相关信息。

## QA 2

**问题：** ListToolBarProps 中的参数 title 是什么意思？

**回答：** ListToolBarProps 中的参数 title 是用于设置工具栏的标题。它的类型为 ReactNode，可以是一个 React 组件、字符串或其他可以渲染为 React 组件的类型。默认值为 `-`。

## QA 3

**问题：** ListToolBarProps 中的参数 filter 通常用于什么？需要和哪个组件配合使用？

**回答：** ListToolBarProps 中的参数 filter 用于设置工具栏的过滤区，通常配合 `LightFilter` 组件一起使用。它的类型为 ReactNode，可以是一个 React 组件、字符串或其他可以渲染为 React 组件的类型。

### Setting 参数中的 icon 是什么类型的值？

icon 参数是一个 ReactNode 类型的值。

#### Q: ListToolBarMenu 支持哪些类型的菜单展示方式？

A: ListToolBarMenu 支持以下类型的菜单展示方式：
- `inline`：内联展示
- `dropdown`：下拉展示
- `tab`：标签页展示

#### Q: ListToolBarMenu 的默认展示方式是什么？

A: ListToolBarMenu 的默认展示方式是 `inline`。

#### Q: 如何切换 ListToolBarMenu 的菜单？

A: 可以通过调用 `onChange` 方法来切换 ListToolBarMenu 的菜单，`onChange` 方法接收一个参数 `activeKey`，表示当前选中的菜单项的值。

#### 问题：ListToolBarTabs 组件的参数 activeKey 有什么作用？
答案：activeKey 是 ListToolBarTabs 组件的当前选中项，可以通过设置 activeKey 的值来默认选中对应的菜单项。

#### 问题：ListToolBarTabs 组件的参数 items 是什么类型？
答案：items 是 ListToolBarTabs 组件的菜单项，类型为一个数组，数组的每个元素是一个对象，包含 key 和 tab 两个属性，key 为字符串类型，tab 为 ReactNode 类型。

#### 问题：ListToolBarTabs 组件的参数 onChange 是用来做什么的？
答案：onChange 是 ListToolBarTabs 组件的切换菜单的回调函数，当菜单项被切换时，会触发 onChange 函数，可以在 onChange 函数中执行一些操作或者更新状态。onChange 函数的参数是 activeKey，表示切换后的菜单项的 key 值。

#### TableDropdown 组件的参数 key 是什么类型的？

- 类型：`string`
- 默认值：`-`
- 说明：唯一标志

#### TableDropdown 组件的参数 name 是什么类型的？

- 类型：`ReactNode`
- 默认值：`-`
- 说明：内容

#### TableDropdown 组件的参数 (...)Menu.Item 是什么类型的？

- 类型：`Menu.Item`
- 默认值：`-`
- 说明：[Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) 是 antd 的组件