### Umi 项目中的约定目录结构是怎样的？

在 Umi 项目中，推荐使用以下目录结构来组织代码：

```
.
├── config
│   └── config.ts
├── dist
├── mock
│   └── app.ts｜tsx
├── src
│   ├── .umi
│   ├── .umi-production
│   ├── layouts
│   │   ├── BasicLayout.tsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   ├── utils
│   │   └── index.ts
│   ├── services
│   │   └── api.ts
│   ├── app.(ts|tsx)
│   ├── global.ts
│   ├── global.(css|less|sass|scss)
│   ├── overrides.(css|less|sass|scss)
│   ├── favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)
│   └── loading.(tsx|jsx)
├── node_modules
│   └── .cache
│       ├── bundler-webpack
│       ├── mfsu
│       └── mfsu-deps
├── .env
├── plugin.ts
├── .umirc.ts
├── package.json
├── tsconfig.json
└── typings.d.ts
```

### Umi 项目中的 config 目录有什么作用？

在 Umi 项目中，config 目录用于存放项目的配置文件。其中，config.ts 文件是 Umi 的配置文件，用于配置 Umi 的构建行为和插件。通过修改 config.ts 文件，可以进行项目的各种自定义配置。

### Umi 项目中的 layout 目录有什么作用？

在 Umi 项目中，layout 目录用于存放项目的布局组件。其中，BasicLayout.tsx 是一个示例的布局组件，可以根据实际需求进行扩展或修改。index.less 是与 BasicLayout.tsx 相关联的样式文件。

### Umi 项目中的 models 目录有什么作用？

在 Umi 项目中，models 目录用于存放项目的数据模型。其中，global.ts 是一个示例的全局数据模型文件，通过定义全局数据模型，可以在整个项目中共享和管理数据。

### Umi 项目中的 pages 目录有什么作用？

在 Umi 项目中，pages 目录用于存放页面组件。其中，index.less 是与 index.tsx 相关联的样式文件。

### Umi 项目中的 utils 目录有什么作用？

在 Umi 项目中，utils 目录用于存放项目的工具类文件。其中，index.ts 是一个示例的工具类文件，可以根据需要添加更多的工具类文件。

### Umi 项目中的 services 目录有什么作用？

在 Umi 项目中，services 目录用于存放项目的服务类文件。其中，api.ts 是一个示例的服务类文件，可以根据需要添加更多的服务类文件。

### Umi 项目中的 app.(ts|tsx) 文件有什么作用？

在 Umi 项目中，app.(ts|tsx) 文件是 Umi 应用的入口文件。可以在这个文件中做一些初始化操作，比如设置全局样式、配置全局数据等。

### Umi 项目中的 global.ts 文件有什么作用？

在 Umi 项目中，global.ts 文件是全局样式文件。可以在这个文件中定义全局通用的样式。

### Umi 项目中的 global.(css|less|sass|scss) 文件有什么作用？

在 Umi 项目中，global.(css|less|sass|scss) 文件是全局样式文件。可以在这个文件中定义全局通用的样式。

### Umi 项目中的 overrides.(css|less|sass|scss) 文件有什么作用？

在 Umi 项目中，overrides.(css|less|sass|scss) 文件是用于覆盖第三方库样式的文件。可以在这个文件中修改第三方库的样式。

### Umi 项目中的 favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp) 文件有什么作用？

在 Umi 项目中，favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp) 文件是网站的图标文件。可以将自定义的图标文件放在这个目录下，并在项目中引用。

### Umi 项目中的 loading.(tsx|jsx) 文件有什么作用？

在 Umi 项目中，loading.(tsx|jsx) 文件是加载页面时显示的加载动画组件。可以根据需要修改或替换这个文件，实现自定义的加载动画效果。

### Umi 项目中的 .env 文件有什么作用？

在 Umi 项目中，.env 文件用于设置环境变量。可以在这个文件中定义一些环境相关的配置项。

### Umi 项目中的 plugin.ts 文件有什么作用？

在 Umi 项目中，plugin.ts 文件是用于配置 Umi 插件的文件。可以在这个文件中添加或配置 Umi 插件。

### Umi 项目中的 .umirc.ts 文件有什么作用？

在 Umi 项目中，.umirc.ts 文件是 Umi 的配置文件。它可以覆盖 config 目录下的 config.ts 文件的配置项。

