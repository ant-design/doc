### ProCard 是什么？

ProCard 是一个高级卡片组件，用于提供标准卡片样式以及卡片切分和栅格布局的能力。它结合了 `Col`、`Row`、`Card`、`Tabs` 等组件的功能，使你能够使用一个组件完成各种卡片布局。

### ProCard 如何和图表一起使用？

如果你需要将图表与 ProCard 结合使用，可以参考 `StatisticCard` 组件，它进一步封装了 ProCard，并提供了与图表交互的能力。

### 如何封装一个 ProCard 组件？

如果你想要封装一个自定义的 ProCard 组件，请确保在组件中透出 `isProCard=true` 的静态属性，以便让 ProCard 识别为同一种元素。这样可以保证你的组件与 ProCard 一致，在使用时能够达到一致的样式和布局效果。

### 基础卡片的使用方法是什么？

当单独使用时，`ProCard` 是一个普通的卡片组件。

### 栅格布局的配置属性有哪些？

嵌套子卡片时，组件会自动切换为 `flex` 弹性盒布局。可以通过设置 `direction` 属性为 `column` 来指定 Flex 方向。还可以通过配置 `ghost` 属性为 `true` 来去除背景色和 padding 实现页内布局。

### 响应式布局需要如何配置？

`colSpan` 属性支持 Ant Design 定义的栅格式响应布局。预设了六个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`、`xxl`。如果要支持响应式布局，可以写成 `{ xs: 4, sm: 8, md: 10, lg: 12 }` 的形式。

### 如何通过配置 `split` 实现卡片的切分？

在布局模式下，我们可以通过配置 `split` 来实现卡片的切分。这个属性可以让我们方便地进行任意的分栏，无论是横向切分还是纵向切分都非常简便。切分出来的分栏会继续保持卡片的特性，并且高度会自动撑满。需要注意的是：

- 切分时父卡片的内容 `padding` 会被设置为 0。
- 切分时子卡片的 `border-radius` 会被设置为 0。

可以参考以下示例代码：

```tsx
<code src="../demos/split2.tsx" background="var(--main-bg-color)"></code>
```

### 切分卡片时，父卡片和子卡片的样式会有什么变化？

在切分卡片时，有一些样式会发生变化，下面是一些需要注意的地方：

- 父卡片的内容 `padding` 会被设置为 0。
- 子卡片的 `border-radius` 会被设置为 0。

这样做是为了保持切分后的分栏仍然具有卡片的特性，并且能够自动撑满高度。如果需要使用这个特性，可以参考以下示例代码：

```tsx
<code src="../demos/split2.tsx" background="var(--main-bg-color)"></code>
```

### 如何设置切分卡片的分栏布局？

要设置切分卡片的分栏布局，可以通过配置 `split` 来实现。使用 `split` 后，你可以任意切分卡片，无论是横向切分还是纵向切分都非常简便。切分出来的分栏仍然保持卡片的特性，并且高度会自动撑满。需要注意的是：

- 切分时父卡片的内容 `padding` 会被设置为 0。
- 切分时子卡片的 `border-radius` 会被设置为 0。

以下是一个示例代码，供你参考：

```tsx
<code src="../demos/split2.tsx" background="var(--main-bg-color)"></code>
```

希望以上信息对你有帮助！

### 栅格间隔的推荐设置是什么？

栅格间隔的推荐设置是 `(16+8n)px`，其中 n 是自然数。如果需要支持响应式，可以使用对象形式 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

### 如何设置栅格的垂直间距？

要设置栅格的垂直间距，可以使用数组形式 `[水平间距, 垂直间距]`，其中水平间距和垂直间距可以是像素值或对象形式 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

### 如何实现栅格间隔的效果？

要实现栅格间隔的效果，可以使用 `gutter` 属性来设置栅格的间隔。通过设置合适的间隔值，可以在栅格中添加水平和垂直间距。推荐的间隔设置是 `(16+8n)px` 或对象形式 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

### 默认卡片布局是不可以换行的吗？

是的，默认情况下，卡片布局不可换行。这意味着多个卡片会在同一行显示，适用于单行排版的情况。

### 如何实现多行卡片布局？

要实现多行卡片布局，你可以将 `wrap` 属性设置为 `true`。这样，多个卡片之间可以自动换行，从而适用于多行排版的情况。

### 有什么例子可以参考吗？

以下是一个示例代码，展示了如何实现多行卡片布局：

```tsx
import { Card } from 'antd';

