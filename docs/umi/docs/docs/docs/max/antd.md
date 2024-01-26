### Ant Design 5.x 的 CSS 变量模式如何使用

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。与 4.x 版本不同的是，这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有 Design Token 纳入了 CSS 变量的管理范畴。这意味着在同一组件中，不同主题下的样式可以共享，从而减少样式体积。此外，切换主题时不再需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。

### Ant Design 5.x 的主题定制如何配置

Ant Design 5.x 的主题定制可以通过 `configProvider.theme` 配置项来实现。你可以在 `config/config.ts` 文件中的 `antd` 配置子项中设置 `theme` 属性，根据需求进行主题定制。这样可以轻松地修改 Ant Design 的默认主题样式。

### Ant Design 5.x 的 MomentJS 转换为 DayJS 如何实现

要将 Ant Design 5.x 中的 Moment.js 转换为 Day.js，只需在配置文件的 `antd` 配置子项中设置 `momentPicker` 属性为 `true` 即可。这样，Ant Design 5.x 将使用 Day.js 作为日期选择器的默认库。Day.js 是一个轻量级的日期库，可以替代 Moment.js，并且具有更小的体积和更好的性能。通过将 Moment.js 转换为 Day.js，您可以提高应用的加载速度和性能。

介绍：

该文档提供了有关 Ant Design 的一些功能的信息。其中包括：

1. Ant Design 是一个基于 React 的 UI 组件库，内置了 antd@4 的版本。
2. 通过使用 babel-plugin-import 插件，能够对 Ant Design 进行按需编译，以减少打包体积。
3. 在使用 antd@4 时，可以通过一键切换为暗色主题。

此外，根据上述信息，可以生成以下 3 个 QA 文档的例子：

### Ant Design 5.x 的 CSS 变量模式如何使用

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。与 4.x 版本不同的是，这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有 Design Token 纳入了 CSS 变量的管理范畴。这意味着在同一组件中，不同主题下的样式可以共享，从而减少样式体积。此外，切换主题时不再需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。

### 如何启用 Ant Design 5.x 的紧凑主题？

在 Ant Design 4.1.0 及更高版本中，可以通过在配置文件中设置 `compact` 参数为 `true` 来启用紧凑主题。以下是一个示例：

```ts
export default {
  antd: {
    dark: true,
    compact: true,
  },
};
```

请注意，仅当你使用的是 Ant Design 4.x 版本时，你才能启用紧凑主题。如果你的应用程序依赖于 Ant Design 的主题功能，请确保使用兼容的版本。

### Ant Design 5.x 的紧凑主题是什么？

紧凑主题是 Ant Design 5.x 中的一个特性，用于减少 UI 组件的尺寸和样式，使得界面元素更紧凑。此外，紧凑主题还提供了更紧凑的间距和边框大小，从而更好地适应较小的屏幕。如果你想要在你的应用中使用较为紧凑的界面风格，可以考虑启用紧凑主题。

### 如何在 Ant Design 5.x 中启用暗色紧凑主题？

如果你想要在 Ant Design 5.x 中同时启用暗色主题和紧凑主题，可以通过配置文件设置 `dark` 参数为 `true`，并设置 `compact` 参数为 `true`。以下是一个示例：

```ts
export default {
  antd: {
    dark: true,
    compact: true,
  },
};
```

这将启用 Ant Design 的暗色主题并使用紧凑的界面风格。请确保你使用的是 Ant Design 5.x 版本，并已在你的项目中安装了兼容的版本。

### appConfig

- Type: `object`

配置 `antd` 的 App 包裹组件，请注意 `antd@5.1.0 ~ 5.2.3` 仅能通过 `appConfig: {}` 启用，只有 `antd >=5.3.0` 才支持更多 App 配置项目。

**注意：该配置项仅 antd v5.1.0 及以上可用**

该配置项用于配置 `antd` 的 App 包裹组件。在 `antd` 版本不低于 5.1.0 且不高于 5.2.3 的环境中，可以通过设置 `appConfig: {}` 来启用该配置项。在 `antd` 的版本高于或等于 5.3.0 时，支持更多的 App 配置项目。

请注意，该配置项仅在 antd 版本为 5.1.0 及以上时可用。

该配置项不包含具体的示例，而是提供了一些关于配置的基本信息。这个配置项的类型为对象，表示可以通过一个对象来进行配置。

根据提供的信息生成的文档已经尽量简洁明了，并且包含了原始的文本信息。

### momentPicker

The `momentPicker` configuration option determines whether the `DatePicker`, `TimePicker`, and `Calendar` components of `antd` use `moment` as the date handling library. By default, this option is set to `false`.

Please note that this configuration option is only available in antd version 5 and above.

### Ant Design 的 styleProvider 配置项用法

Ant Design 的 styleProvider 配置项是用于配置 StyleProvider 组件的对象。使用该配置项可以实现在低版本浏览器（如 IE11）中兼容 Ant Design 组件库。

请注意以下几点：

1. 该配置项仅在 Ant Design 5.x 及以上版本可用。

2. 当项目配置了"legacy"或者"targets"中包含"ie"时，styleProvider 会自动进行降级处理，无需手动配置。

要使用 CSS 降级功能，需要安装[@ant-design/cssinjs](https://ant.design/docs/react/compatible-style-cn)依赖。请确保安装的@ant-design/cssinjs 版本与 Ant Design 一致。

请根据以上信息进行安装和配置。

### 如何动态切换全局配置以修改 Ant Design 5.x 主题

注意：该功能仅适用于 Ant Design 5.x 版本。

通过 `useAntdConfig` / `useAntdConfigSetter` 方法可以动态获取和修改 Ant Design 的 `ConfigProvider` 配置，通常用于动态修改主题。

需要注意的是，为了使用此功能，需要在配置文件中开启 `configProvider: {}` 功能。

下面是一个示例代码：

```tsx
import { Layout, Space, Button, version, theme, MappingAlgorithm } from 'antd';
import { useAntdConfig, useAntdConfigSetter } from 'umi';
const { darkAlgorithm, defaultAlgorithm } = theme;

export default function Page() {
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();
  return (
    <Layout>
      <h1>使用 antd@{version}</h1>
      <Space>
        是否使用暗色主题
        <Switch
          checked={antdConfig?.theme?.algorithm.includes(darkAlgorithm)}
          onChange={(data) => {
            // 此配置会与原配置进行深度合并
            setAntdConfig({
              theme: {
                algorithm: [data ? darkAlgorithm : defaultAlgorithm],
              },
            });
            // or
            setAntdConfig((config) => {
              const algorithm = config.theme!.algorithm as MappingAlgorithm[];
              if (algorithm.includes(darkAlgorithm)) {
                config.theme!.algorithm = [defaultAlgorithm];
              } else {
                config.theme!.algorithm = [darkAlgorithm];
              }
              return config;
            });
          }}
        ></Switch>
      </Space>
    </Layout>
  );
}
```

可以使用 `setAntdConfig` 方法来动态修改 [antd@5 ConfigProvider](https://ant.design/components/config-provider-cn) 组件支持的所有属性。

请注意，以上代码仅用于演示如何动态切换全局配置以修改 Ant Design 5.x 的主题。具体的使用方式和场景可以根据实际需求进行调整和扩展。
