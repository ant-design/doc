### 如何从 antd 4.x 版本升级到 5.x 版本？

本文档将帮助你从 antd 4.x 版本升级到 antd 5.x 版本。如果你是 3.x 或者更老的版本，请先参考之前的[升级文档](https://4x.ant.design/docs/react/migration-v4-cn)升级到 4.x。

### antd 5.x 版本的升级有什么要注意的事项？

在将 antd 4.x 版本升级到 antd 5.x 版本时，有一些要注意的事项。请参考本文档获取详细的升级指南。

### 升级到 antd 5.x 版本后有哪些更新和改进？

升级到 antd 5.x 版本后，有一些更新和改进。请阅读本文档了解这些更新和改进的详细信息。

### 设计规范调整 - 基础圆角

设计规范调整中，基础圆角从统一的 `2px` 改为四级圆角: `2px`、`4px`、`6px`、`8px`。四级圆角可以根据不同场景应用，例如，默认尺寸的 Button 圆角调整为了 `6px`。

### 设计规范调整 - 主色调整

设计规范调整中，主色从 `#1890ff` 调整为 `#1677ff`。

### 设计规范调整 - 整体阴影调整

设计规范调整中，整体阴影由原本的三级阴影调整为两级。两级阴影分别应用于常驻页面的组件（如 Card），以及交互反馈（如 Dropdown）。

### 设计规范调整 - 组件内间距调整

设计规范调整中，部分组件的内间距进行了调整。

### 设计规范调整 - 去线框化

设计规范调整中，整体进行了去线框化的处理。

### Ant Design 5.x 使用 CSS-in-JS 的原因是什么？

Ant Design 5.x 采用了 CSS-in-JS 技术，底层使用 [@ant-design/cssinjs](https://github.com/ant-design/cssinjs) 解决方案。这样做的目的是更好地支持动态主题。通过使用 CSS-in-JS，我们可以在组件中使用动态的主题样式，同时减少样式体积。此外，CSS-in-JS 还支持按需加载，使得只引入需要的样式，提升了性能。

### Ant Design 5.x 中如何重置组件样式？

如果需要重置组件样式，又不想引入 `antd/dist/reset.css` 从而污染全局样式，可以尝试在应用最外层使用[App 组件](/components/app-cn)。通过在应用最外层使用 App 组件，可以解决原生元素没有 Ant Design 规范样式的问题。

### Ant Design 5.x 中如何使用自定义日期库？

Ant Design 5.x 在内置的时间库中使用了 Dayjs 替代 Moment.js。如果需要使用自定义日期库，可以参考[使用自定义日期库](/docs/react/use-custom-date-library-cn/)的文档，了解如何在 Ant Design 5.x 中集成自定义日期库。

### 组件 API 调整

1. 什么是组件弹框的 classname API 统一为 `popupClassName`？
   - 在 Ant Design 5.x 中，为了统一 API，将组件弹框的 classname API 统一改为 `popupClassName`。以前类似的 API，如 `dropdownClassName`，也会被替换为 `popupClassName`。
   - 下面是一些受影响的组件：
     - AutoComplete 组件
     - Cascader 组件
     - Select 组件
     - TreeSelect 组件
     - TimePicker 组件
     - DatePicker 组件
     - Mentions 组件
   - 示例代码：

```diff
      import { Select } from 'antd';

      const App: React.FC = () => (
        <Select
  -       dropdownClassName="my-select-popup"
  +       popupClassName="my-select-popup"
        />
      );

      export default App;
```

2. 为什么组件弹框的受控可见 API 统一为 `open`？
   - 在 Ant Design 5.x 中，为了统一 API，将组件弹框的受控可见 API 统一改为 `open`。以前类似的 API，如 `visible`，也会被替换为 `open`。
   - 下面是一些受影响的组件：
     - Drawer 组件：`visible` 变为 `open`
     - Modal 组件：`visible` 变为 `open`
     - Dropdown 组件：`visible` 变为 `open`
     - Tooltip 组件：`visible` 变为 `open`
     - Tag 组件：`visible` 已移除
     - Slider 组件：`tooltip` 相关 API 收敛到 `tooltip` 属性中
     - Table 组件：`filterDropdownVisible` 变为 `filterDropdownOpen`
   - 示例代码：

```diff
      import { Modal, Tag, Table, Slider } from 'antd';

      const App: React.FC = () => {
        const [visible, setVisible] = useState(true);

        return (
          <>
    -       <Modal visible={visible}>content</Modal>
    +       <Modal open={visible}>content</Modal>

    -       <Tag visible={visible}>tag</Tag>
    +       {visible && <Tag>tag</Tag>}

            <Table
              data={[]}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
    -             filterDropdownVisible: visible,
    +             filterDropdownOpen: visible,
                }
              ]}
            />

    -       <Slider tooltipVisible={visible} />
    +       <Slider tooltip={{ open: visible }} />
          </>
        );
      }

      export default App;
```

### `getPopupContainer` API 调整

1. 什么是 `getPopupContainer` API？
   - 在 Ant Design 5.x 中，所有的 `getPopupContainer` 都需要保证返回的是唯一的 div。这是为了适应 React 18 concurrent 下的多次调用该方法的需求。

### Upload List 结构变化

1. Upload List 在 Ant Design 5.x 中有什么变化？
   - 在 Ant Design 5.x 中，Upload List 的 DOM 结构发生了一些变化。具体的变化详情可以参考 [#34528](https://github.com/ant-design/ant-design/pull/34528)。

### Notification API 调整

1. Notification 的静态方法有哪些被调整？
   - 在 Ant Design 5.x 中，Notification 的静态方法不再允许在 `open` 中动态设置 `prefixCls`、`maxCount`、`top`、`bottom`、`getContainer`。现在 Notification 的静态方法只有一个实例。如果需要不同的配置，请使用 `useNotification`。
   - `close` 方法改名为 `destroy`，和 `message` 保持一致。

### Drawer 弹层区域的样式和类名 API 调整

1. Drawer 的 `style` 和 `className` 属性在 Ant Design 5.x 中发生了什么变化？
   - 在 Ant Design 5.x 中，Drawer 的 `style` 和 `className` 属性迁移至 Drawer 弹层区域上，并且原有属性被替换为 `rootClassName` 和 `rootStyle`。

### message API 移除和替代

1. Ant Design 4.x 中的 `message.warn` 方法是怎样变化和移除的？
   - 在 Ant Design 5.x 中，`message.warn` 方法已经被彻底移除，不再可用。如果需要显示警告消息，请使用 `message.warning` 方法来代替。

### 问题 1：如何替换 `Comment` 组件？

在 Ant Design 5.x 版本中，`Comment` 组件已经被移除，并且由 `@ant-design/compatible` 包中的组件进行维护。因此，如果你想要在项目中继续使用 `Comment` 组件，需要做以下替换：

```diff
- import { Comment } from 'antd';
+ import { Comment } from '@ant-design/compatible';
```

请注意更新导入路径，将原先的 `antd` 修改为 `@ant-design/compatible`。

### 问题 2：如何替换 `PageHeader` 组件？

在 Ant Design 5.x 版本中，`PageHeader` 组件已经被移除，并且由 `@ant-design/pro-layout` 包中的组件进行维护。因此，如果你想要在项目中继续使用 `PageHeader` 组件，需要做以下替换：

```diff
- import { PageHeader } from 'antd';
+ import { PageHeader } from '@ant-design/pro-layout';
```

请注意更新导入路径，将原先的 `antd` 修改为 `@ant-design/pro-layout`。

### 问题 3：如何替换 `BackTop` 组件？

在 Ant Design 5.x 版本中，`BackTop` 组件已经被废弃，并且建议从 `FloatButton` 悬浮按钮中引入。如果你想要继续使用 `BackTop` 组件，请进行以下替换：

```diff
- import { BackTop } from 'antd';
+ import { FloatButton } from 'antd';

  const App: React.FC = () => (
    <>
-     <BackTop />
+     <FloatButton.BackTop />
    </>
  );

  export default App;
```

请注意，由于 `BackTop` 组件已废弃，因此导入路径需要修改为 `FloatButton.BackTop`。

希望以上信息能够帮助到你！如果还有其他问题，请随时提出。

### 如何升级到 Ant Design 5.x ？

要升级到 Ant Design 5.x 版本，请按照以下步骤进行操作：

1. 首先，保存你的代码，并使用 git 进行提交，以便在需要时回退到以前的版本。

2. 执行以下命令来安装 Ant Design 5.x 的依赖：

```bash
   npm install --save antd@5.x
```

3. 如果你需要使用被 v4 废弃的组件（如 `Comment`、`PageHeader`），还需要安装 `@ant-design/compatible` 和 `@ant-design/pro-layout` 来实现兼容性：

```bash
   npm install --save @ant-design/compatible@v5-compatible-v4
   npm install --save @ant-design/pro-layout
```

4. 针对以上提到的 APIs 和组件，你需要根据文档中的列表手动检查和修改你的代码。

   - 如果你只使用少量的 APIs 或组件，可以逐个对照文档进行修改。

   - 如果你的项目涉及的修改较大，我们提供了一个 codemod cli 工具 [@ant-design/codemod-v5](https://github.com/ant-design/codemod-v5) 来帮助你快速地升级到 v5 版本。在运行这个工具之前，请先提交你的本地代码修改。

这样，你就可以成功地将你的项目升级到 Ant Design 5.x 版本了。

### 如何使用 Ant Design 5.x 的 CSS 变量模式？

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。相较于 4.x 版本而言，这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有的 Design Token 纳入了 CSS 变量的管理范畴。

通过使用 CSS 变量模式，你可以在同一组件中实现不同主题下的样式共享，从而减少样式体积。此外，切换主题时也无需重新序列化样式，因此可以提升主题切换的性能。

如果你的应用程序依赖于 Ant Design 的主题能力，我们强烈建议你启用 CSS 变量模式。详细的使用方法可参考上述提供的文档。

1. 如何使用 pnpm 运行 Ant Design 5.x 的 codemod 工具？可以使用以下命令来直接运行 pnpm，并执行 Ant Design 5.x 的 codemod 工具：

```
pnpm --package=@ant-design/codemod-v5 dlx antd5-codemod src
```

这将会运行 codemod 工具，对 src 目录中的代码进行转换。

2. 如何在 Ant Design 5.x 中使用 CSS 变量模式？从 Ant Design 5.12.0 版本开始，CSS 变量模式重新被支持。与 4.x 版本不同的是，这次 Ant Design 将 CSS-in-JS 的能力与 CSS 变量的管理结合了起来，包含了所有的 Design Token。这意味着在同一个组件中，不同主题下的样式可以共享，从而减少样式的体积。此外，切换主题时不再需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。

3. 在使用 codemod 工具时需要注意哪些问题？请注意，codemod 工具无法覆盖所有场景，因此建议对不兼容的变化逐条进行排查。codemod 工具可以帮助你做一些自动化的转换工作，但不能保证完全准确，可能还需要手动调整一些代码。因此，建议在使用 codemod 工具时仔细阅读相关文档，对转换结果进行验证和修改。

### 如何将 Ant Design 5.x 的 less 变量迁移到 v4 版本？

如果你想将 Ant Design 5.x 版本的 less 变量迁移到 v4 版本，可以通过兼容包来实现。具体的操作步骤如下：

1. 首先，在项目中安装 `@ant-design/compatible` 包，该包是用于兼容处理的。

2. 在你的代码文件中，引入 `@ant-design/compatible/lib` 模块，并使用 `convertLegacyToken` 方法将 v5 版本的变量转译成 v4 版本。

```js
const { theme } = require('antd/lib');
const { convertLegacyToken } = require('@ant-design/compatible/lib');

// 获取默认的主题算法和种子
const { defaultAlgorithm, defaultSeed } = theme;

// 使用默认算法和种子生成 v5 版本的变量映射
const mapV5Token = defaultAlgorithm(defaultSeed);
const v5Vars = convertLegacyToken(mapV5Token);
```

3. 然后，通过 `theme.getDesignToken` 方法获取 v4 版本的变量映射，再将其转译成 v4 版本的变量。

```js
const mapV4Token = theme.getDesignToken(theme.defaultTheme);
const v4Vars = convertLegacyToken(mapV4Token);
```

4. 在 webpack 配置中的 less-loader 选项中，使用 `modifyVars` 属性来注入转译后的变量。

```js
module.exports = {
  // ... 其他配置
  loader: 'less-loader',
  options: {
    lessOptions: {
      modifyVars: v4Vars,
    },
  },
};
```

5. 最后，移除对 antd less 文件的直接引用，例如：

```diff
// 你的 less 文件
- @import (reference) '~antd/es/style/themes/index';
```

通过以上步骤，你就可以将 Ant Design 5.x 的 less 变量迁移到 v4 版本了。

### 如何将 Ant Design 5.x 的 less 变量迁移到 v5 版本？

如果你想将 Ant Design 5.x 版本的 less 变量迁移到 v5 版本，可以通过兼容包来实现。具体的操作步骤如下：

1. 在你的代码文件中，引入 `@ant-design/compatible/lib` 模块，并使用 `convertLegacyToken` 方法将 v5 版本的变量转译成 v5 版本（相当于无需转译）。

```js
const { theme } = require('antd/lib');
const { convertLegacyToken } = require('@ant-design/compatible/lib');

// 获取默认的主题算法和种子
const { defaultAlgorithm, defaultSeed } = theme;

// 使用默认算法和种子生成 v5 版本的变量映射
const mapV5Token = defaultAlgorithm(defaultSeed);
const v5Vars = convertLegacyToken(mapV5Token);
```

2. 在 webpack 配置中的 less-loader 选项中，使用 `modifyVars` 属性来注入转译后的变量。

```js
module.exports = {
  // ... 其他配置
  loader: 'less-loader',
  options: {
    lessOptions: {
      modifyVars: v5Vars,
    },
  },
};
```

3. 最后，移除对 antd less 文件的直接引用，例如：

```diff
// 你的 less 文件
- @import (reference) '~antd/es/style/themes/index';
```

通过以上步骤，你就可以将 Ant Design 5.x 的 less 变量迁移到 v5 版本了。

### 如何在 less 文件中使用 Ant Design 5.x 的 less 变量？

在使用 Ant Design 5.x 的 less 变量时，需要进行一些额外的配置。具体的操作步骤如下：

1. 在你的代码文件中，引入 `@ant-design/compatible/lib` 模块，并使用 `convertLegacyToken` 方法将 v5 版本的变量转译成 v5 版本（相当于无需转译）。

```js
const { theme } = require('antd/lib');
const { convertLegacyToken } = require('@ant-design/compatible/lib');

// 获取默认的主题算法和种子
const { defaultAlgorithm, defaultSeed } = theme;

// 使用默认算法和种子生成 v5 版本的变量映射
const mapV5Token = defaultAlgorithm(defaultSeed);
const v5Vars = convertLegacyToken(mapV5Token);
```

2. 在你的 less 文件中，可以直接使用转译后的 v5 变量。

```less
@import (reference) '~antd/es/style/themes/index';

// 使用 v5 变量进行样式定义
.my-class {
  color: @v5-color;
  font-size: @v5-font-size;
  // ...
}
```

通过以上步骤，你就可以在 less 文件中使用 Ant Design 5.x 的 less 变量了。请注意，确保在 webpack 配置中正确注入了转译后的变量。

### 如何移除 `babel-plugin-import` 插件？

要移除 `babel-plugin-import` 插件，您需要在 `package.json` 文件中删除相关配置，并在 `.babelrc` 文件中将该插件移除。具体操作如下：

步骤一：打开 `package.json` 文件，找到 `"plugins"` 配置项，删除以下内容：

```diff
"plugins": [
- ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "antd"],
]
```

步骤二：打开 `.babelrc` 文件，将以下内容移除：

```diff
"plugins": [
- ["import", { "libraryName": "antd", "libraryDirectory": "lib"}, "antd"],
]
```

完成以上操作后，`babel-plugin-import` 插件将被成功移除。

### 如何在 Umi 中关闭插件配置？

如果您是 Umi 用户，可以通过修改配置文件来关闭插件配置。具体操作如下：

步骤一：打开 `config/config.ts` 或 `.umirc` 文件。

步骤二：找到 `antd` 配置项，并将 `"import": true` 修改为 `"import": false`。

修改后的配置如下所示：

```diff
// config/config.ts or .umirc
export default {
  antd: {
-   import: true,
+   import: false,
  },
};
```

完成以上操作后，插件配置将会被成功关闭。

### 如何替换 Day.js 的语言包？

如果要将 moment.js 的 locale 替换为 day.js 的 locale，可以按照以下步骤进行：

1. 将 moment.js 的引入语句替换为 day.js 的引入语句：

```diff
   - import moment from 'moment';
   + import dayjs from 'dayjs';
```

2. 将 moment.js 的 locale 引入语句替换为 day.js 的 locale 引入语句：

```diff
   - import 'moment/locale/zh-cn';
   + import 'dayjs/locale/zh-cn';
```

3. 将 moment.js 的语言设置代码替换为 day.js 的语言设置代码：

```diff
   - moment.locale('zh-cn');
   + dayjs.locale('zh-cn');
```

这样就成功替换了 Day.js 的语言包。

### 如何使用 @ant-design/moment-webpack-plugin 插件来替换回 moment.js？

如果暂时不想替换 Day.js，可以使用 `@ant-design/moment-webpack-plugin` 插件将 Day.js 替换回 moment.js。下面是具体的操作步骤：

1. 使用以下命令安装 `@ant-design/moment-webpack-plugin` 插件：

```bash
   npm install --save-dev @ant-design/moment-webpack-plugin
```

2. 在 webpack 配置文件（webpack-config.js）中导入 `@ant-design/moment-webpack-plugin` 插件：

```javascript
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

通过以上步骤，你可以使用 `@ant-design/moment-webpack-plugin` 插件将 Day.js 替换回 moment.js。

### 如何将 moment.js 的语言包替换为 day.js 的语言包？

如果你想将 moment.js 的 locale 替换为 day.js 的 locale，可以按照以下步骤进行操作：

1. 将 `moment` 的引入语句替换为 `dayjs` 的引入语句：

```diff
   - import moment from 'moment';
   + import dayjs from 'dayjs';
```

2. 将 moment.js 的 locale 引入语句替换为 day.js 的 locale 引入语句：

```diff
   - import 'moment/locale/zh-cn';
   + import 'dayjs/locale/zh-cn';
```

3. 将 `moment.locale('zh-cn')` 代码替换为 `dayjs.locale('zh-cn')` 代码：

```diff
   - moment.locale('zh-cn');
   + dayjs.locale('zh-cn');
```

这样就成功将 moment.js 的语言包替换为 day.js 的语言包。

### 如何使用 V4 主题包保持样式一致性？

如果你不希望在升级后样式发生变化，你可以使用 V4 主题包。在兼容包中，我们提供了完整的 V4 主题，可以还原到 V4 的样式。

你可以通过以下步骤来使用 V4 主题包：

1. 在你的项目中安装 `@ant-design/compatible`，版本设置为 `v5-compatible-v4`。
2. 导入 `@ant-design/compatible` 中的 `defaultTheme` 和 `darkTheme`，它们分别是默认主题和暗色主题。
3. 使用 `ConfigProvider` 组件来包裹你的界面组件，通过设置 `theme` 属性为 `defaultTheme`，来应用默认主题。
4. 在你的界面组件中使用 V4 主题下的组件，如 `Button` 和 `Radio.Group`。

通过上述步骤，你可以在升级到 Ant Design 5.x 版本后，保持样式的一致性，避免样式的改变对你的应用造成影响。

### 如何在项目中使用 V4 主题包的组件？

如果你想在项目中使用 V4 主题包的组件，你可以按照以下步骤操作：

1. 在项目的依赖中添加 `@ant-design/compatible`，版本设置为 `v5-compatible-v4`。
2. 从 `@ant-design/compatible` 中导入需要使用的组件，如 `Button` 和 `Radio.Group`。
3. 在你的代码中使用这些导入的组件，如在按钮周围放置 `Button` 组件，可通过设置 `type` 属性来定义按钮的类型。

通过以上步骤，你可以在项目中使用 V4 主题包的组件，获得与 V4 版本相似的样式和功能。

### 如何在项目中配置暗色主题？

如果你希望在项目中配置暗色主题，你可以按照以下步骤进行设置：

1. 在项目中安装 `@ant-design/compatible`，版本设置为 `v5-compatible-v4`。
2. 从 `@ant-design/compatible` 中导入 `ConfigProvider`、`Button`、`Radio` 和 `Space` 组件。
3. 使用 `ConfigProvider` 组件来包裹你的界面组件，并将 `theme` 属性设置为 `darkTheme`，以应用暗色主题。
4. 在界面组件中，使用 `Button` 和 `Radio.Group` 组件等来创建暗色主题下的界面元素。

通过按照以上步骤进行配置，你可以在项目中实现暗色主题的样式效果。

### 旧版浏览器兼容如何处理？

Ant Design v5 为了降低 CSS-in-JS hash 值优先级，在样式中使用了 `:where` css selector。但是，如果你需要支持旧版本浏览器（如 IE 11、360 浏览器等等），可以通过 `@ant-design/cssinjs` 的 `StyleProvider` 去除降权操作。具体的兼容性调整，请参阅[兼容性调整](/docs/react/customize-theme-cn#兼容性调整)。这样你就可以确保你的应用在旧版浏览器上能够正常运行。

### 为什么要使用 `:where` css selector？

Ant Design v5 使用 `:where` css selector 的目的是为了降低 CSS-in-JS hash 值的优先级。这可以帮助你在同一组件中使用不同主题下的样式，并减少样式体积。然而，如果你需要支持旧版本浏览器，可以通过 `@ant-design/cssinjs` 的 `StyleProvider` 来去除这个降权操作。这样可以确保在旧版浏览器上正常展示你的应用。

### 如何处理 Ant Design v5 的兼容性调整？

如果你需要支持旧版浏览器（如 IE 11、360 浏览器等等），可以按照 Ant Design 的兼容性调整文档进行处理。具体的兼容性调整方法可以在[兼容性调整](/docs/react/customize-theme-cn#兼容性调整)中找到。你可以使用 `@ant-design/cssinjs` 的 `StyleProvider` 去除降权操作，以确保应用在旧版浏览器上能够正常运行。

### 如何安装 Ant Design 5.x？

如果你想安装 Ant Design 5.x，你可以使用 npm 或者 pnpm 进行安装。如果使用 npm，可以运行以下命令：

```bash
npm install antd@5
```

如果使用 pnpm，可以运行以下命令：

```bash
pnpm install antd@5
```

如果你的项目中已经安装了 Ant Design 4.x，并且想同时使用 Ant Design 5.x，你可以通过添加一个别名包 `antd-v5` 来安装 Ant Design 5.x 的版本。例如：

```bash
pnpm add antd-v5@npm:antd@5
```

然后，在你的 `package.json` 中，你会看到类似以下的配置：

```json
{
  "antd": "4.x",
  "antd-v5": "npm:antd@5"
}
```

### 在项目中如何同时使用 Ant Design 4.x 和 5.x？

如果你想在同一个项目中同时使用 Ant Design 4.x 和 5.x，你可以通过在引入组件时使用不同的 import 来实现。例如，假设你想在项目中使用 Ant Design 4.x 的 `Button` 组件和 Ant Design 5.x 的 `Button` 组件，你可以这样做：

```tsx
import React from 'react';
import { Button as Button4 } from 'antd'; // 使用 Ant Design 4.x 版本的 Button 组件
import { Button as Button5 } from 'antd-v5'; // 使用 Ant Design 5.x 版本的 Button 组件

export default () => (
  <>
    <Button4 />
    <Button5 />
  </>
);
```

这样，你就可以同时使用两个版本的组件了。

另外，在使用 Ant Design 5.x 版本的组件时，你可能需要配置 `ConfigProvider` 来避免样式冲突。你可以将 `ConfigProvider` 包裹在你的应用顶层组件中，并设置 `prefixCls` 为一个特定的值，例如 `"ant5"`：

```tsx
import React from 'react';
import { ConfigProvider as ConfigProvider5 } from 'antd-v5';

export default () => (
  <ConfigProvider5 prefixCls="ant5">
    <MyApp />
  </ConfigProvider5>
);
```

以上就是在项目中同时使用 Ant Design 4.x 和 5.x 的方式。需要注意的是，npm 别名功能并不是所有的包管理器都支持，请根据你的具体情况选择合适的方式。
