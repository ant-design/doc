### umi 的配置文件应该放在哪个目录下？

- umi 的配置文件可以放在项目根目录的 `.umirc.ts` 文件或者 `config/config.ts`。
- 这两个文件功能一致，只是存在的目录不同。
- `.umirc.ts` 文件的优先级较高。

### umi 的配置文件是什么类型的文件？

- umi 的配置文件是一个正常的 Node 模块。

### umi 的配置文件在哪里使用？

- umi 的配置文件在执行 umi 命令行时使用。
- 配置文件不包含在浏览器端构建中。

### umi 的配置文件的范例是怎样的？

以下是一个最简单的 umi 配置文件的范例：

```ts
import { defineConfig } from 'umi';

export default defineConfig({
  outputPath: 'dist',
});
```

使用 `defineConfig` 包裹配置是为了在书写配置文件时能得到更好的拼写联想支持。如果不需要，可以直接 `export default {}`。

### umi 的运行时配置是什么？

- umi 中的运行时配置指的是在浏览器端构建中使用的一些配置。
- 运行时配置在样式表现上产生作用。
- umi 将这些配置统一称为“运行时配置”。

请注意，你无需了解每个配置的作用，只需要在需要时查看如何启用和修改所需的配置即可。

### alias 配置项是什么作用？

- 类型：`Record<string, string>`
- 默认值：`{}`

alias 配置项用来配置别名，将 import 语句中的源路径映射成目标路径。

例如，我们可以这样配置：

```js
{
  alias: {
    foo: '/tmp/to/foo',
  }
}
```

这样，在代码中使用`import 'foo'`时，实际上会加载`/tmp/to/foo`。

### 如何正确配置 alias？

有几个配置 alias 的小贴士：

1. 最好使用绝对路径作为别名的值，特别是当别名指向依赖时，记得使用`require.resolve`来获取绝对路径，例如：

```js
// ⛔
{
  alias: {
    foo: 'foo',
  }
}

// ✅
{
  alias: {
    foo: require.resolve('foo'),
  }
}
```

2. 如果不希望子路径也被映射，可以在别名后面添加`$`后缀，例如：

```js
// import 'foo/bar' 会被映射为 import '/tmp/to/foo/bar'
{
  alias: {
    foo: '/tmp/to/foo',
  }
}

// import 'foo/bar'仍然会被解析为import 'foo/bar'，不会被修改
{
  alias: {
    foo$: '/tmp/to/foo',
  }
}
```

通过以上配置的小贴士，可以更灵活地配置 alias，实现路径映射的需求。

### autoprefixer

**类型**：object

**默认值**：`{ flexbox: 'no-2009' }`

autoprefixer 是一个用于解析 CSS 并自动添加供应商前缀的工具。它可以根据 Can I Use 的数据来确定要添加哪些前缀，并且可以根据配置项进行自定义。

你可以在 [autoprefixer 的配置项](https://github.com/postcss/autoprefixer#options) 查看更多配置信息。

**问：autoprefixer 的作用是什么？**

答：autoprefixer 用于解析 CSS 并根据 Can I Use 的数据为 CSS 规则自动添加供应商前缀。

**问：autoprefixer 的默认配置是什么？**

答：autoprefixer 的默认配置是 `{ flexbox: 'no-2009' }`。

**问：我可以如何配置 autoprefixer？**

答：你可以根据需要进行配置，具体的配置项可以在 [autoprefixer 的配置项](https://github.com/postcss/autoprefixer#options) 中查看。

### `analyze` 的类型是什么？默认值是什么？

- 类型：`object`
- 默认值：`{}`

### `analyze` 的作用是什么？

`analyze` 是一个用于配置 analyzer 插件的具体选项，它可以通过指定 `ANALYZE` 环境变量来分析构建产物的组成。这个选项的具体配置项可以参考 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin)。

当使用 Vite 模式时，某些选项会自动转换适配，包括 `excludeAssets`、`generateStatsFile`、`openAnalyzer`、`reportFilename`、`reportTitle`。

### 如何使用 `analyze` 配置项？

你可以根据自己的需要来配置 `analyze`，并且通过设置 `ANALYZE` 环境变量来启用分析功能。具体的配置项可以参考 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin)。

如果你使用的是 Vite 模式，部分选项会自动适配，无需手动配置。这些选项包括 `excludeAssets`、`generateStatsFile`、`openAnalyzer`、`reportFilename`、`reportTitle`。

### 怎样配置 `analyze` 的相关选项？

要配置 `analyze` 的具体选项，你需要参考 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin) 中的文档，并按照文档中的说明进行配置。

如果你使用的是 Vite 模式，可以使用自定义的 [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) 配置，并且相关的选项会自动转换适配。

### base 配置是什么？

- 类型：`string`
- 默认值：`/`

### 当在非根目录下部署 umi 项目时，如何使用 base 配置？

要在非根目录下部署 umi 项目时，可以通过设置 base 配置来实现。base 配置允许为应用程序设置路由前缀。比如有路由 `/` 和 `/users`，设置 base 为 `/foo/` 后就可以通过 `/foo/` 和 `/foo/users` 访问之前的路由。

> 注意：base 配置必须在构建时设置，并且不能在不重新构建的情况下更改，因为该值内联在客户端包中。

### `cacheDirectoryPath` 是什么类型的属性？

`cacheDirectoryPath` 是一个字符串类型的属性。

### `cacheDirectoryPath` 的默认值是什么？

`cacheDirectoryPath` 的默认值是 `node_modules/.cache`。

### 如何修改 `cacheDirectoryPath` 的值？

要修改 `cacheDirectoryPath` 的值，你可以使用 `cacheDirectoryPath` 配置，并将其设置为你想要的目录路径。例如，你可以将缓存文件路径更改为 `node_modules/.cache1`，如下所示：

```js
cacheDirectoryPath: 'node_modules/.cache1',
```

### chainWebpack 的作用是什么？

chainWebpack 是一个函数，用于扩展 Umi 内置的 webpack 配置。通过链式编程的方式修改 webpack 配置，可以对现有的 webpack 配置进行定制化的修改。

### chainWebpack 函数的参数有哪些？

chainWebpack 函数接受两个参数：

1. `memo`：现有的 webpack 配置。可以通过修改 `memo` 来对 webpack 配置进行修改。
2. `args`：包含一些额外信息和辅助对象的参数。目前有两个属性：
   - `env`：表示当前环境，值为 "development" 或 "production"。
   - `webpack`：Webpack 对象，可以从中获取 webpack 内置插件等。

### 如何在 chainWebpack 中修改 webpack 配置？

可以通过修改 `memo` 对象来对 webpack 配置进行定制化的修改。以下是一些使用示例：

- 设置 alias：

  ```js
  memo.resolve.alias.set('foo', '/tmp/to/foo');
  ```

- 添加额外插件：

  ```js
  memo.plugin('hello').use(Plugin, [...args]);
  ```

- 删除 Umi 内置插件：

  ```js
  memo.plugins.delete('hmr');
  ```

可以根据具体需求使用不同的链式编程 API 来对 webpack 配置进行修改。

### 如何使用 chainWebpack 函数？

在 Umi 的配置文件中，通过导出一个对象的方式来定义配置项，其中包含了一个名为 `chainWebpack` 的函数。将需要的修改逻辑写在 `chainWebpack` 函数中即可。

例如：

```js
export default {
  chainWebpack(memo, { env, webpack }) {
    // 在这里进行 webpack 配置的修改
  },
};
```

根据具体需求编写相应的修改逻辑即可。

### clickToComponent 的类型是什么？

clickToComponent 的类型是一个对象，包含一个可选的属性 `editor`，其值是一个字符串。

### clickToComponent 的默认值是什么？

clickToComponent 的默认值是 `false`。

### clickToComponent 只有 React 项目支持吗？