<Card wrap={true}>
  <Card>{/* 卡片内容 */}</Card>
  <Card>{/* 卡片内容 */}</Card>
  {/* 更多卡片... */}
</Card>;
```

你可以根据实际需求添加更多的卡片。

### 如何配置卡片是否可折叠？

你可以使用 `collapsible` 来配置卡片是否可折叠。

```jsx
<YourComponent collapsible />
```

### 如何设置卡片默认折叠？

你可以使用 `defaultCollapsed` 属性来设置卡片是否默认折叠。

```jsx
<YourComponent collapsible defaultCollapsed />
```

### 如何自定义控制卡片折叠？

你可以使用 `collapsed` 属性来进行自定义控制卡片折叠。

```jsx
const [collapsed, setCollapsed] = useState(false);

<YourComponent collapsible collapsed={collapsed} onCollapse={setCollapsed} />;
```

### 如何将内容垂直居中？

要将内容垂直居中，你可以使用 `layout` 属性，并将其值设置为 `center`。这会将内容部分转为使用 `flex` 布局，并在垂直方向上居中内容。

示例代码如下：

```tsx
<code src="../demos/layout.tsx" background="var(--main-bg-color)"></code>
```

你可以在该示例代码中修改 `layout` 属性的值来观察不同的效果。

### 如何控制内容部分的布局方向？

要控制内容部分的布局方向，你可以使用 `direction` 属性。通过设置 `direction` 的值，你可以指定 `flex` 布局的方向。

示例代码如下：

```tsx
<code src="../demos/layout.tsx" background="var(--main-bg-color)"></code>
```

在示例代码中，你可以修改 `direction` 属性的值，来定义不同的布局方向。

### 如何使用加载中的卡片？

加载中的卡片可以通过配置`loading`属性为`true`来实现。此外，还可以通过传入自定义的 DOM 给`loading`来展示不同的加载中状态。

```jsx
import React from 'react';
import { Card } from 'antd';

const Demo = () => {
  return <Card loading={true}>{/* 卡片内容 */}</Card>;
};

export default Demo;
```

### 如何自定义加载中状态的展示？

要自定义加载中状态的展示，可以传入一个 DOM 元素给`loading`属性。在该 DOM 元素中，可以自定义加载中时的展示样式和内容。

```jsx
import React from 'react';
import { Card, Spin } from 'antd';

const Demo = () => {
  return <Card loading={<Spin />}>{/* 卡片内容 */}</Card>;
};

