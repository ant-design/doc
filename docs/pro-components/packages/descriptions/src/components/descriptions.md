### ProDescriptions 是什么？

ProDescriptions 是一个高级描述列表组件，用于快速方便地构建描述列表。它封装了常用的逻辑，解决了在编写 Descriptions 组件时需要编写重复代码的问题。它提供了默认的网络请求行为和列展示逻辑，使得查询数据变得简单。

### ProDescriptions 如何使用请求网络？

ProDescriptions 封装了请求网络的行为，可以将 props 中的 params 参数默认带入请求中。可以使用一个函数作为 request 属性，并将该函数的参数命名为 params。示例代码如下：

```tsx | pure
import request from 'umi-request';

const fetchData = (params) =>
  request<{
    datT{};
  }>('https://proapi.azurewebsites.net/github/issues', {
    params,
  });

const keyWords = "Ant Design"

<ProDescriptions<T,U> request={fetchData} />;
```

在上述示例中，fetchData 函数是一个网络请求函数，它接收一个参数 params，并将该参数作为请求的参数。在 ProDescriptions 组件中通过设置 request 属性为 fetchData 函数，实现了将组件的 params 参数传递给网络请求的功能。

### ProDescriptions 的请求结果是什么类型？

ProDescriptions 组件约定了请求结果的类型。请求结果的类型需要包含 data 和 success 两个属性。具体的类型定义如下：

```tsx | pure
interface RequestData {
  datDatum{};
  success: boolean;
}
```

其中，data 属性表示请求返回的数据，success 属性表示请求是否成功。在使用 ProDescriptions 组件时，可以根据请求结果的类型定义进行处理和展示。

### 问题 1：ProDescriptions 的参数有哪些？

答：ProDescriptions 的参数如下：

