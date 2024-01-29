## 1. 什么是 QueryFilter 和 LightFilter？

QueryFilter 和 LightFilter 是用于配合其他组件使用的特殊形态的表单。它们解决了在与表格、列表等组件组合使用时的样式设置问题。在 ProTable 中，默认支持使用 QueryFilter 和 LightFilter 作为筛选表单。

## 2. 在 ProTable 中，如何使用 QueryFilter 和 LightFilter？

在 ProTable 中使用 QueryFilter 和 LightFilter 筛选表单是默认支持的。通过使用相应的组件，可以实现与表格或列表等组件的配合使用。这样可以方便地进行数据筛选和过滤操作。

## 3. 在前端开发中，为什么要使用 QueryFilter 和 LightFilter？

使用 QueryFilter 和 LightFilter 可以简化在前端开发中与其他组件进行配合使用时的样式设置。通过使用这些特殊形态的表单，可以避免复杂的样式设置，提高开发效率。尤其是在使用 ProTable 这样的组件时，QueryFilter 和 LightFilter 提供了方便的筛选表单功能，使数据的筛选和过滤更加便捷。

## 如何使用查询筛选组件？

查询筛选组件可以用于在页面中创建一个具有筛选条件的查询功能。要使用查询筛选组件，请按照以下步骤进行操作：

1. 导入查询筛选组件：
```javascript
import QueryFilter from './path/to/query-filter';
```

2. 在需要使用的地方放置查询筛选组件：
```javascript
<QueryFilter {...props} />
```

3. 可选步骤：根据需要配置组件的属性，例如指定筛选条件、设置布局等：
```javascript
<QueryFilter
  filters={filters}
  layout="horizontal"
  // 其他属性
/>
```

4. 可选步骤：根据需要处理查询筛选组件的事件，例如提交查询、重置查询等：
```javascript
const handleSubmit = (values) => {
  // 处理查询操作
};

const handleReset = () => {
  // 处理重置查询操作
};

<QueryFilter
  onSubmit={handleSubmit}
  onReset={handleReset}
  // 其他属性
/>
```

通过以上步骤，你就可以在页面中使用查询筛选组件实现查询功能了。

## 如何使用查询筛选组件进行测试？

如果你想测试查询筛选组件的功能，可以按照以下步骤进行操作：

1. 导入查询筛选组件和相关的测试工具：
```javascript
import QueryFilter from './path/to/query-filter';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
```

2. 使用 `render` 方法渲染查询筛选组件：
```javascript
const { getByLabelText, getByText } = render(<QueryFilter {...props} />);
```

3. 使用 `fireEvent` 方法触发组件的事件，例如输入搜索条件、点击查询按钮等：
```javascript
const input = getByLabelText('搜索条件');
fireEvent.change(input, { target: { value: 'example' } });

const button = getByText('查询');
fireEvent.click(button);
```

4. 使用 `waitFor` 方法等待异步操作完成后断言结果：
```javascript
await waitFor(() => {
  expect(/* 断言结果 */).toBe(/* 期望的结果 */);
});
```

通过以上步骤，你就可以对查询筛选组件进行测试了。

## 如何使用默认收起的查询筛选组件？

如果你想使用默认收起的查询筛选组件，在使用组件时，可以配置 `collapsed` 属性为 `true`。具体的使用步骤如下：

1. 在需要使用的地方放置查询筛选组件，并设置 `collapsed` 属性为 `true`：
```javascript
<QueryFilter collapsed={true} {...props} />
```

通过以上步骤，你就可以使用默认收起的查询筛选组件了。

## 如何使用垂直布局的查询筛选组件？

如果你想使用垂直布局的查询筛选组件，在使用组件时，可以配置 `layout` 属性为 `"vertical"`。具体的使用步骤如下：

1. 在需要使用的地方放置查询筛选组件，并设置 `layout` 属性为 `"vertical"`：
```javascript
<QueryFilter layout="vertical" {...props} />
```

通过以上步骤，你就可以使用垂直布局的查询筛选组件了。

## 如何创建一个具有搜索功能的查询筛选组件？

如果你想创建一个具有搜索功能的查询筛选组件，在使用组件时，可以配置 `searchable` 属性为 `true`。具体的使用步骤如下：

1. 在需要使用的地方放置查询筛选组件，并设置 `searchable` 属性为 `true`：
```javascript
<QueryFilter searchable={true} {...props} />
```

通过以上步骤，你就可以创建一个具有搜索功能的查询筛选组件了。