### Umi 项目中的 package.json 文件有什么作用？

在 Umi 项目中，package.json 文件是项目的配置文件，用于管理项目的依赖和脚本命令等。

### Umi 项目中的 tsconfig.json 文件有什么作用？

在 Umi 项目中，tsconfig.json 文件是 TypeScript 的配置文件，用于配置 TypeScript 的编译行为和类型检查等。

### Umi 项目中的 typings.d.ts 文件有什么作用？

在 Umi 项目中，typings.d.ts 文件是 TypeScript 的声明文件，用于定义全局类型或模块类型的声明。

### Umi 4 是否会自动注册以 `@umijs/preset-`、`@umijs/plugin-`、`umi-preset-` 和 `umi-plugin-` 开头的插件、预设？

与 Umi 3 不同，Umi 4 不会自动注册以 `@umijs/preset-`、`@umijs/plugin-`、`umi-preset-` 和 `umi-plugin-` 开头的插件、预设。

### 如果需要自定义额外的插件、预设，我需要怎么做？

如果你需要自定义额外的插件、预设，你需要手动配置到 `plugins` 字段中。

### 我应该配置哪个字段来自定义额外的插件、预设？

你应该配置 `plugins` 字段来自定义额外的插件、预设。

### .umirc.ts 配置文件的功能是什么？

.umirc.ts 配置文件是 Umi 的非运行时配置文件之一，它与 config/config.ts 文件具有相同的功能。但是在选择时，只能选择其中一个，.umirc.ts 文件的优先级更高。

### .umirc.ts 配置文件包含哪些内容？

.umirc.ts 配置文件包含了 Umi 的所有非运行时配置，运行时配置通常定义在 app.ts 文件中。

### 如何在不同环境中加载不同配置？

在 Umi 中，可以通过设置 UMI_ENV 环境变量来实现在不同环境中加载不同的配置。下面是一个在不同环境下启动的示例：

```json
// package.json
{
  "scripts": {
    "dev": "umi dev",
    "dev:pre": "cross-env UMI_ENV=pre umi dev"
  }
}
```

以上是一个使用 cross-env 设置 UMI_ENV 为 pre 环境的示例。

### 什么是 public 目录？

public 目录是用于存放固定的静态资源的文件夹。在前端开发中，我们经常需要引用一些图片、字体等静态资源，这些资源在开发时可以通过在路径前加上 `/` 来直接访问到。而在构建时，这些静态资源会被拷贝到输出文件夹中，方便在生产环境中访问和加载。

### 如何使用 public 目录中的资源？

