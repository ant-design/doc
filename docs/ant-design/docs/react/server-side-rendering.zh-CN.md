### 服务端渲染样式有哪两种方案？

服务端渲染样式有两种方案，分别是内联样式和整体导出。内联样式在渲染时无需额外请求样式文件，可以减少额外的网络请求；而整体导出则是提前烘焙 antd 组件样式为 css 文件，在页面中引入。内联样式的优点是减少网络请求，缺点是会增大 HTML 体积，影响首屏渲染速度。整体导出的优点是复用同一套 css 文件以命中缓存，缺点是在页面存在多主题时需要额外进行烘焙。

### 内联样式有哪些优缺点？

内联样式的优点是在渲染时无需额外请求样式文件，可以减少额外的网络请求。但其缺点是会使得 HTML 体积增大，影响首屏渲染速度。

### 整体导出的样式方案有什么优缺点？

整体导出的样式方案是将 antd 组件样式提前烘焙为 css 文件，在页面中引入。其优点是可以复用同一套 css 文件以命中缓存，提升页面加载速度。但其缺点是如果页面中存在多主题，则需要额外进行烘焙。

### 如何在 React 中使用内联样式？

在 React 中使用内联样式，你可以使用 `@ant-design/cssinjs` 包提供的功能。首先，需要引入所需的模块：

```tsx
import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";
import { renderToString } from "react-dom/server";
```

然后，创建一个组件，使用 `StyleProvider` 包裹该组件，并传入一个 `cache` 对象作为参数：

```tsx
const App = () => {
  const cache = React.useMemo<Entity>(() => createCache(), []);

  // 其他逻辑代码...

  return (
    <StyleProvider cache={cache}>
      <MyApp />
    </StyleProvider>
  );
};
```

在服务器端进行渲染时，你可以使用 `renderToString` 将组件转换成 HTML 字符串：

```tsx
const html = renderToString(
  <StyleProvider cache={cache}>
    <MyApp />
  </StyleProvider>,
);
```

接下来，使用 `extractStyle` 从 `cache` 对象中获取内联样式的文本：

```tsx
const styleText = extractStyle(cache);
```

最后，将获取到的样式文本与 HTML 结构合并返回：

```tsx
return `
  <!DOCTYPE html>
  <html>
    <head>
      ${styleText}
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
`;
```

这样，在使用 `@ant-design/cssinjs` 的过程中，你可以在 React 组件中使用内联样式，并通过服务器端渲染将样式转换为 HTML 字符串。

### 如何将样式文件抽离到 css 文件中？

如果你想要将样式文件抽离到 css 文件中，可以尝试以下方案：

1. 安装依赖执行以下命令安装所需的依赖包：

```tsx
   npm install ts-node tslib cross-env --save-dev
```

2. 新增 tsconfig.node.json 文件在项目根目录下创建一个名为 `tsconfig.node.json` 的文件，并将以下内容添加到文件中：

```json
{
  "compilerOptions": {
    "strictNullChecks": true,
    "module": "NodeNext",
    "jsx": "react",
    "esModuleInterop": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```

3. 新增 scripts/genAntdCss.tsx 文件在项目根目录下创建一个名为 `scripts/genAntdCss.tsx` 的文件，并将以下内容添加到文件中：

```tsx
// scripts/genAntdCss.tsx
import fs from "fs";
import { extractStyle } from "@ant-design/static-style-extract";

const outputPath = "./public/antd.min.css";

const css = extractStyle();

fs.writeFileSync(outputPath, css);
```

以上步骤完成后，运行 `scripts/genAntdCss.tsx` 脚本将会在当前项目的 `public` 目录下直接生成一个全量的 `antd.min.css` 文件，该文件即为抽离样式后的 CSS 文件。

### 如何使用混合主题或自定义主题？

若你想使用混合主题或自定义主题，可采用以下脚本：

```tsx
import fs from "fs";
import React from "react";
import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";

const outputPath = "./public/antd.min.css";

const testGreenColor = "#008000";
const testRedColor = "#ff0000";

const css = extractStyle((node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: testGreenColor,
        },
      }}
    >
      {node}
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: testGreenColor,
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: testRedColor,
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
));

fs.writeFileSync(outputPath, css);
```