### 轻量筛选的基本使用

轻量筛选是一种简单易用的筛选组件。以下是轻量筛选的基本使用示例：

```tsx
import React from 'react';
import { LightFilter } from 'antd';

const LightFilterExample = () => {
  const filterConfig = [
    {
      key: 'name',
      label: '姓名',
      placeholder: '请输入姓名',
    },
    {
      key: 'age',
      label: '年龄',
      placeholder: '请输入年龄',
    },
    {
      key: 'address',
      label: '地址',
      placeholder: '请输入地址',
    },
  ];

  const onSearch = (filterValues) => {
    console.log('Filter Values:', filterValues);
  };

  return (
    <LightFilter filterConfig={filterConfig} onSearch={onSearch} />
  );
};

export default LightFilterExample;
```

上述示例代码创建了一个简单的轻量筛选组件。传入的 `filterConfig` 数组定义了筛选的选项，每个选项包含一个 `key` 表示字段名，`label` 表示显示的标签，`placeholder` 表示输入框的提示文字。而 `onSearch` 函数则是当点击筛选时触发的回调函数，它接收筛选条件的值作为参数。

### 轻量筛选的自定义footer

轻量筛选还支持自定义底部部分。以下是一个示例代码：

```tsx
import React from 'react';
import { LightFilter } from 'antd';

const LightFilterFooterExample = () => {
  const filterConfig = [
    {
      key: 'name',
      label: '姓名',
      placeholder: '请输入姓名',
    },
    {
      key: 'age',
      label: '年龄',
      placeholder: '请输入年龄',
    },
    {
      key: 'address',
      label: '地址',
      placeholder: '请输入地址',
    },
  ];

  const onSearch = (filterValues) => {
    console.log('Filter Values:', filterValues);
  };

  const renderFooter = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <button type="primary" onClick={onSearch}>
          筛选
        </button>
        <button onClick={() => console.log('重置')}>
          重置
        </button>
      </div>
    );
  };

  return (
    <LightFilter filterConfig={filterConfig} onSearch={onSearch} renderFooter={renderFooter} />
  );
};

export default LightFilterFooterExample;
```

上述示例代码在轻量筛选中自定义了底部部分，利用 `renderFooter` 函数返回一个自定义的底部组件，其中包含了一个筛选按钮和一个重置按钮。

### 轻量筛选的边框模式

轻量筛选还提供了边框模式，以下是边框模式的示例代码：

```tsx
import React from 'react';
import { LightFilter } from 'antd';

const LightFilterBorderedExample = () => {
  const filterConfig = [
    {
      key: 'name',
      label: '姓名',
      placeholder: '请输入姓名',
    },
    {
      key: 'age',
      label: '年龄',
      placeholder: '请输入年龄',
    },
    {
      key: 'address',
      label: '地址',
      placeholder: '请输入地址',
    },
  ];

  const onSearch = (filterValues) => {
    console.log('Filter Values:', filterValues);
  };

  return (
    <LightFilter filterConfig={filterConfig} onSearch={onSearch} bordered />
  );
};

export default LightFilterBorderedExample;
```

上述示例代码创建了一个边框模式的轻量筛选组件，通过设置 `bordered` 属性为 `true`，将轻量筛选组件的样式设为有边框的模式。

以上是关于轻量筛选组件的一些示例使用方式，你可以根据需要选择适合的方式来使用该组件。

### QueryFilter 继承了什么 API？

QueryFilter 继承了 ProForm 的 API。

### QueryFilter 支持哪些属性？

QueryFilter 支持以下属性：

- collapsed: 是否折叠超出的表单项，用于受控模式，类型为 boolean，默认值为 -
- defaultCollapsed: 默认状态下是否折叠超出的表单项，类型为 boolean，默认值为 true
- onCollapse: 切换表单折叠状态时的回调，类型为 `(collapsed)=>void`，默认值为 -
- hideRequiredMark: 隐藏所有表单项的必选标记，默认值为 true
- submitterColSpanProps: 提交按钮所在 col 的 props，类型为 ColProps，默认值为 -
- defaultColsNumber: 自定义折叠状态下默认显示的表单控件数量，没有设置或小于 0，则显示一行控件；数量大于等于控件数量则隐藏展开按钮，类型为 number，默认值为 -
- labelWidth: label 宽度，类型为 `number | 'auto'`，默认值为 80
- span: 表单项宽度，类型为 `number[0 - 24]`，默认值为 -
- split: 每一行是否有分割线，类型为 boolean，默认值为 -
- preserve: 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失，类型为 boolean，默认值为 true