对于公共的 svg 资源，我们可以通过使用 [svgr](../api/config#svgr) 来直接导入并使用。可以将 svg 资源作为组件进行引用，从而实现在页面中展示 svg 图标的功能。例如，可以通过以下方式导入并使用 `smile.svg`：

```ts
import SmileUrl, { ReactComponent as SvgSmile } from './smile.svg';
// <SvgSmile />
```

而对于其他类型的静态资源，比如图片等，我们可以直接使用资源的导入路径来引用。可以通过以下方式导入并使用 `image.png`：

```tsx
import imgUrl from './image.png';
// <img src={imgUrl} />
```

这样就可以在页面中显示 `image.png` 这张图片了。

### 构建时 public 目录中的资源会发生什么？

在构建时，Umi 会将 public 目录中的静态资源拷贝到输出文件夹中。这样，我们在开发过程中使用的资源路径不会改变，但是在生产环境中，我们仍然可以通过相同的路径来访问和加载这些静态资源。这样做的好处是，保证了在开发和生产环境中的资源路径的一致性，方便维护和管理。

希望以上信息能够对你有所帮助！如果你还有其他问题，可以继续提问哦。

### 什么是`.umi-production`目录？

`.umi-production`目录是在 build 过程中生成的临时文件目录。在 build 过程中，入口文件、路由等文件都会被临时生成到该目录下。

### 为什么要避免提交`.umi-production`目录到 Git 仓库？

`.umi-production`目录中的文件通常是临时生成的，并不需要被纳入版本控制。因此，为了避免不必要的冗余和文件冲突，我们应将`.umi-production`目录添加到`.gitignore`中，从而防止将其提交到 Git 仓库中。

### 如何正确处理`.umi-production`目录？

在使用 Git 进行版本控制时，我们应将`.umi-production`目录添加到`.gitignore`文件中，从而告诉 Git 忽略该目录及其下的所有文件，避免将临时生成的文件提交到 Git 仓库。这样可以减少 Git 仓库的体积，避免文件冲突和冗余。

### 运行时配置文件是用来做什么的？

运行时配置文件是用来扩展运行时的能力的，例如修改路由、修改 render 方法等。它们在浏览器中运行，因此对于具有远程配置或动态内容的项目，需要在实际运行项目时动态获取这些配置。

### 为什么需要在浏览器中动态获取运行时配置？

在本地开发时，我们无法确定远程配置或动态内容的具体值，因此不能将其写死在代码中。通过在浏览器中动态获取运行时配置，可以使项目具备更强的灵活性和扩展性。

### 运行时配置文件如何扩展项目的能力？

运行时配置文件允许开发者在运行时修改项目的路由、render 方法等。通过修改这些配置，可以实现动态的页面路由和渲染逻辑，从而增加项目的灵活性和交互性。

以上是关于运行时配置文件的基本介绍，请注意在浏览器中动态获取运行时配置时的灵活性和扩展性。如果项目涉及远程配置或动态内容，请确保适当处理和获取这些配置。

### `layouts/index.tsx`

该文件是全局布局文件，会在所有路由下生效。下面是一个示例的路由配置：

```javascript
[
  { path: '/', component: '@/pages/index' },
  { path: '/users', component: '@/pages/users' },
];
```

在该示例中，布局文件会包含以下内容：

```jsx
<Layout>
  <Page>index</Page>
  <Page>users</Page>
</Layout>
```

如果你想要关闭布局功能，可以在路由配置中使用 `layout: false`。如果你需要更多层次的布局，可以考虑使用 `wrappers` 属性，但该属性只在配置式路由中可用。下面是示例路由配置：

```javascript
routes: [
  { path: '/', component: './index', layout: false },
  {
    path: '/users',
    component: './users',
    wrappers: ['@/wrappers/auth'],
  },
];
```

希望以上信息能对你有所帮助。

### 约定式路由的默认生成规则是什么？

约定式路由默认以 `pages/*` 文件夹的文件层级结构来生成路由表。

### 配置式路由中，component 的相对路径是如何查找文件的？

在配置式路由中，`component` 若写为相对路径，将从该文件夹为起点开始寻找文件。例如，`./index` 等价于 `@/pages/index`。

### 基础路由是什么？

基础路由是一种用于定义页面路由的配置方式。它通过指定路径和对应的组件来实现页面的访问和渲染。

### 基础路由的配置结构是怎样的？

基础路由的配置结构包括一个包含了路径（path）和组件（component）的对象。路径用于指定访问页面的 URL 路径，而组件则是该路径对应的页面在代码中的位置。

### 如何生成基础路由配置？

如果我们有一个名为 `pages` 的目录，并且目录下包含了多个子目录和文件，可以根据目录结构自动生成基础路由配置。生成的配置是一个数组，每个元素都包含了路径和组件。

例如，假设我们有以下目录结构：

```
+ pages/
  + users/
    - index.tsx
  - index.tsx
```

根据这个目录结构，我们可以自动生成基础路由配置如下：

```ts
[
  { path: '/', component: '@/pages/index.tsx' },
  { path: '/users/', component: '@/pages/users/index.tsx' },
];
```

这样我们就可以根据生成的配置配置页面的路由了。

### 基础路由有什么作用？

基础路由的作用是定义页面的 URL 路径和对应的组件，实现了页面的访问和渲染。通过基础路由配置，我们可以实现页面之间的跳转和导航，为用户提供友好的页面访问体验。

### 为什么要生成基础路由配置？

生成基础路由配置可以减少手动编写路由配置的工作量，特别是在目录结构较复杂的项目中，手动配置可能会非常繁琐和容易出错。自动生成基础路由配置可以提高开发效率，并且保证配置的准确性。

总结起来，基础路由是用于定义页面路由的配置方式，通过指定路径和组件来实现页面的访问和渲染。我们可以根据目录结构自动生成基础路由配置，减少手动配置的工作量，并提高开发效率。

### 什么是动态路由？

动态路由是指在路由配置中使用带有 `$` 前缀的目录或文件作为路由的一部分。这种路由配置可以根据路由地址中的参数动态生成对应的页面。

### 如何使用动态路由？

要使用动态路由，需要在路由配置中创建带有 `$` 前缀的目录或文件。如果 `$` 后面没有指定具体的参数名，则代表使用 `*` 通配符。可以根据以下目录结构进行路由配置：

```
+ pages/
  + foo/
    - $slug.tsx
  + $bar/
    - $.tsx
  - index.tsx
```

根据以上目录结构，会生成以下路由配置：

```ts
[
  { path: '/', component: '@/pages/index.tsx' },
  { path: '/foo/:slug', component: '@/pages/foo/$slug.tsx' },
  { path: '/:bar/*', component: '@/pages/$bar/$.tsx' },
];
```

### 为什么要使用动态路由？

使用动态路由可以实现根据不同的参数生成对应的页面，从而实现页面的动态加载和渲染。动态路由的主要优势是可以根据路由地址中的参数来生成页面，提供了更灵活的路由配置方式。

通过使用动态路由，可以简化路由配置的代码量，并提高开发效率。同时，动态路由还可以使页面具有更好的扩展性，方便在不同场景下动态生成不同的页面。

因此，在开发过程中，如果需要根据不同的参数来生成页面，就可以考虑使用动态路由。

### 如何在使用约定式路由时注册全局 404 页面？

在使用约定式路由时，可以通过创建名为 `pages/404.tsx` 的文件来注册全局 404 页面。系统会自动将该文件注册为全局的 fallback 页面，当用户访问不存在的路由时，将显示该页面作为 404 页面。

### 如何在配置式路由中配置兜底路由到路由表最后一个？

在配置式路由中，如果需要配置兜底路由到路由表的最后一个，可以按照以下步骤操作：

1. 打开路由配置文件，通常是 `src/config/router.ts` 或者 `src/router/index.ts`。
2. 定位到路由配置数组 `routes`。
3. 在 `routes` 数组中添加一条路由规则，设置 `path` 为 `'/*'`，并设置 `component` 为 `'@/pages/404.tsx'` 或者 `'./pages/404.tsx'`，具体根据你的项目路径结构而定。
4. 确保兜底路由的位置在路由表的最后一个。

这样配置后，当用户访问不存在的路由时，会自动跳转到该兜底路由页面作为 404 页面。

### global.ts 和 global.js 有什么区别？

在 Umi 中，global.ts 和 global.js 是全局前置脚本文件。它们用于在应用程序前执行一些逻辑。其中，global.ts 是 TypeScript 格式的脚本文件，而 global.js 是 JavaScript 格式的脚本文件。

### 为什么使用 global.ts 或 global.js 文件？

Umi 与其他前端框架的一个不同之处在于，它没有显式的程序主入口文件，例如 `src/index.ts`。因此，当你需要在应用前运行一些逻辑时，你可以优先考虑将代码写入 global.ts 或 global.js 文件。这些文件中的代码将在应用程序启动之前执行。

### 如何在 global.ts 或 global.js 文件中添加全局 Context 或修改应用运行时？

如果你需要添加全局 Context 或修改应用程序的运行时行为，你可以在 `app.tsx` 文件中实现。在 global.ts 或 global.js 文件中，你可以编写代码来导入 `app.tsx` 文件，并在其中做出相应的更改。这样，你可以方便地在全局范围内管理应用程序的上下文和运行时设置。

### global.css 是什么文件？

global.css 是一个全局样式文件，用于存放需要在整个项目中使用的样式。如果你有需要在全局范围内使用的样式，可以考虑将它们添加到 global.css 文件中。

需要注意的是，global.css 文件的优先级位于第三方组件库的样式之后。因此，如果你需要覆盖第三方组件库的样式，应该使用 overrides.css 文件。

### 为什么要使用 global.css 文件？

使用 global.css 文件可以将需要在全局范围内使用的样式集中管理，提高代码的可维护性和可复用性。当项目中多个组件需要使用相同的样式时，只需要在 global.css 文件中定义一次即可，避免了重复的代码。

另外，将全局样式放入 global.css 文件中，可以使样式的使用更加一致和统一。开发人员可以更加方便地查找和修改样式，减少代码冗余和维护成本。

### global.css 文件的优先级是什么？

global.css 文件的优先级位于第三方组件库的样式之后。这意味着如果你需要覆盖第三方组件库的样式，应该将覆盖样式写在 overrides.css 文件中。

通过将覆盖样式放入 overrides.css 文件中，可以确保它们具有更高的优先级，以便正确地覆盖组件库中的样式。这样就可以在不修改第三方组件库源码的情况下，实现对样式的定制和调整。

总之，使用 global.css 文件和 overrides.css 文件可以使样式定义和覆盖更加清晰和可控，提高开发效率和样式管理的灵活性。

### plugin.ts 是什么？

`plugin.ts`是一个项目级的 Umi 插件文件。当你需要对 Umi 进行定制时，你可以使用插件 API 来实现自定义功能，比如修改产物 html。`plugin.ts`文件可以用来定义这些自定义功能。

### 如何使用 plugin.ts？

要使用`plugin.ts`，你需要将它添加到你的 Umi 项目中。然后，在`plugin.ts`中，你可以通过导出一个函数来定义和配置插件。这个函数将接收一个`api`参数，它是一个`IApi`类型的对象，通过这个对象可以访问插件 API 的各种功能。

### 如何在 plugin.ts 中使用插件 API？

在`plugin.ts`中，你可以使用插件 API 的各种方法来实现自定义功能。例如，你可以使用`onDevCompileDone`方法来执行一些在开发环境编译完成后的操作。你还可以使用`modifyHTML`方法来修改产物的 HTML 内容。另外，你还可以使用`chainWebpack`方法来修改 webpack 的配置。

### plugin.ts 文件示例代码：

下面是一个`plugin.ts`文件的示例代码：

```ts
import type { IApi } from 'umi';

export default (api: IApi) => {
  api.onDevCompileDone((opts) => {
    opts;
    // console.log('> onDevCompileDone', opts.isFirstCompile);
  });
  api.modifyHTML(($) => {
    $;
  });
  api.chainWebpack((memo) => {
    memo;
  });
};
```

在这个示例代码中，我们导出了一个函数，这个函数接收一个`api`参数，通过这个参数我们可以使用插件 API 的各种方法。在这个示例中，我们使用了`onDevCompileDone`、`modifyHTML`和`chainWebpack`方法来定义了一些自定义功能。

希望这个回答对你有帮助！如果你还有其他问题，请随时提问。

### 什么是站点 `favicon` 图标文件？

站点 `favicon` 图标文件是用于代表网站的小图标文件。它通常显示在网页浏览器的标签页、书签栏和收藏夹中，在用户浏览网站时起到识别和标识作用。

### 如何设置站点 `favicon` 图标文件？

要设置站点 `favicon` 图标文件，需要在项目的根目录下添加一个 `favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)` 文件。当存在这个文件时，系统将自动在网页的 HTML 代码中添加一行代码来引用这个文件作为网站的 `favicon` 图标文件。

具体的引用代码如下所示：

```html
<link rel="shortcut icon" href="/favicon.png" />
```

其中，`/favicon.png` 是指向 favicon 图标文件的路径。你可以根据实际情况修改这个路径来指定你的 favicon 图标文件的位置。

如果你希望使用外部资源或其他方式来设置站点 `favicon` 图标文件，你可以参考 [favicons](../api/config#favicons) 手动配置站点图标。配置的值将会覆盖约定的默认设置。

### 如何自定义站点 `favicon` 图标文件？

如果你希望使用自定义的图标来代表你的网站，你可以按照以下步骤来实现：

1. 准备一张符合要求的图标文件，可以是 `ico`、`gif`、`png`、`jpg`、`jpeg`、`svg`、`avif` 或 `webp` 格式的图片。

2. 将这个图标文件命名为 `favicon.(ico|gif|png|jpg|jpeg|svg|avif|webp)`，并将它放置在项目的根目录下。

3. 运行项目，系统将自动将这个图标文件添加到网页的 HTML 代码中，并作为网站的 `favicon` 图标文件。

请注意，如果你同时存在多个符合要求的图标文件，系统会选择其中一个作为 `favicon` 图标文件。如果你希望指定特定的图标文件作为 `favicon` 图标文件，请确保只存在一个符合要求的图标文件。
