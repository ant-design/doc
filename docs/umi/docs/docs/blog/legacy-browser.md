### Umi 4 默认不支持哪些浏览器？

Umi 4 默认不支持IE浏览器。如果需要调整默认的兼容目标，可以在`.umirc.ts`文件中指定明确的[targets](../docs/api/config#targets)。

```ts
// .umirc.ts

export default {
  targets: { chrome: 67 },
};
```

### Umi 4 默认兼容的浏览器版本是多少？

Umi 4 默认的编译兼容目标是`chrome: 80`版本。

### 如何反馈关于 Umi 4 兼容性的问题？

如果你想反馈关于 Umi 4 兼容性的问题或参与讨论，可以访问[issue / 8656](https://github.com/umijs/umi/issues/8658)。

### 如何调整 Umi 的兼容目标？
如果你只需要兼容非现代浏览器，并且不需要兼容到 IE，你可以调整 Umi 的兼容目标 [targets](../docs/api/config#targets)。

### Umi 默认使用哪种构建工具？
Umi 4 默认使用现代构建工具，将产物生成至 `es6`。如果你需要将产物打包为 `es5`，可以调整配置。

### 如何调整 Umi 的构建工具配置？
如果你想将 Umi 的产物打包为 `es5`，你可以在 `.umirc.ts` 文件中添加如下配置：

```ts
// .umirc.ts

export default {
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',
};
```

以上是调整 Umi 的构建工具配置的示例代码。

### Umi 4 中 `legacy` 模式有什么作用？

Umi 4 提供了一个名为 `legacy` 的配置，用于构建降级。通过在 `.umirc.ts` 文件中进行配置，可以启用该功能。默认情况下，`legacy` 模式仅在构建时生效，并尝试构建出适用于 IE 浏览器的产物。

### 如何在 Umi 4 中配置 `legacy` 模式？

要在 Umi 4 中启用 `legacy` 模式，需要在 `.umirc.ts` 文件中进行配置。可以简单地将以下配置添加到该文件中：

```ts
export default {
  legacy: {},
};
```

通过这样的配置，就可以启用 `legacy` 模式，并在构建时生成兼容于 IE 浏览器的产物。

### 在 Umi 4 中，`legacy` 模式的限制是什么？

`legacy` 模式在 Umi 4 中具有一些限制。详细的限制信息可以在官方文档的 [legacy](../docs/api/config#legacy) 部分找到。在这里，你可以了解到使用 `legacy` 模式时的详细限制和注意事项。通过了解这些限制，你可以更好地理解并正确地使用 `legacy` 模式。

### legacy mode 的作用是什么？

legacy mode 是在使用 UmiJS 构建项目时的一个配置选项。当 legacy mode 开启时，默认会转译全部 `node_modules`，也就是将所有第三方依赖的 ES6+ 代码转换为 ES5 代码。这对于一些不支持 ES6 语法的环境（比如 IE11）是很有用的，因为它可以确保项目在这些环境下正常运行。

### 开启 legacy mode 对构建时间有什么影响？

在大型项目中，开启 legacy mode 可能会极大地增加构建时间。这是因为需要对所有的 `node_modules` 进行转译，对于数量庞大的第三方依赖，这个过程可能会耗费很多时间。因此，在项目中需要权衡是否开启 legacy mode，以及需要考虑项目中第三方依赖的具体情况。

### 如何自定义 legacy mode 的转换范围？

如果你了解当前项目使用的第三方依赖情况，并且知道哪些依赖不再提供 ES5 产物，那么你可以关闭 `nodeModulesTransform` 这个选项，改为使用 `extraBabelIncludes` 来定点配置额外需要转换的包。

例如，在`.umirc.ts`文件中的配置如下所示：

```ts
export default {
  legacy: {
    nodeModulesTransform: false,
  },
  extraBabelIncludes: ['some-es6-pkg', /@scope\//],
};
```

上述配置中，将 `nodeModulesTransform` 设置为 `false` 即关闭了对 `node_modules` 下所有第三方依赖的转换。同时，通过 `extraBabelIncludes` 配置数组，可以指定需要额外纳入转换范围的包，比如 `some-es6-pkg` 或者以 `@scope/` 开头的包。

通过这样的方式，可以更精确地控制项目中哪些包需要进行转换，从而减少构建时间和编译开销。

### 如何提高项目的兼容性和鲁棒性？

在开发项目过程中，为了确保项目能够在被淘汰的浏览器中运行，并且处理一些边界情况，我们可以采取以下措施来提高项目的兼容性和鲁棒性。

#### 使用全量的 polyfill

通过在项目中添加全量的 polyfill，我们可以增强项目的鲁棒性。这些 polyfill 可以填补目标浏览器环境缺少的功能。可以选择通过 CDN 引入 polyfill.js 文件，也可以使用工具如 [core-js-builder](https://github.com/zloirock/core-js/tree/master/packages/core-js-builder) 构建自己需要的 polyfill 产物。在配置文件中，可以将 polyfill.js 以前置脚本的形式引入项目。

#### 使用动态 polyfill 服务

另一种方式是使用动态 polyfill 服务。这种服务根据当前浏览器的请求 User-Agent (UA) 动态下发所需的 polyfill。一个常用的动态 polyfill 服务是 [polyfill.io](https://polyfill.io/v3/polyfill.min.js)。如果速度是一个考虑因素，可以使用国内的 [alicdn polyfill.io](http://polyfill.alicdn.com/v3/polyfill.min.js) 服务。另外，你还可以使用 [polyfill-service](https://github.com/Financial-Times/polyfill-service) 自建一个类似的动态 polyfill 服务。

#### 其他注意事项

当你处于内外网隔离的开发环境时，可以考虑将所有 polyfill 的 JavaScript 内容传入内网，在内网的 CDN 使用，或者将其放入 public 目录等方式使用。使用前置引入脚本的意义在于，在项目的 JavaScript 资源运行之前就准备好一个完整的、被 polyfill 过的 API 环境。

以上是提高项目兼容性和鲁棒性的一些建议和注意事项。根据具体的需求和环境，可以选择适合自己项目的方法来提高兼容性和鲁棒性。

### 如何在开发环境验证 Ant Design 的兼容性？

在开发环境中验证 Ant Design 的兼容性可以通过以下步骤进行：

1. 将 `legacy.buildOnly` 设置为 `false`。

2. 为了支持 IE 11，在 `headScripts` 配置中添加一个前置的 polyfill，可以使用 [http://polyfill.alicdn.com/v3/polyfill.min.js](http://polyfill.alicdn.com/v3/polyfill.min.js) 的地址。

3. 启动本地服务，例如使用 `umi preview` 或 [`serve`](https://www.npmjs.com/package/serve)、nginx 等。

4. 在 IE 11 浏览器中访问本地服务，验证 Ant Design 是否能够正常运行。

请注意，由于开发注入的 es6 代码会在第一位运行，IE 11 并不能完整支持开发时的热更新，并且可能需要手动清除缓存后才能看到最新的页面。因此在验证过程中需要做好充分的准备。

### 如何使用 `umi preview` 验证 Ant Design 的兼容性？

使用 `umi preview` 验证 Ant Design 的兼容性可以按照以下步骤进行：

1. 打开终端，并切换到项目的根目录。

2. 运行 `umi preview` 命令。

3. 在浏览器中访问生成的本地服务地址。

4. 在 IE 11 浏览器中访问本地服务地址，验证 Ant Design 是否能够正常运行。

请注意，在验证过程中可能需要手动清除缓存后才能看到最新的页面。

### 如何使用 `serve` 验证 Ant Design 的兼容性？

使用 `serve` 验证 Ant Design 的兼容性可以按照以下步骤进行：

1. 打开终端，并切换到项目的根目录。

2. 安装 `serve`，如果已安装则可以跳过此步骤。

3. 运行 `serve` 命令。

4. 在浏览器中访问生成的本地服务地址。

5. 在 IE 11 浏览器中访问本地服务地址，验证 Ant Design 是否能够正常运行。

请注意，在验证过程中可能需要手动清除缓存后才能看到最新的页面。