以上脚本将在运行时生成一个包含混合主题或自定义主题的 CSS 文件，并将其写入到 `public/antd.min.css` 文件中。

### 如何在 Next.js 中引入抽离后的样式文件？

以 Next.js 为例，可以按照以下步骤引入抽离后的样式文件：

1. 在 package.json 中添加脚本依赖打开 `package.json` 文件，找到 `"scripts"` 字段，添加以下两行脚本：

```json
   "predev": "ts-node --project ./tsconfig.node.json ./scripts/genAntdCss.tsx",
   "prebuild": "cross-env NODE_ENV=production ts-node --project ./tsconfig.node.json ./scripts/genAntdCss.tsx"
```

2. 在 pages/\_app.tsx 中引入样式文件打开 `pages/_app.tsx` 文件，在文件开头添加以下行代码：

```tsx
import "../public/antd.min.css";
```

以上步骤完成后，运行开发命令或编译命令时，会在项目的 `public` 目录下生成一个全量的 `antd.min.css` 文件。然后，在 `_app.tsx` 文件中引入该文件即可实现样式文件的抽离和使用。

### 如何在项目中使用自定义主题？

如果你的项目需要使用自定义主题，你可以通过以下方式来实现。

首先，你需要引入 `@ant-design/static-style-extract` 模块，并使用其中的 `extractStyle` 方法对样式进行提取。代码示例如下：

```tsx
import { extractStyle } from "@ant-design/static-style-extract";

const cssText = extractStyle((node) => {
  // 在这里你可以使用任何你想要自定义的样式
  return node;
});
```

然后，在你的项目中，你可以使用 `ConfigProvider` 组件来设置自定义主题。在 `theme` 属性中，你可以指定各种样式的主题配置。以下是一个示例代码：

```tsx
import { ConfigProvider } from "antd";

// 在这里使用 ConfigProvider 组件，并在 theme 属性中设置自定义主题
<ConfigProvider
  theme={{
    // 在这里设置你的自定义主题样式
    token: {
      colorPrimary: "red",
    },
  }}
>
  // 在这里放置你的组件和内容
</ConfigProvider>;
```

这样就可以在项目中使用自定义主题了。

### 如何烘焙自定义主题的样式？

在前面的代码示例中，我们已经通过 `extractStyle` 方法提取了样式，并将其存储在 `cssText` 变量中。接下来，我们可以将提取到的样式应用到页面中。

可以通过以下方式将样式应用到页面中：

```tsx
import React from "react";
import { renderToString } from "react-dom/server";

// 将提取到的样式添加到页面中
const html = `
  ...
  <style>${cssText}</style>
  ...
`;

// 在这里将页面渲染成字符串，或者使用其他渲染方法
const renderedHTML = renderToString(<App />);
```

以上就是如何烘焙自定义主题样式的方法。

### 如何切换自定义主题？

如果你想在项目中切换自定义主题，可以通过修改 `ConfigProvider` 组件的 `theme` 属性来实现。

首先，在切换主题的时候，你要根据用户的选择更新主题的配置。可以使用 `setState` 或其他方法来更新 `ConfigProvider` 组件的 `theme` 属性。

以下是一个示例代码：

```tsx
import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";

const App = () => {
  const [theme, setTheme] = useState({
    // 初始主题配置
    token: {
      colorPrimary: "red",
    },
  });

  const handleThemeChange = () => {
    // 在这里根据用户的选择更新主题配置
    const newTheme = {
      token: {
        colorPrimary: "blue",
      },
    };

    setTheme(newTheme);
  };

  return (
    <ConfigProvider theme={theme}>
      // 在这里放置你的组件和内容
      <Button onClick={handleThemeChange}>切换主题</Button>
    </ConfigProvider>
  );
};
```

以上示例代码中，我们使用 `useState` 来管理主题的配置，并提供一个按钮来切换主题。当用户点击按钮时，`handleThemeChange` 函数会根据用户的选择更新主题配置，并使用 `setTheme` 方法来更新 `ConfigProvider` 组件的 `theme` 属性。

这样，用户就可以通过点击按钮来切换自定义主题了。

希望以上内容对你有所帮助！如果有任何问题，请随时向我提问。

### 如何在项目中使用混合主题？

如果你的项目中使用了混合主题，你可以尝试使用 `static-style-extract` 来进行烘焙。具体的实现方法如下：

