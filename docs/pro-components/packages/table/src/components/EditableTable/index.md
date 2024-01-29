1. EditableProTable 与 ProTable 有何区别？可编辑表格 EditableProTable 和 ProTable 的功能基本相同，但 EditableProTable 为了方便使用做了一些改进。它关闭了查询表单和操作栏，并修改了 value 和 onChange 属性，使其可以方便地继承到 antd 的 Form 中。

2. EditableProTable 有哪些预设？EditableProTable 增加了一些预设，使其更易于使用。具体的预设内容可以参考官方文档进行了解。

3. EditableProTable 如何继承到 antd 的 Form 中？为了使 EditableProTable 可以方便地继承到 antd 的 Form 中，修改了 value 和 onChange 属性。具体的使用方法可以参考官方文档，其中会详细说明如何使用 value 和 onChange 属性来实现表格与 Form 的数据联动。

### value 属性是用来传入 table 渲染的元数据的吗？

是的，`value` 属性是用来传入一个数组作为 table 渲染的元数据的。该数组中的每个元素是表格中的一行数据。

### 当 `value` 属性发生改变时，会触发什么操作？

当 `value` 属性发生改变时，会触发 `onChange` 回调函数。该回调函数接收一个参数，即修改后的 `value` 值。如果设置了 `value`，Table 组件会成为一个受控组件。

### 什么是 `recordCreatorProps` 属性？

