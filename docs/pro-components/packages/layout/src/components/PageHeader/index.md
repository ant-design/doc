### 什么是页头（PageHeader）组件？

页头（PageHeader）组件位于页容器中，页容器的顶部，起到了内容概览和引导页级操作的作用。它包括了面包屑、标题、页面内容简介、页面级操作等元素，以及页面级导航组件。

### 页头的作用是什么？

页头的作用是提供页面的概览和引导，使用户能够快速了解页面的内容和可用的操作。通过显示面包屑、标题和简介，以及提供页面级别的操作按钮和导航，页头组件帮助用户更好地理解页面的结构和功能，并提供直接进入下一步操作的入口。

### 页头包含哪些元素？

页头包含以下几个元素：

- 面包屑：显示当前页面在网站或应用程序结构中的位置。
- 标题：页面的主要标题，用于描述页面的内容。
- 页面内容简介：对页面主要内容的简要描述或说明。
- 页面级操作：与页面内容相关的操作按钮，例如编辑、保存或分享。
- 页面级导航：链接到页面内其他部分的导航组件，例如标签页或侧边栏菜单。

通过组合这些元素，页头组件提供了一个整体的上部信息区域，以帮助用户快速了解页面内容和可用的操作选项。

### PageHeader 组件有哪些参数？

参数列表如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 标题栏旁的头像 | [AvatarProps](/components/avatar/) | - |  |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean | \<ArrowLeft /> |  |
| breadcrumb | 面包屑的配置 | [Breadcrumb](/components/breadcrumb/) | - |  |
| breadcrumbRender | 自定义面包屑区域的内容 | `(props, originBreadcrumb) => ReactNode` | - | 4.11.0 |
| extra | 操作区，位于 title 行的行尾 | ReactNode | - |  |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | ReactNode | - |  |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | true |  |
| subTitle | 自定义的二级标题文字 | ReactNode | - |  |
| tags | title 旁的 tag 列表 | [Tag](/components/tag/)\[] \| [Tag](/components/tag/) | - |  |
| title | 自定义标题文字 | ReactNode | - |  |
| onBack | 返回按钮的点击事件 | () => void | - |  |

### PageHeader 组件的 ghost 属性是干什么用的？

`ghost` 属性用于设置 PageHeader 的类型，将会改变背景颜色。默认值为 `true`。

### PageHeader 组件的 onBack 属性是什么？

`onBack` 属性为返回按钮的点击事件，即当用户点击返回按钮时触发的回调函数。
