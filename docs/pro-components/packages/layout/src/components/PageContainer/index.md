### PageContainer 组件的作用是什么？

PageContainer 组件是为了简化页面面包屑和标题的配置。它封装了 antd 的 PageHeader 组件，并增加了 tabList 和 content 属性。根据当前路由的信息，自动生成相应的标题和面包屑。除此之外，PageContainer 还支持 Tabs 和 PageHeader 组件的所有属性。

### PageContainer 组件的使用示例是什么？

以下是一个 PageContainer 组件的使用示例：

```tsx | pure
<PageContainer
  content="欢迎使用 ProLayout 组件"
  tabList={[
    {
      tab: "基本信息",
      key: "base",
    },
    {
      tab: "详细信息",
      key: "info",
    },
  ]}
  extra={[
    <Button key="3">操作</Button>,
    <Button key="2">操作</Button>,
    <Button key="1" type="primary">
      主操作
    </Button>,
  ]}
  footer={[
    <Button key="rest">重置</Button>,
    <Button key="submit" type="primary">
      提交
    </Button>,
  ]}
>
  {children}
</PageContainer>
```

在这个示例中，设置了 content、tabList、extra 和 footer 属性，用来自定义页面的内容和操作栏。具体配置可以根据实际需求进行调整。

### PageContainer 组件的参数有哪些？

PageContainer 组件支持以下参数：

- content：指定页面的内容。
- tabList：指定页面的标签页列表，每个标签页包括一个标签和对应的键值。
- extra：指定页面的附加操作，可以是一个按钮组件或其他操作组件。
- footer：指定页面的底部操作栏，可以是一个按钮组件或其他操作组件。

除了以上参数，PageContainer 还支持 Tabs 和 PageHeader 组件的所有其他属性。

注意：在使用 PageContainer 组件之前，需要先安装并导入 antd 和 react-router-dom 这两个库。

### PageContainer 是什么？

PageContainer 是一个封装了 ant design 的 PageHeader 组件的组件。它提供了额外的功能，如 tabList 和 content，并根据当前的路由填入 title 和 breadcrumb。PageContainer 支持 Tabs 和 PageHeader 的所有属性。

### PageContainer 支持哪些参数？

PageContainer 支持以下参数：

- content：内容区，类型为 ReactNode，默认值为 -。
- extraContent：额外内容区，位于 content 的右侧，类型为 ReactNode，默认值为 -。
- tabList：tab 标题列表，类型为 `{key: string, tab: ReactNode}[]`，默认值为 -。
- tabActiveKey：当前高亮的 tab 项，类型为 string，默认值为 -。
- onTabChange：切换面板的回调函数，类型为 `(key) => void`，默认值为 -。
- tabBarExtraContent：tab bar 上额外的元素，类型为 ReactNode，默认值为 -。
- header：PageHeader 的所有属性，类型为 PageHeaderProps，默认值为 -。
- ghost：配置头部区域的背景颜色为透明，类型为 boolean，默认值为 false。
- fixedHeader：固定 pageHeader 的内容到顶部，如果页面内容较少，最好不要使用，会有严重的遮挡问题，类型为 boolean，默认值为 -。
- affixProps：固钉的配置，与 antd 完全相同，类型为 AffixProps，默认值为 -。
- footer：悬浮在底部的操作栏，传入一个数组，会自动加空格，类型为 ReactNode[]，默认值为 -。
- waterMarkProps：配置水印，Layout 会透传给 PageContainer，但是以 PageContainer 的配置优先，类型为 WaterMarkProps，默认值为 -。
- tabProps：Tabs 的相关属性，只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭，类型为 TabsProps，默认值为 -。

### 如何使用 fixedHeader？

如果要使用 fixedHeader 功能，可以设置 fixedHeader 参数为 true。需要注意的是，默认情况下，fixedHeader 监听的是 body，如果页面的滚动条不是在 body 上，需要参考 ant design 的 Affix 文档进行相应的设置。

详细的 API 信息可以参考 ant design 的 [官方文档](https://ant.design/components/page-container-cn/)。

### FooterToolbar 组件的参数说明

| 参数     | 说明                            | 类型                       | 默认值 |
| -------- | ------------------------------- | -------------------------- | ------ |
| extra    | 额外内容区，位于 content 的右侧 | `ReactNode`                | -      |
| children | 内容区域                        | `ReactNode`\|`ReactNode[]` | -      |

**extra 参数说明：**
额外内容区，位于 content 的右侧。类型为 `ReactNode`。

**children 参数说明：**
内容区域。类型可以是 `ReactNode` 或 `ReactNode[]`。

### 如何使用 FooterToolbar 组件

示例代码：

```tsx
<FooterToolbar
  style={{
    left: 208,
    width: `calc(100% - 208px)`,
  }}
>
  <Button>提交</Button>
</FooterToolbar>
```

通过以上示例代码，可以实现在 layout 中自动控制浮动，避免挡住菜单。如果没有使用 ProLayout，可以通过 style 来自定义宽度和浮动。

### ProBreadcrumb 如何配置？

ProBreadcrumb 是一个面包屑组件，它可以通过配置自动根据路由来计算面包屑。在使用 ProBreadcrumb 之前，必须在 ProLayout 组件中启用该功能。下面是一个配置示例：

```tsx | pure
import { ProBreadcrumb, ProLayout } from "@ant-design/pro-components";

return (props) => (
  <ProLayout
    {...props}
    // 将面包屑显示在顶部
    headerContentRender={() => {
      return <ProBreadcrumb />;
    }}
  />
);
```

在这个示例中，ProLayout 组件的 `headerContentRender` 属性指定了一个回调函数，函数返回一个 `<ProBreadcrumb />` 组件实例，从而在顶部显示面包屑导航。

### ProBreadcrumb 如何自动计算面包屑？

ProBreadcrumb 组件可以根据路由自动计算面包屑导航。通过配置 ProLayout 组件的 `headerContentRender` 属性，可以将面包屑组件显示在顶部。在 ProLayout 组件中使用 ProBreadcrumb 组件示例：

```tsx | pure
import { ProBreadcrumb, ProLayout } from "@ant-design/pro-components";

return (props) => (
  <ProLayout
    {...props}
    // 将面包屑显示在顶部
    headerContentRender={() => {
      return <ProBreadcrumb />;
    }}
  />
);
```

在这个示例中，ProBreadcrumb 组件会根据路由自动计算面包屑导航，然后在 ProLayout 组件的顶部显示出来。

### 如何在 ProLayout 组件中使用 ProBreadcrumb？

ProBreadcrumb 组件必须在 ProLayout 组件中使用。要在 ProLayout 组件中使用 ProBreadcrumb 组件，需要配置 ProLayout 组件的 `headerContentRender` 属性。示例如下：

```tsx | pure
import { ProBreadcrumb, ProLayout } from "@ant-design/pro-components";

return (props) => (
  <ProLayout
    {...props}
    // 将面包屑显示在顶部
    headerContentRender={() => {
      return <ProBreadcrumb />;
    }}
  />
);
```

在这个示例中，ProLayout 组件的 `headerContentRender` 属性被配置为一个回调函数，该函数返回一个 `<ProBreadcrumb />` 组件实例。这样就可以在 ProLayout 组件中使用 ProBreadcrumb 组件，并将面包屑显示在顶部。
