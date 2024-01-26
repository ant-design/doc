### Module Federation 插件

在 Umi 项目中使用 Module Federation 功能的步骤如下：

1. 在项目的 package.json 文件中添加以下依赖：

```json
{
  "dependencies": {
    "webpack": "^5.50.0",
    "webpack-cli": "^4.8.0",
    "umi": "^3.5.0"
  }
}
```

2. 在 umi 配置文件中（通常是.umirc.ts 或者 config/config.ts），配置 Module Federation 插件：

```typescript
import { defineConfig } from 'umi';

export default defineConfig({
  // ...其他配置
  webpack5: {},
  // Module Federation 配置
  mfsu: {},
});
```

3. 在需要使用 Module Federation 功能的子应用中，安装并导入 `@umijs/plugin-mf` 插件：

```
$ yarn add @umijs/plugin-mf
```

```typescript
// 子应用的 umi 配置文件中
import { defineConfig } from 'umi';
import { mfPlugin } from '@umijs/plugin-mf';

export default defineConfig({
  // ...其他配置
  plugins: [mfPlugin()],
  // 启用 HTML runtime 插件
  runtimePublicPath: true,
  // 子应用的入口文件
  targets: {
    child: { entry: 'http://localhost:8001' },
  },
  // 暴露子应用的模块
  exportStatic: {
    excludeAssets: [/umi.js/],
  },
});
```

4. 启动项目，并确保所有子应用正确加载。

这样，我们就可以在 Umi 项目中使用 Module Federation 功能了。请确保浏览器支持 `Top Level Await` 特性。在生产环境中使用时，还需要注意浏览器的兼容性。

### umijs/max 项目中使用远端模块配置

在 `umijs/max` 项目中，可以通过配置实现使用远端模块的功能。

```ts
// .umirc.ts
import { defineConfig } from '@umijs/max';

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  mf: {
    remotes: [
      {
        aliasName: 'mfNameAlias',
        name: 'theMfName',
        entry: 'https://to.the.remote.com/remote.js',
      },
    ],

    shared,
  },
});
```

### 普通 Umi 项目中使用远端模块配置

在普通的 Umi 项目中，也可以通过配置实现使用远端模块的功能。

```ts
// .umirc.ts
import { defineConfig } from 'umi';

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  plugins: ['@umijs/plugins/dist/mf'],
  mf: {
    remotes: [
      {
        aliasName: 'mfNameAlias',
        name: 'theMfName',
        entry: 'https://to.the.remote.com/remote.js',
      },
    ],

    shared,
  },
});
```

以上两种配置方式都可以使用 `import XXX from 'mfNameAlias/XXXX'` 来使用远端模块的内容。

请注意，配置中的 `remotes` 字段用于指定远端模块的别名、名称和入口文件路径。配置的 `shared` 字段用于指定 MF 共享的模块。

### 导出远端模块配置

当前项目对外提供远端模块，模块名使用以下配置字段:

```ts
// .umirc.ts
// 提取变量是为了和 MFSU 配合使用保持配置一致
const remoteMFName = 'remoteMFName';

defineConfig({
  mf: {
    name: remoteMFName,

    // 可选，远端模块库类型, 如果模块需要在乾坤子应用中使用建议配置示例的值，
    // 注意这里的 name 必须和最终 MF 模块的 name 一致
    // library: { type: "window", name: "exportMFName" },
  },
});
```

:::info{title=🚨} 配置的模块名必须为一个合法的 JavaScript 变量名！ :::

导出的模块按照约定，将源代码目录下的 `exposes` 一级子目录名作为导出项，导出文件为该目录下的 index 文件。例如：

```txt
src/exposes/
├── Button
│   └── index.jsx
├── Head
│   └── index.ts
└── Form
    └── index.tsx
```

对应的 Module Federation 的 exposes 配置为：

```js
{
  './Button': 'src/exposes/Button/index.jsx',
  './Head': 'src/exposes/Head/index.ts',
  './Form': 'src/exposes/Form/index.tsx',
}
```

以上是关于导出远端模块的配置信息。

### 如何关闭 MF 产物的 hash

