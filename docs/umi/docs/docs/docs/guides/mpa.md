#### Umi 支持哪些模式？

Umi 支持传统的 MPA（多页面应用）模式。在 MPA 模式下，Umi 会将 `src/pages` 目录下的 `*/index.[jt]sx?` 文件作为 webpack entry 进行打包。这种模式不涉及路由、history 或 umi.js，适用于一些特定场景，比如 H5 开发、插件开发等。

#### Umi 4 的 MPA 模式有哪些特点？

Umi 4 的 MPA 模式是真正的 MPA（多页面应用）模式，与 Umi 3 的 MPA 实现不同。在 Umi 4 中，MPA 模式无法使用大量插件能力，只适合用作构建工具。
  
#### Umi 4 的 MPA 模式适用于哪些场景？

Umi 4 的 MPA 模式适用于一些特定场景，比如需要开发 H5 或插件的场景。由于其特点是真正的 MPA，无法使用大量插件能力，因此只适合当作构建工具使用。

1. 如何开启 mpa 功能？
   通过配置文件中的 `mpa` 属性即可开启 mpa 功能。具体配置项如下：
   - `template` ：设置产物 HTML 模板的路径。
   - `getConfigFromEntryFile` ：是否从每个页面的入口文件中读取页面独立配置。
   - `layout` ：设置全局默认的 layout。
   - `entry` ：每个入口文件的配置，可以为每个页面的入口文件设置额外的属性。

2. MPA 的目录结构是怎样的？
   MPA 的目录结构是 `src/pages/${dir}/index.tsx` ，其中 `${dir}` 代表一个文件夹，每个文件夹都会生成一个页面，而文件夹内的 `index.tsx` 则是该页面的入口文件。

