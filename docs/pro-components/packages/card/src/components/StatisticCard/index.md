### StatisticCard 指标卡是用来展示某主题的核心指标的吗？

是的，StatisticCard 指标卡结合统计数值用于展示某主题的核心指标。

### StatisticCard 指标卡可以使用 Ant Design Charts 图表库吗？

是的，StatisticCard 指标卡可以结合 [Ant Design Charts](https://charts.ant.design/) 图表库丰富数值内容，以满足大多数数值展示的场景。

### StatisticCard 指标卡中的内容有没有具体的宽度要求？

如果有内容撑开卡片的情况，请设置内容宽度为 100% 或设置定宽。这样可以保证内容与卡片宽度相匹配，使整体展示效果更为美观。

### 如何将图表放在数值统计的右边？

你可以通过配置 `chartPlacement` 的值为 `right` 来将图表放在数值统计的右边。默认情况下，图表会在上下结构中显示。

```tsx
<YourComponent chartPlacement="right" />
```

### 在 Ant Design 中如何将图表放在右侧？

在 Ant Design 中，你可以使用 `chartPlacement` 属性将图表放在数值统计的右侧。将 `chartPlacement` 设置为 `right` 即可实现这个效果。默认情况下，图表将会以上下结构显示。

```tsx
<YourComponent chartPlacement="right" />
```

### 怎样在 Ant Design 中实现图表在右侧显示？

要在 Ant Design 中实现图表在右侧显示，你需要使用 `chartPlacement` 属性，并将其值设置为 `right`。这样，图表将会被放置在数值统计的右侧。默认情况下，图表会以上下结构展示。

```tsx
<YourComponent chartPlacement="right" />
```

### StatisticCard 如何将图表放在数值统计的左边？

你可以通过配置 `chartPlacement`，将图表放在数值统计的左边。具体的代码示例如下：

```tsx
<YourComponent chartPlacement="left" />
```

在上面的代码中，你只需要将 `YourComponent` 替换为你实际使用的组件即可。

### StatisticCard 怎样配置 `chartPlacement` 为 `left`？

如果你希望将图表放在数值统计的左边，你可以通过设置 `chartPlacement` 的值为 `left` 来实现。下面的示例代码展示了如何进行配置：

```tsx
<YourComponent chartPlacement="left" />
```

请将上述示例中的 `YourComponent` 替换为你需要使用的组件。

### 在数值统计中，如何将图表放在左侧？

你可以通过将 `chartPlacement` 属性的值设置为 `left` 来将图表放在数值统计的左侧。以下是一段示例代码：

```tsx
<YourComponent chartPlacement="left" />
```

请将上述示例中的 `YourComponent` 替换为你实际使用的组件。

### StatisticCard 如何使用 Ant Design 的 Statistic 组件展示环比趋势？

你可以使用 Ant Design 的 Statistic 组件来展示环比趋势。具体步骤如下：

1. 在组件中引入 Statistic 组件：`import { Statistic } from 'antd';`

2. 在布局中将 layout 设置为`inline`，将 trend 设置为展示环比趋势：`<Statistic layout="inline" trend value="xxx" />`

其中，`value`属性可以传入具体的数值，代表环比的百分比。

### StatisticCard 如何在 Ant Design 中配置 Statistic 组件的布局和样式？

你可以使用 Ant Design 的 Statistic 组件来配置布局和样式。具体步骤如下：

1. 在组件中引入 Statistic 组件：`import { Statistic } from 'antd';`

2. 在布局中通过设置`layout`属性来配置 Statistic 组件的布局方式。例如，将 layout 设置为`inline`可以使组件以行内形式展示。

3. 通过设置其他相关属性来自定义 Statistc 组件的样式，例如，设置`prefix`和`suffix`属性可以在数值前后添加前缀和后缀。

### StatisticCard Ant Design 的 Statistic 组件如何展示旧值与新值的环比趋势？

Ant Design 的 Statistic 组件可以通过配置`trend`属性来展示旧值与新值的环比趋势。具体步骤如下：

1. 在布局中，将`trend`属性设置为需要展示的环比趋势的数值。例如，将`trend`属性设置为`-5%`表示环比下降了 5%。

通过这样的配置，可以使 Statistic 组件在展示数值的同时展示旧值与新值的环比趋势。

### StatisticCard 组件参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string\|ReactNode` | - |
| extra | 卡片右上角的操作区域 | `string\|ReactNode` | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| chart | 图表卡片 | ReactNode | - |
| statistic | 数值统计配置，布局默认为 `vertical` | 参数见下 Statistic | - |
| chartPlacement | 图表位置，相对于 statistic 的位置 | `left \| right \| bottom` | - |
| footer | 额外指标展示 | `ReactNode` | - |

更多参考 `ProCard`，支持 `ProCard` 的所有 API。

### StatisticCard 组件使用示例

```jsx
import { StatisticCard } from 'antd';

const App = () => {
  return (
    <StatisticCard
      title="访问量"
      extra={<span>指标说明</span>}
      loading={false}
      bordered={true}
      chart={<BarChart data={data} />}
      statistic={{
        value: 12345,
        suffix: '次',
        precision: 2,
      }}
      chartPlacement="right"
      footer={<div>额外指标</div>}
    />
  );
};
```

### StatisticCard 组件详细说明

`StatisticCard` 是一个统计卡片组件，用于展示带有统计数值和图标的卡片。

#### 参数说明

- `title`：卡片标题，可以是字符串或 ReactNode。例如，`"访问量"` 或 `<span>访问量</span>`。
- `extra`：卡片右上角的操作区域，可以是字符串或 ReactNode。例如，`"指标说明"` 或 `<span>指标说明</span>`。
- `loading`：当卡片内容还在加载中时，可以用 loading 展示一个占位。默认为 `false`。
- `bordered`：是否有边框。默认为 `true`。
- `chart`：图表卡片，可以是任意的 ReactNode，用于展示图表等内容。
- `statistic`：数值统计配置，包括以下参数：
  - `value`：显示的数值。
  - `suffix`：数值的后缀。
  - `precision`：数值的精度。
- `chartPlacement`：图表位置，相对于 statistic 的位置。可选值有 `left`，`right`，`bottom`。
- `footer`：额外指标展示，可以是任意的 ReactNode。用于展示额外的指标信息。

#### 示例

```jsx
<StatisticCard
  title="访问量"
  extra={<span>指标说明</span>}
  loading={false}
  bordered={true}
  chart={<BarChart data={data} />}
  statistic={{
    value: 12345,
    suffix: '次',
    precision: 2,
  }}
  chartPlacement="right"
  footer={<div>额外指标</div>}
/>
```

以上是一个使用 `StatisticCard` 组件的示例，展示了一个带有标题、图表和数值统计的统计卡片。其中，`title` 展示了卡片的标题为 "访问量"，`extra` 展示了卡片右上角的操作区域为 "指标说明"，`loading` 展示了卡片内容不在加载中，`bordered` 展示了卡片有边框，`chart` 展示了一个柱状图，`statistic` 展示了数值统计的配置，`chartPlacement` 展示了图表位于 statistic 的右边，`footer` 展示了额外的指标信息。

### Statistic 组件的参数 `prefix` 是用来设置数值的前缀的，可以接受一个字符串或者 ReactNode 类型的值。默认值是无。你可以使用这个参数来给数值增加一个前缀，比如加上货币符号或者单位。

### Statistic 组件的参数 `suffix` 是用来设置数值的后缀的，可以接受一个字符串或者 ReactNode 类型的值。默认值是无。你可以使用这个参数来给数值增加一个后缀，比如加上百分号或者时间单位。

### Statistic 组件的参数 `title` 是数值的标题，可以接受一个字符串或者 ReactNode 类型的值。默认值是无。你可以使用这个参数来给数值增加一个标题，用于描述数值的含义。

### Statistic 组件的参数 `tip` 是标题的提示，可以接受一个字符串或者 ReactNode 类型的值。默认值是无。你可以使用这个参数来给标题增加一个提示，用于提供更多的信息或者解释。

### Statistic 组件的参数 `value` 是数值的内容，可以接受一个字符串或者数字类型的值。默认值是无。你可以通过这个参数来设置数值的具体数值。

### Statistic 组件的参数 `icon` 是用来设置数值前面的图标的，可以接受一个 ReactNode 类型的值。默认值是无。你可以使用这个参数来给数值增加一个图标，用于提升显示效果。

### Statistic 组件的参数 `status` 是设置状态点的，同 Badge 组件。可以接受的值包括：'success'、'processing'、'default'、'error'、'warning'。默认值是无。你可以使用这个参数来显示数值的状态，比如成功、进行中、错误等。

### Statistic 组件的参数 `valueStyle` 是用来设置数值的样式的，可以接受一个 style 对象。默认值是无。你可以使用这个参数来自定义数值的样式，比如修改颜色、字体大小等。

### Statistic 组件的参数 `description` 是描述性标签，可以接受一个字符串、ReactNode 类型的值，或者一个返回 ReactNode 的函数。默认值是无。你可以使用这个参数来增加数值的描述，用于提供额外的信息或者解释。

### Statistic 组件的参数 `layout` 是布局方式，可以接受以下值：'horizontal'、'vertical'、'inline'。默认值是'inline'。你可以使用这个参数来控制数值和标题的排列方式，比如横向排列还是竖向排列。

### Statistic 组件的参数 `trend` 是趋势，可以接受以下值：'up'、'down'。默认值是无。你可以使用这个参数来表示数值的趋势，比如增长或者下降的方向。

### Divider 组件有哪些参数和说明？

Divider 组件有一个参数和说明：type 用于指定分隔类型，可以是水平分隔线（horizontal）或垂直分隔线（vertical）。默认值为无。

### Divider 组件的类型有哪些？

Divider 组件的类型有两种：水平分隔线（horizontal）和垂直分隔线（vertical）。

### Divider 组件的默认值是什么？

Divider 组件的默认值是无。
