### Ant Design Charts 安装

您可以使用以下命令安装完整的 Ant Design Charts 包：

```bash
pnpm install @ant-design/charts
```

或者，如果您只需要使用特定的子包，可以只引入该子包，例如：

```bash
# 安装柱状图子包
pnpm install @ant-design/charts-bar
```

### 如何安装统计图表包

1. 使用 pnpm 安装 `@ant-design/plots` 统计图表包：

```tsx
   pnpm install @ant-design/plots
```

### 如何制作曲线图

要制作曲线图，可以按照以下步骤操作：

1. 引入统计图表包 `@ant-design/plots`。

```bash
pnpm install @ant-design/plots
```

2. 编写获取数据的代码，并保存在 `data` 变量中。

```tsx
import { useState, useEffect } from "react";

const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json",
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
};
```

在这个示例中，使用 `fetch` 方法获取数据，并将 JSON 对象保存在 `data` 变量中。

3. 将数据展示在曲线图上。

```tsx
import React from "react";
import { Line } from "@ant-design/plots";

const DemoLine: React.FC = () => {
  // 获取数据的代码

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  };

  return <Line {...config} />;
};
```

在这个示例中，创建了一个 `Line` 组件，并传入了配置项，其中 `data` 属性表示数据源，`xField` 表示横坐标字段，`yField` 表示纵坐标字段，`xAxis` 表示横坐标配置，`smooth` 表示是否使用平滑曲线。