3. 如何获取示例代码？
   可以查看 [examples/mpa](https://github.com/umijs/umi/tree/master/examples/mpa) 目录下的代码示例，可以从中了解 MPA 的具体实现方式。

### 约定的入口文件是哪些？

默认的入口文件是 `src/pages` 目录下的 `*/index.[jt]sx?` 文件。

### 如何确定入口文件的名称和路径？

入口文件的名称和路径由 `src/pages` 目录下的子目录决定，子目录的名称即为入口文件的名称，入口文件的路径为 `src/pages/子目录/index.[jt]sx?`。

举例来说，如果 `src/pages` 目录下有 `foo` 和 `bar` 两个子目录，则入口文件的名称分别为 `foo` 和 `bar`，而入口文件的路径分别为 `src/pages/foo/index.[jt]sx?` 和 `src/pages/bar/index.[jt]sx?` 。

### 构建后会生成哪些文件？

构建后会为每个入口文件生成相应的 HTML 文件，文件名分别为入口文件的名称加上 `.html` 后缀。

例如，如果有 `foo` 和 `bar` 两个入口文件，则构建后会生成 `foo.html` 和 `bar.html` 两个文件。

## 如何声明配置文件 `config.json`？

在前端开发中，我们可以通过在入口文件同级目录下创建一个 `config.json` 文件来声明配置信息。比如，在以下目录结构中：

```
+ src/pages
  + foo
    - index.tsx
    - config.json
```

我们可以在 `foo` 目录下创建一个名为 `config.json` 的文件，用来配置页面的独立布局和标题。配置文件的内容可以是一个 JSON 对象，包含以下可选字段：

* `template`：模板路径，可以参考 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 的模板写法，并可以使用 lodash template 语法来使用变量。
* `layout`：页面布局，建议使用 `@/` 开头引用 src 目录下的文件。
* `title`：页面标题，默认为入口文件所在的目录名。
* `mountElementId`：页面渲染时，挂载到节点的 id，默认为 `root`。

以上是目前默认支持的配置项。通过在 `config.json` 文件中设置这些字段，我们可以方便地进行页面的配置。

## 如何使用 `template` 字段？

在 `config.json` 配置文件中，我们可以使用 `template` 字段来指定模板路径。模板路径的写法可以参考 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 的模板写法。

同时，我们还可以使用 lodash template 语法来使用变量。这样，我们就可以根据需要动态地生成模板内容。

## 如何使用 `layout` 字段？

在 `config.json` 配置文件中，我们可以使用 `layout` 字段来指定页面的布局。建议使用 `@/` 开头引用 src 目录下的文件，这样可以更方便地管理我们的布局文件。

通过设置 `layout` 字段，我们可以将不同页面关联到不同的布局组件上，实现页面布局的灵活配置。

## 如何使用 `title` 字段？

在 `config.json` 配置文件中，我们可以使用 `title` 字段来指定页面的标题。如果不设置 `title` 字段，默认的标题将是入口文件所在目录的名称。

通过设置 `title` 字段，我们可以根据需求为不同的页面设置不同的标题，提升用户体验。

## 如何使用 `mountElementId` 字段？

在 `config.json` 配置文件中，我们可以使用 `mountElementId` 字段来指定页面渲染时挂载到的节点的 id。如果不设置 `mountElementId` 字段，默认的挂载节点 id 将是 `root`。

通过设置 `mountElementId` 字段，我们可以指定页面在渲染时挂载到特定的节点上，从而更灵活地控制页面的渲染位置。

**问题1：Umi 如何通过配置 `mpa: { getConfigFromEntryFile: true }` 开启试验性配置读取方式？**

Umi 通过配置 `mpa: { getConfigFromEntryFile: true }` 来开启试验性配置读取方式。这意味着可以不使用 `config.json` 来配置页面，而是在入口文件中通过 `export const config` 导出页面的配置。

**问题2：如何在入口文件中导出页面的配置？**

在入口文件中，可以通过以下方式导出页面的配置：

```ts
export const config = {
  layout: '@/layouts/bar.ts',
  title: 'foooooo',
}
```

这里的例子中，`config` 对象包含了页面的布局和标题信息。具体可以根据实际需要导出其他的配置信息。

**问题3：试验性配置读取方式适用于哪些场景？**

试验性配置读取方式适用于 Umi 的多页面应用场景。通过这种方式，可以将页面的配置信息直接集成到入口文件中，减少对 `config.json` 的依赖。这种方式可以让开发者更灵活地管理页面配置，同时提高配置的可读性和维护性。

请注意，试验性配置读取方式目前还处于试验阶段，可能存在一些限制和潜在的问题。在使用过程中需要谨慎评估和测试，确保适合当前项目的需求。

### 默认渲染方式是什么？
默认渲染方式为 react，入口文件只需导出 react 组件，即可进行渲染，无需自行写 `ReactDOM.render` 逻辑。

### 如何启用 React 17 的渲染方式？
如果需要 React 17 的渲染方式，请在项目中安装 React 17 的依赖，框架会自动适配 React 版本。

```bash
$ pnpm i react@17 react-dom@17
```

### 框架是否支持 React 18？
是的，框架默认启用 React 18。

1. 如何使用自定义全局 HTML 模板？

您可以通过设置 `template` 配置来定义自定义全局 HTML 模板。在模板中，您需要确保包含 `<%= title %>` 和 `<%= mountElementId %>` 这两个变量，以使模板能够正确渲染。

以下是一个示例的默认模板：

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <div id="<%= mountElementId %>"></div>
  </body>
</html>
```

您可以根据自己的需求来修改模板，比如添加其他的 HTML 标签、导入 CSS 或 JS 文件等。

2. 可以对不同页面使用不同的模板吗？

是的，您可以进行页面级配置，为不同的页面使用不同的模板。只需在页面配置中指定相应的模板路径，即可实现页面级定制。

请注意，无论是全局模板还是页面级模板，都需要包含 `<%= title %>` 和 `<%= mountElementId %>` 这两个变量，以便正确渲染页面的标题和根元素。

通过这种方式，您可以灵活地管理不同页面的布局和结构，满足不同页面的特定需求。