默认情况下，当用户开启 `hash: true` 时，MF（Micro Frontends）产物中的入口文件会自动带上 hash，例如 `remote.123abc.js`。如果想要关闭这个功能，可以设置 `remoteHash: false`，这样会得到一个没有 hash 的文件，例如 `remote.js`。然而，关闭 hash 之后，需要修改 nginx / CDN / 网关的响应头配置来去除该 `remote.js` 文件的缓存，否则新的构建将无法生效。请注意，关闭 hash 可能会带来一些潜在的问题，请参考 [issue #11711](https://github.com/umijs/umi/issues/11711) 了解更多关于没有 hash 的情况的危害和推荐做法。

以下是设置 `remoteHash: false` 的示例：

```ts
mf: {
  remoteHash: false;
}
```

为了保持文档的简洁性，语义通顺，并符合前端开发的基础，上述信息已进行了总结和整理，不包含具体的代码示例。

### 何时需要使用运行时 API？

当存在以下需求时，可以考虑使用运行时 API：

1. 页面需要使用兜底组件：当远端模块加载失败时，可以通过运行时 API 来指定一个兜底组件替代。

2. 远端模块加载的地址无法通过同步函数来确定：如果远端模块的地址需要通过异步调用才能确定，那么就需要使用运行时 API 来处理这种情况。

3. 远端模块加载的地址和模块名需要在运行时才能确定：如果远端模块的地址和模块名只有在运行时才能确定，那么就需要使用运行时 API 来动态加载远端模块。

以上是使用运行时 API 的场景和条件，当满足其中任何一种情况时，可以考虑使用运行时 API 来实现相应的功能。

### `safeMfImport`安全远端模块加载函数的使用

`safeMfImport`是一个安全的远端模块加载函数，其接口定义如下：

```ts
safeMfImport(moduleSpecifier: string, fallback: any): Promise<any>
```

通过结合`React.lazy`函数，可以实现对远端模块的懒加载操作。

#### 导入`safeMfImport`函数

首先，我们需要从 `@umijs/max` 模块中导入 `safeMfImport` 函数：

```ts
import { safeMfImport } from '@umijs/max';
```

然后，我们还需要导入 `React` 的相关模块：

```ts
import React, { Suspense } from 'react';
```

#### 使用`safeMfImport`进行懒加载

我们可以使用`React.lazy`函数来实现对远端模块的懒加载，具体代码如下：

```ts
const RemoteCounter = React.lazy(() => {
  return safeMfImport('remoteCounter/Counter', { default: () => 'Fallback' });
});
```

这里的 `remoteCounter/Counter` 需要与你的配置相对应。

#### 包裹懒加载组件

最后，我们需要在使用懒加载组件时进行包裹，以提供加载过程中的占位符。具体代码如下：

```ts
export default function Page() {
  return (
    <Suspense fallback="loading">
      <RemoteCounter />
    </Suspense>
  );
}
```

在上述代码中，我们使用了`Suspense`组件作为通过`safeMfImport`加载远端模块的占位符。在加载过程中，将展示`loading`字样。

请注意，为了模拟一个模块作为兜底，我们需要将兜底的**_组件_**包装到对象的`default`字段上。

### `safeRemoteComponent` API 的描述

该 API 为封装了 `safeMfImport` 的高阶组件，用于远程加载组件的安全封装。具体接口定义如下：

```ts
safeRemoteComponent<T extends React.ComponentType<any>>
  (opts: {
      moduleSpecifier:string;
      fallbackComponent: React.ComponentType<any>;  // 远端组件加载失败的兜底组件
      loadingElement: React.ReactNode ;             // 组件加载中的 loading 展示
    } ): T
```

该 API 接受一个泛型参数 `T`，其中 `T` 必须是 React 组件。API 的参数 `opts` 为一个对象，包含以下三个属性：

1. `moduleSpecifier`：远程组件的模块路径的字符串表示。比如 `'remoteCounter/Counter'`。

2. `fallbackComponent`：当远程组件加载失败时，作为兜底组件展示的 React 组件。

3. `loadingElement`：远程组件加载中时展示的 loading 元素，可以是任何 React 元素。

示例用法如下：

```ts
const RemoteCounter = safeRemoteComponent<React.FC<{ init?: number }>>({
  moduleSpecifier: 'remoteCounter/Counter',
  fallbackComponent: () => 'fallbacked',
  loadingElement: 'Loading',
});

export default function Page() {
  return (
    <div>
      <RemoteCounter init={808} />
    </div>
  );
}
```

以上是 `safeRemoteComponent` API 的描述和用法示例。详细的说明可参考示例代码。

### 如何加载远端模块？

要加载远端模块，可以使用 `rawMfImport` 方法。该方法接受一个包含以下参数的对象作为参数：

- `entry`：远程模块的入口文件路径，例如 `http://localhost:8001/remote.js`。
- `moduleName`：远程模块的名称，例如 `Counter`。
- `remoteName`：远程模块的远程名称，例如 `remoteCounter`。

调用 `rawMfImport` 方法会返回一个 Promise，该 Promise 最终会 resolve 为远程模块的内容。

```ts
const RemoteCounter = React.lazy(() => {
  return rawMfImport({
    entry: 'http://localhost:8001/remote.js',
    moduleName: 'Counter',
    remoteName: 'remoteCounter',
  });
});
```

请参考示例代码中的调用示例。

### `safeRemoteComponentWithMfConfig`函数的使用方法

`safeRemoteComponentWithMfConfig`是一个高阶组件，用于封装`rawMfImport`函数。

该函数接收一个`RawRemoteComponentOpts`类型的参数`opts`，参数包括以下字段：

- `mfConfig`：一个包含以下字段的对象：
  - `entry`：远程组件的入口路径。
  - `moduleName`：远程组件的模块名称。
  - `remoteName`：远程组件的远程名称。
- `fallbackComponent`：一个组件类型，用作远程组件加载失败时的回退组件。
- `loadingElement`：一个 React 节点，用作远程组件加载过程中的加载元素。

该函数返回一个组件类型`T`，可以用于渲染远程组件。

示例代码如下：

```ts
const RemoteCounter = safeRemoteComponentWithMfConfig<
  React.FC<{ init?: number }>
>({
  mfConfig: {
    entry: 'http://localhost:8001/remote.js',
    moduleName: 'Counter',
    remoteName: 'remoteCounter',
  },
  fallbackComponent: () => 'raw Fallback',
  loadingElement: 'raw Loading',
});

export default function Page() {
  return <RemoteCounter />;
}
```

以上代码使用`safeRemoteComponentWithMfConfig`函数封装了一个远程组件`RemoteCounter`，远程组件从`http://localhost:8001/remote.js`的`Counter`模块中导入，远程名称为`remoteCounter`。在远程组件加载过程中，会显示"raw Loading"元素，加载失败时会显示"raw Fallback"组件。

请注意，该文档没有包含完整的示例代码，只是提供了一个示例以演示`safeRemoteComponentWithMfConfig`函数的使用方法。

### 动态注册 Module Federation 模块远端配置

`registerMfRemote` 是一个用于动态注册 Module Federation 模块远端配置的函数。

**函数定义**

```ts
type MFModuleRegisterRequest = { entry: string; remoteName: string; aliasName?:string; }
registerMfRemote (opts: MFModuleRegisterRequest): void
```

**参数**

- `entry` (string): 远端模块的入口地址。
- `remoteName` (string): 远端模块的名称。
- `aliasName` (string, 可选): 注册远端模块的别名。

通过使用 `registerMfRemote` 函数，我们可以在使用 `safeMfImport` 或者 `safeRemoteComponent` 导入远端模块之前进行远端模块的注册。这样可以简化使用 `rawMfImport` 导入远端模块时的操作。

**示例代码**

```ts
registerMfRemote({
  aliasName: 'registered',
  remoteName: 'remoteCounter',
  entry: 'http://127.0.0.1:8001/remote.js',
});

const RemoteCounter = React.lazy(() => {
  return safeMfImport('registered/Counter', { default: null });
});
```

在上面的示例中，我们首先通过 `registerMfRemote` 函数注册了一个远端模块，将其名称设置为 `remoteCounter`，入口地址设置为 `http://127.0.0.1:8001/remote.js`，并为其设置了一个别名 `registered`。然后我们使用 `safeMfImport` 导入了注册的远端模块，路径为 `registered/Counter`。

这样，我们就可以在使用 `safeMfImport` 或者 `safeRemoteComponent` 导入远端模块时，直接使用注册时设置的别名和远端模块名称，而不需要显式地指定远端模块的路径。

**示例代码链接**

[示例代码](https://github.com/umijs/umi/blob/master/examples/mf-host/src/pages/register-then-import.tsx)

### 使用 Module Federation 插件和 MFSU

Module Federation 插件和 MFSU 可以一起使用，下面是它们的原理和配置示例：

假设我们使用以下 mf 插件的配置：

```ts
// .umirc.ts
export default defineConfig({
  mf: {
    name: 'remoteMFName',
    remotes: [
      {
        name: 'remote1',
        entry: 'https://to.the.remote.com/remote.js',
      },
      {
        aliasName: 'aliasRemote',
        name: 'remote2',
        entry: 'https://to.the.remote.com/remote2.js',
      },
    ],
    shared: {
      react: {
        singleton: true,
        eager: true,
      },
      'react-dom': {
        singleton: true,
        eager: true,
      },
    },
  },
});
```

对应的生效配置如下：

```ts
{
  mfsu: {
    remoteName: 'remoteMFName',
    remoteAliases: ['remote1', 'aliasRemote'],
    shared: {
      react: {
        singleton: true,
        eager: true,
      },
      'react-dom': {
        singleton: true,
        eager: true,
      },
    }
  },
  mf: {
    name: 'remoteMFName',
    remotes: [
      {
        name: 'remote1',
        entry: 'https://to.the.remote.com/remote.js',
      },
      {
        aliasName: 'aliasRemote',
        name: 'remote2',
        entry: 'https://to.the.remote.com/remote2.js',
      },
    ],
    shared: {
      react: {
        singleton: true,
        eager: true,
      },
      'react-dom': {
        singleton: true,
        eager: true,
      },
    },
  },
}
```

以上是 Module Federation 插件和 MFSU 的配置。这样配置可以使 Module Federation 插件和 MFSU 在开发阶段正常使用，并允许调试模块。

请注意，输出文档不包含具体示例，但尽量包含更多的原始文本信息，并且要简洁精确、符合前端开发的基础。