通过以上步骤，就可以获取数据并将其展示在曲线图上了。完整的示例代码和效果可参考[此页面](https://charts.ant.design/zh/examples/line/basic#spline)。

请注意，上述代码中的 `fetch` 方法用于获取数据，你可以根据实际情况使用适合的方式获取数据。另外，曲线图的配置项还可以根据需要进行调整。

### Ant Design Chart 的柱状图配置详解

柱状图是一种常用的数据可视化图表类型。Ant Design 提供了几种配置项来定制柱状图的样式和行为。

以下是柱状图的常用配置项：

- `data`：柱状图的数据源，包含每个柱子的类型和值。
- `xField`：柱子的类型字段。
- `yField`：柱子的值字段。
- `seriesField`：柱子的系列字段，用于区分不同系列的柱子。
- `color`：自定义柱子的颜色，可以根据类型字段的值来决定颜色。
- `legend`：是否显示图例。
- `xAxis`：x 轴的配置项，可以设置标签的显示方式。

在柱状图的配置中，可以通过返回不同类型字段的颜色来实现对某一类型的柱子进行标注。例如，可以使用鲜明的颜色来标注值为“5+ 秒”的柱子。

### Ant Design Chart 的柱状图使用示例

可以参考[此页面](https://charts.ant.design/zh/examples/column/basic#color)了解更多详细的柱状图使用示例。

以上是关于 Ant Design Chart 柱状图的配置和使用方法的介绍。

### 散点地图示例

以下为一个示例，展示了如何使用 Ant Design Maps 来创建散点地图。

首先，需要引入地图包：

```bash
pnpm install @ant-design/maps
```

然后，获取包含所有区县数据的 [data](https://gw.alipayobjects.com/os/antfincdn/g5hIthhKlr/quanguoshixianweizhi.json)。数据格式如下：

```json
{
  "list": [
    {
      "lnglat": [116.258446, 37.686622],
      "name": "景县",
      "style": 2
    }
    // ...
  ]
}
```

其中，`style` 为 `0` 表示地级市，`1` 表示县城，`2` 表示区县。

然后，可以使用以下代码来渲染数据，创建散点地图：

```tsx
import React from "react";
import { DotMap } from "@ant-design/maps";

const DemoDotMap: React.FC = () => {
  // fetch data

  const config = {
    map: {
      type: "mapbox",
      style: "dark",
      zoom: 3,
      center: [107.4976, 32.1697],
      pitch: 0,
    },
    source: {
      data,
      parser: {
        type: "json",
        coordinates: "lnglat",
      },
    },
    size: 4,
    color: {
      field: "style",
      value: ({ style }) => {
        if (style == 0) {
          return "#14B4C9";
        } else if (style == 1) {
          return "#3771D9";
        } else {
          return "#B8EFE2";
        }
      },
    },
    legend: {
      type: "category",
      position: "bottomleft",
      items: [
        {
          color: "#14B4C9",
          value: "地级市",
        },
        {
          color: "#3771D9",
          value: "县城市",
        },
        {
          color: "#B8EFE2",
          value: "区县",
        },
      ],
    },
  };

  return <DotMap {...config} />;
};
```

以上代码创建了一个散点地图，并设置了地图的类型、样式、缩放级别、中心点等信息。同时，还设置了数据源和解析规则，并定义了散点的大小和颜色，以及图例的位置和内容。

你可以在[此页面](https://charts.ant.design/zh/examples/map-dot/map-scatter#distribution-cities)查看完整的散点地图代码和效果。

### 如何获取包含所有区县数据的 JSON 文件

要获取包含所有区县数据的 JSON 文件，你可以使用以下步骤：

1. 打开 [data](https://gw.alipayobjects.com/os/antfincdn/g5hIthhKlr/quanguoshixianweizhi.json) 这个链接。
2. 在打开的页面中，你会看到一个包含所有区县数据的 JSON 文件的内容。
3. 可以将页面中的 JSON 内容复制下来，然后将其保存到你的项目中的一个 JSON 文件中，或者直接在代码中使用该 JSON 内容。

通过以上步骤，你就可以获取到包含所有区县数据的 JSON 文件，并在你的项目中使用该文件中的数据了。

### Pro Table 高级表格

#### 类型定义

定义了一个 `Member` 类型，包含以下字段：

- `id`：成员的唯一标识，使用数字类型
- `realName`：成员的真实姓名，使用字符串类型
- `nickName`：成员的昵称，使用字符串类型
- `email`：成员的账号，使用字符串类型
- `phone`：成员的手机号，使用字符串类型

```ts
export type Member = {
  id: number;
  realName: string;
  nickName: string;
  email: string;
  phone: string;
};
```

#### 处理成员信息

将成员信息存储在一个 `Member` 数组中，遍历各个数组，将对应的信息存储到 `memberList` 数组中。

```ts
const memberList: Member[] = [];

for (let i = 0; i < realNames.length; i++) {
  memberList.push({
    id: `${102047 + i}`,
    realName: realNames[i],
    nickName: nickNames[i],
    email: emails[i],
    phone: phones[i],
  });
}
```

#### 构建表格

使用 Pro Table 组件来快速构建表格。先定义表格的列信息，包括姓名、昵称、账号、手机号和操作。

```tsx
import React from "react";
import type { ProColumns } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";

const MemberList: React.FC = () => {
  const columns: ProColumns<Member>[] = [
    {
      dataIndex: "realName",
      title: "姓名",
    },
    {
      dataIndex: "nickName",
      title: "昵称",
    },
    {
      dataIndex: "email",
      title: "账号",
    },
    {
      dataIndex: "phone",
      title: "手机号",
    },
    {
      title: "操作",
      dataIndex: "x",
      valueType: "option",
      render: (_, record) => {
        return [<a key="edit">编辑</a>, <a key="remove">移除</a>];
      },
    },
  ];

  return (
    <ProTable<Member>
      columns={columns}
      request={(params, sorter, filter) => {
        console.log(params, sorter, filter);
        return Promise.resolve({
          datmemberList,
          success: true,
        });
      }}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
      }}
      toolBarRender={false}
      search={false}
    />
  );
};
```

以上就是构建 Pro Table 高级表格的流程和代码示例。可以通过 ProTable 组件的 props 来定制表格的功能和外观，例如设置列信息、请求数据、设置行键、分页等。详细的 API 可以参考[官方文档](https://procomponents.ant.design/components/table)。
