## 问：ProList 与 antd 的 List 有什么区别？

答：ProList 与 antd 的 List 相比，API 设计上更像 Table，使得可以通过配置化的方式快速定义数据项的展现形式。另外，ProList 基于 ProTable 实现，除了 Table 相关的 API 以外， ProList 还支持大部分 ProTable 的 API。

### 问：ProList 的常用参数有哪些？

答：ProList 的常用参数如下：

- dataSource: 与 antd 相同的配置，表示数据源，类型为数组，默认值为 `false`。
- actionRef: Table action 的引用，便于自定义触发，类型为 MutableRefObject<ActionType>。
- metas: 列表项配置，类似 Table 中的 columns，类型为 Metas。
- rowKey: 行的 key，一般是行 id，类型为 string 或者 `(row,index)=>string`，默认值为 `'id'`。
- headerTitle: 列表头部主标题，类型为 React.ReactNode。
- loading: 是否加载中，类型为 boolean 或者 `(item: any) => boolean`，默认值为 `false`。
- split: 是否有分割线，类型为 boolean，默认值为 `false`。
- rowSelection: 与 antd 相同的配置，表示行选择，类型为对象或者布尔值，默认值为 false。
- expandable: 与 antd 相同的配置，表示可展开行的配置，类型为对象或者 `false`。
- showActions: 何时展示 actions，CardList 模式下不生效，类型为 `'hover'` 或者 `'always'`，默认值为 `'always'`。
- showExtr 何时展示 extra，类型为 `'hover'` 或者 `'always'`，默认值为 `'always'`。
- onRow: 与 antd 相同的配置，当用户传入 `grid` 属性时，列表将会以卡片模式进行渲染，此事件将不会触发，请使用 `onItem`，类型为 `function(record, index)`。
- onItem: 与 antd 相同的配置，表示在所有类型点击某个项目都会触发该事件，类型为 `function(record, index)`。
- rowClassName: 自定义列表行的类名，类型为字符串或者 `(row, index) => string`。
- itemHeaderRender: 自定义每一列的 header，不同于 itemRender 的是它会保留多选和展开收起。
- itemCardProps: 自定义卡片列表的 proCard props，只在卡片列表下生效。

### 问：如何使用 itemHeaderRender 和 itemCardProps？

答：itemHeaderRender 和 itemCardProps 是 ProList 的两个参数。

- itemHeaderRender 是用来自定义每一列的 header，与 itemRender 不同的是，它会保留多选和展开收起。你可以将自定义的组件传入到 itemHeaderRender 中，实现个性化的列表列头显示。

- itemCardProps 是用来自定义卡片列表的 proCard 的 props，只在卡片列表下生效。你可以传入一个对象，设置 proCard 的属性，从而自定义卡片列表的显示样式。

### Metas.[Meta] 通用 API

#### 参数

- **dataIndex**: 数据在数据项中对应的路径，支持通过数组查询嵌套路径

  - 类型: `string` | `string[]`
  - 默认值: `-`

- **valueType**: 值的类型，和 ProTable 一致

  - 类型: `'text'` | `'date'` ...
  - 默认值: `'text'`

- **render**: 自定义渲染函数
  - 类型: `(text: React.ReactNode, record: T, index: number) => React.ReactNode | React.ReactNode[]`
  - 默认值: `-`

#### 说明

Metas.[Meta] 是一个通用 API，用于配置 ProTable 的元数据项。

#### 示例

```jsx
import { ProTable } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'number',
  },
  {
    title: '操作',
    render: (text, record, index) => (
      <a onClick={() => handleEdit(record)}>编辑</a>
    ),
  },
];

const dataSource = [
  {
    name: '张三',
    age: 18,
  },
  {
    name: '李四',
    age: 20,
  },
];

const MyTable = () => {
  return <ProTable columns={columns} dataSource={dataSource} />;
};
```

#### 参考链接

- [ProTable API 文档](https://procomponents.ant.design/components/table#protable)

### `dataSource` 的字段类型有哪些？

`dataSource` 的字段类型有 `'new'`、`'top'` 和 `'inline'`。

### `dataSource` 字段类型的含义是什么？

- `'new'` 表示数据源是新的。
- `'top'` 表示数据源是热门的。
- `'inline'` 表示数据源是内联的。

### `dataIndex` 参数的默认值是什么？

`dataIndex` 参数的默认值是 `'type'`。

### Metas.description 的参数说明是什么？

Metas.description 的参数说明如下：

| 参数      | 说明 | 类型 | 默认值          |
| :-------- | :--- | :--- | :-------------- |
| dataIndex | -    | -    | `'description'` |

其中，`dataIndex` 参数表示元数据（Metas）的描述信息。默认值为 `'description'`。

#### Metas.actions 的参数 dataIndex 是什么意思？

参数 dataIndex 在 Metas.actions 中的作用是什么？

#### Metas.actions 的参数 cardActionProps 如何使用？

参数 cardActionProps 在 Metas.actions 中有什么用途？如何使用它？

#### Metas.actions 的参数 cardActionProps 的默认值是什么？

参数 cardActionProps 在 Metas.actions 中的默认值是什么？