`recordCreatorProps` 属性是用来配置新建一行数据的相关配置的。它包含了一些可配置的属性，详细的配置信息可以参考 [RecordCreatorProps](#recordcreator) 和 [ButtonProps](https://ant.design/components/button-cn/#API)。

### `maxLength` 属性的作用是什么？

`maxLength` 属性用来设置最大的行数，当表格的行数达到最大行数时，新建按钮会自动消失。

### 如何配置可编辑表格？

可编辑表格的相关配置可以通过 `editable` 属性进行设置。具体的配置信息可以参考 [TableRowEditable](#editable-编辑行配置)。

### `controlled` 属性的功能是什么？

`controlled` 属性用来控制组件是否受控。如果设置为 `true`，每次编辑时都会触发 `onChange` 回调函数，并且会修改 `dataSource`。

### `editableFormRef` 属性有什么作用？

`editableFormRef` 属性接收一个 React Ref 对象，用来获取 table 中所有的 form 对象。该 Ref 对象包含了一些表格特有的操作。

### Editable 新建行的时候需要保证 recordCreatorProps.record key 的唯一性吗？

是的，新增一行的时候，需要确保 `recordCreatorProps.record` 的 key 唯一，否则会导致编辑出错。

### 在 EditableTable 中如何保证 recordCreatorProps.record key 的唯一性？

在 EditableTable 中，可以通过设置 `recordCreatorProps.record` 的值为一个函数来保证 key 的唯一性。例如，在新增一行的时候，可以使用如下方式保证 key 的唯一性：

```tsx | pure
<EditableTable
  rowKey="id"
  recordCreatorProps={{
    position: position as 'top',
    // 每次新增的时候需要Key
    record: () => ({ id: getNewId() }),
  }}
/>
```

这样每次新增的时候，`getNewId()` 函数都会生成一个唯一的 id 值，确保了 key 的唯一性。

### 如果 recordCreatorProps.record 的 key 不唯一会导致什么问题？

如果在 EditableTable 中，使用相同的 key 值来创建多个新行，会导致编辑出错。因为在编辑过程中，EditableTable 会根据每个数据项的 key 来进行识别和更新，如果 key 不唯一，可能会导致编辑的数据混淆或者丢失。因此，确保 recordCreatorProps.record key 的唯一性非常重要。

### 如何获取可编辑表格中的一行数据？

你可以使用 `getRowData` 方法来获取可编辑表格中的一行数据。该方法接受一个参数 `rowIndex`，可以是行号或者行的唯一标识。例如，你可以使用以下方式获取第一行的数据：

```typescript
const rowData = getRowData(1);
```

另外，你也可以根据行的唯一标识获取数据，例如：

```typescript
const rowData = getRowData('id');
```

### 如何获取可编辑表格的所有数据？

要获取整个可编辑表格的数据，你可以使用 `getRowsData` 方法。该方法返回一个数组，包含了整个表格的数据。示例代码如下：

```typescript
const rowsData = getRowsData();
```

### 如何设置可编辑表格中的一行数据？

你可以使用 `setRowData` 方法来设置可编辑表格中的一行数据。该方法接受两个参数，`rowIndex` 表示行号或行的唯一标识，`data` 表示要设置的数据。

例如，要修改第一行的数据，你可以使用以下代码：

```typescript
setRowData(1, { title: 'new' });
```

如果你的表格行有唯一标识，你也可以使用该标识来设置数据。例如：

```typescript
setRowData('id', { title: 'new' });
```

如果你想清空一行的数据，你可以将要设置的字段的值设为 `undefined`。例如：

```typescript
setRowData(1, { title: undefined });
```

需要注意的是，`setRowData` 方法只会简单地对数据进行合并，只会合并第一层对象。如果你的数据中有嵌套对象，只会合并最外层对象。

希望以上信息对你有帮助！如果还有其他问题，请随时提问。

### editable 编辑行配置

**属性**

- type: 可编辑表格的类型，单行编辑或者多行编辑
  - 类型: `single` \| `multiple`
  - 默认值: -
- form: 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用
  - 类型: `FormInstance`
  - 默认值: -
- formProps: 可以配置 form 的属性，但是不支持 onFinish
  - 类型: [`FormProps`](https://procomponents.ant.design/components/form#proform)
  - 默认值: -
- editableKeys: 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey
  - 类型: `Key[]`
  - 默认值: -
- onChange: 行数据被修改的时候触发
  - 类型: `(editableKeys: Key[], editableRows: T[]) => void`
  - 默认值: -
- onSave: 保存一行的时候触发
  - 类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>`
  - 默认值: -
- saveText: 保存一行的文字
  - 类型: `React.ReactNode`
  - 默认值: `保存`
- onDelete: 删除一行的时候触发
  - 类型: `(key: Key, row: T) => Promise<any>`
  - 默认值: -
- deleteText: 删除一行的文字
  - 类型: `React.ReactNode`
  - 默认值: `删除`
- onCancel: 取消编辑一行时触发
  - 类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>`
  - 默认值: -
- cancelText: 取消编辑一行的文字
  - 类型: `React.ReactNode`
  - 默认值: `取消`
- actionRender: 自定义编辑模式的操作栏
  - 类型: `(row: T, config: ActionRenderConfig<T>) => ReactNode[]`
  - 默认值: -
- deletePopconfirmMessage: 删除时弹出的确认框提示消息
  - 类型: `ReactNode`
  - 默认值: `删除此项？`
- onlyOneLineEditorAlertMessage: 只能编辑一行的的提示
  - 类型: `ReactNode`
  - 默认值: `只能同时编辑一行`
- onlyAddOneLineAlertMessage: 只能同时新增一行的提示
  - 类型: `ReactNode`
  - 默认值: `只能新增一行`

**说明**

- `editableKeys` 是一个受控属性，用于指定正在编辑的行。建议使用 `rowKey` 设置唯一的标识属性作为 `editableKeys` 的值。
- 当行数据被修改、保存、删除或取消编辑时，对应的事件回调函数会被触发。这些回调函数可以自定义逻辑来处理相应的操作。
- 可以通过设置 `type` 属性来选择单行编辑或多行编辑方式。
- 可以通过 `form` 属性来指定可编辑表格关联的表单实例。
- `formProps` 属性用于配置表单的属性，但不支持 `onFinish` 方法。
- 可以通过设置其他属性来自定义保存、删除、取消编辑等操作的文字和提示消息。

### editable 编辑行配置中的 type 属性

**描述**

可编辑表格的类型，可以是单行编辑或者多行编辑。

**属性值**

- `single`: 单行编辑模式
- `multiple`: 多行编辑模式

**默认值**

- -

### editable 编辑行配置中的 form 属性

**描述**

可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用。

**类型**

- `FormInstance`

**默认值**

- -

### editable 编辑行配置中的 formProps 属性

**描述**

可以配置 form 的属性，但是不支持 `onFinish`。

**类型**

- [`FormProps`](https://procomponents.ant.design/components/form#proform)

**默认值**

- -

### editable 编辑行配置中的 editableKeys 属性

**描述**

正在编辑的行，受控属性。默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey。

**类型**

- `Key[]`

**默认值**

- -

### editable 编辑行配置中的 onChange 属性

**描述**

行数据被修改时触发的回调函数。

**类型**

- `(editableKeys: Key[], editableRows: T[]) => void`

**默认值**

- -

### editable 编辑行配置中的 onSave 属性

**描述**

保存一行数据时触发的回调函数。

**类型**

- `(key: Key, row: T, originRow: T, newLine?: newLineConfig) => Promise<any>`

**默认值**

- -

### editable 编辑行配置中的 saveText 属性

**描述**

保存一行数据的文字。

**类型**

- `React.ReactNode`

**默认值**

- `保存`

### editable 编辑行配置中的 onDelete 属性

**描述**

删除一行数据时触发的回调函数。

**类型**

- `(key: Key, row: T) => Promise<any>`

**默认值**

- -

### editable 编辑行配置中的 deleteText 属性

**描述**

删除一行数据的文字。

**类型**

- `React.ReactNode`

**默认值**

- `删除`

### editable 编辑行配置中的 onCancel 属性

**描述**

取消编辑一行数据时触发的回调函数。

**类型**

- `(key: Key, row: T, originRow: T, newLine?: newLineConfig) => Promise<any>`

**默认值**

- -

### editable 编辑行配置中的 cancelText 属性

**描述**

取消编辑一行数据的文字。

**类型**

- `React.ReactNode`

**默认值**

- `取消`

### editable 编辑行配置中的 actionRender 属性

**描述**

自定义编辑模式的操作栏。

**类型**

- `(row: T, config: ActionRenderConfig<T>) => ReactNode[]`

**默认值**

- -

### editable 编辑行配置中的 deletePopconfirmMessage 属性

**描述**

删除时弹出的确认框提示消息。

**类型**

- `ReactNode`

**默认值**

- `删除此项？`

### editable 编辑行配置中的 onlyOneLineEditorAlertMessage 属性

**描述**

只能编辑一行时的提示消息。

**类型**

- `ReactNode`

**默认值**

- `只能同时编辑一行`

### editable 编辑行配置中的 onlyAddOneLineAlertMessage 属性

**描述**

只能同时新增一行时的提示消息。

**类型**

- `ReactNode`

**默认值**

- `只能新增一行`

### recordCreatorProps 新建按钮配置

为了控制生成按钮，我们可以使用 `recordCreatorProps`。通过设置 `recordCreatorProps={false}` 可以关闭按钮的显示。通过 `actionRef.current?.addEditRecord(row)` 可以控制新建行。

`recordCreatorProps` 支持以下配置项：

- `parentKey`：指定要将按钮添加到哪个节点下，用于多重嵌套表格。
- `position`：配置新增按钮是添加在表格头还是表格尾部，可选值为 `'top'` 或 `'bottom'`。
- `newRecordType`：配置新增一行的方式，默认为缓存，在取消操作后会消失。如果设置为 `'dataSource'`，会触发 onchange 事件，取消后也不会消失，只能删除。
- `record`：配置新增行的默认数据。
- `creatorButtonText`：设置按钮文本。
- `style`：配置按钮的样式，可以设置按钮是否显示，用于实现最大行限制和最小行限制等功能。
- `...antButtonProps`：可参考 [Ant Design 按钮组件文档](https://ant.design/components/button-cn/#API)。

以上是关于 `recordCreatorProps` 的配置说明。使用这些配置项，你可以自定义新建按钮的行为和样式。

### 什么是 `renderFormItem` 自定义编辑组件？

`renderFormItem` 是一个用于自定义编辑输入组件的方法。它可以在 `Form.Item` 下面添加一个元素，并返回该元素。通过使用 `renderFormItem`，我们可以在可编辑表格中使用自定义的输入组件。

### `renderFormItem` 的使用方法是怎样的？

使用 `renderFormItem` 的方式类似于在 `Form.Item` 中直接渲染组件，可以通过以下伪代码实现：

```typescript
const dom = renderFormItem();

<Form.Item>{dom}</Form.Item>;
```

与 `Form.Item` 类似，我们认为 `renderFormItem` 返回的组件都包含 `value` 和 `onChange` 属性。下面我们将看到一个使用 `renderFormItem` 将一个简单的 TagList 组件放入可编辑表格中的示例。

### 如何在可编辑表格中使用 `renderFormItem`？

首先我们需要定义一个 TagList 组件，示例代码如下：

```typescript
const TagList: React.FC<{
  value?: {
    key: string;
    label: string;
  }[];
  onChange?: (
    value: {
      key: string;
      label: string;
    }[]
  ) => void;
}> = ({ value, onChange }) => {
  // 组件内部实现代码
};
```

然后，在可编辑表格中配置该组件，示例代码如下：

```typescript
{
  title: '标签',
  dataIndex: 'labels',
  width: '40%',
  renderFormItem: () => <TagList />,
  render: (_, row) => row?.labels?.map((item) => <Tag key={item.key}>{item.label}</Tag>),
},
```

这样配置后的编辑表格会包含 TagList 输入组件，实现了自定义的编辑功能。

### 在自定义编辑组件中，如何获取值和修改行数据？

在使用 `renderFormItem` 自定义编辑组件时，我们不需要显式地注入 `value` 和 `onChange`，它们会自动被注入到组件中。数据绑定和修改也是由编辑表格自己完成的，我们可以在 `onSave` 中获取处理完成的数据。

需要注意的是，如果自定义编辑组件没有 `value`，将无法注入初始值；如果没有 `onChange`，将无法修改行数据。因此，在自定义编辑组件中定义 `value` 和 `onChange` 属性是必要的。同时，我们建议将复杂的逻辑和网络请求等拆分为简单的组件，这样可以提高性能并使逻辑更加清晰。

### 如何区分使用 `renderFormItem` 生成查询表单和编辑表单？

如果我们需要区分使用 `renderFormItem` 生成查询表单和编辑表单，可以使用以下方式进行渲染：

```typescript
renderFormItem: (_, { isEditable }) => (isEditable ? <TagList /> : <Input /> )
```

通过判断 `isEditable` 属性，可以在查询表单和编辑表单之间进行不同组件的渲染。这样可以灵活地使用 `renderFormItem` 生成不同类型的表单组件。

#### 如何在点击链接时执行编辑操作？

在给定的代码中，可以看到`<a>`标签中定义了`onClick`属性，用来处理点击事件。具体地，在点击链接时，会调用`action?.startEditable?.(record.id)`方法来执行编辑操作。所以，当用户点击该链接时，将会触发记录的编辑功能。

#### 如何复制一行数据到列表的末尾？

在给定的代码中，可以看到`<a>`标签中定义了点击事件处理函数。该函数中使用`EditableProTable.RecordCreator`组件，通过传入一个新的记录对象来实现复制操作。具体地，在点击链接时，会将当前行的记录复制一份，生成一个新的记录对象，并将其添加到列表的末尾。用户可以通过触发该链接来复制相应的记录。

#### 如何自定义操作栏？

你可以通过以下方式自定义操作栏：

```typescript
const editable = {
  actionRender: (row, config, defaultDom) => [
    defaultDom.save,
    defaultDom.cancel,
  ],
};
```

在 `actionRender` 函数中，你可以根据需要添加或使用 `defaultDom` 中的默认操作按钮，例如 `save`、`cancel`、`delete`。通过修改 `actionRender` 函数的返回值，你可以自定义操作栏的内容。

#### `actionRender` 函数的参数是什么？

`actionRender` 函数接受三个参数：

- `row`：当前操作栏所在行的数据对象。
- `config`：操作栏的配置对象。
- `defaultDom`：包含默认操作按钮的对象，可以在自定义操作栏时使用。

#### 如何使用默认操作按钮？

在自定义操作栏时，你可以使用 `defaultDom` 对象中的默认操作按钮。例如，可以使用 `defaultDom.save` 来添加保存按钮，使用 `defaultDom.cancel` 来添加取消按钮。

例子中的代码示例了如何在自定义操作栏中只添加保存按钮和取消按钮。如果你想添加其他按钮，可以在数组中继续添加对应的 `defaultDom` 属性名。