- title：描述列表的标题，显示在最顶部，类型为 ReactNode，默认值为 "-"
- tooltip：内容的补充描述，hover 后显示，类型为 string，默认值为 "-"
- loading：展示一个加载的骨架屏，骨架屏和 dom 不会一一对应，类型为 boolean，默认值为 "-"
- extra：描述列表的操作区域，显示在右上方，类型为 string 或 ReactNode，默认值为 "-"
- bordered：是否展示边框，类型为 boolean，默认值为 false
- column：一行的 ProDescriptionsItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 1, sm: 2, md: 3}，类型为 number，默认值为 3
- size：设置列表的大小。可以设置为 middle 、small，或不填（只有设置 bordered={true} 生效），类型为 default、middle、small，默认值为 "-"
- layout：描述布局，类型为 horizontal 或 vertical，默认值为 horizontal
- colon：配置 ProDescriptions.Item 的 colon 的默认值，类型为 boolean，默认值为 true
- request：请求数据，不设置 columns 时 ProDescriptions.Item 需设置对应的 dataIndex，类型为 "-"，默认值为 "-"
- onRequestError：处理 request 的错误，默认会直接抛出错误，类型为 "-"，默认值为 "-"
- columns：列定义，与 request 配合使用 [columns](/components/table#columns)，类型为 "-"，默认值为 "-"
- editable：编辑的相关配置，类型为 EditableConfig，默认值为 "-"

### 问题 2：ProDescriptions 中的 title 参数的类型是什么？

答：ProDescriptions 中的 title 参数的类型是 ReactNode。

### 问题 3：ProDescriptions 中的 bordered 参数的默认值是什么？

答：ProDescriptions 中的 bordered 参数的默认值是 false。

### 问题 4：ProDescriptions 中的 layout 参数有哪些可选值？

答：ProDescriptions 中的 layout 参数有两个可选值：horizontal 和 vertical。

### 问题 5：ProDescriptions 中的 request 参数有什么作用？

答：ProDescriptions 中的 request 参数用于请求数据，当不设置 columns 时，ProDescriptions.Item 需设置对应的 dataIndex。

### editable 编辑配置

**属性**：form

**描述**：可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用

**类型**：`FormInstance`

**默认值**：-

**属性**：formProps

**描述**：可以配置 form 的属性，但是不支持 onFinish

**类型**：[`FormProps`](https://procomponents.ant.design/components/form#proform)

**默认值**：-

**属性**：editableKeys

**描述**：正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey

**类型**：`Key[]`

**默认值**：-

**属性**：onChange

**描述**：行数据被修改的时候触发

**类型**：`(editableKeys: Key[], editableRows: T[]) => void`

**默认值**：-

**属性**：onSave

**描述**：保存一行的时候触发

**类型**：`(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>`

**默认值**：-

**属性**：saveText

**描述**：保存一行的文字

**类型**：`React.ReactNode`

**默认值**：`保存`

**属性**：onDelete

**描述**：删除一行的时候触发

**类型**：`(key: Key, row: T) => Promise<any>`

**默认值**：-

**属性**：deleteText

**描述**：删除一行的文字

**类型**：`React.ReactNode`

**默认值**：`删除`

**属性**：onCancel

**描述**：取消编辑一行时触发

**类型**：`(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>`

**默认值**：-

**属性**：cancelText

**描述**：取消编辑一行的文字

**类型**：`React.ReactNode`

**默认值**：`取消`

**属性**：actionRender

**描述**：自定义编辑模式的操作栏

**类型**：`(row: T, config: ActionRenderConfig,defaultDom) => ReactNode[]`

**默认值**：-

**属性**：deletePopconfirmMessage

**描述**：删除时弹出的确认框提示消息

**类型**：`ReactNode`

**默认值**：`删除此项？`

**属性**：onlyOneLineEditorAlertMessage

**描述**：只能编辑一行的的提示

**类型**：`ReactNode`

**默认值**：`只能同时编辑一行`

**属性**：onlyAddOneLineAlertMessage

**描述**：只能同时新增一行的提示

**类型**：`ReactNode`

**默认值**：`只能新增一行`

### ProDescriptions.Item

#### label

- 描述：内容的描述
- 类型：ReactNode
- 默认值：-

#### tooltip

- 描述：内容的补充描述，hover 后显示
- 类型：string
- 默认值：-

#### ellipsis

- 描述：是否自动缩略
- 类型：boolean
- 默认值：-

#### copyable

- 描述：是否支持复制
- 类型：boolean
- 默认值：-

#### span

- 描述：包含列的数量
- 类型：number
- 默认值：1
- 范围：整数

#### valueType

- 描述：格式化的类型
- 类型：ValueType
- 默认值：-

#### valueEnum

- 描述：当前列值的枚举
- 类型：Record
- 默认值：-

#### request

- 描述：从网络请求枚举数据
- 类型：()=>Promise<{[key:string|number]:any}>
- 默认值：-

#### dataIndex

- 描述：返回数据的 key 与 ProDescriptions 的 request 配合使用，用于配置式的定义列表
- 类型：React.Text \| React.Text[]
- 默认值：-

#### editable

- 描述：在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样
- 类型：false \| (text: any, record: T,index: number) => boolean
- 默认值：true

### ProDescriptions.Item - span

#### 描述

包含列的数量

#### 类型

number

#### 默认值

1

#### 范围

整数

### ProDescriptions.Item - editable

#### 描述

在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样

#### 类型

false \| (text: any, record: T,index: number) => boolean

#### 默认值

true

### ActionRef 是什么？

`ActionRef` 是一个用于支持一些默认操作的引用。在某些情况下，我们需要手动触发一些操作或者更新，而仅仅使用 props 是很难解决这个问题的。因此，`ActionRef` 提供了一个引用来支持一些默认的操作。

### `ActionRef` 是如何使用的？

在使用 `ActionRef` 之前，你需要先创建一个 ref：

```tsx | pure
const ref = useRef<ActionType>();
```

然后，你可以在需要刷新或触发操作的地方使用 `ref.current` 来调用相关的方法。例如，下面的代码将每隔两秒重新加载数据：

```tsx | pure
useEffect(() => {
  setInterval(() => {
    ref.current.reload();
  }, 2000);
}, []);
```

接着，你可以将 `ActionRef` 绑定到组件上，可以通过 hooks 的方式或者 class 的方式进行操作：

```tsx
// hooks 绑定
<ProDescriptions actionRef={ref} />;

// class
<ProDescriptions actionRef={(ref) => (this.ref = ref)} />;
```

### `ActionRef` 支持哪些行为？

`ActionRef` 支持一些别的行为，这些行为可以减少你的编码成本。然而需要注意的是，`ref` 会脱离 React 的生命周期，并且这些 action 都是不受控的。以下是一个使用 `ActionRef` 进行刷新的示例：

```tsx | pure
// 刷新
ref.current.reload();
```

使用 `ActionRef` 可以方便地调用一些预定义的操作，从而节省编码的时间和精力。但是需要注意的是，在使用 `ActionRef` 时要谨慎处理生命周期和状态的管理。
