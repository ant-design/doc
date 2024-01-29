### 如何在 umi 项目中启用 styled-components 插件？

启用 styled-components 插件需要在 umi 项目中进行相关配置。请按照以下步骤进行操作：

1. 首先，确保已经安装了 `@umijs/plugins` 依赖。如果没有安装，请执行以下命令进行安装：

```bash
$ pnpm i @umijs/plugins -D
```

2. 在项目的配置文件（通常是 `.umirc.ts` 或 `config/config.ts` 文件）中添加 `plugins` 配置项，并把 `'@umijs/plugins/dist/styled-components'` 添加到插件列表中。示例配置如下：

```ts
export default {
  plugins: ["@umijs/plugins/dist/styled-components"],
  styledComponents: {},
};
```

3. 保存配置文件，在 umi 项目中即可使用 styled-components。

### 如何在 @umijs/max 项目中启用 styled-components？

启用 styled-components 在 @umijs/max 项目中的配置方法与 umi 有所不同。请按照以下步骤进行操作：

1. 在 @umijs/max 项目中，styled-components 是默认已经安装的，无需额外安装。

2. 打开项目的配置文件（通常是 `.umirc.ts` 或 `config/config.ts` 文件），在 `export default` 中的 `styledComponents` 对象下添加以下配置：

```ts
export default {
  styledComponents: {},
};
```

3. 保存配置文件，在 @umijs/max 项目中即可使用 styled-components。

### 什么是 styled-components 的插件？

styled-components 的插件是一个可以帮助你使用 styled-components 的工具。它提供了一些功能帮助你更方便地使用 styled-components。

### styled-components 插件都可以从哪里导入使用？

大部分 styled-components 的导出可以从 `umi` 或 `@umijs/max` 里 import 使用。

### styled-components 的插件有哪些特性？

1. 支持通过配置的方式开启 styled-components 的 babel 插件，仅 dev 模式有效。

2. 支持通过运行时配置的方式声明全局样式。

### 什么是 styled-components 的 babel 插件？

styled-components 的 babel 插件是用于将 CSS-in-JS 的样式定义转换为对应的 CSS 样式。该插件可以在开发模式下使用，通过配置 `babelPlugin` 可以开启该插件。

### 如何配置 styled-components 的 babel 插件？

配置 styled-components 的 babel 插件可以通过在 `.umirc.ts` 文件中的 `styledComponents` 配置项中设置 `babelPlugin` 属性。例如：

```ts
export default {
  styledComponents: {
    babelPlugin: {},
  },
};
```

如果导入来源不是 `umi` / `@umijs/max`，需要将导入来源配置到 `topLevelImportPaths` 才可以使该 babel 插件生效。例如：

```ts
export default {
  styledComponents: {
    babelPlugin: {
      topLevelImportPaths: ["alita"],
    },
  },
};
```

### 如何使 styled-components 的 babel 插件生效？

要使 styled-components 的 babel 插件生效，需要将插件的导入来源配置到 `topLevelImportPaths` 中。例如，如果导入来源是 `alita`，则需要在配置中设置如下：

```ts
export default {
  styledComponents: {
    babelPlugin: {
      topLevelImportPaths: ["alita"],
    },
  },
};
```

### 什么是运行时配置项？

运行时配置项是用来配置应用程序在运行时的一些行为或特性的选项。它们可以用来修改默认行为、启用或禁用特定的功能，或者进行其他自定义操作。运行时配置项可以在应用程序启动时进行设置，也可以在运行过程中动态修改。

### 如何使用`styled-components`中的`GlobalStyle`？

在使用`styled-components`的过程中，可以通过`GlobalStyle`来定义全局样式。`GlobalStyle`是一个 React 组件，它使用了`createGlobalStyle`函数来创建，并可以在整个应用程序中生效。

在代码中，首先需要引入`createGlobalStyle`函数，然后使用它来创建一个`GlobalStyle`组件，通过模板字符串的形式定义全局样式。在模板字符串中，可以编写 CSS 样式规则，来定制全局样式。

最后，在应用程序中使用`GlobalStyle`组件来将全局样式应用到整个应用程序中，并确保它被正确地渲染和生效。

### 如何使用运行时配置项中的`styledComponents`?

在运行时配置项中，往往会定义一些常用的`styled-components`组件，以便在整个应用程序中重复使用。

在使用这些组件时，只需要将它们引入到代码中，并按照正确的方式使用它们即可。在代码中，可以直接使用这些组件，就像使用普通的`styled-components`组件一样。

例如，当一个应用程序需要使用全局样式时，可以直接引入运行时配置项中定义的`GlobalStyle`组件，并将其渲染到应用程序的根节点中，从而应用全局样式。

```tsx
import { styledComponents } from "umi";

const { GlobalStyle } = styledComponents;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 其他组件 */}
    </>
  );
}
```

这样就可以在整个应用程序中应用运行时配置项中定义的全局样式了。