是的，当前仅 React 项目支持 clickToComponent 功能。

### 如何开启 clickToComponent？

开启 clickToComponent 功能后，你可以通过 `Option+Click/Alt+Click` 来点击组件并跳转至编辑器源码位置，同时也可以使用 `Option+Right-click/Alt+Right-click` 打开上下文并查看父组件。

### clickToComponent 的 editor 参数是什么？

clickToComponent 的 `editor` 参数代表编辑器名称，默认为 'vscode'，也支持 `vscode` 和 `vscode-insiders`。

更多关于 clickToComponent 的配置信息，请参考 [click-to-component](https://github.com/ericclemmons/click-to-component)。

### 如何配置 clickToComponent？

你可以使用以下示例代码来配置 clickToComponent：

```ts
// .umirc.ts
export default {
  clickToComponent: {},
};
```

### clientLoader 是什么类型的数据？

clientLoader 是一个对象类型的数据。

### clientLoader 的默认值是什么？

clientLoader 的默认值是 `false`。

### 如何开启 clientLoader？

要开启 clientLoader，需要在 `.umirc.ts` 配置文件中设置 `clientLoader` 属性为一个空对象 `{}`。具体配置方式如下：

```ts
// .umirc.ts
export default {
  clientLoader: {},
};
```

### codeSplitting 的策略方案有哪些？

codeSplitting 提供了以下三种策略方案：

1. bigVendors：这是大 vendors 方案，它会将 async chunk 中的 node_modules 下的文件打包到一起，以避免重复。然而，它存在两个缺点：一是单文件的尺寸过大，二是缺乏缓存效率。

2. depPerChunk：与 bigVendors 类似，但是它按照 package name + version 进行拆分依赖，解决了 bigVendors 的尺寸和缓存效率问题。然而，这也可能导致请求数量增加。对于非大型项目而言，这个方案还是合适的，因为单个页面的请求不会包含过多的依赖，并且基于 HTTP/2，几十个请求并不成问题。但是对于大型项目或巨型项目，需要考虑更合适的方案。

3. granularChunks：这个策略方案介于 bigVendors 和 depPerChunk 之间，既能在尺寸上取得折衷，又能更好地利用缓存效率。除非有特殊场景要求，推荐使用 granularChunks 策略。

### 默认的 codeSplitting 策略是什么？

codeSplitting 的默认值为 `null`。

### 建议使用哪种 codeSplitting 策略？

一般情况下，建议使用 granularChunks 策略作为 codeSplitting 的方案。这个方案在尺寸和缓存效率上都能有更好的平衡。当然，具体的选择还要根据项目的规模和特殊需求来进行评估和决策。

### conventionRoutes

### 类型

`{ base: string; exclude: RegExp[] }`

### 默认值

`null`

### 描述

修改默认的约定式路由规则。该配置项仅在使用 umi 约定式路由时有效。约定式路由也被称为文件路由，它不需要手动编写配置文件，而是通过分析目录、文件以及文件命名来生成路由配置。

在使用约定式路由时，系统会将 `src/pages` 目录下的所有以 `.js`、`.jsx`、`.ts` 或 `.tsx` 结尾的文件作为路由文件。

> 你可以参考[约定式路由](../guides/routes#约定式路由)了解更多详细说明。

### 修改约定式路由规则

### 类型

`{ base: string; exclude: RegExp[] }`

### 默认值

`null`

### 描述

用于修改约定式路由的默认规则。该设置仅在使用 umi 约定式路由时生效。约定式路由是一种无需手动编写路由配置的方式，它通过分析目录、文件和命名规则来生成路由配置。

当使用约定式路由时，系统会将 `src/pages` 目录下的所有以 `.js`、`.jsx`、`.ts` 或 `.tsx` 结尾的文件视为路由文件。

> 如需详细了解约定式路由，请参考[约定式路由](../guides/routes#约定式路由)。

### 约定式路由配置说明

### 类型

`{ base: string; exclude: RegExp[] }`

### 默认值

`null`

### 描述

此配置项用于修改约定式路由的默认规则。约定式路由也被称为文件路由，它无需手动编写路由配置，而是通过分析目录、文件和命名规则来生成路由配置。

在使用约定式路由时，系统会将 `src/pages` 目录下所有以 `.js`、`.jsx`、`.ts` 或 `.tsx` 结尾的文件视为路由文件。

> 如需了解更多关于约定式路由的信息，请参考[约定式路由](../guides/routes#约定式路由)文档。

### 如何使用 `exclude` 配置来过滤不需要的文件？

在配置中使用 `exclude` 可以过滤掉一些不需要的文件，比如在 `conventionRoutes` 中过滤掉 `components` 和 `models` 目录下的文件。

示例代码如下：

```js
conventionRoutes: {
  exclude: [/\/components\//, /\/models\//],
}
```

以上的配置会将 `components` 和 `models` 目录下的文件排除在路由识别之外。

### copy 类型是什么？

copy 是一个数组类型，可以包含字符串或对象类型。字符串表示要复制到输出目录的文件或文件夹。对象类型可以配置具体的拷贝位置，包括 from（源文件或文件夹路径）和 to（目标文件夹路径）属性。

### copy 的默认值是什么？

copy 的默认值是一个空数组，即 `[]`。

### 如何配置 copy？

可以通过数组方式配置要复制到输出目录的文件或文件夹。数组中的每个元素可以是字符串或对象。

- 如果是字符串，则默认将文件或文件夹拷贝到产物目录。
- 如果是对象，则可以通过 from 属性指定源文件或文件夹路径，通过 to 属性指定目标文件夹路径。

例如：

```ts
copy: ['foo.json', 'src/bar.json'];
```

上述配置将会把 foo.json 和 src/bar.json 文件拷贝到产物目录，并生成相应的目录结构：

```
+ dist
  - bar.json
  - foo.json
+ src
  - bar.json
- foo.json
```

另外，也可以通过对象配置具体的拷贝位置，其中相对路径的起点为项目根目录：

```ts
copy: [
  { from: 'from', to: 'dist/output' },
  { from: 'file.json', to: 'dist' },
];
```

上述配置将会把 from 文件夹下的内容拷贝到 dist/output 文件夹中，并将 file.json 文件拷贝到 dist 文件夹中，并生成相应的目录结构：

```
+ dist
  + output
    - foo.json
  - file.json
+ from
  - foo.json
- file.json
```

### crossorigin 的类型是什么？

crossorigin 是一个对象，类型为 `{ includes?: string[] }`。

### crossorigin 的默认值是什么？

crossorigin 的默认值是 `false`。

### 如何配置 script 标签的 crossorigin？

要配置 script 标签的 crossorigin，可以通过设置 crossorigin 的属性。如果设置了 crossorigin 参数，本地 script 标签会被加上 `crossorigin="anonymous"` 的属性。

另外，还可以通过 includes 参数为额外的非本地 script 标签加上 crossorigin 属性。

例如：

```javascript
crossorigin: {
}
```

在输出的 HTML 中会有以下变化：

```diff
-
<script src="/umi.js"></script>
+
<script src="/umi.js" crossorigin="anonymous"></script>
```

希望以上信息对您有所帮助。如果还有其他问题，请随时提问。

### cssMinifier 是什么？

cssMinifier 是一个配置项，用于指定构建过程中使用的 CSS 压缩工具。它可以设置为以下几个可选值：

- `esbuild`：表示使用 esbuild 工具进行 CSS 压缩。
- `cssnano`：表示使用 cssnano 工具进行 CSS 压缩。
- `parcelCSS`：表示使用 parcelCSS 工具进行 CSS 压缩。
- `none`：表示不进行 CSS 压缩。

默认情况下，cssMinifier 的值为 `esbuild`。

### 如何配置 cssMinifier？

在配置文件中，可以使用以下代码片段来配置 cssMinifier：

```js
{
  cssMinifier: 'esbuild';
}
```

其中，将 `cssMinifier` 属性的值设置为所需的压缩工具名称即可。

### 什么时候需要设置 cssMinifier？

当我们需要在构建过程中对 CSS 文件进行压缩时，可以通过设置 cssMinifier 来指定使用的压缩工具。

如果不进行 CSS 压缩，则可以将 cssMinifier 的值设置为 `none`。

需要注意的是，选择合适的 cssMinifier 工具可以帮助我们减少 CSS 文件的体积，提高页面加载速度。

以上就是关于 cssMinifier 的介绍，希望对你有所帮助！

### cssMinifierOptions

### 类型：`object`

### 默认值：`{}`

### 说明：

`cssMinifier` 是一个用于压缩 CSS 的工具，而 `cssMinifierOptions` 则是它的配置选项。

### 示例：

```js
{
  cssMinifier: 'esbuild',
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
}
```

### 相关文档链接：

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [cssnano 参考](https://cssnano.co/docs/config-file/)
- [parcelCSS 参考](https://github.com/parcel-bundler/parcel-css/blob/master/node/index.d.ts)

### CSS 压缩工具配置选项

### 类型：`object`

### 默认值：`{}`

### 说明：

`cssMinifierOptions` 是 CSS 压缩工具的配置选项之一。

### 示例：

```js
{
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
}
```

### 相关文档链接：

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [cssnano 参考](https://cssnano.co/docs/config-file/)
- [parcelCSS 参考](https://github.com/parcel-bundler/parcel-css/blob/master/node/index.d.ts)

### CSS 压缩工具的配置选项

### 类型：`object`

### 默认值：`{}`

### 说明：

`cssMinifierOptions` 是 CSS 压缩工具的配置选项。

### 示例：

```js
{
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
}
```

### 相关文档链接：

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [cssnano 参考](https://cssnano.co/docs/config-file/)
- [parcelCSS 参考](https://github.com/parcel-bundler/parcel-css/blob/master/node/index.d.ts)

### cssLoaderModules 是什么？

cssLoaderModules 是一个对象类型的配置项，用于配置 css modules 的行为。

### cssLoaderModules 的默认值是什么？

cssLoaderModules 的默认值是一个空对象 `{}`。

### 如何配置 cssLoaderModules？

要配置 cssLoaderModules，你可以按照以下示例进行操作：

```ts
cssLoaderModules: {
  // 配置驼峰式使用
  exportLocalsConvention: 'camelCase';
}
```

配置中的 `exportLocalsConvention` 字段用于指定导出流行的约定方式，例如使用驼峰式命名。

### 如何开启 `deadCode` 检测功能？

在项目的构建阶段，可以通过配置 `deadCode` 选项来开启未使用文件和导出的检测功能。默认情况下，该功能是关闭的。

具体配置如下：

```javascript
deadCode: {
}
```

### 如何自定义 `deadCode` 检测的范围和排除范围？

你可以使用 `patterns` 和 `exclude` 选项来自定义 `deadCode` 检测的代码范围和排除范围。

例如，要将检测范围限制在 `src/pages/**` 目录下，可以这样配置：

```javascript
deadCode: {
  patterns: ['src/pages/**'];
}
```

要排除 `src/pages/utils/**` 目录下的文件检测，可以这样配置：

```javascript
deadCode: {
  exclude: ['src/pages/utils/**'];
}
```

### 如何处理 `deadCode` 检测失败？

默认情况下，`deadCode` 检测失败不会终止进程。你可以通过设置 `failOnHint` 选项为 `true` 来使检测失败时终止进程。

例如：

```javascript
deadCode: {
  failOnHint: true;
}
```

### 如何关闭 `deadCode` 检测？

如果你不想进行未使用文件和导出的检测，可以将 `detectUnusedFiles` 和 `detectUnusedExport` 选项设置为 `false`。

例如：

```javascript
deadCode: {
  detectUnusedFiles: false,
  detectUnusedExport: false
}
```

### 如何指定 `context`？

`context` 选项用于指定匹配开始的目录，默认为当前项目的根目录。如果需要修改匹配的起始目录，可以对 `context` 进行配置。

例如：

```javascript
deadCode: {
  context: 'src';
}
```

以上就是关于 `deadCode` 的基本配置信息，你可以根据需求自定义配置来进行文件和导出的检测。

### 定义

定义是通过使用 define-plugin 插件来设置代码中可用的变量。它的类型是 `Record<string, string>`，默认值如下：

```javascript
{
  'process.env.NODE_ENV': process.env.NODE_ENV,
  'process.env.HMR': process.env.HMR,
  'process.env.SOCKET_SERVER': process.env.ERROR_OVERLAY
}
```

注意以下几点：

- 属性值会经过一次 `JSON.stringify` 转换。
- key 值的替换是通过语法形式来匹配的，比如配置了 `{'a.b.c': 'abcValue'}` 是无法替换代码中的 `a.b?.c` 的。

例如，如果你定义了 `{ FOO: 'bar' }`，那么代码中的 `console.log(hello, FOO)` 会被编译成 `console.log(hello, 'bar')`。

当你在 TypeScript 的项目中使用这些变量时，你需要在 typings 文件中声明变量类型，以支持 TypeScript 类型提示。

如果你的 typings 文件是全局的：

```typescript
// typings.d.ts
declare const FOO: string;
```

如果你的 typings 文件是非全局的（包含了 import/export）：

```typescript
// typings.d.ts
import './other.d.ts';

declare global {
  const FOO: string;
}
```

请根据以上信息进行操作，以便正确地使用定义的变量。

### devtool 类型是什么？

devtool 类型是一个字符串类型的配置项。它用于设置 sourcemap 的生成方式。

### devtool 默认值是什么？

devtool 默认值取决于配置的环境。在开发环境下，默认值为 `cheap-module-source-map`，在生产环境下，默认值为无 sourcemap。

### devtool 可选的常见值有哪些？

常见的可选值有：

- `eval`：这是最快的类型，但不支持低版本的浏览器。
- `source-map`：这是最慢但最全的类型。

示例：

```js
// 关闭 dev 阶段的 sourcemap 生成
devtool: false;

// 只在开发环境下设置 sourcemap
devtool: process.env.NODE_ENV === 'development' ? 'eval' : false;
```

### esbuildMinifyIIFE 是什么类型的变量？默认值是多少？

esbuildMinifyIIFE 是一个布尔类型的变量，默认值为 false。

### esbuildMinifyIIFE 修复了什么问题？

esbuildMinifyIIFE 修复了使用 esbuild 压缩器时，自动注入的全局变量导致的命名冲突问题。这个问题可能会导致异步块全局变量冲突，以及 qiankun 子应用和主应用全局变量冲突等。

### 如何使用 esbuildMinifyIIFE 来解决命名冲突问题？

为了解决 esbuild 压缩器自动引入的全局变量导致的命名冲突问题，可以通过以下两种解决方案之一：

1. 将 esbuildMinifyIIFE 设置为 true。
2. 切换使用其他压缩器，比如可以使用 `jsMinifier` 来替代 esbuild。

具体信息可以参考 [vite#7948](https://github.com/vitejs/vite/pull/7948)。

### externals 的类型是什么？

externals 的类型是 `Record<string, string> | Function`。

### externals 的默认值是什么？

externals 的默认值是 `{}`。

### externals 有什么作用？

externals 的作用是设置哪些模块不打包，转而通过 `<script>` 或其他方式引入。通常需要搭配 headScripts 配置使用。

示例：

```javascript
// external react
externals: { react: 'React' },
headScripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
```

注意：不要轻易设置 antd 的 externals，由于依赖较多，使用方式复杂，可能会遇到较多问题，并且一两句话很难解释清楚。

### `extraBabelIncludes` 是什么配置项？

`extraBabelIncludes` 是一个数组类型的配置项，用于指定需要通过 Babel 编译的额外的 NPM 包或目录。该配置项可以帮助我们在项目中对特定的包或目录进行转译处理。

### `extraBabelIncludes` 的默认值是什么？

`extraBabelIncludes` 的默认值是一个空数组 `[]`。

### 如何配置 `extraBabelIncludes`？

可以通过以下示例代码来配置 `extraBabelIncludes`：

```js
export default {
  extraBabelIncludes: [
    // 支持绝对路径
    join(__dirname, '../../common'),
    // 支持 npm 包
    'react-monaco-editor',
    // 转译全部路径含有 @scope 的包
    /@scope/,
  ],
};
```

在以上示例中，我们可以看到在 `extraBabelIncludes` 中可以使用绝对路径、npm 包名称和正则表达式来配置需要进行 Babel 编译的包或目录。这些配置可以帮助我们将特定的包或目录包含在 Babel 的编译范围内。

### 什么是 `exportStatic`？

- 类型：`{ extraRoutePaths: IUserExtraRoute[] | (() => IUserExtraRoute[] | Promise<IUserExtraRoute[]>), ignorePreRenderError: boolean }`
- 默认值：`undefined`

`exportStatic` 是一个配置项，用于在构建静态站点时针对每个路由单独输出 HTML 文件。通过开启 `exportStatic`，可以将路由页面静态化，适用于静态站点托管的场景。

### 问题 2：如何使用 `exportStatic`？

开启 `exportStatic` 后，在默认情况下，会根据路由配置输出相应的 HTML 文件。例如，有以下路由：

```bash
/
/docs
/docs/a
```

不开启 `exportStatic` 时，会输出一个 `dist/index.html` 文件。

开启 `exportStatic` 后，会为每个路由单独输出 HTML 文件，例如：

```bash
dist/index.html
dist/docs/index.html
dist/docs/a/index.html
```

此外，可以通过 `extraRoutePaths` 子配置项产出额外的页面，通常用于动态路由静态化。例如：

```ts
export default {
  exportStatic: {
    // 配置固定值
    extraRoutePaths: ['/news/1', '/news/2'],
    // 也可以配置函数动态获取
    extraRoutePaths: async () => {
      const res = await fetch('https://api.example.com/news');
      const data = await res.json();
      return data.map((item) => `/news/${item.id}`);
    },
  },
};
```

上述配置的作用是，除了默认的路由静态化外，还会将额外的 `/news/1` 和 `/news/2` 路由静态化输出。如果是通过异步函数获取额外的路由，需要返回一个数组。

###如何禁用预渲染？

`extraRoutePaths` 不仅支持配置字符串数据，还可以配置成对象数组，用于启用 SSR 时对部分路由禁用预渲染的场景。例如：

```ts
export default {
  exportStatic: {
    // 输出额外页面文件但跳过预渲染
    extraRoutePaths: [{ path: '/news/1', prerender: false }],
  },
};
```

在上述配置中，`extraRoutePaths` 的类型是一个对象数组，每个对象包含 `path` 和 `prerender` 两个属性。设置 `prerender` 的值为 `false` 表示对 `/news/1` 路由禁用预渲染。

### 问题 4：如何处理预渲染失败的错误？

当 `exportStatic` 与 `ssr` 结合使用时，会进行预渲染。如果预渲染失败，构建过程会抛出异常并终止构建。可以通过配置 `ignorePreRenderError` 来忽略预渲染失败的错误。例如：

```ts
export default {
  exportStatic: {
    // 忽略预渲染失败的错误
    ignorePreRenderError: true,
  },
};
```

在上述配置中，设置 `ignorePreRenderError` 的值为 `true`，表示忽略预渲染失败的错误，继续执行构建过程。

以上是关于 `exportStatic` 配置项的使用方式和注意事项的详细说明。

### favicons 的类型是什么？

favicons 的类型是 `string[]`。

### favicons 的默认值是什么？

favicons 的默认值是 `null`。

### 如何自定义 favicons？

通过指定一个字符串数组来自定义 favicons。可以使用完整的地址或者相对于项目根目录的路径。例如：

```js
favicons: [
  // 完整地址
  'https://domain.com/favicon.ico',
  // 相对路径，将指向 /favicon.png ，确保项目中有 public/favicon.png 文件
  '/favicon.png',
];
```

请注意，favicons 的自定义是用于替换默认的站点图标。

### forkTSChecker 的类型是什么？

类型是 object。

### forkTSChecker 的默认值是多少？

默认值是 null。

### forkTSChecker 是什么？

forkTSChecker 是一种用于开启 TypeScript 的类型检查的配置项。它基于 fork-ts-checker-webpack-plugin，并可以参考该插件的选项进行配置。你可以在 [fork-ts-checker-webpack-plugin 的 Options](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options) 上找到更多相关的信息。

### hash

### 类型：boolean

### 默认值：false

开启 hash 模式，让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。

启用后，产物通常是这样，

```
+ dist
    - logo.sw892d.png
    - umi.df723s.js
    - umi.8sd8fw.css
    - index.html
```

注意：HTML 文件始终没有 hash 后缀。

####

hash 模式的作用是什么？

#### 回答一：

hash 模式的作用是让 build 之后的产物包含 hash 后缀，用于增量发布和避免浏览器加载缓存。

####

启用 hash 模式后，产物的命名规则是怎样的？

#### 回答二：

启用 hash 模式后，产物的命名规则通常是以原始文件名加上 hash 后缀，例如 `umi.df723s.js` 和 `umi.8sd8fw.css`。

####

HTML 文件是否也会添加 hash 后缀？

#### 回答三：

不会，HTML 文件始终没有 hash 后缀。

### headScripts 类型是什么？

headScripts 的类型是一个数组，数组元素可以是字符串或对象。

### headScripts 的默认值是什么？

headScripts 的默认值是一个空数组 `[]`。

### headScripts 是用来做什么的？

headScripts 用来配置 `<head>` 标签中的额外 script。可以通过配置字符串或对象来添加 script 到页面中。

### headScripts 的配置示例有哪些？

1. 如果配置为字符串，则该字符串会被直接插入到 `<script>` 标签中。

例如：

```
headScripts: [`alert(1);`, `https://a.com/b.js`]
```

会生成如下的 HTML：

```html
<script>
  alert(1);
</script>
<script src="https://a.com/b.js"></script>
```

2. 如果配置为对象，则可以添加额外的属性，比如 `src`、`defer`、`content`、`charset` 等。

例如：

```
headScripts: [
  { src: '/foo.js', defer: true },
  { content: `alert('你好');`, charset: 'utf-8' },
]
```

会生成如下的 HTML：

```html
<script src="/foo.js" defer></script>
<script content="alert('你好');" charset="utf-8"></script>
```

以上是 headScripts 的常见配置示例。你可以根据需要自定义配置。

### helmet

- 类型：boolean
- 默认值：true

#

什么是 `helmet`？

####

`helmet` 是一个配置 `react-helmet-async` 的集成项。它负责集成 `react-helmet-async` 到项目中。当该配置项为 `false` 时，`react-helmet-async` 不会被集成，因此无法从框架中使用 `import { Helmet }`，同时构建产物的尺寸也会减少。了解更多关于 [react-helmet-async](https://bundlephobia.com/package/react-helmet-async) 的信息。

### helmet

- 类型：boolean
- 默认值：true

#

`helmet` 的默认值是什么？

####

`helmet` 的默认值是 `true`，即为开启状态。默认情况下，`react-helmet-async` 会被集成到项目中，`import { Helmet }` 可以在项目中被使用。

### helmet

- 类型：boolean
- 默认值：true

#

如何关闭 `helmet` 的集成？

####

要关闭 `helmet` 的集成，可以将配置项设置为 `false`。这样会导致 `react-helmet-async` 不会被集成到项目中，因此无法从框架中使用 `import { Helmet }`。此外，构建产物的尺寸也会减少。

### 关于开启 dev 的 https 模式

在 Umi 4 中，默认可以通过使用 [`mkcert`](https://github.com/FiloSottile/mkcert) 快捷方式来创建证书。在开启 https 模式之前，请确保已经安装了相应的工具。

以下是开启 https 模式的参数说明：

- `cert`：用于指定证书文件的路径
- `key`：用于指定私钥文件的路径
- `hosts`：指定支持 https 访问的主机，这里默认是 `['127.0.0.1', 'localhost']`
- `http2`：指定是否使用 HTTP 2.0 协议，默认为 true（值为 false 可以解决在 Chrome 或 Edge 浏览器中偶然出现的 `ERR_HTTP2_PROTOCOL_ERRO` 报错）

示例用法如下：

```js
https: {
  cert: '/path/to/cert/file',
  key: '/path/to/key/file',
  hosts: ['example.com', 'localhost'],
  httpfalse,
}
```

请根据实际情况填写参数值。

### icons

- 类型：`{ autoInstall: {}; alias: Record<string,string>; include: Array<string>; }`
- 默认值：`false`

如何使用 umi 导出的 Icon 组件引用 icon 集或本地的图标？

### umi 导出的 Icon 组件如何快捷引用 icon 集？

通过 umi 导出的 Icon 组件可以快速引用 icon 集或本地的图标，请问如何使用？

### umi 导出的 Icon 组件如何快速引用本地的图标？

通过 umi 导出的 Icon 组件可以快速引用本地的图标，请问如何使用？

### umi 配置文件中如何开启 icons 功能？

在 umi 配置文件中，你可以通过设置 `icons` 属性来开启 icons 功能。具体可以按照以下步骤进行设置：

1. 打开 umi 配置文件。
2. 在配置文件中找到 `icons` 属性，并将其设置为一个对象。
3. 在该对象中添加 `autoInstall` 属性，并将其值设置为空对象 `{}`。

以下是一个示例代码：

```ts
icons: { autoInstall: {} },
```

这样就成功地开启了 icons 功能。

### 在页面中如何使用 Icon 组件？

在页面中使用 Icon 组件可以通过以下步骤进行：

1. 导入 `Icon` 组件：

```ts
import { Icon } from 'umi';
```

2. 在代码中使用 `<Icon>` 标签，并设置 `icon` 属性：

```ts
<Icon icon="fa:home" />
```

在上述代码中，`icon` 属性的值是一个字符串，它由 `collect:icon` 组成，通过 `:` 进行分割。

推荐在 [Icônes 网站](https://icones.js.org/) 上搜索符合你需求的图标，然后按照 `collect:icon` 的形式进行引用。

希望以上信息能够帮助到你。

### 什么是 Icon 集？

Icon 集是一种图标库的集合，通过特定的命名方式进行标识。可以在 umi 配置文件中配合使用。通常，你可以在 [Icônes 网站](https://icones.js.org/)上搜索合适的图标，并使用`collect:icon`的形式进行引用。

希望以上解释能够对你有帮助。

### umi 配置文件中如何开启 icons 功能？

在 umi 配置文件中设置 `icons: {}` ，即可开启 icons 功能。这个配置项可以用于管理本地 svg icon。

### 本地 svg icon 的使用方法是什么？

要使用本地 svg icon，首先需要将对应的 svg 文件保存在 `src/icons` 目录下。然后，可以通过 `local` 这个前缀来引用该 svg 图标。例如，如果在 `src/icons` 目录下保存了一个名为 `umi.svg` 的 svg 文件，可以使用以下方式进行引用：

```tsx
import { Icon } from 'umi';
<Icon icon="local:umi" />;
```

以上代码会将 `umi.svg` 组件作为一个 icon 渲染出来。

### 配置项介绍 - autoInstall

`autoInstall` 是一个配置项，用于指定是否自动安装 icon 集。它有以下取值：

- `true`：表示自动安装 icon 集。
- `false`：表示不自动安装 icon 集。

需要注意的是，`tnpm` 和 `cnpm` 客户端暂不支持自动安装 icon 集，但你可以通过手动按需安装对应的 icon 集合包 `@iconify-json/collection-name`。其中，`collection-name` 是指[Icon 集合列表](https://github.com/iconify/icon-sets/blob/master/collections.md)中的 **_Icon set prefix_** 项。

### 配置项介绍 - alias

`alias` 是一个配置项，用于配置 icon 的别名。通过配置 `alias:{home:'fa:home'}`，你可以将 `fa:home` 这个 icon 设置为 `home` 的别名。这样，你可以通过 `icon="home"` 来使用 `fa:home` 这个 icon。

### 配置项介绍 - include

`include` 是一个配置项，用于配置需要强制使用的 icon。例如，通过设置 `include: ['fa:home', 'local:icon']`，你可以强制要求使用 `fa:home` 和 `local:icon` 这两个 icon。

`include` 配置项常见的使用场景是将 icon 字符串定义在一个 map 中，导致无法检测到，在 `mdx` 中使用了 `Icon` 组件。

希望以上的信息对你有所帮助。如果有任何疑问，请随时向我提问。

### Icon 组件的属性有哪些？

Icon 组件有以下属性：

1. icon：用于指定图标的类型。
2. width：用于设置图标的宽度。
3. height：用于设置图标的高度。
4. viewBox：用于设置图标的视口框。
5. style：用于设置图标外部容器的样式。
6. className：用于设置图标外部容器的样式名。
7. spin：用于设置图标是否自动旋转。
8. rotate：用于配置旋转角度，支持多种格式，如整数、角度单位（例如 "30deg"）、百分比（例如 "25%"）。
9. flip：用于设置图标的翻转方向，支持 "vertical"、"horizontal"，或者它们的组合（例如 "vertical,horizontal"）。

希望以上信息能够对你有所帮助。

### Icon 组件的 spin 属性有什么作用？

Icon 组件的 spin 属性用于设置图标是否自动旋转。当 spin 属性为 true 时，图标会以固定速度自动旋转；当 spin 属性为 false 或者不设置时，图标不会自动旋转。

### Icon 组件的 rotate 属性支持哪些格式？

Icon 组件的 rotate 属性支持多种格式来配置旋转角度。以下是几种常见的格式：

- 整数：设置图标按顺时针旋转的角度，如 rotate={90} 表示图标顺时针旋转 90 度。
- 角度单位：使用带有角度单位的字符串来设置旋转角度，如 rotate="30deg" 表示图标顺时针旋转 30 度。
- 百分比：使用带有百分比的字符串来设置旋转角度，百分比相对于图标的原始大小，如 rotate="25%" 表示图标以宽度的 25% 为旋转角度进行旋转。

除了以上几种格式，还可以根据特定需求设置其他格式的旋转角度。

希望以上回答能够解决你的疑惑。如有任何其他问题，请随时告诉我。

### jsMinifier (webpack) 是什么？

jsMinifier (webpack) 是用于配置构建时压缩 JavaScript 的工具。它接受一个字符串类型的值，可选值为 `esbuild`, `terser`, `swc`, `uglifyJs` 和 `none`。默认值为 `esbuild`，表示使用 esbuild 进行压缩。

### 如何配置 jsMinifier (webpack)？

你可以在 webpack 配置文件中使用以下示例进行配置：

```ts
{
  jsMinifier: 'esbuild';
}
```

这个示例将会启用 esbuild 压缩 JavaScript。

### 如何禁用压缩功能？

如果你想禁用 JavaScript 压缩功能，可以将 `jsMinifier` 的值设置为 `none`。这样 webpack 在构建过程中将不会使用任何压缩工具。

```ts
{
  jsMinifier: 'none';
}
```

这样配置之后，JavaScript 文件将不会被压缩。

请注意，以上提供的示例仅供参考，你可以根据自己的需求进行配置。

### `jsMinifierOptions` 是什么？

答案：`jsMinifierOptions` 是一个类型为对象的配置项，用于配置 `jsMinifier` 这个选项。默认情况下，使用 `jsMinifier` 压缩代码会移除代码中的注释，但可以通过设置 `jsMinifierOptions` 来保留注释。

### `jsMinifierOptions` 的默认值是什么？

答案：`jsMinifierOptions` 的默认值是一个空对象 `{}`。

### 如何使用 `jsMinifierOptions` 进行配置？

答案：可以通过以下示例代码来配置 `jsMinifierOptions`：

```js
{
  jsMinifier: 'esbuild',
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  }
}
```

在上述示例中，`jsMinifier` 设置为 `'esbuild'`，而 `jsMinifierOptions` 配置了三个属性：`minifyWhitespace`、`minifyIdentifiers` 和 `minifySyntax`，并分别设置为 `true`。这些具体的配置项和对应的工具有关，可以参考对应的文档。

具体的参考文档如下：

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [terser 参考](https://terser.org/docs/api-reference#minify-options)
- [swc 参考](https://swc.rs/docs/configuration/minification#configuration)
- [uglifyJs 参考](https://lisperator.net/uglifyjs/compress)

1. 什么是 lessLoader？

   - 类型：object
   - 默认值：{ modifyVars: userConfig.theme, javascriptEnabled: true }
   - lessLoader 是用于配置 less-loader 的选项。它允许你使用 less@4 版本，默认情况下启用了 javascriptEnabled，同时也可以根据需要使用 [less-options-math](https://lesscss.org/usage/#less-options-math) 来兼容 less@3。

2. lessLoader 的默认值是什么？

   - 默认值：{ modifyVars: userConfig.theme, javascriptEnabled: true }
   - lessLoader 的默认值是一个对象，其中包含两个属性：modifyVars 和 javascriptEnabled。modifyVars 使用了 userConfig.theme，并且 javascriptEnabled 被设置为 true。

3. 如何设置 lessLoader？
   - 参考文档：[less-loader 的 Options](https://github.com/webpack-contrib/less-loader#lessoptions)
   - 可以通过配置 less-loader 的 Options 来设置 lessLoader。具体参考 [less-loader 的 Options](https://github.com/webpack-contrib/less-loader#lessoptions)。

希望以上信息能对你有所帮助。如果有其他问题，请随时提出。

### legacy 选项的作用是什么？

legacy 选项的作用是兼容低版本浏览器。当开启 legacy 选项时，打包工具将使用非现代的方式进行构建，这可能会显著增加构建时间。

### 如何开启 legacy 选项？

legacy 选项默认在构建时生效。如果要关闭该限制，可以将 buildOnly 选项设为 false。

### 如何检查产物的语法是否为 es5 格式？

可以通过打开 checkOutput 选项来自动运行 es-check 检查产物的语法。es-check 是一个插件，用于检查.js 文件的语法是否为 es5 格式。

### 开启 legacy 选项后会有哪些影响？

开启 legacy 选项后会有以下影响：

- 不支持自定义 srcTranspiler、jsMinifier、cssMinifier 选项。
- 将转译全部 node_modules 内的源码，将兼容性设为 ie11，可以通过设置 nodeModulesTransform 选项为 false 来取消对 node_modules 的转换，然后通过配置 extraBabelIncludes 来更精准地转换有兼容性问题的包。
- 因低版本浏览器不支持 Top level await，在使用 externals 时，如果同时使用了同步导入依赖的 externalsType，请确保不在使用异步性质的 externalsType。

### manifest 参数的类型是什么？

manifest 参数的类型是一个包含两个属性的对象，属性为 `fileName` 和 `basePath`，它们的类型分别是字符串。

### mdx 类型的配置是什么？

mdx 类型的配置是一个对象，包含两个属性：`loader` 和 `loaderOptions`。

### mdx 配置的默认值是什么？

mdx 配置的默认值是一个空对象 `{}`。

### mdx loaderOptions 的配置参数在哪里可以找到？

mdx loaderOptions 的配置参数可以在 [这个链接](https://github.com/mdx-js/mdx/blob/v1/packages/mdx/index.js#L12) 找到。

### metas 有哪些字段？

metas 是一个数组，每一个元素都是一个对象，对象包含以下字段：

- name：表示 meta 标签的名称
- content：表示 meta 标签的内容

### metas 的默认值是什么？

metas 的默认值是一个空数组 `[]`。

### 如何配置额外的 meta 标签？

你可以通过配置 `metas` 属性来添加额外的 meta 标签。例如：

```js
metas: [
  { name: 'keywords', content: 'umi, umijs' },
  { name: 'description', content: 'React framework.' },
],
```

配置以上代码会生成以下的 HTML：

```html
<meta name="keywords" content="umi, umijs" />
<meta name="description" content="React framework." />
```

通过这种方式，你可以自定义和添加你需要的 meta 标签。

### mfsu 的配置参数 esbuild 是什么意思？

`esbuild` 是 `mfsu` 的配置参数之一。当将其配置为 `true` 时，会使用 esbuild 来预编译依赖，从而加快首次启动的速度。不过，缺点是二次编译不会有物理缓存，稍慢一些。推荐在项目依赖比较稳定的情况下使用该配置。

### mfsu 的配置参数 mfName 有什么作用？

`mfName` 是 `mfsu` 的配置参数之一。默认情况下，其值为 "mf"。在微前端中，为了避免主应用和子应用之间的冲突，可以通过配置 `mfName` 来设置 remote 库的全局变量。

### mfsu 的配置参数 cacheDirectory 是什么意思？

`cacheDirectory` 是 `mfsu` 的配置参数之一。它用来指定自定义的缓存目录，默认情况下为 "node_modules/.cache/mfsu"。通过设置 `cacheDirectory`，可以控制缓存文件的存放路径。

### mfsu 的配置参数 chainWebpack 有什么作用？

`chainWebpack` 是 `mfsu` 的配置参数之一。它可以通过链式编程的方式修改依赖的 webpack 配置。使用 `webpack-chain` 提供的 API，可以灵活地修改 webpack 配置。通过配置 `chainWebpack`，可以添加额外的插件或进行其他的自定义操作。

### mfsu 的配置参数 runtimePublicPath 是什么意思？

`runtimePublicPath` 是 `mfsu` 的配置参数之一。当将其配置为 `true` 时，会将修改 `mf` 加载文件的 publicPath 为 `window.publicPath`。这个配置参数可以影响 mf 加载文件的路径。

### mfsu 的配置参数 strategy 的取值和作用是什么？

`strategy` 是 `mfsu` 的配置参数之一。它用来指定 mfsu 编译依赖的时机。有两个可选的取值："normal" 和 "eager"。在 "normal" 模式下，会采用 babel 编译分析后，构建 Module Federation 远端包；而在 "eager" 模式下，会采用静态分析的方式，和项目代码同时发起构建。通过设置 `strategy` 可以控制 mfsu 的编译策略。

### mfsu 的配置参数 include 的作用是什么？

`include` 是 `mfsu` 的配置参数之一，仅在 `strategy: 'eager'` 模式下生效。它用于补偿在 eager 模式下，静态分析无法分析到的依赖。通过配置 `include`，可以指定需要包含在 Module Federation 远端模块中的依赖，例如 `react`。

### mfsu 的配置参数 exclude 的作用是什么？

`exclude` 是 `mfsu` 的配置参数之一，用于手动排除某些不需要被 MFSU 处理的依赖。可以通过字符串或正则的形式配置。例如，如果不希望 `vant` 走 MFSU 处理，可以配置 `{ exclude: [ 'vant' ] }`。匹配逻辑为全词匹配，也可以配置 `{ exclude: [ /vant/ ] }`，只要 `import` 路径中匹配该正则的依赖都不会走 MFSU 处理。通过设置 `exclude`，可以排除不需要处理的依赖。

1. 什么是 mock 功能？

   - `mock` 是一种前端开发工具，用于模拟接口返回数据，以便在前端开发过程中进行接口调试和功能开发。
   - 它可以通过配置文件指定需要模拟的接口数据，并在开发过程中使用模拟数据来替代实际的后端接口返回数据。

2. mock 功能的配置参数有哪些？

   - `exclude`：用于排除不需要的 mock 文件。
   - `include`：用于额外添加 mock 目录之外的 mock 文件。

3. 如何配置 mock 功能？
   - 创建一个配置文件，并在配置文件中添加 `mock` 属性。
   - 通过配置 `exclude` 和 `include` 来指定需要的 mock 文件。
   - 例如，使用通配符 `src/pages/**/_mock.ts` 来让所有 `pages` 目录下的 `_mock.ts` 文件成为 mock 文件。

注意：默认情况下，mock 功能是开启的。可以通过配置 `mock: false` 来关闭该功能。

### monorepoRedirect 的类型是什么？

monorepoRedirect 的类型是一个对象，可以包含以下属性：

- `srcDir`：一个字符串数组，用于调整识别源码文件夹的优先位置。
- `exclude`：一个正则表达式数组，用于设定不需要重定向的依赖范围。
- `peerDeps`：一个布尔值，表示是否开启 peerDeps 选项，用于自动添加 alias 重定向唯一化。
- `useRootProject`：一个布尔值，表示是否开启 useRootProject 选项，以使 monorepoRedirect 生效。

默认情况下，monorepoRedirect 的值为一个空对象 `{}`。

### 什么是 phantomDependency？

phantomDependency 是一个配置项，用于执行幽灵依赖检测。当使用未在 package.json 中声明的依赖，以及没有通过 alias 或 externals 进行配置时，会抛错并提醒。

### 问题 2：如何配置 phantomDependency 的 exclude 项？

可以通过 exclude 项实现白名单处理，将需要排除的 npm 依赖的包名添加到 exclude 数组中。

###可以举个例子说明如何配置 phantomDependency 的 exclude 项吗？

可以参考以下示例代码：

```
export default {
   phantomDependency: {
      exclude: ['lodash']
   }
}
```

以上配置将排除 lodash 这个 npm 依赖的检测。

### plugins

配置额外的 Umi 插件。可以通过数组项来指定插件的路径，路径可以是 npm 依赖、相对路径或绝对路径。当路径为相对路径时，会从项目根目录开始查找。

1. 什么是 Umi 插件？

   - Umi 插件是一种扩展机制，可以通过自定义插件来增强 Umi 的功能和特性。
   - 插件可以是 npm 依赖、相对路径或绝对路径，并且可以根据需要进行配置。

2. 插件的优先级如何确定？

   - 插件在数组中的位置决定了它们的优先级，越靠前的插件优先级越高。

3. 如何配置插件？

   - 在 `plugins` 配置项中，使用数组指定插件的路径。
   - 路径可以是 npm 依赖、相对路径或绝对路径。
   - 如果是相对路径，则会从项目根目录开始查找。

4. 举个例子说明如何配置插件。

```js
plugins: [
  // npm 依赖
  'umi-plugin-hello',
  // 相对路径
  './plugin',
  // 绝对路径
  `${__dirname}/plugin.js`,
];
```

- 上面的例子中，配置了三个插件，分别是 `umi-plugin-hello`（npm 依赖）、`./plugin`（相对路径）和 `${__dirname}/plugin.js`（绝对路径）。

希望以上回答能对你有所帮助，如有其他问题，请继续提问。

### polyfill

### 是什么？

polyfill 是一种按需引入的功能，用于填充浏览器不支持的特定功能或 API。它可以根据需求选择性地引入所需的 polyfill，以提高性能和减少代码体积。

### 如何配置 polyfill？

通过以下方式配置 polyfill：

```js
polyfill: {
  imports: ['core-js/stable'],
}
```

这样只会引入 core-js 的 stable 部分。

如果对性能有更高的要求，可以选择按需引入：

```js
polyfill: {
  imports: ['core-js/features/promise/try', 'core-js/proposals/math-extensions'],
}
```

### 如何关闭 polyfill？

可以通过以下方式关闭 polyfill：

- 将配置中的 `polyfill` 设置为 `false`
- 设置环境变量 `BABEL_POLYFILL=none`

请注意，polyfill 功能默认是开启的。

### presets

- 类型：`string[]`
- 默认值：`[]`

配置额外的 Umi 插件集。

- 什么是 Umi 插件集？
- 如何配置 Umi 插件集？
- 插件集的路径可以是哪些形式？

### 什么是 proxy 配置？

Proxy 配置是一种用来配置代理功能的对象。它可以帮助我们将特定的请求转发到指定的目标地址，从而实现在开发环境中进行跨域请求的目的。在开发环境中，我们可以通过配置 Proxy，将请求转发到其他的服务器，而不是直接发送到真实的 API 地址。

### 如何配置 Proxy 功能？

在配置中，我们可以使用一个对象来定义 Proxy。其中，对象的 key 表示需要转发的路径，value 表示转发的配置。

例如，在默认的配置中，我们可以使用以下的方式来配置 Proxy：

```js
proxy: {
  '/api': {
    'target': 'http://jsonplaceholder.typicode.com/',
    'changeOrigin': true,
    'pathRewrite': { '^/api' : '' },
  }
}
```

上述配置表示，当我们访问 `/api` 开头的路径时，将会转发到 `http://jsonplaceholder.typicode.com/` 这个目标地址。其中，`changeOrigin` 表示是否变更请求地址的来源，`pathRewrite` 表示对转发的路径进行重写操作。

### 在什么时候 Proxy 功能生效？

Proxy 功能只在开发环境中生效，它帮助我们解决在开发阶段中跨域请求的问题。在生产环境中，这个功能并不会生效。

所以，在开发环境中，当我们配置了 Proxy 并访问对应的路径时，请求会被转发到指定的目标地址，从而获取到对应的数据。

### reactRouter5Compat 是什么类型的属性？它的默认值是什么？

- 类型：`object`
- 默认值：`false`

### reactRouter5Compat 启用后会发生什么？

启用 reactRouter5Compat 后，路由组件的 props 会包含额外的属性，包括 location、match、history 和 params。这些属性与 react-router 5 的保持一致。

### 使用 reactRouter5Compat 会有哪些注意事项？

1. 此模式下会导致额外的重新渲染。
2. 虽然依赖库 history 更新了，但是 location 中仍然没有 query 属性。

### routeLoader 的类型与默认值是什么？

- 类型是 `{ moduleType: 'esm' | 'cjs' }`
- 默认值是 `{ moduleType: 'esm' }`

### routeLoader 的 moduleType 可以配置成什么值？

moduleType 可以配置成 `'esm'` 或者 `'cjs'`。

### routeLoader 配置为 'cjs' 时，加载路由组件是使用什么方式？

当 routeLoader 的 moduleType 配置为 `'cjs'` 时，会使用 `require` 的方式加载路由组件。例如：

```typescript
'index': React.lazy(() => Promise.resolve(require('../../pages/index.tsx'))),
```

这样加载的路由组件会以 Promise 的形式返回，并通过 `React.lazy()` 进行懒加载。

### umi run 命令的全局注入配置如何使用？

在 umi 的 run 命令中，可以通过配置 `{ globals: string[] }` 来进行全局注入设置。默认情况下，该配置项的值为 `null`。

为了省略每个脚本都要写 `import 'zx/globals';` 的步骤，可以将 `['zx/globals']` 添加到 `globals` 配置中。这样，在使用 `umi run ./script.ts` 命令时，umi 将自动注入 `import 'zx/globals';`。这种全局注入配置的设置方式能够提高开发效率。

### scripts

- 类型: `string[] | Script[]`
- 默认值: `[]`

配置 `<body>` 中额外的 script 标签。

### 字符串数组模式

- 描述: 使用字符串数组模式可以插入多个 script 标签到页面中。
- 示例:

```js
scripts: [`alert(1);`, `https://a.com/b.js`];
```

以上配置会生成以下 HTML：

```html
<script>
  alert(1);
</script>
<script src="https://a.com/b.js"></script>
```

### 对象数组模式

- 描述: 使用对象数组模式可以插入带有额外属性的 script 标签到页面中。
- 示例:

```js
scripts: [
  { src: '/foo.js', defer: true },
  { content: `alert('你好');`, charset: 'utf-8' },
];
```

以上配置会生成以下 HTML：

```html
<script src="/foo.js" defer></script>
<script charset="utf-8">
  alert('你好');
</script>
```

请注意，在对象数组模式中，每个对象都可以包含以下属性：

- `src`: script 标签的 src 属性，用于引入外部脚本文件。
- `content`: script 标签的内容。
- `defer`: 延迟加载脚本，在 HTML 解析完后再执行。
- `async`: 异步加载脚本。
- `charset`: 脚本的字符编码。
- `type`: 脚本的 MIME 类型。

以上是有关 scripts 的配置信息。

### styles 是什么？

styles 是一个配置项，用于配置额外的 CSS。它可以是一个字符串数组，数组中的每个字符串可以是内联样式或外联样式路径。

### styles 的默认值是什么？

styles 的默认值是一个空数组 `[]`。

### 如何配置 styles？

你可以将样式配置为一个字符串数组，数组中的每个字符串可以是内联样式或外联样式路径。如果是外联样式路径，则以 `https?://` 开头。

### 插入的样式会前置吗？

是的，插入的样式会前置。

### styles 的优先级如何？

styles 配置项的优先级比项目内用户编写的样式低。

### 请举一个例子说明如何配置 styles？

比如，你可以这样配置 styles：

```js
styles: [`body { color: red; }`, `https://a.com/b.css`],
```

以上配置会生成以下 HTML 代码：

```html
<style>
  body {
    color: red;
  }
</style>
<link rel="stylesheet" href="https://a.com/b.css" />
```

### srcTranspilerOptions 的类型是什么？

srcTranspilerOptions 的类型是一个对象，包含两个可选的属性 swc 和 esbuild，分别对应 SwcConfig 和 EsbuildConfig 类型。

### srcTranspilerOptions 的默认值是什么？

srcTranspilerOptions 的默认值是 undefined。

### 如果我使用 swc 或 esbuild 作为 srcTranspiler 转译器，我如何配置转译器？

如果你使用 swc 或 esbuild 作为 srcTranspiler 转译器，你可以通过 srcTranspilerOptions 选项进一步配置转译器。

具体的配置信息可以参考 [SwcConfig](https://swc.rs/docs/configuration/swcrc) 和 [EsbuildConfig](https://esbuild.github.io/api/#transform-api) 的配置文档。

例如，如果你想给 swc 添加其他的插件，可以按照以下示例进行配置：

```ts
srcTranspilerOptions: {
  swc: {
    jsc: {
      experimental: {
        plugins: [
          [
            '@swc/plugin-styled-components',
            {
              displayName: true,
              ssr: true,
            },
          ],
        ],
      },
    },
  },
}
```

以上配置会将 "@swc/plugin-styled-components" 插件添加到 swc 转译器中，配置插件的一些选项。

### svgr 是什么？

svgr 是一个对象类型，默认值为空对象 `{}`。它的作用是支持使用 React svg 组件，让开发者可以引入并使用 SVG 图标。

### svgr 的默认行为是什么？

svgr 默认开启，并且它的默认配置项参见 [@svgr/core > Config](https://github.com/gregberge/svgr/blob/main/packages/core/src/config.ts#L9) 文件。具体行为细节可以在该文件中查看。

### 如何使用 svgr？

要使用 svgr，首先需要引入相应的 SVG 图标文件。例如，使用 `import` 语句引入名为 `smile.svg` 的 SVG 文件，可以这样写：

```ts
import SmileUrl, { ReactComponent as SvgSmile } from './smile.svg';
```

这样就可以在项目中使用 `SvgSmile` 组件来展示 SVG 图标。

### targets 的类型是什么？

targets 的类型是 object。

### targets 的默认值是什么？

targets 的默认值是 { chrome: 80 }。

### 如何配置需要兼容的浏览器最低版本？

需要配置需要兼容的浏览器最低版本，可以使用 targets 属性，并将需要兼容的浏览器及其版本号作为对象的属性值。例如，如果需要兼容 ie11，可以配置如下：

```js
targets: {
  ie: 11,
}
```

注意：根据配置的浏览器版本，Umi 会自动引入对应的 polyfill、配置 autoprefixer 和做语法转换等操作。

### verifyCommit 参数中的 scope 有什么作用？

verifyCommit 参数中的 scope 字段用于配置允许的作用域。作用域可以理解为提交的类型或者影响的范围。比如常见的 scope 包括 `feat`（新增功能）、`fix`（修复 Bug）、`docs`（文档更新），等等。通过配置 scope 字段，可以限制允许的作用域种类，从而规范提交的类型。

默认情况下，verifyCommit 参数的 scope 字段包含了一些常见的作用域，如'feat'、'fix'、'docs'等。如果需要自定义允许的作用域，可以在配置中覆盖默认值，将需要的作用域添加到 scope 数组中。

需要注意的是，verifyCommit 参数的 scope 不区分大小写，即使作用域在配置中使用大写字母，实际提交时也可以使用小写字母。

### verifyCommit 参数中的 allowEmoji 是什么意思？

verifyCommit 参数中的 allowEmoji 字段用于开启或关闭允许使用 EMOJI 前缀。当 allowEmoji 字段为 true 时，提交消息可以使用 EMOJI 表情作为前缀，例如 `💥 feat(模块): 添加了个很棒的功能`。

允许使用 EMOJI 前缀可以增加提交消息的可读性和趣味性，同时也可以让提交消息更加具有个性化。但需要注意的是，开启 allowEmoji 字段后，需要在提交消息中适当使用 EMOJI，不应过度使用。

需要注意的是，默认情况下，allowEmoji 字段为 false，即不允许在提交消息中使用 EMOJI 前缀。如果需要开启该功能，可以在配置中将 allowEmoji 设置为 true。

### verifyCommit 参数对于特定的提交命令是否适用？

verifyCommit 参数对于特定的提交命令是适用的，具体来说，使用 `git revert` 或 `git merge` 命令以及 `changesets` 的发版 merge 格式所产生的 commit message 会默认通过验证。

verifyCommit 的作用是为了校验提交的消息格式，确保提交信息的规范性和一致性。无论是使用 `git revert` 还是 `git merge` 命令，或者是使用 `changesets` 的发版 merge 格式，所产生的 commit message 都需要符合 verifyCommit 参数中配置的规则，才会通过验证。

这样可以确保无论是撤销提交，还是合并分支，或者是进行版本发布，生成的 commit message 都符合一致的规范，方便团队进行版本管理和代码追溯。

### vite 的配置类型是什么？

- 类型：`object`

### vite 默认的配置是什么？

- 默认值：`{}`

### 开发者的配置会 merge 到 vite 的哪个配置？

开发者的配置会 merge 到 vite 的 [默认配置](https://vitejs.dev/config/)。
