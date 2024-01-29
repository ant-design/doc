### ProComponents 是基于什么开发的？

ProComponents 是基于 Ant Design 而开发的模板组件。

### ProComponents 提供了哪些组件？

ProComponents 提供以下组件：

- ProLayout 解决布局的问题，提供开箱即用的菜单和面包屑功能
- ProTable 表格模板组件，抽象网络请求和表格格式化
- ProForm 表单模板组件，预设常见布局和行为
- ProCard 提供卡片切分和栅格布局能力
- ProDescriptions 定义列表模板组件，ProTable 的配套组件
- ProSkeleton 页面级别的骨架屏

### ProComponents 适用于哪些场景？

ProComponents 适用于中后台的 CRUD，预设了丰富的样式和行为。如果你的业务需要丰富的自定义，建议直接使用 Ant Design。在使用 ProComponents 之前，可以查看典型的 Demo 来判断组件是否适合你们的业务。

### 如何安装 ProComponents？

你可以通过以下步骤来安装 ProComponents：

1. 打开命令行工具，进入你的项目目录。
2. 运行以下命令来安装 ProComponents 的 npm 包：

```shell
npm i @ant-design/pro-components --save
```

这样就成功安装了 ProComponents。

### ProComponents 提供了哪些组件？

ProComponents 提供了多个可直接使用的组件。你可以通过运行以下命令来安装这些组件：

```shell
npm i @ant-design/pro-components --save
```

安装完成后，你就可以在你的项目中直接使用这些组件了。

请注意，如果你只需要使用部分组件，可以根据自己的需求进行选择安装。

### 在项目中如何使用 ProForm 组件？

在项目中使用 ProForm 组件时，首先需要将该组件引入到项目中，示例如下：

```jsx
import React from 'react';
import { ProForm } from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      {/* 其他表单项 */}
    </ProForm>
  );
};
```

在上述示例代码中，我们将 ProForm 组件引入到项目中，并通过 onFinish 函数来处理表单提交事件。你可以根据项目的需求添加/修改表单项，并在 onFinish 函数中处理表单数据。

记得在项目中安装 `@ant-design/pro-components` 包。

### 如何使用 ProFormText 组件？

ProFormText 是 ProForm 组件的子组件，用于创建文本输入框表单项。要使用 ProFormText 组件，需要先将其引入到项目中，示例如下：

```jsx
import React from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
      {/* 其他表单项 */}
    </ProForm>
  );
};
```

在上述示例代码中，我们在 ProForm 组件内部使用了 ProFormText 组件来创建一个姓名输入框表单项。在 ProFormText 组件中，我们需要设置 name 属性来指定表单项的字段名，label 属性用于设置表单项的标签显示文本。

### 如何处理 ProForm 组件的表单提交？

在使用 ProForm 组件时，我们可以通过 onFinish 函数来处理表单的提交事件。示例代码如下：

```jsx
import React from 'react';
import { ProForm, ProFormText } from '@ant-design/pro-components';

export default () => {
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
        // 在这里可以进行表单数据的提交处理
      }}
    >
      {/* 表单项 */}
    </ProForm>
  );
};
```

在上述示例代码中，我们在 ProForm 组件的 onFinish 函数中获取到了表单的值(values)，你可以在这个函数中对表单数据进行处理，比如提交到服务器或者进行其他操作。

记得在项目中安装 `@ant-design/pro-components` 包。