```tsx
import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";

const cssText = extractStyle((node) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "green ",
        },
      }}
    >
      {node}
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "blue",
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "red ",
          },
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
));
```

你可以在项目中按照上述代码编写，然后通过 `static-style-extract` 来提取出生成的样式。更多关于 `static-style-extract` 的细节，你可以参考 [static-style-extract](https://github.com/ant-design/static-style-extract)。

### `static-style-extract` 是什么？

`static-style-extract` 是一个用于提取静态样式的工具，它可以帮助你将设计规范中的样式提取出来，然后在项目中使用。在使用 `static-style-extract` 的过程中，你需要按照其提供的 API 将你的组件包裹起来，然后 `static-style-extract` 会扫描你的组件并提取出其中的样式，并将其生成为可以在你的项目中使用的 CSS 文本。这样，你就可以在项目中使用这些设计规范中的样式了。

### `ConfigProvider` 是什么？

`ConfigProvider` 是 Ant Design 提供的一个组件，它可以用来设置整个应用的主题配置。通过在 `ConfigProvider` 中配置不同的主题，你可以实现在项目中使用不同的主题。在上面的代码中，我们通过多次嵌套使用 `ConfigProvider` 组件来实现混合主题的效果。每个 `ConfigProvider` 组件都可以单独设置不同的主题配置，从而实现了混合主题的效果。

### 如何使用 `genAntdCss.tsx` 文件中的 `doExtraStyle` 函数？

要使用 `genAntdCss.tsx` 文件中的 `doExtraStyle` 函数，首先需要安装依赖。然后，在需要使用的文件中导入 `doExtraStyle` 函数，并调用它。

具体的步骤如下：

1. 在项目根目录下执行以下命令安装所需依赖：

```bash
npm install crypto fs path @ant-design/cssinjs
```

2. 在需要使用 `doExtraStyle` 函数的文件中，导入 `doExtraStyle` 函数：

```typescript
import { doExtraStyle } from "路径/to/genAntdCss";
```

3. 调用 `doExtraStyle` 函数，并传入相应的参数：

```typescript
const fileName = doExtraStyle({ cache });
```

注意，`doExtraStyle` 函数的参数是一个对象，其中 `cache` 是必填项。可以根据需要，传入不同的参数，例如 `dir` 和 `baseFileName`。

### 在 `_document.tsx` 文件中，如何使用 `genAntdCss.tsx` 中的 `doExtraStyle` 函数导出样式？

在 `_document.tsx` 文件中使用 `doExtraStyle` 函数导出样式，可以按需导出已使用的样式，并在页面中加载该样式。

具体的步骤如下：

1. 在 `_document.tsx` 文件中导入 `doExtraStyle` 函数：

```typescript
import { doExtraStyle } from "路径/to/genAntdCss";
```

2. 在 `getInitialProps` 方法中调用 `doExtraStyle` 函数，并获取返回的文件名：

```typescript
const fileName = doExtraStyle({ cache });
```

3. 将获取到的文件名添加到页面的 `<Head>` 部分中：

```tsx
{
  fileName && <link rel="stylesheet" href={`/${fileName}`} />;
}
```

这样就可以按需导出已使用的样式，并在页面加载该样式了。通过这种方式，可以减少页面加载所需的样式文件大小，并提升性能。

### 如何在 Next.js 项目中使用 `genAntdCss.tsx` 文件？

要在 Next.js 项目中使用 `genAntdCss.tsx` 文件，需要将 `genAntdCss.tsx` 文件复制到项目中的相应位置，并进行相应的导入和调用。

具体的步骤如下：

1. 将 `genAntdCss.tsx` 文件复制到项目中的一个合适的位置，例如 `scripts` 目录。
2. 在需要使用 `doExtraStyle` 函数的文件中，导入 `doExtraStyle` 函数：

```typescript
import { doExtraStyle } from "路径/to/genAntdCss";
```

3. 调用 `doExtraStyle` 函数，并传入相应的参数：

```typescript
const fileName = doExtraStyle({ cache });
```

注意，根据项目的具体情况，可能需要根据实际导入路径进行相应的调整。

通过以上步骤，就可以在 Next.js 项目中使用 `genAntdCss.tsx` 文件了，实现按需导出样式和加载样式文件的功能。