export default Demo;
```

### 加载中的卡片有什么特点？

加载中的卡片在数据加载完成之前显示一个加载中的状态，可以提升用户体验。可以通过设置`loading`属性来控制卡片的加载状态，同时还可以通过传入自定义的 DOM 元素给`loading`属性来展示不同的加载中状态。

### 如何使用 `bordered` 属性控制卡片是否带边框？

要控制卡片是否带边框，可以使用 `bordered` 属性。通过给 `bordered` 属性传入 `true` 或 `false` 来控制：

```jsx
<Card bordered={true}>带边框的卡片</Card>
<Card bordered={false}>无边框的卡片</Card>
```

### 如何通过 `hoverable` 配置浮出效果？

要给卡片配置浮出效果，可以使用 `hoverable` 属性。将 `hoverable` 属性设置为 `true` 即可：

```jsx
<Card hoverable={true}>浮出效果的卡片</Card>
```

### 如何在卡片的背景中使用自定义颜色？

要在卡片的背景中使用自定义颜色，可以通过在代码中设置 `background` 属性来实现：

```jsx
<Card style={{ background: 'var(--main-bg-color)' }}>自定义背景颜色的卡片</Card>
```

以上是关于在 Ant Design 中使用卡片组件的边框、浮出效果以及自定义背景颜色的一些常见问题的解答。

### ProCard 的标题有哪些参数？

| 参数      | 说明                        | 类型              | 默认值 | 版本 |
| --------- | --------------------------- | ----------------- | ------ | ---- |
| title     | 标题                        | `React.ReactNode` | -      |      |
| subTitle  | 副标题                      | `React.ReactNode` | -      |      |
| tooltip   | 标题右侧图标 hover 提示信息 | `string`          | -      |      |
| headStyle | 标题的 style 样式           | `CSSProperties`   | -      |      |

### 问题 2：ProCard 的内容区有哪些参数？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bodyStyle | 内容区的 style 样式 | `CSSProperties` | - |  |
| extra | 右上角自定义区域 | `React.ReactNode` | - |  |
| layout | 内容布局，支持垂直居中 | `default` \| `center` | default |  |
| loading | 加载中，支持自定义 loading 样式 | `boolean` \| `ReactNode` | false |  |
| colSpan | 栅格布局宽度，24 栅格，支持指定宽度 px 或百分比，支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`, 仅在嵌套的子卡片上设置有效。 | `number` \| `string` | 24 |  |
| gutter | 数字或使用数组形式同时设置 [水平间距，垂直间距], 支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number` \| `array` | 0 |  |
| split | 拆分卡片的方向 | `vertical` \| `horizontal` | - |  |
| type | 卡片类型 | `inner` \| `default` | - |  |
| size | 卡片尺寸 | `default` \| `small` | - |  |

###ProCard 的操作组有哪些参数？

| 参数    | 说明                       | 类型               | 默认值 | 版本 |
| ------- | -------------------------- | ------------------ | ------ | ---- |
| actions | 卡片操作组，位置在卡片底部 | `Array<ReactNode>` | -      |      |

### 问题 4：ProCard 的折叠和收起有哪些参数？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsed | 受控属性，是否折叠 | `boolean` | false |  |
| collapsible | 配置是否可折叠，受控时无效 | `boolean` | false |  |
| collapsibleIconRender | 替换默认折叠图标 | `({ collapsed }: { collapsed: boolean }) => React.ReactNode` | - |  |
| defaultCollapsed | 默认折叠，受控时无效 | `boolean` | false |  |
| onCollapse | 收起卡片的事件，受控时无效 | `(collapsed: boolean) => void` | - |  |

### 问题 5：ProCard 的其他参数有哪些？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colSpan | 栅格布局宽度，24 栅格，支持指定宽度 px 或百分比，支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`, 仅在嵌套的子卡片上设置有效。 | `number` \| `string` | 24 |  |
| gutter | 数字或使用数组形式同时设置 [水平间距，垂直间距], 支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number` \| `array` | 0 |  |
| wrap | 是否支持换行，仅在嵌套子卡片时有效 | false | - | 1.12.0 |
| bordered | 是否有边框 | `boolean` | false |  |
| ghost | 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。 | `boolean` | false |  |
| headerBordered | 页头是否有分割线 | `boolean` | false |  |
| direction | 指定 Flex 方向，仅在嵌套子卡片时有效，默认方向为 row 横向 | `column` | - |  |
| tabs | 标签页配置 | 见下面 ProCardTabs | - |  |

### 问题 ProCardTabs 的 activeKey 参数是什么作用？

activeKey 参数用于指定当前选中的页签项。通过设置 activeKey 的值，可以控制默认选中哪个页签。

### 问题 ProCardTabs 的 type 参数有哪些可选值？

ProCardTabs 的 type 参数可以设置为以下三种取值：`line`、`card`、`editable-card`。其中，`line` 表示页签以线条形式展示，`card` 表示页签以卡片形式展示，`editable-card` 表示页签以可编辑卡片形式展示。

### 问题 ProCardTabs 的 items 参数是什么类型？

ProCardTabs 的 items 参数是基于 antd 拓展的页签的基本配置，必填项。具体的配置类型需要参考 antd 中的 Tab 组件的 API 描述。

### ItemsProps 参数说明

ItemsProps 是一个用于支持 Tabs 下页签的属性对象。

#### 参数列表

| 参数      | 说明                 | 类型      | 默认值 |
| :-------- | :------------------- | :-------- | :----- |
| cardProps | ProCard 卡片属性透传 | `ProCard` | -      |

#### 参数说明

- `cardProps`：ProCard 卡片属性透传，类型为 `ProCard`，默认值为 `-`。

### ItemsProps 使用示例

```jsx
import { Tabs, ProCard } from 'antd';