### QueryFilter 的 hideRequiredMark 属性的默认值是什么？

QueryFilter 的 hideRequiredMark 属性的默认值是 true。

### Ant Design 5.x 的默认布局规则是怎样的?

Ant Design 5.x 在默认布局时根据容器宽度断点进行不同列数的展示。具体规则如下：

- 当容器宽度 `≧ 1352px` 时，使用 4 列的布局，列数包括操作区域。
- 当容器宽度 `≧ 1062px` 时，使用 3 列的布局，列数包括操作区域。
- 当容器宽度在 `≧ 701px` 到 `< 1063px` 区间时，使用 3 列的布局，列数包括操作区域。
- 当容器宽度在 `≧ 513px` 到 `< 701px` 区间时，使用 2 列的布局，列数包括操作区域。
- 当容器宽度 `< 513px` 时，使用 1 列的布局，列数包括操作区域。

以上是 Ant Design 5.x 默认布局的规则，根据宽度断点选择合适的列数以及布局方式。

### Ant Design 5.x 的默认布局中列数包含哪些内容？

在 Ant Design 5.x 的默认布局中，列数包含表单以及操作区域。这意味着在给定的宽度下，可以同时展示表单和操作区域的内容。

默认布局中的列数根据容器宽度断点的不同进行调整，具体规则如上述所述。无论是使用几列的布局，都会包含表单和操作区域。这使得在不同设备上能够更好地展示表单内容，并确保操作区域能够与表单内容对应。

### Ant Design 5.x 的默认布局是怎么样的？

Ant Design 5.x 的默认布局是根据容器宽度断点选择合适的列数以及布局方式的。具体规则如上述所述，根据宽度区间选择相应的列数，并将表单和操作区域组合在一起展示。

默认布局的设计旨在提供一种适应不同设备的表单布局方式，为用户提供更好的使用体验。通过合理的列数排布，可以充分利用屏幕空间，并确保表单和相应的操作区域能够合理排列，方便用户进行操作。

Ant Design 5.x 的默认布局采用了响应式设计，可以根据不同设备的宽度自动调整布局，以适应不同屏幕大小的设备。这样可以保证在不同终端上都能获得良好的显示效果，提供一致的用户体验。

### 强制上下布局时的规则

当使用强制上下布局时，根据容器的宽度断点，以下是单行展示表单的列数规则：

- 容器宽度 `≧ 1057px`，单行展示 4 列，包含操作区域。
- 容器宽度 `≧ 785px` 且 `< 1057px`，单行展示 3 列，包含操作区域。
- 容器宽度 `≧ 513px` 且 `< 785px`，单行展示 2 列，包含操作区域。
- 容器宽度 `< 513px`，单行展示 1 列，包含操作区域。

以上是在强制上下布局情况下的规则，根据容器宽度断点不同，列数会有所调整。这个规则可以帮助我们更好地布局和展示表单内容。

### LightFilter 组件支持哪些属性？

LightFilter 组件除了继承了 ProForm 组件的 API，还支持以下属性：

1. `collapse`：是否默认折叠全部字段，类型为 `boolean`，默认值为 `false`。

2. `collapseLabel`：折叠区域的标签，类型为 `ReactNode`，默认值为 `更多筛选 <DownOutlined/>`。

3. `footerRender`：底部内容，当不需要默认底部按钮时，可以设为 `footer={false}`。类型为 `(onClear?: () => void, onConfirm: () => void) => JSX.Element \| false)` 或 `false`。

4. `placement`：选择框弹出的位置，可选值为 `bottomLeft`、`bottomRight`、`topLeft`、`topRight`。类型为字符串。

以上是 LightFilter 组件支持的属性列表。

### LightFilter 组件中的 collapse 属性是什么意思？

LightFilter 组件的 `collapse` 属性用于设置是否默认折叠全部字段。当设置为 `true` 时，组件初始化时，所有的字段都会处于折叠状态；当设置为 `false` 时，组件初始化时，所有的字段都会展开显示。默认值为 `false`。

### LightFilter 组件中的 placement 属性有哪些可选值？

LightFilter 组件的 `placement` 属性用于设置选择框弹出的位置。可选的值包括：

- `bottomLeft`：选择框弹出在底部左侧。
- `bottomRight`：选择框弹出在底部右侧。
- `topLeft`：选择框弹出在顶部左侧。
- `topRight`：选择框弹出在顶部右侧。

以上是 `placement` 属性的可选值。