### 什么是 SchemaForm？

SchemaForm 是什么工具？他是根据什么来生成表单的？

SchemaForm 是一个根据 JSON Schema 来生成表单的工具。它可以根据 JSON Schema 中的 valueType 来映射成不同的表单项。

### SchemaForm 的使用提示是什么？

SchemaForm 提供了一个使用提示，用于解决卡顿问题和提升性能。你可以参考示例中的高性能代码示例来使用。

如果您遇到卡顿问题或有更高的性能要求，建议参考示例中的高性能代码示例使用。

### SchemaForm 的 API 说明

SchemaForm 提供了与 ProForm 相同的 API，并且增加了部分 API。以下是 SchemaForm 新增的 API：

#### 字段名称：layoutType

类型：ProFormLayoutType
说明：使用的表单布局模式

#### 字段名称：steps

类型：StepFormProps[]
说明：layoutType=steps 中的分步表单配置，需要配置 columns 为数组使用

#### 字段名称：columns

类型：ProFormColumnsType | ProFormColumnsType[]
说明：表单的定义，一般是 JSON 对象，如果是分步表单，需要使用 JSON 数组来生成多个表单

#### 字段名称：shouldUpdate

类型：(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean | boolean
说明：细粒化控制是否渲染。当值为 true 时，会自动重新渲染表单项。当值为 false 时，不会更新表单项但可以使用 dependencies 触发更新。当值为一个函数时，根据返回值判断是否重新渲染表单项，等同于直接赋值 true 或 false

### SchemaForm 的 API 示例

以下是 SchemaForm API 的示例用法：

```jsx
<SchemaForm
  layoutType="horizontal"
  steps={stepsConfig}
  columns={formColumns}
  shouldUpdate={true}
/>
```

```jsx
<SchemaForm
  layoutType="vertical"
  columns={formColumns}
  shouldUpdate={(newValues, oldValues) => newValues.name !== oldValues.name}
/>
```

```jsx
<SchemaForm
  layoutType="steps"
  steps={stepsConfig}
  columns={formColumns}
  shouldUpdate={(newValues, oldValues) => {
    if (newValues.age > 18) {
      return true;
    } else {
      return false;
    }
  }}
/>
```

### SchemaForm 的 API 使用说明

- layoutType 字段用于设置表单的布局模式，可以选择 horizontal、vertical 或 steps。
- steps 字段用于配置分步表单的相关配置，需要将 columns 设置为数组格式。
- columns 字段用于定义表单的结构，一般使用 JSON 对象来表示，如果是分步表单，需要使用 JSON 数组来生成多个表单。
- shouldUpdate 字段用于细粒化控制表单是否重新渲染。当为 true 时，会自动重新渲染表单项。当为 false 时，不会更新表单项，但可以通过 dependencies 触发更新。当为一个函数时，根据返回值判断是否重新渲染表单项，等同于直接赋值 true 或 false。

### ProFormLayoutType 中的表单类型有哪些？

ProFormLayoutType 中包含以下表单类型：

- `Form`：基本的表单类型，详情请参考 [ProForm](/components/form)。
- `ModalForm`：弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置。
- `DrawerForm`：抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置。
- `StepsForm`\|`StepForm`：分步表单，有两种模式可以选择。一种是使用 `steps` 和 `columns` 来生成，另一种是通过将 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现。
- `LightFilter`：轻量筛选，配置之后支持 [LightFilter](/components/query-filter) 的所有配置。
- `QueryFilter`：查询表单，配置之后支持 [QueryFilter](/components/query-filter) 的所有配置。
- `Embed`：内嵌模式，只生成表单项，不生成 Form，可以与其他类型混合使用。

这些不同的表单类型可以根据具体的需求选择使用。

### 如何使用 ProFormLayoutType 中的 ModalForm？

使用 ModalForm 可以创建弹框表单，用于在弹窗中展示和编辑表单数据。ModalForm 是 ProFormLayoutType 中的一种表单类型，你可以通过以下步骤来使用：

1. 配置 ModalForm 的相关参数。
2. 在需要显示弹框表单的地方触发弹框的打开事件。
3. 在弹框表单中进行表单项的展示和编辑。
4. 提交表单后，处理表单数据。

通过以上步骤，你就可以成功使用 ModalForm 创建弹框表单。

### StepsForm 和 StepForm 的区别是什么？

StepsForm 和 StepForm 都是 ProFormLayoutType 中的表单类型，用于创建分步表单。它们的区别在于使用方式：

- StepsForm：使用 `steps` 和 `columns` 来生成分步表单。你可以通过配置 `steps` 和 `columns` 来定义每一步的表单项，从而实现分步展示和操作。
- StepForm：通过将 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 的方式来创建分步表单。在 StepsForm 中，通过设置 `layoutType=StepForm` 来定义每一步的表单项。

也就是说，StepsForm 是通过配置 `steps` 和 `columns` 来实现分步表单，而 StepForm 是通过嵌套方式来实现分步表单。根据具体的需求，你可以选择适合的方式来创建分步表单。

### SchemaForm 表单中各字段的类型定义

以下是 SchemaForm 表单中使用的字段类型定义及其说明。

- `key: React.key`: 确定该列的唯一值，在 dataIndex 重复的情况下使用。
- `dataIndex: React.key | React.key[]`: 与实体映射的 key。如果是数组类型，则会转为 `[a,b] => Entity.a.b` 的形式。
- `valueType: ProFieldValueType`: 数据的渲染方式，内置了一部分渲染方式，也可以自定义 valueType。
- `title: ReactNode | (props, type, dom) => ReactNode`: 标题的内容，在表单中作为 label。
- `tooltip: string`: 在标题旁边展示一个图标，鼠标悬停时显示提示信息。
- `valueEnum: (Entity) => ValueEnum | ValueEnum`: 支持 object 和 Map 类型。Map 类型还支持其他基础类型作为键。
- `fieldProps: (form, config) => fieldProps | fieldProps`: 传递给渲染组件的 props，自定义时也会传递该参数。
- `formItemProps: (form, config) => formItemProps | formItemProps`: 传递给 Form.Item 的配置。
- `formItemProps.rules: Rule[]`: 表单项的校验规则。需要注意的是，当当前表单项为 `formList` 时，此规则只校验列表是否为空，并且只接受元组 `[{required: boolean, message: string}]`，用于开启和关闭非空校验及指定空列表提示消息。
- `proFieldProps: proFieldProps`: 设置到 ProField 上面的 props，内部属性。
- `renderText: (text: any, record: Entity, index: number, action: ProCoreActionType) => any`: 使用 valueType 定义的渲染组件消费修改的数据。
- `render: (dom, entity, index, action, schema) => React.ReactNode`: 自定义只读模式的 DOM 元素。`render` 方法只负责只读模式，编辑模式需要使用 `renderFormItem`。
- `renderFormItem: (schema, config, form) => React.ReactNode`: 自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange。如果返回 false、null 或 undefined，则不会展示表单项。请使用 dependency 组件控制是否渲染列。
- `request: (params, props) => Promise<{label, value}[]>`: 从远程请求网络数据，通常用于选择类组件。
- `params: Record<string, any>`: 传递给 `request` 的额外参数，组件不做处理，但参数变化会触发 `request` 重新请求数据。
- `dependencies: string | number | (string | number)[]`: 所依赖的 values 变化后，触发 renderFormItem、fieldProps、formItemProps 的重新执行，并将 values 注入到 params 中。详见示例链接。
- `hideInDescriptions: boolean`: 在 descriptions 中隐藏。
- `hideInForm: boolean`: 在表单中隐藏。
- `hideInTable: boolean`: 在表格中隐藏。
- `hideInSearch: boolean`: 在查询表格中隐藏。
- `columns: ProFormColumnsType[] | (values) => ProFormColumnsType[]`: 嵌套子项，当 valueType 为 dependency 时，请使用 `(values) => ProFormColumnsType[]`，其他情况使用 `ProFormColumnsType[]`。
- `colProps: ColProps`: 在开启 grid 模式时传递给 Col。
- `rowProps: RowProps`: 在开启栅格化模式时传递给 Row。

以上是 SchemaForm 表单中各字段的类型定义及其说明。

### SchemaForm 表单中字段的类型定义详解

SchemaForm 表单中的字段类型定义具体解释如下：

- `key` 字段：用于确定该列的唯一值，主要用于处理 dataIndex 重复的情况。
- `dataIndex` 字段：与实体进行映射的 key。如果是数组类型，则会转换为 `[a, b] => Entity.a.b` 的形式。
- `valueType` 字段：数据的渲染方式，内部已经提供了一些渲染方式，也可以自定义 valueType。
- `title` 字段：标题的内容，在表单中将作为 label。
- `tooltip` 字段：在标题旁边展示一个图标，鼠标悬停时会显示提示信息。
- `valueEnum` 字段：支持 object 和 Map 类型，Map 类型还可支持其他基础类型作为键。
- `fieldProps` 字段：传递给渲染组件的 props，自定义时也会传递该参数。
- `formItemProps` 字段：传递给 Form.Item 的配置。
- `formItemProps.rules` 字段：表单项的校验规则。需要注意的是，当当前表单项为 `formList` 时，此规则只校验列表是否为空，并且只接受元组 `[{required: boolean, message: string}]`，用于开启和关闭非空校验及指定空列表提示消息。
- `proFieldProps` 字段：设置到 ProField 的 props，是内部属性。
- `renderText` 字段：修改的数据将会被 valueType 定义的渲染组件消费。
- `render` 字段：自定义只读模式的 DOM 元素，`render` 方法只接管只读模式，编辑模式需要使用 `renderFormItem`。
- `renderFormItem` 字段：自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange。如果返回 false、null 或 undefined，则不会展示表单项。请使用 dependency 组件控制是否渲染列。
- `request` 字段：通过远程请求获取网络数据，通常用于选择类组件。
- `params` 字段：传递给 `request` 的额外参数，组件不会处理该参数，但参数变化会触发 `request` 重新请求数据。
- `dependencies` 字段：所依赖的 values 变化后，会触发 renderFormItem、fieldProps、formItemProps 的重新执行，并将 values 注入到 params 中。详见示例链接。
- `hideInDescriptions` 字段：在 descriptions 中隐藏。
- `hideInForm` 字段：在表单中隐藏。
- `hideInTable` 字段：在表格中隐藏。
- `hideInSearch` 字段：在查询表格中隐藏。
- `columns` 字段：嵌套子项，当 valueType 为 dependency 时，请使用 `(values) => ProFormColumnsType[]`，其他情况使用 `ProFormColumnsType[]`。
- `colProps` 字段：在开启 grid 模式时传递给 Col。
- `rowProps` 字段：在开启栅格化模式时传递给 Row。

以上是对 SchemaForm 表单中字段类型定义的详细解释。

### SchemaForm 表单中字段的类型定义示例

下面是一些在 SchemaForm 表单中使用的字段类型定义示例：

- `key: React.key`: 确定该列的唯一值，可用于处理 dataIndex 重复的情况。
- `valueType: ProFieldValueType`: 数据的渲染方式，内置了一些渲染方式，也可以自定义 valueType。
- `title: ReactNode`: 用于设置标题的内容，在表单中作为 label。
- `tooltip: string`: 在标题旁边展示一个图标，鼠标悬停时显示提示信息。
- `valueEnum: (Entity) => ValueEnum`: 支持 object 和 Map 类型，Map 类型还可支持其他基础类型作为键。
- `fieldProps: (form, config) => fieldProps`: 传递给渲染组件的 props，自定义时也会传递该参数。
- `formItemProps: (form, config) => formItemProps`: 传递给 Form.Item 的配置。
- `formItemProps.rules: Rule[]`: 表单项的校验规则。当当前表单项为 `

### schema 表单

"schema 表单" 是什么？如何使用它？有没有相关的示例代码可以参考？

### 浮层窗口

在前端开发中，"浮层窗口" 是一种常见的交互模式。请问如何在项目中实现浮层窗口功能？有没有示例代码可以展示？

### JSON 来生成分步表单

请问什么是 "JSON 来生成分步表单"？有没有相关的示例代码可以参考？

### 嵌入到 ProForm 中

如何将一个组件嵌入到 ProForm 中？有没有相关的示例代码可以提供？

### 使用 ProFormDependency

请问在前端开发中，如何使用 ProFormDependency？有没有示例代码可以参考？

### 结合 shouldUpdate=false 和 dependencies 触发更新

如何使用 shouldUpdate=false 和 dependencies 来触发更新？

### 动态控制是否重渲染

如何动态控制组件是否进行重渲染？

### required

如何使用 required 属性来标记表单项为必填项？
