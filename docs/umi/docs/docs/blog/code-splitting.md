### Umi 4 内置了哪些代码分包策略？

Umi 4 内置了以下代码分包策略：

- `all`：将所有路由页面拆分为一个个独立的 JS 文件，每个文件都是一个独立的分包。
- `asyncChunks`：根据异步加载的路由页面进行分包，每个异步加载的路由页面都是一个独立的分包。
- `granularChunks`：根据每个组件或页面的大小进行分包，将大组件或页面拆分为多个独立的分包。
- `children`：将路由页面的子页面拆分为一个个独立的分包。

你可以通过配置 `codeSplitting` 的 `jsStrategy` 字段来指定使用哪种代码分包策略。

### 如何手动进行更细致的分包？

如果你需要手动进行更细致的分包，可以通过配置 `dynamicImport` 字段来实现。在 routes 配置中，可以将 `dynamicImport` 设置为一个函数，该函数返回一个 promise，该 promise 解析后返回组件实例。

例如：

```ts
export default [
  {
    path: '/user',
    component: dynamic(() => import('./user')),
  },
];
```

其中，`dynamic` 函数用于将组件包装为一个动态加载的组件。

这样配置后，会自动将 `/user` 页面以及相关依赖进行分包，实现按需加载的效果。

### 如何手动拆分代码？

当项目的产物体积变得较大时，我们可以考虑手动拆分代码。下面是一个示例：

在 React 应用中，我们可以使用 `lazy` 和 `Suspense` 实现手动拆分。首先，我们需要引入 `lazy` 和 `Suspense`：

```ts
import { lazy, Suspense } from 'react'
```

接下来，我们可以使用 `lazy` 方法来异步加载我们要拆分的组件。这样，只有当组件被需要时才会被加载。例如，下面的代码将会把 `./Page` 组件拆分出去：

```ts
const Page = lazy(() => import('./Page'))
```

最后，我们需要在组件中使用 `Suspense` 组件来包裹我们需要异步加载的组件，并提供一个 loading 的回退组件：

```ts
export default function MyComponent() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Page />
    </Suspense>
  )
}
```

通过手动拆分代码，我们可以按需加载较大的第三方库或组件，从而减小项目的总体积。这有助于提升应用的性能和加载速度。

### 为什么要手动拆分代码？

手动拆分代码是为了应对项目产物体积变大的情况。当应用中引入了较大的第三方库或组件时，整个应用的体积可能会变得很大，导致加载时间变长。

通过手动拆分，我们可以将原本一次性加载的组件拆分成多个部分，只在需要时进行加载。这样可以减小初始加载的体积，提升应用的加载速度和性能。

手动拆分代码也有助于按需加载，只加载当前页面所需的组件，避免不必要的资源消耗。

### 如何手动拆分使用了较大第三方库的组件？

当我们的组件依赖于较大的第三方库时，可以使用手动拆分来实现按需加载。下面是一个示例：

假设我们的组件需要依赖第三方库 `lodash`，我们可以按如下步骤来手动拆分：

1. 首先，引入 `lazy` 和 `Suspense`：

```ts
import { lazy, Suspense } from 'react'
```

2. 接下来，使用 `lazy` 方法来异步加载我们要拆分的组件。例如，下面的代码将会拆分出一个组件 `MyComponent`：

```ts
const MyComponent = lazy(() => import('./MyComponent'))
```

3. 最后，在使用该组件的地方，使用 `Suspense` 组件来包裹我们需要异步加载的组件，并提供一个 loading 的回退组件：

```ts
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  )
}
```

通过以上步骤，我们可以手动拆分使用了较大第三方库的组件，并且在需要时进行按需加载。这样可以减小项目的体积，提升应用的性能和加载速度。