const { TabPane } = Tabs;

<Tabs>
  <TabPane tab="Tab 1" key="1">
    <ProCard title="Card 1" cardProps={...}>
      ...
    </ProCard>
  </TabPane>
  <TabPane tab="Tab 2" key="2">
    <ProCard title="Card 2" cardProps={...}>
      ...
    </ProCard>
  </TabPane>
  ...
</Tabs>
```

在上述示例中，我们通过使用 `ItemsProps` 的 `cardProps` 属性透传给了 `ProCard` 组件，实现了对卡片的属性配置。您可以根据需求自行设置 `cardProps` 的值以达到定制化效果。

### ItemsProps 的默认值

在使用 `ItemsProps` 时，默认情况下，如果未设置 `cardProps` 属性，则其默认值为 `-`。您可以根据实际需求进行配置。

### ProCard.TabPane 的参数 key 的作用是什么？

参数 key 对应 activeKey，用于标定是否选中和 dom 更新。在使用 ProCard.TabPane 组件时，需要为每个 TabPane 设置一个唯一的 key 值，确保不重复，否则会导致表现异常。

### ProCard.TabPane 的参数 tab 是用来显示什么内容的？

参数 tab 是用来显示选项卡头的文字内容。你可以传入一个 ReactNode 对象，可以是文本、图标或其他自定义的组件。

### 如何设置 ProCard.TabPane 组件为不可用状态？

可以通过参数 disabled 来设置 ProCard.TabPane 组件为不可用状态。将 disabled 设置为 true，即可禁用该选项卡。

### ProCard.TabPane 的参数 cardProps 是什么作用？

参数 cardProps 是用来透传 ProCard 组件的属性。你可以将一些 ProCard 组件的属性配置传递给 cardProps，从而影响 TabPane 内部的卡片样式和行为。

### ProCard.Divider 是用来做什么的？

ProCard.Divider 是用于在将内容进行分组时进行分隔的一个组件。

### ProCard.Divider 有哪些参数？

ProCard.Divider 组件有以下参数：

- type：分隔类型，可以是水平分隔或垂直分隔。取值可以是`horizontal`或`vertical`。

### ProCard.Divider 的默认值是什么？

ProCard.Divider 组件的默认值是没有设定默认值。

### 什么是 ProCard.Divider？

ProCard.Divider 是一个用于在将内容进行分组时进行分隔的组件。

### ProCard.Divider 有哪些可选参数？

ProCard.Divider 组件有以下可选参数：

- type：分隔类型，可以选择水平分隔或垂直分隔。可选的取值有`horizontal`和`vertical`。

### ProCard.Divider 的默认类型是什么？

ProCard.Divider 组件的默认类型是没有设定默认值。

### ProCard.Divider 的作用是什么？

ProCard.Divider 的作用是在将内容进行分组时进行分隔。

### ProCard.Divider 有哪些参数可以设置？

ProCard.Divider 的参数包括：

- type：分隔类型，可以是水平分隔或垂直分隔。可选的取值有`horizontal`和`vertical`。

### ProCard.Divider 的默认值是什么？

ProCard.Divider 的默认值是没有设定默认值。
