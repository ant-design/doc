### umi 的 运行时配置 有哪些配置？

**运行时配置 配置方式**

约定 `src/app.tsx` 为运行时配置。

**运行时配置 TypeScript 提示**

如果你想在写配置时也有提示，可以通过 umi 的 defineApp 方法定义配置。

```js
import { defineApp } from 'umi';
export default defineApp({
  layout: () => {
    return {
      title: 'umi',
    };
  },
});

// or
import { RuntimeConfig } from 'umi';
export const layout: RuntimeConfig['layout'] = () => {
  return {
    title: 'umi',
  };
};
```

**运行时配置 配置项**

> 以下配置项按字母排序。

#### dva

如果你使用的 dva，那么支持配置 dva 插件的运行时配置，具体参考[插件配置](../max/dva)。比如：

```ts
export default {
  dva: {
    immer: true,
    extraModels: [],
  },
};
```

- Type: string\[]
- Default: \[] 配置额外到 dva model。
- Type: boolean | object
- Default: false 表示是否启用 immer 以方便修改 reducer。注：如需兼容 IE11，需配置 `{ immer: { enableES5: true }}`。

#### 数据流

若你需要定义初始化数据，使用 `getInitialState` 、`useModel` 等 [数据流](../max/data-flow) 相关功能：

1. 你可以创建自带数据流功能的 `@umijs/max` 项目，详见 [Umi max 简介](../max/introduce) 。

2. 或者手动开启数据流功能的插件使用该功能：

   ```bash
     pnpm add -D @umijs/plugins
   ```

   ```ts
   // .umirc.ts
   export default {
     plugins: [
       '@umijs/plugins/dist/initial-state',
       '@umijs/plugins/dist/model',
     ],
     initialState: {},
     model: {},
   };
   ```

#### getInitialState

- Type: `getInitialState: () => Promise<DataType extends any> | any` `getInitialState()` 的返回值将成为全局初始状态。例如：

```ts
// src/app.ts
import { fetchInitialData } from "@/services/initial";

export async function () {
  const initialData = await fetchInitialData();
  return initialData;
}
```

现在，各种插件和您定义的组件都可以通过 `useModel('@@initialState')` 直接获取到这份全局的初始状态，如下所示：

```tsx
import { useModel } from 'umi';

export default function Page() {
  const { initialState, loading, error, refresh, setInitialState } =
    useModel('@@initialState');
  return <>{initialState}</>;
}
```

| 对象属性 | 类型 | 介绍 |
| --- | --- | --- |
| `initialState` | `any` | 导出的 `getInitialState()` 方法的返回值 |
| `loading` | `boolean` | `getInitialState()` 或 `refresh()` 方法是否正在进行中。在首次获取到初始状态前，页面其他部分的渲染都会**被阻止** |
| `error` | `Error` | 如果导出的 `getInitialState()` 方法运行时报错，报错的错误信息 |
| `refresh` | `() => void` | 重新执行 `getInitialState` 方法，并获取新的全局初始状态 |
| `setInitialState` | `(state: any) => void` | 手动设置 `initialState` 的值，手动设置完毕会将 `loading` 置为 `false` |

#### layout

- Type: `RuntimeConfig | ProLayoutProps` 修改[内置布局](../max/layout-menu)的配置，比如配置退出登陆、自定义导航暴露的渲染区域等。
  > 注意：需要开启 [layout](../api/config#layout) 插件，才能使用它的运行时配置。

```tsx
import { RuntimeConfig } from 'umi';

export const layout: RuntimeConfig = {
  logout: () => {}, // do something
};
```

更多具体配置参考[插件文档](../max/layout-menu#运行时配置)。

#### onRouteChange

- type: `(args: { routes: Routes; clientRoutes: Routes; location: Location; action: Action; basename: string; isFirst: boolean }) => void` 在初始加载和路由切换时做一些事情。比如用于做埋点统计，

```ts
export function onRouteChange({
  location,
  clientRoutes,
  routes,
  action,
  basename,
  isFirst,
}) {
  bacon(location.pathname);
}
```

比如用于设置标题，

```ts
import { matchRoutes } from 'umi';

export function onRouteChange({ clientRoutes, location }) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = route.title || '';
  }
}
```

#### patchRoutes

- type: `(args: { routes: Routes; routeComponents }) => void`

```ts
export function patchRoutes({ routes, routeComponents }) {
  console.log('patchRoutes', routes, routeComponents);
}
```

- `routes`: 打平的路由列表。

- `routeComponents`: 路由对应的组件映射。注：如需动态更新路由，建议使用 `patchClientRoutes()` ，否则你可能需要同时修改 `routes` 和 `routeComponents`。

#### patchClientRoutes

- type: `(args: { routes: Routes; }) => void` 修改被 react-router 渲染前的树状路由表，接收内容同 [useRoutes](https://reactrouter.com/en/main/hooks/use-routes)。比如在最前面添加一个 `/foo` 路由，

```tsx
import Page from '@/extraRoutes/foo';

export function patchClientRoutes({ routes }) {
  routes.unshift({
    path: '/foo',
    element: <Page />,
  });
}
```

比如在最前面添加一个重定向路由：

```tsx
import { Navigate } from 'umi';

export const patchClientRoutes = ({ routes }) => {
  routes.unshift({
    path: '/',
    element: <Navigate to="/home" replace />,
  });
};
```

比如添加一个嵌套路由：

```tsx
import Page from '@/extraRoutes/foo';

export const patchClientRoutes = ({ routes }) => {
  routes.push({
    path: '/group',
    children: [
      {
        path: '/group/page',
        element: <Page />,
      },
    ],
  });
};
```

比如和 `render` 配置配合使用，请求服务端根据响应动态更新路由，

```ts
let extraRoutes;

export function patchClientRoutes({ routes }) {
  // 根据 extraRoutes 对 routes 做一些修改
  patch(routes, extraRoutes);
}

export function render(oldRender) {
  fetch('/api/routes')
    .then((res) => res.json())
    .then((res) => {
      extraRoutes = res.routes;
      oldRender();
    });
}
```

注意：

- 直接修改 routes，不需要返回

#### qiankun

Umi 内置了 `qiankun` 插件来提供微前端的能力，具体参考[插件配置](../max/micro-frontend)。

#### render

- Type: `(oldRender: Function)=>void` 覆写 render。比如用于渲染之前做权限校验，

```bash
export function render(oldRender) {
  fetch('/api/auth').then(auth => {
    if (auth.isLogin) { oldRender() }
    else {
      location.href = '/login';
      oldRender()
    }
  });
}
```

#### request

如果你使用了 `import { request } from 'umi';` 来请求数据，那么你可以通过该配置来自定义中间件、拦截器、错误处理适配等。具体参考 [request](../max/request) 插件配置。

#### rootContainer

- Type: `(container: JSX.Element,args: { routes: Routes; plugin; history: History }) => JSX.Element;` 修改交给 react-dom 渲染时的根组件。比如用于在外面包一个 Provider，

```js
export function rootContainer(container, args) {
  return React.createElement(ThemeProvider, null, container);
}
```

args 包含：

- routes，全量路由配置
- plugin，运行时插件机制
- history，history 实例 **运行时配置 更多配置**

Umi 允许插件注册运行时配置，如果你使用插件，肯定会在插件里找到更多运行时的配置项。

### umi 如何使用 dva?

如果你使用的 dva，那么支持配置 dva 插件的运行时配置，具体参考[插件配置](../max/dva)。比如：

```ts
export default {
  dva: {
    immer: true,
    extraModels: [],
  },
};
```

- Type: string\[]
- Default: \[] 配置额外到 dva model。
- Type: boolean | object
- Default: false 表示是否启用 immer 以方便修改 reducer。注：如需兼容 IE11，需配置 `{ immer: { enableES5: true }}`。

### umi 如何使用 数据流?

若你需要定义初始化数据，使用 `getInitialState` 、`useModel` 等 [数据流](../max/data-flow) 相关功能：

1. 你可以创建自带数据流功能的 `@umijs/max` 项目，详见 [Umi max 简介](../max/introduce) 。

2. 或者手动开启数据流功能的插件使用该功能：

   ```bash
     pnpm add -D @umijs/plugins
   ```

   ```ts
   // .umirc.ts
   export default {
     plugins: [
       '@umijs/plugins/dist/initial-state',
       '@umijs/plugins/dist/model',
     ],
     initialState: {},
     model: {},
   };
   ```

### umi 如何使用 getInitialState?

- Type: `getInitialState: () => Promise<DataType extends any> | any` `getInitialState()` 的返回值将成为全局初始状态。例如：

```ts
// src/app.ts
import { fetchInitialData } from "@/services/initial";

export async function () {
  const initialData = await fetchInitialData();
  return initialData;
}
```

现在，各种插件和您定义的组件都可以通过 `useModel('@@initialState')` 直接获取到这份全局的初始状态，如下所示：

```tsx
import { useModel } from 'umi';

export default function Page() {
  const { initialState, loading, error, refresh, setInitialState } =
    useModel('@@initialState');
  return <>{initialState}</>;
}
```

| 对象属性 | 类型 | 介绍 |
| --- | --- | --- |
| `initialState` | `any` | 导出的 `getInitialState()` 方法的返回值 |
| `loading` | `boolean` | `getInitialState()` 或 `refresh()` 方法是否正在进行中。在首次获取到初始状态前，页面其他部分的渲染都会**被阻止** |
| `error` | `Error` | 如果导出的 `getInitialState()` 方法运行时报错，报错的错误信息 |
| `refresh` | `() => void` | 重新执行 `getInitialState` 方法，并获取新的全局初始状态 |
| `setInitialState` | `(state: any) => void` | 手动设置 `initialState` 的值，手动设置完毕会将 `loading` 置为 `false` |

### umi 如何使用 layout?

- Type: `RuntimeConfig | ProLayoutProps` 修改[内置布局](../max/layout-menu)的配置，比如配置退出登陆、自定义导航暴露的渲染区域等。
  > 注意：需要开启 [layout](../api/config#layout) 插件，才能使用它的运行时配置。

```tsx
import { RuntimeConfig } from 'umi';

export const layout: RuntimeConfig = {
  logout: () => {}, // do something
};
```

更多具体配置参考[插件文档](../max/layout-menu#运行时配置)。

### umi 如何使用 onRouteChange?

- type: `(args: { routes: Routes; clientRoutes: Routes; location: Location; action: Action; basename: string; isFirst: boolean }) => void` 在初始加载和路由切换时做一些事情。比如用于做埋点统计，

```ts
export function onRouteChange({
  location,
  clientRoutes,
  routes,
  action,
  basename,
  isFirst,
}) {
  bacon(location.pathname);
}
```

比如用于设置标题，

```ts
import { matchRoutes } from 'umi';

export function onRouteChange({ clientRoutes, location }) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    document.title = route.title || '';
  }
}
```

### umi 如何使用 patchRoutes?

- type: `(args: { routes: Routes; routeComponents }) => void`

```ts
export function patchRoutes({ routes, routeComponents }) {
  console.log('patchRoutes', routes, routeComponents);
}
```

- `routes`: 打平的路由列表。

- `routeComponents`: 路由对应的组件映射。注：如需动态更新路由，建议使用 `patchClientRoutes()` ，否则你可能需要同时修改 `routes` 和 `routeComponents`。

### umi 如何使用 patchClientRoutes?

- type: `(args: { routes: Routes; }) => void` 修改被 react-router 渲染前的树状路由表，接收内容同 [useRoutes](https://reactrouter.com/en/main/hooks/use-routes)。比如在最前面添加一个 `/foo` 路由，

```tsx
import Page from '@/extraRoutes/foo';

export function patchClientRoutes({ routes }) {
  routes.unshift({
    path: '/foo',
    element: <Page />,
  });
}
```

比如在最前面添加一个重定向路由：

```tsx
import { Navigate } from 'umi';

export const patchClientRoutes = ({ routes }) => {
  routes.unshift({
    path: '/',
    element: <Navigate to="/home" replace />,
  });
};
```

比如添加一个嵌套路由：

```tsx
import Page from '@/extraRoutes/foo';

export const patchClientRoutes = ({ routes }) => {
  routes.push({
    path: '/group',
    children: [
      {
        path: '/group/page',
        element: <Page />,
      },
    ],
  });
};
```

比如和 `render` 配置配合使用，请求服务端根据响应动态更新路由，

```ts
let extraRoutes;

export function patchClientRoutes({ routes }) {
  // 根据 extraRoutes 对 routes 做一些修改
  patch(routes, extraRoutes);
}

export function render(oldRender) {
  fetch('/api/routes')
    .then((res) => res.json())
    .then((res) => {
      extraRoutes = res.routes;
      oldRender();
    });
}
```

注意：

- 直接修改 routes，不需要返回

### umi 如何使用 qiankun?

Umi 内置了 `qiankun` 插件来提供微前端的能力，具体参考[插件配置](../max/micro-frontend)。

### umi 如何使用 render?

- Type: `(oldRender: Function)=>void` 覆写 render。比如用于渲染之前做权限校验，

```bash
export function render(oldRender) {
  fetch('/api/auth').then(auth => {
    if (auth.isLogin) { oldRender() }
    else {
      location.href = '/login';
      oldRender()
    }
  });
}
```

### umi 如何使用 request?

如果你使用了 `import { request } from 'umi';` 来请求数据，那么你可以通过该配置来自定义中间件、拦截器、错误处理适配等。具体参考 [request](../max/request) 插件配置。

### umi 如何使用 rootContainer?

- Type: `(container: JSX.Element,args: { routes: Routes; plugin; history: History }) => JSX.Element;` 修改交给 react-dom 渲染时的根组件。比如用于在外面包一个 Provider，

```js
export function rootContainer(container, args) {
  return React.createElement(ThemeProvider, null, container);
}
```

args 包含：

- routes，全量路由配置
- plugin，运行时插件机制
- history，history 实例

### umi 的 插件 API 有哪些配置？

**插件 API 核心 API**

service 和 PluginAPI 里定义的方法。

#### applyPlugins

```ts
api.applyPlugins({ key: string, type?: api.ApplyPluginsType, initialValue?: any, args?: any })
```

取得 `register()` 注册的 hooks 执行后的数据，这是一个异步函数，因此它返回的将是一个 Promise。这个方法的例子和详解见 [register](#register) api

#### describe

```ts
api.describe({ key?:string, config?: { default , schema, onChange }, enableBy? })
```

在插件注册阶段( initPresets or initPlugins stage )执行，用于描述插件或者插件集的 key、配置信息和启用方式等。

- `key` 是配置中该插件配置的键名
- `config.default` 是插件配置的默认值，当用户没有在配置中配置 key 时，默认配置将生效。
- `config.schema` 用于声明配置的类型，基于 [joi](https://joi.dev/) 。 **如果你希望用户进行配置，这个是必须的** ，否则用户的配置无效
- `config.onChange` 是 dev 模式下，配置被修改后的处理机制。默认值为 `api.ConfigChangeType.reload`，表示在 dev 模式下，配置项被修改时会重启 dev 进程。 你也可以修改为 `api.ConfigChangeType.regenerateTmpFiles`, 表示只重新生成临时文件。你还可以传入一个方法，来自定义处理机制。
- `enableBy` 是插件的启用方式，默认是`api.EnableBy.register`，表示注册启用，即插件只要被注册就会被启用。可以更改为 `api.EnableBy.config` ，表示配置启用，只有配置插件的配置项才启用插件。你还可以自定义一个返回布尔值的方法（ true 为启用 ）来决定其启用时机，这通常用来实现动态生效。e.g.

```ts
api.describe({
  key: 'foo',
  config: {
    schema(joi) {
      return joi.string();
    },
    onChange: api.ConfigChangeType.regenerateTmpFiles,
  },
  enableBy: api.EnableBy.config,
});
```

这个例子中，插件的 `key` 为 `foo`，因此配置中的键名为 `foo`，配置的类型是字符串，当配置 `foo` 发生变化时，dev 只会重新生成临时文件。该插件只有在用户配置了 `foo` 之后才会启用。

#### isPluginEnable

```ts
api.isPluginEnable( key：string)
```

判断插件是否启用，传入的参数是插件的 key

#### register

```ts
api.register({ key: string, fn, before?: string, stage?: number})
```

为 `api.applyPlugins` 注册可供其使用的 hook。

- `key` 是注册的 hook 的类别名称，可以多次使用 `register` 向同一个 `key` 注册 hook，它们将会依次执行。这个 `key` 也同样是使用 `applyPlugins` 收集 hooks 数据时使用的 `key`。注意： **这里的 key 和 插件的 key 没有任何联系。**
- `fn` 是 hook 的定义，可以是同步的，也可以是异步的（返回一个 Promise 即可）
- `stage` 用于调整执行顺序，默认为 0，设为 -1 或更少会提前执行，设为 1 或更多会后置执行。
- `before` 同样用于调整执行的顺序，传入的值为注册的 hook 的名称。注意：**`register` 注册的 hook 的名称是所在 Umi 插件的 id。** stage 和 before 的更多用法参考 [tapable](https://github.com/webpack/tapable) 注意： 相较于 `umi@3`， `umi@4` 去除了 `pluginId` 参数。fn 的写法需要结合即将使用的 applyPlugins 的 type 参数来确定：
- `api.ApplyPluginsType.add` `applyPlugins` 将按照 hook 顺序来将它们的返回值拼接成一个数组。此时 `fn` 需要有返回值，`fn` 将获取 `applyPlugins` 的参数 `args` 来作为自己的参数。`applyPlugins` 的 `initialValue` 必须是一个数组，它的默认值是空数组。当 `key` 以 `'add'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。
- `api.ApplyPluginsType.modify` `applyPlugins` 将按照 hook 顺序来依次更改 `applyPlugins` 接收的 `initialValue`， 因此此时 **`initialValue` 是必须的** 。此时 `fn` 需要接收一个 `memo` 作为自己的第一个参数，而将会把 `applyPlugins` 的参数 `args` 来作为自己的第二个参数。`memo` 是前面一系列 hook 修改 `initialValue` 后的结果， `fn` 需要返回修改后的`memo` 。当 `key` 以 `'modify'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。
- `api.ApplyPluginsType.event` `applyPlugins` 将按照 hook 顺序来依次执行。此时不用传入 `initialValue` 。`fn` 不需要有返回值，并且将会把 `applyPlugins` 的参数 `args` 来作为自己的参数。当 `key` 以 `'on'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。e.g.1 add 型

```ts
api.register({
  key: 'addFoo',
  // 同步
  fn: (args) => args,
});

api.register({
  key: 'addFoo',
  // 异步
  fn: async (args) => args * 2,
});

api
  .applyPlugins({
    key: 'addFoo',
    // key 是 add 型，不用显式声明为 api.ApplyPluginsType.add
    args: 1,
  })
  .then((data) => {
    console.log(data); // [1,2]
  });
```

e.g.2 modify 型

```ts
api.register({
  key: 'foo',
  fn: (memo, args) => ({ ...memo, a: args }),
});
api.register({
  key: 'foo',
  fn: (memo) => ({ ...memo, b: 2 }),
});
api
  .applyPlugins({
    key: 'foo',
    type: api.ApplyPluginsType.modify,
    // 必须有 initialValue
    initialValue: {
      a: 0,
      b: 0,
    },
    args: 1,
  })
  .then((data) => {
    console.log(data); // { a: 1, b: 2 }
  });
```

#### registerCommand

```ts
api.registerCommand({
  name: string,
  description? : string,
  options? : string,
  details? : string,
  fn,
  alias? : string | string[]
  resolveConfigMode? : 'strict' | 'loose'
})
```

注册命令。

- `alias` 为别名，比如 generate 的别名 g
- `fn` 的参数为 `{ args }`， args 的格式同 [yargs](https://github.com/yargs/yargs) 的解析结果，需要注意的是 `_` 里的 command 本身被去掉了，比如执行`umi generate page foo`，`args._` 为 `['page','foo']`
- `resolveConfigMode` 参数控制执行命令时配置解析的方式，`strict` 模式下强校验 Umi 项目的配置文件内容，如果有非法内容中断命令执行；`loose` 模式下不执行配置文件的校验检查。

#### registerMethod

```ts
api.registerMethod({ name: string, fn? })
```

往 api 上注册一个名为 `'name'` 的方法。

- 当传入了 fn 时，执行 fn
- 当没有传入 fn 时，`registerMethod` 会将 `name` 作为 `api.register` 的 `key` 并且将其柯里化后作为 `fn`。这种情况下相当于注册了一个 `register` 的快捷调用方式，便于注册 hook。注意：
- 相较于 `umi@3`， `umi@4` 去除了 exitsError 参数。
- 通常不建议注册额外的方法，因为它们不会有 ts 提示，直接使用 `api.register()` 是一个更安全的做法。e.g.1

```ts
api.registerMethod({
  name: foo,
  // 有 fn
  fn: (args) => {
    console.log(args);
  },
});
api.foo('hello, umi!'); // hello, umi!
```

该例子中，我们往api上注册了一个 foo 方法，该方法会把参数 console 到控制台。e.g.2

```ts
import api from './api';

api.registerMethod({
  name: 'addFoo',
  // 没有 fn
});

api.addFoo((args) => args);
api.addFoo((args) => args * 2);

api
  .applyPlugins({
    key: 'addFoo',
    args: 1,
  })
  .then((data) => {
    console.log(data); // [ 1, 2 ]
  });
```

该例子中，我们没有向 `api.registerMethod` 中传入 fn。此时，我们相当于往 api 上注册了一个"注册器"：`addFoo`。每次调用该方法都相当于调用了 `register({ key: 'addFoo', fn })`。因此当我们使用 `api.applyPlugins` 的时候（由于我们的方法是 add 型的，可以不用显式声明其 type ）就可以获取刚刚注册的 hook 的值。

#### registerPresets

```ts
api.registerPresets( presets: string[] )
```

注册插件集，参数为路径数组。该 api 必须在 initPresets stage 执行，即只可以在 preset 中注册其他 presets e.g.

```ts
api.registerPresets(['./preset', require.resolve('./preset_foo')]);
```

#### registerPlugins

```ts
api.registerPlugins( plugins: string[] )
```

注册插件，参数为路径数组。该 api 必须在 initPresets 和 initPlugins stage 执行。e.g.

```ts
api.registerPlugins(['./plugin', require.resolve('./plugin_foo')]);
```

注意： 相较于 `umi@3` ，`umi@4` 不再支持在 `registerPresets` 和 `registerPlugins` 中直接传入插件对象了，现在只允许传入插件的路径。

#### registerGenerator

注册微生成器用来快捷生成模板代码。示例：

```ts
import { GeneratorType } from '@umijs/core';
import { logger } from '@umijs/utils';
import { join } from 'path';
import { writeFileSync } from 'fs';

api.registerGenerator({
  key: 'editorconfig',
  name: 'Create .editorconfig',
  description: 'Setup editorconfig config',
  type: GeneratorType.generate,
  fn: () => {
    const configFilePath = join(api.cwd, '.editorconfig');
    if (existsSync(configFilePath)) {
      logger.info(`The .editorconfig file already exists.`);
      return;
    }
    writeFileSync(
      configFilePath,
      `
# 🎨 http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`.trimStart(),
      'utf-8',
    );
    logger.info(`Generate .editorconfig file successful.`);
  },
});
```

更多示例见 [`已有生成器源码`](https://github.com/umijs/umi/tree/master/packages/preset-umi/src/commands/generators) 。

#### skipPlugins

```ts
api.skipPlugins( keys: string[])
```

声明哪些插件需要被禁用，参数为插件 key 的数组 **插件 API 扩展方法**

通过`api.registerMethod()` 扩展的方法，它们的作用都是注册一些 hook 以供使用，因此都需要接收一个 fn。这些方法中的大部分都按照 `add-` `modify-` `on-` 的方式命名，它们分别对应了 `api.ApplyPluginsType`的三种方式，不同方式接收的 fn 不太相同，详见 [register](#register) 一节。

注意： 下文提到的所有 fn 都可以是同步的或者异步的（返回一个 Promise 即可）。fn 都可以被

```ts
{
  fn,
  name?: string,
  before?: string | string[],
  stage: number,
}

```

代替。其中各个参数的作用详见 [tapable](https://github.com/webpack/tapable)

#### addBeforeBabelPlugins

增加额外的 Babel 插件。传入的 fn 不需要参数，且需要返回一个 Babel 插件或插件数组。

```ts
api.addBeforeBabelPlugins(() => {
  // 返回一个 Babel 插件（来源于 Babel 官网的例子）
  return () => {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        path.node.name = name.split("").reverse().join("");
      }
    }
  }
})
```

#### addBeforeBabelPresets

增加额外的 Babel 插件集。传入的 fn 不需要参数，且需要返回一个 Babel 插件集( presets )或插件集数组。

```ts
api.addBeforeBabelPresets(() => {
  // 返回一个 Babel 插件集
  return () => {
    return {
      plugins: ['Babel_Plugin_A', 'Babel_Plugin_B'],
    };
  };
});
```

#### addBeforeMiddlewares

在 webpack-dev-middleware 之前添加中间件。传入的 fn 不需要参数，且需要返回一个 express 中间件或其数组。

```ts
api.addBeforeMiddlewares(() => {
  return (req, res, next) => {
    if (false) {
      res.end('end');
    }
    next();
  };
});
```

#### addEntryCode

在入口文件的最后面添加代码（render 后）。传入的 fn 不需要参数，且需要返回一个 string 或者 string 数组。

```ts
api.addEntryCode(() => `console.log('I am after render!')`);
```

#### addEntryCodeAhead

在入口文件的最前面添加代码（render 前，import 后）。传入的 fn 不需要参数，且需要返回一个 string 或者 string 数组。

```ts
api.addEntryCodeAhead(() => `console.log('I am before render!')`);
```

#### addEntryImports

在入口文件中添加 import 语句 （import 最后面）。传入的 fn 不需要参数，其需要返回一个 `{source: string, specifier?: string}` 或其数组。

```ts
api.addEntryImports(() => ({
  source: '/modulePath/xxx.js',
  specifier: 'moduleName',
}));
```

#### addEntryImportsAhead

在入口文件中添加 import 语句 （import 最前面）。传入的 fn 不需要参数，其需要返回一个 `{source: string, specifier?: string}` 或其数组。

```ts
api.addEntryImportsAhead(() => ({
  source: 'anyPackage',
}));
```

#### addExtraBabelPlugins

添加额外的 Babel 插件。 传入的 fn 不需要参数，且需要返回一个 Babel 插件或插件数组。

#### addExtraBabelPresets

添加额外的 Babel 插件集。传入的 fn 不需要参数，且需要返回一个 Babel 插件集或其数组。

#### addHTMLHeadScripts

往 HTML 的 `<head>` 元素里添加 Script。传入的 fn 不需要参数，且需要返回一个 string（想要加入的代码） 或者 `{ async?: boolean, charset?: string, crossOrigin?: string | null, defer?: boolean, src?: string, type?: string, content?: string }` 或者它们的数组。

```ts
api.addHTMLHeadScripts(() => `console.log('I am in HTML-head')`);
```

#### addHTMLLinks

往 HTML 里添加 Link 标签。 传入的 fn 不需要参数，返回的对象或其数组接口如下：

```ts
{
  as?: string, crossOrigin: string | null,
  disabled?: boolean,
  href?: string,
  hreflang?: string,
  imageSizes?: string,
  imageSrcset?: string,
  integrity?: string,
  media?: string,
  referrerPolicy?: string,
  rel?: string,
  rev?: string,
  target?: string,
  type?: string
}
```

#### addHTMLMetas

往 HTML 里添加 Meta 标签。 传入的 fn 不需要参数，返回的对象或其数组接口如下：

```ts
{
  content?: string,
  'http-equiv'?: string,
  name?: string,
  scheme?: string
}
```

#### addHTMLScripts

往 HTML 尾部添加 Script。 传入的 fn 不需要参数，返回的对象接口同 [addHTMLHeadScripts](#addHTMLHeadScripts)

#### addHTMLStyles

往 HTML 里添加 Style 标签。 传入的 fn 不需要参数，返回一个 string （style 标签里的代码）或者 `{ type?: string, content?: string }`，或者它们的数组。

#### addLayouts

添加全局 layout 组件。 传入的 fn 不需要参数，返回 `{ id?: string, file: string }`

#### addMiddlewares

添加中间件，在 route 中间件之后。 传入的 fn 不需要参数，返回 express 中间件。

#### addPolyfillImports

添加补丁 import，在整个应用的最前面执行。 传入的 fn 不需要参数，返回 `{ source: string, specifier?:string }`

#### addPrepareBuildPlugins

#### addRuntimePlugin

添加运行时插件，传入的 fn 不需要参数，返回 string ，表示插件的路径。

#### addRuntimePluginKey

添加运行时插件的 Key， 传入的 fn 不需要参数，返回 string ，表示插件的路径。

#### addTmpGenerateWatcherPaths

添加监听路径，变更时会重新生成临时文件。传入的 fn 不需要参数，返回 string，表示要监听的路径。

#### addOnDemandDeps

添加按需安装的依赖，他们会在项目启动时检测是否安装：

```ts
api.addOnDemandDeps(() => [
  { name: '@swc/core', version: '^1.0.0', dev: true },
]);
```

#### chainWebpack

通过 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 的方式修改 webpack 配置。传入一个fn，该 fn 不需要返回值。它将接收两个参数：

- `memo` 对应 webpack-chain 的 config
- `args:{ webpack, env }` `arg.webpack` 是 webpack 实例， `args.env` 代表当前的运行环境。e.g.

```ts
api.chainWebpack((memo, { webpack, env }) => {
  // set alias
  memo.resolve.alias.set('a', 'path/to/a');
  // Delete progess bar plugin
  memo.plugins.delete('progess');
});
```

#### modifyAppData （

修改 app 元数据。传入的 fn 接收 appData 并且返回它。

```ts
api.modifyAppData((memo) => {
  memo.foo = 'foo';
  return memo;
});
```

#### modifyConfig

修改配置，相较于用户的配置，这份是最终传给 Umi 使用的配置。传入的 fn 接收 config 作为第一个参数，并且返回它。另外 fn 可以接收 `{ paths }` 作为第二个参数。`paths` 保存了 Umi 的各个路径。

```ts
api.modifyConfig((memo, { paths }) => {
  memo.alias = {
    ...memo.alias,
    '@': paths.absSrcPath,
  };
  return memo;
});
```

#### modifyDefaultConfig

修改默认配置。传入的 fn 接收 config 并且返回它。

#### modifyHTML

修改 HTML，基于 cheerio 的 ast。传入的 fn 接收 cheerioAPI 并且返回它。另外 fn 还可以接收`{ path }` 作为它的第二个参数，该参数代表路由的 path

```ts
api.modifyHTML(($, { path }) => {
  $('h2').addClass('welcome');
  return $;
});
```

#### modifyHTMLFavicon

修改 HTML 的 favicon 路径。 传入的 fn 接收原本的 favicon 路径(string 类型)并且返回它。

#### modifyPaths

修改 paths，比如 absOutputPath、absTmpPath。传入的 fn 接收 paths 并且返回它。paths 的接口如下：

```ts
paths:{
  cwd?: string;
  absSrcPath?: string;
  absPagesPath?: string;
  absTmpPath?: string;
  absNodeModulesPath?: string;
  absOutputPath?: string;
}
```

#### modifyRendererPath

修改 renderer path。传入的 fn 接收原本的 path （string 类型）并且返回它。

#### modifyServerRendererPath

修改 server renderer path。传入的 fn 接收原本的 path （string 类型）并且返回它。

#### modifyRoutes

修改路由。 传入的 fn 接收 id-route 的 map 并且返回它。其中 route 的接口如下：

```ts
interface IRoute {
  path: string;
  file?: string;
  id: string;
  parentId?: string;
  [key: string]: any;
}
```

e.g.

```ts
api.modifyRoutes((memo) => {
  Object.keys(memo).forEach((id) => {
    const route = memo[id];
    if (route.path === '/') {
      route.path = '/redirect';
    }
  });
  return memo;
});
```

#### modifyTSConfig

修改临时目录下的 tsconfig 文件内容。

```ts
api.modifyTSConfig((memo) => {
  memo.compilerOptions.paths['foo'] = ['bar'];
  return memo;
});
```

#### modifyViteConfig

修改 vite 最终配置。 传入的 fn 接收 vite 的 Config 对象作为第一个参数并且返回它。另外 fn 还可以接收 `{ env }` 作为第二个参数，可以通过该参数获取当前的环境。

```ts
api.modifyViteConfig((memo, { env }) => {
  if (env === 'development') {
    // do something
  }
  return memo;
});
```

#### modifyWebpackConfig

修改 webpack 最终配置。传入的 fn 接收 webpack 的 Config 对象作为第一个参数并且返回它。另外 fn 还可以接收 `{ webpack, env }` 作为第二个参数，其中 webpack 是 webpack 实例，env 代表当前环境。

```ts
api.modifyWebpackConfig((memo, { webpack, env }) => {
  // do something

  return memo;
});
```

#### onBeforeCompiler

generate 之后，webpack / vite compiler 之前。传入的 fn 不接收任何参数。

#### onBeforeMiddleware

提供在服务器内部执行所有其他中间件之前执行自定义中间件的能力, 这可以用来定义自定义处理程序， 例如:

```ts
api.onBeforeMiddleware(({ app }) => {
  app.get('/some/path', function (req, res) {
    res.json({ custom: 'response' });
  });
});
```

#### onBuildComplete

build 完成时。传入的 fn 接收 `{ isFirstCompile: boolean, stats, time: number, err?: Error }` 作为参数。

#### onBuildHtmlComplete

build 完成且 html 完成构建之后。

#### onCheck

检查时，在 onStart 之前执行。传入的 fn 不接收任何参数

#### onCheckCode

检查代码时。传入的 fn 接收的参数接口如下：

```ts
args: {
  file: string;
  code: string;
  isFromTmp: boolean;
  imports: {
    source: string;
    loc: any;
    default: string;
    namespace: string;
    kind: babelImportKind;
    specifiers: Record<string, { name: string; kind: babelImportKind }>;
  }[];
  exports: any[];
  cjsExports: string[];
}
```

#### onCheckConfig

检查 config 时。传入的 fn 接收 `{ config, userConfig }`作为参数，它们分别表示实际的配置和用户的配置。

#### onCheckPkgJSON

检查 package.json 时。传入的 fn 接收 `{origin?, current}` 作为参数。它们的类型都是 package.json 对象

#### onDevCompileDone

dev 完成时。传入的 fn 接收的参数接口如下：

```ts
args: {
  isFirstCompile: boolean;
  stats: any;
  time: number;
}
```

#### onGenerateFiles

生成临时文件时，随着文件变化会频繁触发，有缓存。 传入的 fn 接收的参数接口如下：

```ts
args: {
  isFirstTime?: boolean;
  files?: {
    event: string;
    path: string;
  } | null;
}
```

#### onPatchRoute

匹配单个路由，可以修改路由，给路由打补丁

#### onPkgJSONChanged

package.json 变更时。传入的 fn 接收 `{origin?, current}` 作为参数。它们的类型都是 package.json 对象

#### onPrepareBuildSuccess

#### onStart

启动时。传入的 fn 不接收任何参数。

#### writeTmpFile

`api.writeTmpFile()`的 type 参数的类型。

- content: 写入的文本内容，有内容就不会使用模板。
- context: 模板上下文。
- noPluginDir: 是否使用插件名做为目录。
- path: 写入文件的路径。
- tpl: 使用模板字符串，没有模板路径会使用它。
- tplPath: 使用模板文件的路径。 **插件 API 属性**

从 api 可以直接访问到的属性，这些属性有一部分来自于 service

#### appData

#### args

命令行参数，这里去除了命令本身。e.g.

- `$ umi dev --foo`, args 为 `{ _:[], foo: true }`
- `$ umi g page index --typescript --less` , args 为 `{ _: [ 'page', 'index''], typescript: true, less: true }`

#### config

最终的配置（取决于你访问的时机，可能是当前收集到的最终配置）

#### cwd

当前路径

#### env

即 `process.env.NODE_ENV` 可能有 `development`、`production` 和 `test`

#### logger

插件日志对象，包含 `{ log, info, debug, error, warn, profile }`，他们都是方法。其中 `api.logger.profile` 可用于性能耗时记录。

```ts
api.logger.profile('barId');
setTimeout(() => {
  api.logger.profile('barId');
});
// profile - barId Completed in 6254ms
```

#### name

当前命令的名称，例如 `$ umi dev `， `name` 就是 `dev`

#### paths

项目相关的路径：

- `absNodeModulesPath`，node_modules 目录绝对路径
- `absOutputPath`，输出路径，默认是 ./dist
- `absPagesPath`，pages 目录绝对路径
- `absSrcPath`，src 目录绝对路径，需注意 src 目录是可选的，如果没有 src 目录，absSrcPath 等同于 cwd
- `absTmpPath`，临时目录绝对路径
- `cwd`，当前路径注意： 注册阶段不能获取到。因此不能在插件里直接获取，要在 hook 里使用。

#### pkg

当前项目的 `package.json` 对象

#### pkgPath

当前项目的 `package.json` 的绝对路径。

#### plugin

当前插件的对象。

- `type` 插件类型，有 preset 和 plugin 两种
- `path` 插件路径
- `id` 插件 id
- `key` 插件 key
- `config` 插件的配置
- `enableBy` 插件的启用方式注意： 注册阶段使用的 plugin 对象是你 `describe` 之前的对象。

#### service

Umi 的 `Service` 实例。通常不需要用到，除非你知道为什么。

#### userConfig

用户的配置，从 `.umirc` 或 `config/config` 中读取的内容，没有经过 defaultConfig 以及插件的任何处理。可以在注册阶段使用。

#### ApplyPluginsType

`api.applyPlugins()` 的 type 参数的类型。包含

- add
- modify
- event

#### ConfigChangeType

为 `api.describe()` 提供 `config.onChange` 的类型，目前包含两种：

- restart，重启 dev 进程，是默认值
- regenerateTmpFiles，重新生成临时文件

#### EnableBy

插件的启用方式，包含三种：

- register
- config

#### ServiceStage

Umi service 的运行阶段。有如下阶段：

- uninitialized
- init
- initPresets
- initPlugins
- resolveConfig
- collectAppData
- onCheck
- onStart
- runCommand

### umi 如何使用 applyPlugins?

```ts
api.applyPlugins({ key: string, type?: api.ApplyPluginsType, initialValue?: any, args?: any })
```

取得 `register()` 注册的 hooks 执行后的数据，这是一个异步函数，因此它返回的将是一个 Promise。这个方法的例子和详解见 [register](#register) api

### umi 如何使用 describe?

```ts
api.describe({ key?:string, config?: { default , schema, onChange }, enableBy? })
```

在插件注册阶段( initPresets or initPlugins stage )执行，用于描述插件或者插件集的 key、配置信息和启用方式等。

- `key` 是配置中该插件配置的键名
- `config.default` 是插件配置的默认值，当用户没有在配置中配置 key 时，默认配置将生效。
- `config.schema` 用于声明配置的类型，基于 [joi](https://joi.dev/) 。 **如果你希望用户进行配置，这个是必须的** ，否则用户的配置无效
- `config.onChange` 是 dev 模式下，配置被修改后的处理机制。默认值为 `api.ConfigChangeType.reload`，表示在 dev 模式下，配置项被修改时会重启 dev 进程。 你也可以修改为 `api.ConfigChangeType.regenerateTmpFiles`, 表示只重新生成临时文件。你还可以传入一个方法，来自定义处理机制。
- `enableBy` 是插件的启用方式，默认是`api.EnableBy.register`，表示注册启用，即插件只要被注册就会被启用。可以更改为 `api.EnableBy.config` ，表示配置启用，只有配置插件的配置项才启用插件。你还可以自定义一个返回布尔值的方法（ true 为启用 ）来决定其启用时机，这通常用来实现动态生效。e.g.

```ts
api.describe({
  key: 'foo',
  config: {
    schema(joi) {
      return joi.string();
    },
    onChange: api.ConfigChangeType.regenerateTmpFiles,
  },
  enableBy: api.EnableBy.config,
});
```

这个例子中，插件的 `key` 为 `foo`，因此配置中的键名为 `foo`，配置的类型是字符串，当配置 `foo` 发生变化时，dev 只会重新生成临时文件。该插件只有在用户配置了 `foo` 之后才会启用。

### umi 如何使用 isPluginEnable?

```ts
api.isPluginEnable( key：string)
```

判断插件是否启用，传入的参数是插件的 key

### umi 如何使用 register?

```ts
api.register({ key: string, fn, before?: string, stage?: number})
```

为 `api.applyPlugins` 注册可供其使用的 hook。

- `key` 是注册的 hook 的类别名称，可以多次使用 `register` 向同一个 `key` 注册 hook，它们将会依次执行。这个 `key` 也同样是使用 `applyPlugins` 收集 hooks 数据时使用的 `key`。注意： **这里的 key 和 插件的 key 没有任何联系。**
- `fn` 是 hook 的定义，可以是同步的，也可以是异步的（返回一个 Promise 即可）
- `stage` 用于调整执行顺序，默认为 0，设为 -1 或更少会提前执行，设为 1 或更多会后置执行。
- `before` 同样用于调整执行的顺序，传入的值为注册的 hook 的名称。注意：**`register` 注册的 hook 的名称是所在 Umi 插件的 id。** stage 和 before 的更多用法参考 [tapable](https://github.com/webpack/tapable) 注意： 相较于 `umi@3`， `umi@4` 去除了 `pluginId` 参数。fn 的写法需要结合即将使用的 applyPlugins 的 type 参数来确定：
- `api.ApplyPluginsType.add` `applyPlugins` 将按照 hook 顺序来将它们的返回值拼接成一个数组。此时 `fn` 需要有返回值，`fn` 将获取 `applyPlugins` 的参数 `args` 来作为自己的参数。`applyPlugins` 的 `initialValue` 必须是一个数组，它的默认值是空数组。当 `key` 以 `'add'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。
- `api.ApplyPluginsType.modify` `applyPlugins` 将按照 hook 顺序来依次更改 `applyPlugins` 接收的 `initialValue`， 因此此时 **`initialValue` 是必须的** 。此时 `fn` 需要接收一个 `memo` 作为自己的第一个参数，而将会把 `applyPlugins` 的参数 `args` 来作为自己的第二个参数。`memo` 是前面一系列 hook 修改 `initialValue` 后的结果， `fn` 需要返回修改后的`memo` 。当 `key` 以 `'modify'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。
- `api.ApplyPluginsType.event` `applyPlugins` 将按照 hook 顺序来依次执行。此时不用传入 `initialValue` 。`fn` 不需要有返回值，并且将会把 `applyPlugins` 的参数 `args` 来作为自己的参数。当 `key` 以 `'on'` 开头且没有显式地声明 `type` 时，`applyPlugins` 会默认按此类型执行。e.g.1 add 型

```ts
api.register({
  key: 'addFoo',
  // 同步
  fn: (args) => args,
});

api.register({
  key: 'addFoo',
  // 异步
  fn: async (args) => args * 2,
});

api
  .applyPlugins({
    key: 'addFoo',
    // key 是 add 型，不用显式声明为 api.ApplyPluginsType.add
    args: 1,
  })
  .then((data) => {
    console.log(data); // [1,2]
  });
```

e.g.2 modify 型

```ts
api.register({
  key: 'foo',
  fn: (memo, args) => ({ ...memo, a: args }),
});
api.register({
  key: 'foo',
  fn: (memo) => ({ ...memo, b: 2 }),
});
api
  .applyPlugins({
    key: 'foo',
    type: api.ApplyPluginsType.modify,
    // 必须有 initialValue
    initialValue: {
      a: 0,
      b: 0,
    },
    args: 1,
  })
  .then((data) => {
    console.log(data); // { a: 1, b: 2 }
  });
```

### umi 如何使用 registerCommand?

```ts
api.registerCommand({
  name: string,
  description? : string,
  options? : string,
  details? : string,
  fn,
  alias? : string | string[]
  resolveConfigMode? : 'strict' | 'loose'
})
```

注册命令。

- `alias` 为别名，比如 generate 的别名 g
- `fn` 的参数为 `{ args }`， args 的格式同 [yargs](https://github.com/yargs/yargs) 的解析结果，需要注意的是 `_` 里的 command 本身被去掉了，比如执行`umi generate page foo`，`args._` 为 `['page','foo']`
- `resolveConfigMode` 参数控制执行命令时配置解析的方式，`strict` 模式下强校验 Umi 项目的配置文件内容，如果有非法内容中断命令执行；`loose` 模式下不执行配置文件的校验检查。

### umi 如何使用 registerMethod?

```ts
api.registerMethod({ name: string, fn? })
```

往 api 上注册一个名为 `'name'` 的方法。

- 当传入了 fn 时，执行 fn
- 当没有传入 fn 时，`registerMethod` 会将 `name` 作为 `api.register` 的 `key` 并且将其柯里化后作为 `fn`。这种情况下相当于注册了一个 `register` 的快捷调用方式，便于注册 hook。注意：
- 相较于 `umi@3`， `umi@4` 去除了 exitsError 参数。
- 通常不建议注册额外的方法，因为它们不会有 ts 提示，直接使用 `api.register()` 是一个更安全的做法。e.g.1

```ts
api.registerMethod({
  name: foo,
  // 有 fn
  fn: (args) => {
    console.log(args);
  },
});
api.foo('hello, umi!'); // hello, umi!
```

该例子中，我们往api上注册了一个 foo 方法，该方法会把参数 console 到控制台。e.g.2

```ts
import api from './api';

api.registerMethod({
  name: 'addFoo',
  // 没有 fn
});

api.addFoo((args) => args);
api.addFoo((args) => args * 2);

api
  .applyPlugins({
    key: 'addFoo',
    args: 1,
  })
  .then((data) => {
    console.log(data); // [ 1, 2 ]
  });
```

该例子中，我们没有向 `api.registerMethod` 中传入 fn。此时，我们相当于往 api 上注册了一个"注册器"：`addFoo`。每次调用该方法都相当于调用了 `register({ key: 'addFoo', fn })`。因此当我们使用 `api.applyPlugins` 的时候（由于我们的方法是 add 型的，可以不用显式声明其 type ）就可以获取刚刚注册的 hook 的值。

### umi 如何使用 registerPresets?

```ts
api.registerPresets( presets: string[] )
```

注册插件集，参数为路径数组。该 api 必须在 initPresets stage 执行，即只可以在 preset 中注册其他 presets e.g.

```ts
api.registerPresets(['./preset', require.resolve('./preset_foo')]);
```

### umi 如何使用 registerPlugins?

```ts
api.registerPlugins( plugins: string[] )
```

注册插件，参数为路径数组。该 api 必须在 initPresets 和 initPlugins stage 执行。e.g.

```ts
api.registerPlugins(['./plugin', require.resolve('./plugin_foo')]);
```

注意： 相较于 `umi@3` ，`umi@4` 不再支持在 `registerPresets` 和 `registerPlugins` 中直接传入插件对象了，现在只允许传入插件的路径。

### umi 如何使用 registerGenerator?

注册微生成器用来快捷生成模板代码。示例：

```ts
import { GeneratorType } from '@umijs/core';
import { logger } from '@umijs/utils';
import { join } from 'path';
import { writeFileSync } from 'fs';

api.registerGenerator({
  key: 'editorconfig',
  name: 'Create .editorconfig',
  description: 'Setup editorconfig config',
  type: GeneratorType.generate,
  fn: () => {
    const configFilePath = join(api.cwd, '.editorconfig');
    if (existsSync(configFilePath)) {
      logger.info(`The .editorconfig file already exists.`);
      return;
    }
    writeFileSync(
      configFilePath,
      `
# 🎨 http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`.trimStart(),
      'utf-8',
    );
    logger.info(`Generate .editorconfig file successful.`);
  },
});
```

更多示例见 [`已有生成器源码`](https://github.com/umijs/umi/tree/master/packages/preset-umi/src/commands/generators) 。

### umi 如何使用 skipPlugins?

```ts
api.skipPlugins( keys: string[])
```

声明哪些插件需要被禁用，参数为插件 key 的数组

### umi 如何使用 addBeforeBabelPlugins?

增加额外的 Babel 插件。传入的 fn 不需要参数，且需要返回一个 Babel 插件或插件数组。

```ts
api.addBeforeBabelPlugins(() => {
  // 返回一个 Babel 插件（来源于 Babel 官网的例子）
  return () => {
    visitor: {
      Identifier(path) {
        const name = path.node.name;
        path.node.name = name.split("").reverse().join("");
      }
    }
  }
})
```

### umi 如何使用 addBeforeBabelPresets?

增加额外的 Babel 插件集。传入的 fn 不需要参数，且需要返回一个 Babel 插件集( presets )或插件集数组。

```ts
api.addBeforeBabelPresets(() => {
  // 返回一个 Babel 插件集
  return () => {
    return {
      plugins: ['Babel_Plugin_A', 'Babel_Plugin_B'],
    };
  };
});
```

### umi 如何使用 addBeforeMiddlewares?

在 webpack-dev-middleware 之前添加中间件。传入的 fn 不需要参数，且需要返回一个 express 中间件或其数组。

```ts
api.addBeforeMiddlewares(() => {
  return (req, res, next) => {
    if (false) {
      res.end('end');
    }
    next();
  };
});
```

### umi 如何使用 addEntryCode?

在入口文件的最后面添加代码（render 后）。传入的 fn 不需要参数，且需要返回一个 string 或者 string 数组。

```ts
api.addEntryCode(() => `console.log('I am after render!')`);
```

### umi 如何使用 addEntryCodeAhead?

在入口文件的最前面添加代码（render 前，import 后）。传入的 fn 不需要参数，且需要返回一个 string 或者 string 数组。

```ts
api.addEntryCodeAhead(() => `console.log('I am before render!')`);
```

### umi 如何使用 addEntryImports?

在入口文件中添加 import 语句 （import 最后面）。传入的 fn 不需要参数，其需要返回一个 `{source: string, specifier?: string}` 或其数组。

```ts
api.addEntryImports(() => ({
  source: '/modulePath/xxx.js',
  specifier: 'moduleName',
}));
```

### umi 如何使用 addEntryImportsAhead?

在入口文件中添加 import 语句 （import 最前面）。传入的 fn 不需要参数，其需要返回一个 `{source: string, specifier?: string}` 或其数组。

```ts
api.addEntryImportsAhead(() => ({
  source: 'anyPackage',
}));
```

### umi 如何使用 addExtraBabelPlugins?

添加额外的 Babel 插件。 传入的 fn 不需要参数，且需要返回一个 Babel 插件或插件数组。

### umi 如何使用 addExtraBabelPresets?

添加额外的 Babel 插件集。传入的 fn 不需要参数，且需要返回一个 Babel 插件集或其数组。

### umi 如何使用 addHTMLHeadScripts?

往 HTML 的 `<head>` 元素里添加 Script。传入的 fn 不需要参数，且需要返回一个 string（想要加入的代码） 或者 `{ async?: boolean, charset?: string, crossOrigin?: string | null, defer?: boolean, src?: string, type?: string, content?: string }` 或者它们的数组。

```ts
api.addHTMLHeadScripts(() => `console.log('I am in HTML-head')`);
```

### umi 如何使用 addHTMLLinks?

往 HTML 里添加 Link 标签。 传入的 fn 不需要参数，返回的对象或其数组接口如下：

```ts
{
  as?: string, crossOrigin: string | null,
  disabled?: boolean,
  href?: string,
  hreflang?: string,
  imageSizes?: string,
  imageSrcset?: string,
  integrity?: string,
  media?: string,
  referrerPolicy?: string,
  rel?: string,
  rev?: string,
  target?: string,
  type?: string
}
```

### umi 如何使用 addHTMLMetas?

往 HTML 里添加 Meta 标签。 传入的 fn 不需要参数，返回的对象或其数组接口如下：

```ts
{
  content?: string,
  'http-equiv'?: string,
  name?: string,
  scheme?: string
}
```

### umi 如何使用 addHTMLScripts?

往 HTML 尾部添加 Script。 传入的 fn 不需要参数，返回的对象接口同 [addHTMLHeadScripts](#addHTMLHeadScripts)

### umi 如何使用 addHTMLStyles?

往 HTML 里添加 Style 标签。 传入的 fn 不需要参数，返回一个 string （style 标签里的代码）或者 `{ type?: string, content?: string }`，或者它们的数组。

### umi 如何使用 addLayouts?

添加全局 layout 组件。 传入的 fn 不需要参数，返回 `{ id?: string, file: string }`

### umi 如何使用 addMiddlewares?

添加中间件，在 route 中间件之后。 传入的 fn 不需要参数，返回 express 中间件。

### umi 如何使用 addPolyfillImports?

添加补丁 import，在整个应用的最前面执行。 传入的 fn 不需要参数，返回 `{ source: string, specifier?:string }`

### umi 如何使用 addPrepareBuildPlugins?

### umi 如何使用 addRuntimePlugin?

添加运行时插件，传入的 fn 不需要参数，返回 string ，表示插件的路径。

### umi 如何使用 addRuntimePluginKey?

添加运行时插件的 Key， 传入的 fn 不需要参数，返回 string ，表示插件的路径。

### umi 如何使用 addTmpGenerateWatcherPaths?

添加监听路径，变更时会重新生成临时文件。传入的 fn 不需要参数，返回 string，表示要监听的路径。

### umi 如何使用 addOnDemandDeps?

添加按需安装的依赖，他们会在项目启动时检测是否安装：

```ts
api.addOnDemandDeps(() => [
  { name: '@swc/core', version: '^1.0.0', dev: true },
]);
```

### umi 如何使用 chainWebpack?

通过 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 的方式修改 webpack 配置。传入一个fn，该 fn 不需要返回值。它将接收两个参数：

- `memo` 对应 webpack-chain 的 config
- `args:{ webpack, env }` `arg.webpack` 是 webpack 实例， `args.env` 代表当前的运行环境。e.g.

```ts
api.chainWebpack((memo, { webpack, env }) => {
  // set alias
  memo.resolve.alias.set('a', 'path/to/a');
  // Delete progess bar plugin
  memo.plugins.delete('progess');
});
```

### umi 如何使用 modifyAppData （?

修改 app 元数据。传入的 fn 接收 appData 并且返回它。

```ts
api.modifyAppData((memo) => {
  memo.foo = 'foo';
  return memo;
});
```

### umi 如何使用 modifyConfig?

修改配置，相较于用户的配置，这份是最终传给 Umi 使用的配置。传入的 fn 接收 config 作为第一个参数，并且返回它。另外 fn 可以接收 `{ paths }` 作为第二个参数。`paths` 保存了 Umi 的各个路径。

```ts
api.modifyConfig((memo, { paths }) => {
  memo.alias = {
    ...memo.alias,
    '@': paths.absSrcPath,
  };
  return memo;
});
```

### umi 如何使用 modifyDefaultConfig?

修改默认配置。传入的 fn 接收 config 并且返回它。

### umi 如何使用 modifyHTML?

修改 HTML，基于 cheerio 的 ast。传入的 fn 接收 cheerioAPI 并且返回它。另外 fn 还可以接收`{ path }` 作为它的第二个参数，该参数代表路由的 path

```ts
api.modifyHTML(($, { path }) => {
  $('h2').addClass('welcome');
  return $;
});
```

### umi 如何使用 modifyHTMLFavicon?

修改 HTML 的 favicon 路径。 传入的 fn 接收原本的 favicon 路径(string 类型)并且返回它。

### umi 如何使用 modifyPaths?

修改 paths，比如 absOutputPath、absTmpPath。传入的 fn 接收 paths 并且返回它。paths 的接口如下：

```ts
paths:{
  cwd?: string;
  absSrcPath?: string;
  absPagesPath?: string;
  absTmpPath?: string;
  absNodeModulesPath?: string;
  absOutputPath?: string;
}
```

### umi 如何使用 modifyRendererPath?

修改 renderer path。传入的 fn 接收原本的 path （string 类型）并且返回它。

### umi 如何使用 modifyServerRendererPath?

修改 server renderer path。传入的 fn 接收原本的 path （string 类型）并且返回它。

### umi 如何使用 modifyRoutes?

修改路由。 传入的 fn 接收 id-route 的 map 并且返回它。其中 route 的接口如下：

```ts
interface IRoute {
  path: string;
  file?: string;
  id: string;
  parentId?: string;
  [key: string]: any;
}
```

e.g.

```ts
api.modifyRoutes((memo) => {
  Object.keys(memo).forEach((id) => {
    const route = memo[id];
    if (route.path === '/') {
      route.path = '/redirect';
    }
  });
  return memo;
});
```

### umi 如何使用 modifyTSConfig?

修改临时目录下的 tsconfig 文件内容。

```ts
api.modifyTSConfig((memo) => {
  memo.compilerOptions.paths['foo'] = ['bar'];
  return memo;
});
```

### umi 如何使用 modifyViteConfig?

修改 vite 最终配置。 传入的 fn 接收 vite 的 Config 对象作为第一个参数并且返回它。另外 fn 还可以接收 `{ env }` 作为第二个参数，可以通过该参数获取当前的环境。

```ts
api.modifyViteConfig((memo, { env }) => {
  if (env === 'development') {
    // do something
  }
  return memo;
});
```

### umi 如何使用 modifyWebpackConfig?

修改 webpack 最终配置。传入的 fn 接收 webpack 的 Config 对象作为第一个参数并且返回它。另外 fn 还可以接收 `{ webpack, env }` 作为第二个参数，其中 webpack 是 webpack 实例，env 代表当前环境。

```ts
api.modifyWebpackConfig((memo, { webpack, env }) => {
  // do something

  return memo;
});
```

### umi 如何使用 onBeforeCompiler?

generate 之后，webpack / vite compiler 之前。传入的 fn 不接收任何参数。

### umi 如何使用 onBeforeMiddleware?

提供在服务器内部执行所有其他中间件之前执行自定义中间件的能力, 这可以用来定义自定义处理程序， 例如:

```ts
api.onBeforeMiddleware(({ app }) => {
  app.get('/some/path', function (req, res) {
    res.json({ custom: 'response' });
  });
});
```

### umi 如何使用 onBuildComplete?

build 完成时。传入的 fn 接收 `{ isFirstCompile: boolean, stats, time: number, err?: Error }` 作为参数。

### umi 如何使用 onBuildHtmlComplete?

build 完成且 html 完成构建之后。

### umi 如何使用 onCheck?

检查时，在 onStart 之前执行。传入的 fn 不接收任何参数

### umi 如何使用 onCheckCode?

检查代码时。传入的 fn 接收的参数接口如下：

```ts
args: {
  file: string;
  code: string;
  isFromTmp: boolean;
  imports: {
    source: string;
    loc: any;
    default: string;
    namespace: string;
    kind: babelImportKind;
    specifiers: Record<string, { name: string; kind: babelImportKind }>;
  }[];
  exports: any[];
  cjsExports: string[];
}
```

### umi 如何使用 onCheckConfig?

检查 config 时。传入的 fn 接收 `{ config, userConfig }`作为参数，它们分别表示实际的配置和用户的配置。

### umi 如何使用 onCheckPkgJSON?

检查 package.json 时。传入的 fn 接收 `{origin?, current}` 作为参数。它们的类型都是 package.json 对象

### umi 如何使用 onDevCompileDone?

dev 完成时。传入的 fn 接收的参数接口如下：

```ts
args: {
  isFirstCompile: boolean;
  stats: any;
  time: number;
}
```

### umi 如何使用 onGenerateFiles?

生成临时文件时，随着文件变化会频繁触发，有缓存。 传入的 fn 接收的参数接口如下：

```ts
args: {
  isFirstTime?: boolean;
  files?: {
    event: string;
    path: string;
  } | null;
}
```

### umi 如何使用 onPatchRoute?

匹配单个路由，可以修改路由，给路由打补丁

### umi 如何使用 onPkgJSONChanged?

package.json 变更时。传入的 fn 接收 `{origin?, current}` 作为参数。它们的类型都是 package.json 对象

### umi 如何使用 onPrepareBuildSuccess?

### umi 如何使用 onStart?

启动时。传入的 fn 不接收任何参数。

### umi 如何使用 writeTmpFile?

`api.writeTmpFile()`的 type 参数的类型。

- content: 写入的文本内容，有内容就不会使用模板。
- context: 模板上下文。
- noPluginDir: 是否使用插件名做为目录。
- path: 写入文件的路径。
- tpl: 使用模板字符串，没有模板路径会使用它。
- tplPath: 使用模板文件的路径。

### umi 如何使用 appData?

### umi 如何使用 args?

命令行参数，这里去除了命令本身。e.g.

- `$ umi dev --foo`, args 为 `{ _:[], foo: true }`
- `$ umi g page index --typescript --less` , args 为 `{ _: [ 'page', 'index''], typescript: true, less: true }`

### umi 如何使用 config?

最终的配置（取决于你访问的时机，可能是当前收集到的最终配置）

### umi 如何使用 cwd?

当前路径

### umi 如何使用 env?

即 `process.env.NODE_ENV` 可能有 `development`、`production` 和 `test`

### umi 如何使用 logger?

插件日志对象，包含 `{ log, info, debug, error, warn, profile }`，他们都是方法。其中 `api.logger.profile` 可用于性能耗时记录。

```ts
api.logger.profile('barId');
setTimeout(() => {
  api.logger.profile('barId');
});
// profile - barId Completed in 6254ms
```

### umi 如何使用 name?

当前命令的名称，例如 `$ umi dev `， `name` 就是 `dev`

### umi 如何使用 paths?

项目相关的路径：

- `absNodeModulesPath`，node_modules 目录绝对路径
- `absOutputPath`，输出路径，默认是 ./dist
- `absPagesPath`，pages 目录绝对路径
- `absSrcPath`，src 目录绝对路径，需注意 src 目录是可选的，如果没有 src 目录，absSrcPath 等同于 cwd
- `absTmpPath`，临时目录绝对路径
- `cwd`，当前路径注意： 注册阶段不能获取到。因此不能在插件里直接获取，要在 hook 里使用。

### umi 如何使用 pkg?

当前项目的 `package.json` 对象

### umi 如何使用 pkgPath?

当前项目的 `package.json` 的绝对路径。

### umi 如何使用 plugin?

当前插件的对象。

- `type` 插件类型，有 preset 和 plugin 两种
- `path` 插件路径
- `id` 插件 id
- `key` 插件 key
- `config` 插件的配置
- `enableBy` 插件的启用方式注意： 注册阶段使用的 plugin 对象是你 `describe` 之前的对象。

### umi 如何使用 service?

Umi 的 `Service` 实例。通常不需要用到，除非你知道为什么。

### umi 如何使用 userConfig?

用户的配置，从 `.umirc` 或 `config/config` 中读取的内容，没有经过 defaultConfig 以及插件的任何处理。可以在注册阶段使用。

### umi 如何使用 ApplyPluginsType?

`api.applyPlugins()` 的 type 参数的类型。包含

- add
- modify
- event

### umi 如何使用 ConfigChangeType?

为 `api.describe()` 提供 `config.onChange` 的类型，目前包含两种：

- restart，重启 dev 进程，是默认值
- regenerateTmpFiles，重新生成临时文件

### umi 如何使用 EnableBy?

插件的启用方式，包含三种：

- register
- config

### umi 如何使用 ServiceStage?

Umi service 的运行阶段。有如下阶段：

- uninitialized
- init
- initPresets
- initPlugins
- resolveConfig
- collectAppData
- onCheck
- onStart
- runCommand

### umi 的 配置 有哪些配置？

**配置 alias**

- 类型：`Record<string, string>`
- 默认值：`{}`

配置别名，对 import 语句的 source 做映射。

比如：

```js
{
  alias: {
    foo: '/tmp/to/foo',
  }
}
```

然后代码里 `import 'foo'` 实际上会 `import '/tmp/to/foo'`。

有几个 Tip。

1、alias 的值最好用绝对路径，尤其是指向依赖时，记得加 `require.resolve`，比如，

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

2、如果不需要子路径也被映射，记得加 `$` 后缀，比如

```js
// import 'foo/bar' 会被映射到 import '/tmp/to/foo/bar'
{
  alias: {
    foo: '/tmp/to/foo',
  }
}

// import 'foo/bar' 还是 import 'foo/bar'，不会被修改
{
  alias: {
    foo$: '/tmp/to/foo',
  }
}
```

**配置 autoprefixer**

- 类型：`object`
- 默认值：`{ flexbox: 'no-2009' }`

用于解析 CSS 并使用来自 Can I Use 的值将供应商前缀添加到 CSS 规则。如自动给 CSS 添加 `-webkit-` 前缀。

更多配置，请查阅 [autoprefixer 的配置项](https://github.com/postcss/autoprefixer#options)。

**配置 analyze**

- 类型：`object`
- 默认值：`{}`

通过指定 [`ANALYZE`](../guides/env-variables#analyze) 环境变量分析产物构成时，analyzer 插件的具体配置项，见 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin)

使用 Vite 模式时，除了可以自定义 [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) 的配置， `excludeAssets`、`generateStatsFile`、`openAnalyzer`、`reportFilename`、`reportTitle` 这些选项会自动转换适配。

**配置 base**

- 类型：`string`
- 默认值：`/`

要在非根目录下部署 umi 项目时，你可以使用 base 配置。

base 配置允许你为应用程序设置路由前缀。比如有路由 `/` 和 `/users`，设置 base 为 `/foo/` 后就可通过 `/foo/` 和 `/foo/users` 访问到之前的路由。

> 注意：base 配置必须在构建时设置，并且不能在不重新构建的情况下更改，因为该值内联在客户端包中。

**配置 cacheDirectoryPath**

- 类型：`string`
- 默认值：`node_modules/.cache`

默认情况下 Umi 会将构建中的一些缓存文件存放在 `node_modules/.cache` 目录下，比如 logger 日志，webpack 缓存，mfsu 缓存等。你可以通过使用 `cacheDirectoryPath` 配置来修改 Umi 的缓存文件目录。

示例，

```js
// 更改缓存文件路径到 node_modules/.cache1 文件夹
cacheDirectoryPath: 'node_modules/.cache1',
```

**配置 chainWebpack**

- 类型：`(memo, args) => void`
- 默认值：`null`

为了扩展 Umi 内置的 webpack 配置，我们提供了用链式编程的方式修改 webpack 配置，基于 webpack-chain，具体 API 可参考 [webpack-api 的文档](https://github.com/mozilla-neutrino/webpack-chain)。

如下所示：

```js
export default {
  chainWebpack(memo, args) {
    return memo;
  },
};
```

该函数具有两个参数：

- `memo` 是现有 webpack 配置
- `args` 包含一些额外信息和辅助对象，目前有 `env` 和 `webpack`。`env` 为当前环境，值为 `development` 或 `production`；`webpack` 为 webpack 对象，可从中获取 webpack 内置插件等

用法示例：

```js
export default {
  chainWebpack(memo, { env, webpack }) {
    // 设置 alias
    memo.resolve.alias.set('foo', '/tmp/to/foo');

    // 添加额外插件
    memo.plugin('hello').use(Plugin, [...args]);

    // 删除 Umi 内置插件
    memo.plugins.delete('hmr');
  },
};
```

**配置 clickToComponent**

- 类型: `{ editor?: string }`
- 默认值: `false`

> 当前仅 React 项目支持。

开启后，可通过 `Option+Click/Alt+Click` 点击组件跳转至编辑器源码位置，`Option+Right-click/Alt+Right-click` 可以打开上下文，查看父组件。

关于参数。`editor` 为编辑器名称，默认为 'vscode'，支持 `vscode` & `vscode-insiders`。

配置 clickToComponent 的行为，详见 [click-to-component](https://github.com/ericclemmons/click-to-component)。

示例：

```ts
// .umirc.ts
export default {
  clickToComponent: {},
};
```

**配置 clientLoader**

- 类型: `{}`
- 默认值: `false`

开启后，可以为每个路由声明一个数据加载函数 `clientLoader`，将页面需要的加载数据程序提取到 `clientLoader` 可以让 Umi 提前在页面组件尚未加载好的时候提前进行数据的加载，避免瀑布流请求的问题，详细介绍请看 [路由数据预加载](../guides/client-loader)。

示例：

```ts
// .umirc.ts
export default {
  clientLoader: {},
};
```

配置开启后，在路由组件中使用：

```jsx
// pages/.../some_page.tsx

import { useClientLoaderData } from 'umi';

export default function SomePage() {
  const { data } = useClientLoaderData();
  return <div>{data}</div>;
}

export async function clientLoader() {
  const data = await fetch('/api/data');
  return data;
}
```

**配置 codeSplitting**

- 类型：`{ jsStrategy: 'bigVendors' | 'depPerChunk' | 'granularChunks'; jsStrategyOptions: {} }`
- 默认值：`null`

提供 code splitting 的策略方案。

bigVendors 是大 vendors 方案，会将 async chunk 里的 node_modules 下的文件打包到一起，可以避免重复。同时缺点是，1）单文件的尺寸过大，2）毫无缓存效率可言。

depPerChunk 和 bigVendors 类似，不同的是把依赖按 package name + version 进行拆分，算是解了 bigVendors 的尺寸和缓存效率问题。但同时带来的潜在问题是，可能导致请求较多。我的理解是，对于非大型项目来说其实还好，因为，1）单个页面的请求不会包含非常多的依赖，2）基于 HTTP/2，几十个请求不算问题。但是，对于大型项目或巨型项目来说，需要考虑更合适的方案。

granularChunks 在 bigVendors 和 depPerChunk 之间取了中间值，同时又能在缓存效率上有更好的利用。无特殊场景，建议用 granularChunks 策略。

**配置 conventionLayout**

- 类型：`boolean`
- 默认值：`undefined`

`src/layouts/index.[tsx|vue|jsx|js]` 为约定式布局，默认开启。可通过配置 `conventionLayout: false` 关闭该默认行为。

**配置 conventionRoutes**

- 类型：`{ base: string; exclude: RegExp[] }`
- 默认值：`null`

修改默认的约定式路由规则，仅在使用 umi 约定式路由时有效，约定式路由也叫文件路由，就是不需要手写配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。

使用约定式路由时，约定 `src/pages` 下所有的 `(j|t)sx?` 文件即路由。

> 你可以从[约定式路由](../guides/routes#约定式路由)查看更多说明。

#### base

`base` 用于设置约定的路由的基础路径，默认从 `src/pages` 读取，如果是文档站点可能会需要将其改成 `./docs`；

#### exclude

你可以使用 `exclude` 配置过滤一些不需要的文件，比如用于过滤 components、models 等。示例，

```js
// 不识别 components 和 models 目录下的文件为路由
conventionRoutes: {
  exclude: [/\/components\//, /\/models\//],
}
```

**配置 copy**

- 类型：`Array<string | { from: string; to: string; }>`
- 默认值：`[]`

配置要复制到输出目录的文件或文件夹。

当配置字符串时，默认拷贝到产物目录，如：

```ts
copy: ['foo.json', 'src/bar.json'];
```

会产生如下产物的结构：

```
+ dist
  - bar.json
  - foo.json
+ src
  - bar.json
- foo.json
```

你也可以通过对象配置具体的拷贝位置，其中相对路径的起点为项目根目录：

```ts
copy: [
  { from: 'from', to: 'dist/output' },
  { from: 'file.json', to: 'dist' },
];
```

此时将产生如下产物结构：

```
+ dist
  + output
    - foo.json
  - file.json
+ from
  - foo.json
- file.json
```

**配置 crossorigin**

- 类型：`{ includes?: string[] }`
- 默认值：`false`

配置 script 标签的 crossorigin。如果有声明，会为本地 script 加上 crossorigin="anonymous" 的属性。

关于参数。`includes` 参数可以为额外的非本地 script 标签加上此属性。

比如：

```
crossorigin: {}
```

然后输出的 HTML 中会有这些变化，

```diff
-
<script src="/umi.js"></script>
+
<script src="/umi.js" crossorigin="anonymous"></script>
```

**配置 cssMinifier**

- 类型：`string` 可选的值：`esbuild`, `cssnano`, `parcelCSS`, `none`
- 默认值：`esbuild`

配置构建时使用的 CSS 压缩工具; `none` 表示不压缩。

示例：

```js
{
  cssMinifier: 'esbuild';
}
```

**配置 cssMinifierOptions**

- 类型：`object`
- 默认值：`{}`

`cssMinifier` CSS 压缩工具配置选项。

示例：

```js
{
  cssMinifier: 'esbuild',
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
}
```

对应 CSS 压缩的配置请查看对应的文档。

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [cssnano 参考](https://cssnano.co/docs/config-file/)
- [parcelCSS 参考](https://github.com/parcel-bundler/parcel-css/blob/master/node/index.d.ts)

**配置 cssPublicPath**

- 类型：`string`
- 默认值：`./`

为 CSS 中的图片、文件等外部资源指定自定义公共路径。作用类似于 `publicPath` 默认值是 `./`。

**配置 cssLoader**

- 类型：`object`
- 默认值：`{}`

配置 css-loader ，详见 [css-loader > options](https://github.com/webpack-contrib/css-loader#options)

**配置 cssLoaderModules**

- 类型：`object`
- 默认值：`{}`

配置 css modules 的行为，详见 [css-loader > modules](https://github.com/webpack-contrib/css-loader#modules)。

如：

```ts
cssLoaderModules: {
  // 配置驼峰式使用
  exportLocalsConvention: 'camelCase';
}
```

**配置 deadCode**

- 类型：`{ patterns?: string[]; exclude?: string[]; failOnHint?: boolean; detectUnusedFiles?: boolean; detectUnusedExport?: boolean; context?: string }`
- 默认值：`false`

检测未使用的文件和导出，仅在 build 阶段开启。

比如：

```
deadCode: {}
```

然后执行 build，如有发现问题，会打印警告：

```
Warning: There are 1 unused files:
 1. /pages/index.module.less
 Please be careful if you want to remove them (¬º-°)¬.
```

可配置项：

- `patterns` : 识别代码的范围，如 `['src/pages/**']`
- `exclude` : 排除检测的范围，如 `['src/pages/utils/**']`
- `failOnHint` : 检测失败是否终止进程，默认 `false` 不终止
- `detectUnusedFiles` : 是否检测未使用的文件，默认 `true` 检测
- `detectUnusedExport` : 是否检测未使用的导出，默认 `true` 检测
- `context` : 匹配开始的目录，默认为当前项目根目录

**配置 define**

- 类型：`Record<string, string>`
- 默认值： 如下

```
  {
    'process.env.NODE_ENV' : process.env.NODE_ENV,
    'process.env.HMR' : process.env.HMR,
    'process.env.SOCKET_SERVER': process.env.ERROR_OVERLAY'
  }
```

基于[define-plugin 插件](https://webpack.js.org/plugins/define-plugin/)设置代码中的可用变量。

:::warning{title=🚨}

1. 属性值会经过一次 `JSON.stringify` 转换。
2. key 值的替换是通过语法形式来匹配的，比如配置了 `{'a.b.c': 'abcValue'}` 是无法替换代码中的 `a.b?.c` 的 :::

比如，

```
define: { FOO: 'bar' }
```

然后代码里的 `console.log(hello, FOO)` 会被编译成 `console.log(hello, 'bar')`。

当你在 ts 的项目中使用这些变量时，你需要在 typings 文件中声明变量类型，以支持 ts 类型提示，比如：

如果你的 typings 文件是全局的：

```ts
// typings.d.ts
declare const FOO: string;
```

如果你的 typings 文件是非全局的（包含了 import/export）：

```ts
// typings.d.ts
import './other.d.ts';

declare global {
  const FOO: string;
}
```

**配置 devtool**

- 类型：`string`
- 默认值：dev 时默认 `cheap-module-source-map`，build 时候默认无 sourcemap

设置 sourcemap 生成方式。

常见可选值有：

- `eval`，最快的类型，缺点是不支持低版本浏览器
- `source-map`，最慢但最全的类型

示例，

```js
// 关闭 dev 阶段的 sourcemap 生成
devtool: false;

// 只设置 dev 阶段的 sourcemap
devtool: process.env.NODE_ENV === 'development' ? 'eval' : false;
```

**配置 classPropertiesLoose**

- 类型：`object`
- 默认值：`{}`

设置 babel class-properties 启用 loose

**配置 esbuildMinifyIIFE**

- 类型：`boolean`
- 默认值：`false`

修复 esbuild 压缩器自动引入的全局变量导致的命名冲突问题。

由于 Umi 4 默认使用 esbuild 作为压缩器，该压缩器会自动注入全局变量作为 polyfill ，这可能会引发 异步块全局变量冲突、 qiankun 子应用和主应用全局变量冲突 等问题，通过打开该选项或切换 [`jsMinifier`](#jsminifier-webpack) 压缩器可解决此问题。

更多信息详见 [vite#7948](https://github.com/vitejs/vite/pull/7948) 。

示例,

```ts
esbuildMinifyIIFE: true;
```

**配置 externals**

- 类型：`Record<string, string> | Function`
- 默认值：`{}`

设置哪些模块不打包，转而通过 `<script>` 或其他方式引入，通常需要搭配 headScripts 配置使用。

示例，

```
// external react
externals: { react: 'React' },
headScripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
```

注意：不要轻易设置 antd 的 externals，由于依赖较多，使用方式复杂，可能会遇到较多问题，并且一两句话很难解释清楚。

**配置 extraBabelIncludes**

- 类型：`Array<string | RegExp>`
- 默认值：`[]`

配置额外需要做 Babel 编译的 NPM 包或目录。比如：

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

**配置 extraBabelPlugins**

- 类型：`string[] | Function`
- 默认值：`[]`

配置额外的 babel 插件。可传入插件地址或插件函数。

**配置 extraBabelPresets**

- 类型：`string[] | Function`
- 默认值：`[]`

配置额外的 babel 插件集。可传入插件集地址或插件集函数。

**配置 extraPostCSSPlugins**

- 类型：`PostCSSPlugin[]`
- 默认值：`[]`

配置额外的 postcss 插件。

**配置 exportStatic**

- 类型：`{ extraRoutePaths: IUserExtraRoute[] | (() => IUserExtraRoute[] | Promise<IUserExtraRoute[]>), ignorePreRenderError: boolean }`
- 默认值：`undefined`

开启该配置后会针对每个路由单独输出 HTML 文件，通常用于静态站点托管。例如项目有如下路由：

```bash
/
/docs
/docs/a
```

不开启 `exportStatic` 时会输出：

```bash
dist/index.html
```

开启 `exportStatic` 时会输出：

```bash
dist/index.html
dist/docs/index.html
dist/docs/a/index.html
```

通过 `extraRoutePaths` 子配置项可以产出额外的页面，通常用于动态路由静态化。例如有如下路由：

```bash
/news/:id
```

默认情况下只会输出 `dist/news/:id/index.html`，但可以通过配置 `extraRoutePaths` 将其静态化：

```ts
// .umirc.ts
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

此时输出文件会变成：

```bash
dist/news/:id/index.html
dist/news/1/index.html
dist/news/2/index.html
```

`extraRoutePaths` 除了支持配置字符串数据，还可以配置成对象数组，用于启用 SSR 时又希望对部分路由禁用预渲染的场景，例如：

```ts
// .umirc.ts
export default {
  exportStatic: {
    // 输出额外页面文件但跳过预渲染
    extraRoutePaths: [{ path: '/news/1', prerender: false }],
  },
};
```

`exportStatic` 在搭配 `ssr` 使用时会进行预渲染，在预渲染失败时会抛出异常并终止构建，可以通过配置 `ignorePreRenderError` 来忽略预渲染失败的错误，例如：

```ts
// .umirc.ts
export default {
  exportStatic: {
    // 忽略预渲染失败的错误
    ignorePreRenderError: true,
  },
};
```

**配置 favicons**

- 类型：`string[]`
- 默认值：`null`

默认情况下，站点将使用约定 [`favicon`](../guides/directory-structure#favicon) 来创建图标的 meta 头标签。

通过如下方式自定义：

```js
favicons: [
  // 完整地址
  'https://domain.com/favicon.ico',
  // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
  '/favicon.png',
];
```

**配置 forkTSChecker**

- 类型：`object`
- 默认值：`null`

开启 TypeScript 的类型检查。基于 fork-ts-checker-webpack-plugin，配置项可参考 [fork-ts-checker-webpack-plugin 的 Options](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options)。

**配置 hash**

- 类型：`boolean`
- 默认值：`false`

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

**配置 headScripts**

- 类型：`string[] | Script[]`
- 默认值：`[]`

配置 `<head>` 中的额外 script。

比如，

```js
headScripts: [`alert(1);`, `https://a.com/b.js`],
```

会生成 HTML，

```html
<script>
  alert(1);
</script>
<script src="https://a.com/b.js"></script>
```

如果需要额外属性，切换到对象格式，比如，

```js
headScripts: [
  { src: '/foo.js', defer: true },
  { content: `alert('你好');`, charset: 'utf-8' },
],
```

**配置 helmet**

- 类型：`boolean`
- 默认值：`true`

配置 `react-helmet-async` 的集成，当设置为 `false` 时，不会集成 `react-helmet-async`，此时无法从框架中 `import { Helmet }` 使用，同时构建产物也会减少[相应的尺寸](https://bundlephobia.com/package/react-helmet-async)。

**配置 history**

- 类型：`{ type: 'browser' | 'hash' | 'memory' }`
- 默认值：`{ type: 'browser' }`

设置路由 history 类型。

**配置 historyWithQuery**

- 类型：`‌{}`
- 默认值：`false`

让 history 带上 query。除了通过 `useNavigate` 进行的跳转场景，此时还需自行处理 query。

**配置 https**

- 类型：`{ cert: string; key: string; hosts: string[]; http2?: boolean }`
- 默认值：`{ hosts: ['127.0.0.1', 'localhost'] }`

开启 dev 的 https 模式，Umi 4 默认使用 [`mkcert`](https://github.com/FiloSottile/mkcert) 快捷创建证书，请确保已经安装。

关于参数。

- `cert` 和 `key` 分别用于指定 cert 和 key 文件。
- `hosts` 用于指定要支持 https 访问的 host，默认是 `['127.0.0.1', 'localhost']`。
- `http2` 用于指定是否使用 HTTP 2.0 协议，默认是 true（使用 HTTP 2.0 在 Chrome 或 Edge 浏览器中中有偶然出现 `ERR_HTTP2_PROTOCOL_ERRO`报错，如有遇到，建议配置为 false）。

示例，

```js
https: {
}
```

**配置 icons**

- 类型：`{ autoInstall: {}; alias: Record<string,string>; include: Array<string>;  }`
- 默认值：`false`

你就可以通过 umi 导出的 Icon 组件快捷地引用 icon 集或者本地的 icon。

#### icon 集使用

在 umi 配置文件设置，开启 icons 功能，并允许自动安装图标库。

```ts
icons: { autoInstall: {} },
```

页面使用：

```ts
import { Icon } from 'umi';
<Icon icon="fa:home" />
```

icon 里包含的字符串是 `collect:icon` 的组合，以 `:` 分割。Icon 集推荐在 [Icônes 网站](https://icones.js.org/)上搜索。 **配置 本地 icon 使用**

在 umi 配置文件设置，开启 icons 功能。

```ts
icons: {},
```

本地 svg icon 的使用需要把 svg 保存在 `src/icons` 目录下，然后通过 `local` 这个前缀引用，比如在 `src/icons` 目录下有个 `umi.svg`，然后可以这样引用。

```tsx
import { Icon } from 'umi';
<Icon icon="local:umi" />;
```

#### 配置项介绍

- `autoInstall` 表示是否自动安装 icon 集；tnpm/cnpm 客户端暂不支持，但可以通过手动按需安装对应 icon 集合包 `@iconify-json/collection-name` 。 参考：[Icon 集合列表](https://github.com/iconify/icon-sets/blob/master/collections.md), collection-name 为列表中的 **_Icon set prefix_** 项。
- `alias` 用于配置 icon 的别名，比如配置了 `alias:{home:'fa:home'}` 后就可以通过 `icon="home"` 使用 `fa:home` 这个 icon 了。
- `include` 配置需要强制使用的 icon， 例如 `include: ['fa:home', 'local:icon']`。常见的使用场景：将 icon 字符串定义在一个 map 中，导致无法检测到；在 `mdx` 使用了 `Icon` 组件。

#### Icon 组件属性

- icon，指定 icon
- width，svg 宽度
- height，svg 高度
- viewBox，svg viewBox
- style，外部容器样式
- className，外部容器样式名
- spin，是否自动旋转
- rotate，配置旋转角度，支持多种格式，比如 `1`，`"30deg"`、`"25%"` 都可以
- flip，支持 `vertical`、`horizontal`，或者他们的组合 `vertical,horizontal` **配置 ignoreMomentLocale**

- 类型：`boolean`
- 默认值：`true`

忽略 moment 的 locale 文件，用于减少产物尺寸。

注意：此功能默认开。配置 `ignoreMomentLocale: false` 关闭。

**配置 inlineLimit**

- 类型：`number`
- 默认值：`10000` (10k)

配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。

**配置 jsMinifier (webpack)**

- 类型：`string`，可选值 `esbuild`, `terser`, `swc`, `uglifyJs`, `none`
- 默认值：`esbuild`

配置构建时压缩 JavaScript 的工具；`none`表示不压缩。

示例：

```ts
{
  jsMinifier: 'esbuild';
}
```

**配置 jsMinifierOptions**

- 类型：`object`
- 默认值：`{}`

`jsMinifier` 的配置项；默认情况下压缩代码会移除代码中的注释，可以通过对应的 `jsMinifier` 选项来保留注释。

示例：

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

配置项需要和所使用的工具对应，具体参考对应文档：

- [esbuild 参考](https://esbuild.github.io/api/#minify)
- [terser 参考](https://terser.org/docs/api-reference#minify-options)
- [swc 参考](https://swc.rs/docs/configuration/minification#configuration)
- [uglifyJs 参考](https://lisperator.net/uglifyjs/compress)

**配置 lessLoader**

- 类型：`object`
- 默认值：`{ modifyVars: userConfig.theme, javascriptEnabled: true }`

设置 less-loader 的 Options。具体参考参考 [less-loader 的 Options](https://github.com/webpack-contrib/less-loader#lessoptions)。

> 默认是用 less\@4 版本，如果需要兼容 less\@3 请配置使用[less-options-math](https://lesscss.org/usage/#less-options-math)。

**配置 legacy**

- 类型：`{ buildOnly?: boolean; nodeModulesTransform?: boolean; checkOutput?: boolean; }`
- 默认值：`false`

当你需要兼容低版本浏览器时，可能需要该选项，开启后将默认使用 **非现代** 的打包工具做构建，这会显著增加你的构建时间。

```ts
legacy: {
}
```

默认只在构建时生效，通过设定 `buildOnly: false` 关闭该限制。

可通过打开 `checkOutput: true` 选项，每次构建结束后将自动运行 [`es-check`](https://github.com/yowainwright/es-check) 检查产物 `.js` 文件的语法是否为 es5 格式。

开启此选项后：

- 不支持自定义 `srcTranspiler` 、`jsMinifier` 、 `cssMinifier` 选项。
- 将转译全部 `node_modules` 内的源码，`targets` 兼容至 ie 11 ，通过指定 `nodeModulesTransform: false` 来取消对 `node_modules` 的转换，此时你可以通过配置 `extraBabelIncludes` 更精准的转换那些有兼容性问题的包。
- 因低版本浏览器不支持 Top level await ，当你在使用 `externals` 时，确保你没有在使用异步性质的 [`externalsType`](https://webpack.js.org/configuration/externals/#externalstype) 时又使用了同步导入依赖。

**配置 links**

- 类型：`Link[]`
- 默认值：`[]`

配置额外的 link 标签。

示例，

```js
links: [{ href: '/foo.css', rel: 'preload' }],
```

**配置 manifest**

- 类型：`{ fileName: string; basePath: string }`
- 默认值：`null`

开启 build 时生成额外的 manifest 文件，用于描述产物。

关于参数。`fileName` 是生成的文件名，默认是 `asset-manifest.json`；`basePath` 会给所有文件路径加上前缀。

注意：只在 build 时生成。

**配置 mdx**

- 类型：`{ loader: string; loaderOptions: Object }`
- 默认值：`{}`

mdx loader 配置 loader 配置路径，[loaderOptions](https://github.com/mdx-js/mdx/blob/v1/packages/mdx/index.js#L12) 配置参数

**配置 metas**

- 类型：`Meta[]`
- 默认值：`[]`

配置额外的 meta 标签。

比如，

```js
metas: [
  { name: 'keywords', content: 'umi, umijs' },
  { name: 'description', content: 'React framework.' },
],
```

会生成以下 HTML，

```html
<meta name="keywords" content="umi, umijs" />
<meta name="description" content="React framework." />
```

**配置 mfsu**

- 类型：`{ esbuild: boolean; mfName: string; cacheDirectory: string; strategy: 'normal' | 'eager'; include?: string[]; chainWebpack: (memo, args) => void; exclude?: Array<string | RegExp> }`
- 默认值：`{ mfName: 'mf', strategy: 'normal' }`

配置基于 [Module Federation](https://module-federation.github.io/) 的提速功能。

关于参数

- `esbuild` 配为 `true` 后会让依赖的预编译走 esbuild，从而让首次启动更快，缺点是二次编译不会有物理缓存，稍慢一些；推荐项目依赖比较稳定的项目使用。
- `mfName` 是此方案的 remote 库的全局变量，默认是 mf，通常在微前端中为了让主应用和子应用不冲突才会进行配置
- `cacheDirectory` 可以自定义缓存目录，默认是 `node_modules/.cache/mfsu`
- `chainWebpack` 用链式编程的方式修改 依赖的 webpack 配置，基于 webpack-chain，具体 API 可参考 [webpack-api 的文档](https://github.com/sorrycc/webpack-chain)；
- `runtimePublicPath` 会让修改 mf 加载文件的 publicPath 为 `window.publicPath`
- `strategy` 指定 mfsu 编译依赖的时机; `normal` 模式下，采用 babel 编译分析后，构建 Module Federation 远端包；`eager` 模式下采用静态分析的方式，和项目代码同时发起构建。
- `include` 仅在 `strategy: 'eager' ` 模式下生效， 用于补偿在 eager 模式下，静态分析无法分析到的依赖，例如 `react` 未进入 Module Federation 远端模块可以这样配置 `{ include: [ 'react' ] }`
- `exclude` 手动排除某些不需要被 MFSU 处理的依赖, 字符串或者正则的形式，比如 `vant` 不希望走 MFSU 处理，可以配置 `{ exclude: [ 'vant' ] }` 匹配逻辑为全词匹配，也可以配置 `{ exclude: [ /vant/ ] }` 只要 `import` 路径中匹配该正则的依赖都不走 MFSU 处理

示例，

```js
// 用 esbuild 做依赖预编译
mfsu: {
  esbuild: true,
}

// 关闭 mfsu 功能
mfsu: false;
```

```js
// webpack 配置修改
mfsu: {
  chainWebpack(memo, args) {
    // 添加额外插件
    memo.plugin('hello').use(Plugin, [...args]);
    return memo;
  }
}
```

注意：此功能默认开。配置 `mfsu: false` 关闭。

**配置 mock**

- 类型：`{ exclude: string[], include: string[] }`
- 默认值：`{}`

配置 mock 功能。

关于参数。`exclude` 用于排除不需要的 mock 文件；`include` 用于额外添加 mock 目录之外的 mock 文件。

示例，

```js
// 让所有 pages 下的 _mock.ts 文件成为 mock 文件
mock: {
  include: ['src/pages/**/_mock.ts'],
}
```

注意：此功能默认开。配置 `mock: false` 关闭。

**配置 mountElementId**

- 类型：`string`
- 默认值：`'root'`

配置 react 组件树渲染到 HTML 中的元素 id。

示例，

```js
mountElementId: 'container';
```

**配置 monorepoRedirect**

- 类型：`{ srcDir?: string[], exclude?: RegExp[], peerDeps?: boolean, useRootProject?: boolean }`
- 默认值：`false`

在 monorepo 中使用 Umi 时，你可能需要引入其他子包的组件、工具方法等，通过开启此选项来重定向这些子包的导入到他们的源码位置（默认为 `src` 文件夹），这也可以解决 `MFSU` 场景改动子包不热更新的问题。

这种重定向的好处是：支持热更新，无需预构建其他子包即可进行开发。

通过配置 `srcDir` 来调整识别源码文件夹的优先位置，通过 `exclude` 来设定不需要重定向的依赖范围。

示例：

```js
// 默认重定向到子包的 src 文件夹
monorepoRedirect: {}
// 在子包中寻找，优先定向到 libs 文件夹
monorepoRedirect: {
  srcDir: ['libs', 'src'],
}
// 不重定向 @scope/* 的子包
monorepoRedirect: {
  exclude: [/^@scope\/.+/],
}
```

在实际的大型业务 monorepo 中，每个子包的依赖都是从他们的目录开始向上寻找 `node_modules` 并加载的，但在本地开发时，依赖都安装在 `devDependencies` ，和从 npm 上安装表现不一致，所以不可避免会遇到多实例问题。

:::info举个例子，每个子包在本地开发时都需要 `antd` ，在 `devDependencies` 中安装了，也在 `peerDependencies` 中指明了 `antd` ，我们预期该包发布到 npm ，被某个项目安装后， `antd` 是使用的项目本身的依赖，全局唯一，但由于在 monorepo 中，指定在 `devDependencies` 中的依赖必定存在，且子包代码寻找依赖时是从该子包进行的，导致了每个子包都用了自己的 `antd` ，出现了产物中有多份 `antd` 、产物体积增大、消息队列被破坏等情况。:::

为了解决这种问题，我们约定：

当打开 `peerDeps` 选项时，所有子包指明的 `peerDependencies` 都会被自动添加 `alias` 重定向唯一化，避免多实例的存在：

```ts
monorepoRedirect: {
  peerDeps: true;
}
```

经过重定向，依赖全局唯一，便可以在开发时保持和在 npm 上安装包后的体验一致。

useRootProject: 当你的项目不在 monorepo 子文件夹里，而在 monorepo 根的话，你可以开启这个选项，以使 monorepoRedirect 生效。

**配置 mpa**

- 类型：`object`
- 默认值：`false`

启用 [mpa 模式](../guides/mpa)。

**配置 outputPath**

- 类型：`string`
- 默认值：`dist`

配置输出路径。

注意：不允许设定为 src、public、pages、mock、config、locales、models 等约定式功能相关的目录。

**配置 phantomDependency**

- 类型：`{ exclude: string[] }`
- 默认值：`false`

执行幽灵依赖检测。

当使用未在 package.json 中声明的依赖，以及也没有通过 alias 或 externals 进行配置时，会抛错并提醒。

![](https://mdn.alipayobjects.com/huamei_ddtbzw/afts/img/A*k5uoQ5TOPooAAAAAAAAAAAAADkCKAQ/original)

如遇到有需要需做白名单处理，可通过 exclude 配置项实现，exclude 的项是 npm 依赖的包名。

```ts
export default {
  phantomDependency: {
    exclude: ['lodash'],
  },
};
```

**配置 plugins**

- 类型：`string[]`
- 默认值：`[]`

配置额外的 Umi 插件。

数组项为指向插件的路径，可以是 npm 依赖、相对路径或绝对路径。如果是相对路径，则会从项目根目录开始找。

示例，

```js
plugins: [
  // npm 依赖
  'umi-plugin-hello',
  // 相对路径
  './plugin',
  // 绝对路径
  `${__dirname}/plugin.js`,
],
```

**配置 polyfill**

- 类型：`{ imports: string[] }`
- 默认值：`{}`

设置按需引入的 polyfill。默认全量引入。

比如只引入 core-js 的 stable 部分，

```js
polyfill: {
  imports: ['core-js/stable'],
}
```

如果对于性能有更极致的要求，可以考虑按需引入，

```js
polyfill: {
  imports: ['core-js/features/promise/try', 'core-js/proposals/math-extensions'],
}
```

注意：此功能默认开。配置 `polyfill: false` 或设置环境变量 `BABEL_POLYFILL=none` 关闭。

**配置 postcssLoader**

- 类型：`object`
- 默认值：`{}`

设置 [postcss-loader 的配置项](https://github.com/webpack-contrib/postcss-loader#options)。

**配置 presets**

- 类型：`string[]`
- 默认值：`[]`

配置额外的 Umi 插件集。

数组项为指向插件集的路径，可以是 npm 依赖、相对路径或绝对路径。如果是相对路径，则会从项目根目录开始找。

示例，

```js
presets: [
  // npm 依赖
  'umi-preset-hello',
  // 相对路径
  './preset',
  // 绝对路径
  `${__dirname}/preset.js`,
],
```

**配置 proxy**

- 类型：`object`
- 默认值：`{}`

配置代理功能。

比如，

```js
proxy: {
  '/api': {
    'target': 'http://jsonplaceholder.typicode.com/',
    'changeOrigin': true,
    'pathRewrite': { '^/api' : '' },
  }
}
```

然后访问 `/api/users` 就能访问到 <http://jsonplaceholder.typicode.com/users> 的数据。

注意：proxy 功能仅在 dev 时有效。

**配置 publicPath**

- 类型：`string`
- 默认值：`/`

配置 webpack 的 publicPath。

**配置 reactRouter5Compat**

- 类型：`object`
- 默认值：`false`

启用 react-router 5 兼容模式。此模式下，路由组件的 props 会包含 location、match、history 和 params 属性，和 react-router 5 的保持一致。

但要注意的是，

1. 此模式下会有额外的 re-render
2. 由于依赖库 history 更新，location 中依旧没有 query 属性

**配置 routes**

- 类型：`Route[]`
- 默认值：`[]`

配置路由。更多信息，请查看 [配置路由](../guides/routes#配置路由)

**配置 routeLoader**

- 类型：`{ moduleType: 'esm' | 'cjs' }`
- 默认值：`{ moduleType: 'esm' }`

配置路由加载方式。moduleType 配置为 'cjs' 会用 `require` 的方式加载路由组件。

```ts
// moduleType: esm
'index': React.lazy(() => import(/* webpackChunkName: "p__index" */'../../pages/index.tsx')),

// moduleType: cjs
'index': React.lazy(() => Promise.resolve(require('../../pages/index.tsx'))),
```

**配置 run**

- 类型：`{ globals: string[] }`
- 默认值：`null`

run 命令的全局注入配置。添加`['zx/globals']`，在使用`umi run ./script.ts`的时候，umi会自动注入`import 'zx/globals';`，从而省略掉每个脚本都要写`import 'zx/globals';`。

**配置 runtimePublicPath**

- 类型：`object`
- 默认值：`null`

启用运行时 publicPath，开启后会使用 `window.publicPath` 作为资源动态加载的起始路径。

比如，

```js
runtimePublicPath: {},
```

**配置 scripts**

- 类型：`string[] | Script[]`
- 默认值：`[]`

配置 `<body>` 中额外的 script 标签。

比如，

```js
scripts: [`alert(1);`, `https://a.com/b.js`],
```

会生成 HTML，

```html
<script>
  alert(1);
</script>
<script src="https://a.com/b.js"></script>
```

如果需要额外属性，切换到对象格式，比如，

```js
scripts: [
  { src: '/foo.js', defer: true },
  { content: `alert('你好');`, charset: 'utf-8' },
],
```

**配置 sassLoader**

- 类型：`object`
- 默认值：`{}`

配置 sass-loader ，详见 [sass-loader > options](https://github.com/webpack-contrib/sass-loader#options)

**配置 styleLoader**

- 类型：`object`
- 默认值：`false`

启用 style loader 功能，让 CSS 内联在 JS 中，不输出额外的 CSS 文件。

**配置 stylusLoader**

- 类型：`object`
- 默认值：`{}`

配置 stylus-loader ，详见 [stylus-loader > options](https://github.com/webpack-contrib/stylus-loader#options)

**配置 styles**

- 类型：`string[]`
- 默认值：`[]`

配置额外的 CSS。

配置项支持内联样式和外联样式路径，后者通过是否以 https?:// 开头来判断。

插入的样式会前置，优先级低于项目内用户编写样式。

比如：

```js
styles: [`body { color: red; }`, `https://a.com/b.css`],
```

会生成以下 HTML，

```html
<style>
  body {
    color: red;
  }
</style>
<link rel="stylesheet" href="https://a.com/b.css" />
```

**配置 srcTranspiler**

- 类型：`string` 可选的值：`babel`, `swc`, `esbuild`
- 默认值：`babel`

配置构建时转译 js/ts 的工具。

**配置 srcTranspilerOptions**

- 类型：`{ swc?: SwcConfig, esbuild?: EsbuildConfig }`
- 默认值：`undefined`

如果你使用了 `swc` / `esbuild` 作为 `srcTranspiler` 转译器，你可以通过此选项对转译器做进一步的配置，详见 [SwcConfig](https://swc.rs/docs/configuration/swcrc) 、 [EsbuildConfig](https://esbuild.github.io/api/#transform-api) 配置文档。

如给 swc 添加其他的插件：

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

**配置 svgr**

- 类型：`object`
- 默认值：`{}`

svgr 默认开启，支持如下方式使用 React svg 组件：

```ts
import SmileUrl, { ReactComponent as SvgSmile } from './smile.svg';
```

可配置 svgr 的行为，配置项详见 [@svgr/core > Config](https://github.com/gregberge/svgr/blob/main/packages/core/src/config.ts#L9)。

**配置 svgo**

- 类型：`object`
- 默认值：`{}`

默认使用 svgo 来优化 svg 资源，配置项详见 [svgo](https://github.com/svg/svgo#configuration) 。

**配置 targets**

- 类型：`object`
- 默认值：`{ chrome: 80 }`

配置需要兼容的浏览器最低版本。Umi 会根据这个自定引入 polyfill、配置 autoprefixer 和做语法转换等。

示例，

```js
// 兼容 ie11
targets: {
  ie: 11,
}
```

**配置 theme**

- 类型：`object`
- 默认值：`{}`

配置 less 变量主题。

示例：

```js
theme: { '@primary-color': '#1DA57A' }
```

**配置 title**

- 类型：`string`
- 默认值：`null`

配置全局页面 title，暂时只支持静态的 Title。

**配置 verifyCommit**

- 类型：`{ scope: string[]; allowEmoji: boolean }`
- 默认值：`{ scope: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'workflow', 'build', 'ci', 'chore', 'types', 'wip', 'release', 'dep', 'deps', 'example', 'examples', 'merge', 'revert'] }`

针对 verify-commit 命令的配置项。

关于参数。`scope` 用于配置允许的 scope，不区分大小写，配置后会覆盖默认的；`allowEmoji` 开启后会允许加 EMOJI 前缀，比如 `💥 feat(模块): 添加了个很棒的功能`。

```
verifyCommit: {
  scope: ['feat', 'fix'],
  allowEmoji: true,
}
```

注意：使用 `git revert` 或 `git merge` 命令以及 `changesets` 的发版 merge 格式所产生的 commit message 会默认通过校验。

**配置 vite**

- 类型：`object`
- 默认值：`{}`

开发者的配置会 merge 到 vite 的 [默认配置](https://vitejs.dev/config/)。

示例，

```js
// 更改临时文件路径到 node_modules/.bin/.vite 文件夹
vite: {
  cacheDir: 'node_modules/.bin/.vite',
}
```

**配置 writeToDisk**

- 类型：`boolean`
- 默认值：`false`

开启后会在 dev 模式下额外输出一份文件到 dist 目录，通常用于 chrome 插件、electron 应用、sketch 插件等开发场景。

### umi 如何使用 base?

`base` 用于设置约定的路由的基础路径，默认从 `src/pages` 读取，如果是文档站点可能会需要将其改成 `./docs`；

### umi 如何使用 exclude?

你可以使用 `exclude` 配置过滤一些不需要的文件，比如用于过滤 components、models 等。示例，

```js
// 不识别 components 和 models 目录下的文件为路由
conventionRoutes: {
  exclude: [/\/components\//, /\/models\//],
}
```

### umi 如何使用 icon 集使用?

在 umi 配置文件设置，开启 icons 功能，并允许自动安装图标库。

```ts
icons: { autoInstall: {} },
```

页面使用：

```ts
import { Icon } from 'umi';
<Icon icon="fa:home" />
```

icon 里包含的字符串是 `collect:icon` 的组合，以 `:` 分割。Icon 集推荐在 [Icônes 网站](https://icones.js.org/)上搜索。

### umi 如何使用 配置项介绍?

- `autoInstall` 表示是否自动安装 icon 集；tnpm/cnpm 客户端暂不支持，但可以通过手动按需安装对应 icon 集合包 `@iconify-json/collection-name` 。 参考：[Icon 集合列表](https://github.com/iconify/icon-sets/blob/master/collections.md), collection-name 为列表中的 **_Icon set prefix_** 项。
- `alias` 用于配置 icon 的别名，比如配置了 `alias:{home:'fa:home'}` 后就可以通过 `icon="home"` 使用 `fa:home` 这个 icon 了。
- `include` 配置需要强制使用的 icon， 例如 `include: ['fa:home', 'local:icon']`。常见的使用场景：将 icon 字符串定义在一个 map 中，导致无法检测到；在 `mdx` 使用了 `Icon` 组件。

### umi 如何使用 Icon 组件属性?

- icon，指定 icon
- width，svg 宽度
- height，svg 高度
- viewBox，svg viewBox
- style，外部容器样式
- className，外部容器样式名
- spin，是否自动旋转
- rotate，配置旋转角度，支持多种格式，比如 `1`，`"30deg"`、`"25%"` 都可以
- flip，支持 `vertical`、`horizontal`，或者他们的组合 `vertical,horizontal`

### umi 的 命令行 有哪些配置？

**命令行 build**

构建项目，适用于生产环境的部署。

```bash
$ umi build
```

**命令行 config**

通过命令行快速查看和修改配置。

查看配置，可以用 `list` 或 `get`。

```bash
$ umi config list
 - [key: polyfill] false
 - [key: externals] { esbuild: true }

$ umi config get mfsu
 - [key: externals] { esbuild: true }
```

修改配置，可以用 `set` 或 `remove`。

```bash
$ umi config set polyfill false
set config:polyfill on /private/tmp/sorrycc-wsYpty/.umirc.ts

$ umi config remove polyfill
remove config:polyfill on /private/tmp/sorrycc-wsYpty/.umirc.ts
```

**命令行 dev**

启动本地开发服务器，进行项目的开发与调试。

```bash
$ umi dev
        ╔═════════════════════════════════════════════════════╗
        ║ App listening at:                                   ║
        ║  >   Local: https://127.0.0.1:8001                  ║
ready - ║  > Network: https://192.168.1.1:8001                ║
        ║                                                     ║
        ║ Now you can open browser with the above addresses👆 ║
        ╚═════════════════════════════════════════════════════╝
event - compiled successfully in 1051 ms (416 modules)
```

**命令行 generate**

用于增量生成文件或启用功能，命令行别名是 `g`。

不加任何参数时会给交互式的生成器选择。

```bash
$ umi g
# 或
$ umi generate
? Pick generator type › - Use arrow-keys. Return to submit.
❯   Create Pages -- Create a umi page by page name
    Enable Prettier -- Enable Prettier
```

也可以指定参数。

```bash
# 生成路由文件
$ umi g page index --typescript --less
```

**命令行 help**

查看帮助。

```bash
$ umi help
Usage: umi <command> [options]

Commands:

    build     build app for production
    config    umi config cli
    dev       dev server for development
    help      show commands help
    setup     setup project
    version   show umi version
    plugin    inspect umi plugins
    generate  generate code snippets quickly

Run `umi help <command>` for more information of specific commands.
Visit https://umijs.org/ to learn more about Umi.
```

也可指定命令，查看特定命令的详细帮助。

```bash
$ umi help build
Usage: umi build [options]
build app for production.

Details:
    umi build

    # build without compression
    COMPRESS=none umi build

    # clean and build
    umi build --clean
```

**命令行 lint**

用于检查及修正代码是否符合规则。

```bash
$ umi lint
Usage: umi lint

 支持只校验 js、ts、tsx、jsx 类型文件： umi lint --eslint-only

 支持只校验 css、less 等样式文件： umi lint --stylelint-only

 支持校验 cssinjs 模式校验： umi lint --stylelint-only --cssinjs

 修正代码： --fix

```

**命令行 plugin**

插件相关操作，目前只支持 `list` 子命令。

列出所有插件。

```bash
$ umi plugin list
- @umijs/core/dist/service/servicePlugin
- @umijs/preset-umi (from preset)
- @umijs/preset-umi/dist/registerMethods (from preset)
- @umijs/preset-umi/dist/features/appData/appData (from preset)
- @umijs/preset-umi/dist/features/check/check (from preset)
- @umijs/preset-umi/dist/features/configPlugins/configPlugins (from preset)
- virtual: config-styles
- virtual: config-scripts
- virtual: config-routes
- virtual: config-plugins
...
```

**命令行 preview**

`umi preview` 命令会在本地启动一个静态 Web 服务器，将 dist 文件夹运行在 <http://127.0.0.1:4172>, 用于预览构建后产物, 支持 proxy、mock 等设置。

你可以通过 `--port` 参数来配置服务的运行端口。

```bash
$ umi preview --port 9527
```

现在 `preview` 命令会将服务器运行在 <http://127.0.0.1:9527>.

通过 `--host` 参数来指定 配置服务运行的 hostname。

以下用户配置在 `preview` 时也会生效

- [https](./config#https)
- [proxy](../guides/proxy)
- [mock](../guides/mock)

注意 `dist` 目录会随着配置 `outputPath` 的变更而变更。

**命令行 run**

`umi run` 命令可以让你像 node 运行 js 一样来运行 TypeScript 和 ESM 文件。你可以搭配 [zx](https://github.com/google/zx) 来更好的使用脚本命令。

```bash
$ umi run ./script.ts
```

**命令行 setup**

初始化项目，会做临时文件的生成等操作。通常在 package.json 的 `scripts.postinstall` 里设置。

```bash
{
  "scripts": { "postinstall": "umi setup" }
}
```

**命令行 deadcode**

用于查找 src 目录下未被引用的文件，并在根目录输出文件。

```bash
$ umi deadcode
- Preparing...
- begin check deadCode
- write file /examples/umi-run/DeadCodeList-{timeStamp}.txt
- check dead code end, please be careful if you want to remove them
```

**命令行 mfsu**

`umi mfsu` 命令可以查看 MFSU 依赖信息、重新构建 MFSU 依赖和清除 MFSU 依赖。

```bash title="获取 MFSU 命令帮忙"
$ umi mfsu
```

```bash title="获取 MFSU 依赖列表"
$ umi mfsu ls
warning@4.0.3
regenerator-runtime/runtime.js@0.13.11
react/jsx-dev-runtime@18.1.0
react-intl@3.12.1
react-error-overlay/lib/index.js@6.0.9
react@18.1.0
qiankun@2.8.4
lodash/noop@4.17.21
lodash/mergeWith@4.17.21
lodash/concat@4.17.21
...
```

```bash title="重新构建 MFSU 依赖"
$ umi mfsu build
info  - Preparing...
info  - MFSU eager strategy enabled
warn  - Invalidate webpack cache since mfsu cache is missing
info  - [MFSU] buildDeps since cacheDependency has changed
...
info  - [plugin: @umijs/preset-umi/dist/commands/mfsu/mfsu] [MFSU][eager] build success
```

```bash title="清除 MFSU 依赖"
$ # 删除依赖信息列表
$ umi mfsu remove
$ # 删除依赖信息列表和产物文件
$ umi mfsu remove --all
```

**命令行 verifyCommit**

验证 commit message 信息，通常和 [husky](https://github.com/typicode/husky) 搭配使用。

比如在 `.husky/commit-msg` 做如下配置，

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install umi verify-commit $1
```

**命令行 version**

查看 `umi` 版本，等同于 `umi -v`。

```bash
$ umi version
4.0.0
```

### umi 的 API 有哪些配置？

**API umi**

undefined

#### createBrowserHistory

创建使用浏览器内置 `history` 来跟踪应用的 `BrowserHistory`。推荐在支持 HTML5 `history` 接口的 现代 Web 浏览器中使用。类型定义如下：

```ts
function createBrowserHistory(options?: { window?: Window }) => BrowserHistory;
```

使用范例：

```ts
// create a BrowserHistory
import { createBrowserHistory } from 'umi';
const history = createBrowserHistory();
// or a iframe BrowserHistory
import { createBrowserHistory } from 'umi';
const history = createBrowserHistory({
  window: iframe.contentWindow,
});
```

#### createHashHistory

`createHashHistory` 返回一个 `HashHistory` 实例。`window` 默认为当前 `document` 的 `defaultView`。 `HashHistory` 与 `BrowserHistory` 的主要区别在于，`HashHistory` 将当前位置存储在 URL 的哈希部分中，这意味着它在路由切换时不会发送请求到服务器。如果您将站点托管在您无法完全控制服务器上，或者在只提供同单页面的 Electron 应用程序中，推荐使用 `HashHistory`。使用范例：

```ts
// create a HashHistory
import { createHashHistory } from 'umi';
const history = createHashHistory();
```

#### createMemoryHistory

`MemoryHistory` 不会在地址栏被操作或读取。它也非常适合测试和其他的渲染环境。

```ts
const history = createMemoryHistory(location);
```

#### createSearchParams

包装 `new URLSearchParams(init)` 的工具函数，支持使用数组和对象创建

```ts
import { createSearchParams } from 'umi';

// 假设路径 http://a.com?foo=1&bar=2
createSearchParams(location.search);
createSearchParams('foo=1&bar=2');
createSearchParams('?foo=1&bar=2');

// 键值对对象
createSearchParams({ foo: 'bar', qux: 'qoo' }).toString();
// foo=bar&qux=qoo

// 键值元组数组
createSearchParams([
  ['foo', '1'],
  ['bar', '2'],
]).toString();
// foo=1&bar=2
```

[URLSearchParams 文档](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)

#### generatePath

使用给定的带参数的 path 和对应的 params 生成实际要访问的路由。

```ts
import { generatePath } from 'umi';

generatePath('/users/:id', { id: '42' }); // "/users/42"
generatePath('/files/:type/*', {
  type: 'img',
  '*': 'cat.jpg',
}); // "/files/img/cat.jpg"
```

#### Helmet

即 [react-helmet-async](https://github.com/staylor/react-helmet-async) 提供的 Helmet 组件，用于在页面中动态配置 `head` 中的标签，例如 `title`。

> 注意：为了确保 SSR 时 Helmet 仍能正常工作，请务必使用 Umi 提供的 Helmet 而不是单独安装 react-helmet

```tsx
import { Helmet } from 'umi';

export default function Page() {
  return (
    <Helmet>
      <title>Hello World</title>
    </Helmet>
  );
}
```

#### history

和 history 相关的操作，用于获取当前路由信息、执行路由跳转、监听路由变更。

```ts
// 建议组件或 hooks 里用 useLocation 取
import { useLocation } from 'umi';
export default function Page() {
  let location = useLocation();
  return (
    <div>
     { location.pathname }
     { location.search }
     { location.hash }
    </div>
  );
}
```

如果在 React 组件和 Hooks 之外获取当前路由信息。

```ts
// location 对象，包含 pathname、search 和 hash
window.location.pathname;
window.location.search;
window.location.hash;
```

命令式路由跳转。

```ts
import { history } from 'umi';

// 跳转到指定路由
history.push('/list');

// 带参数跳转到指定路由
history.push('/list?a=b&c=d#anchor', state);
history.push(
  {
    pathname: '/list',
    search: '?a=b&c=d',
    hash: 'anchor',
  },
  {
    some: 'state-data',
  },
);

// 跳转当前路径，并刷新 state
history.push({}, state);

// 跳转到上一个路由
history.back();
history.go(-1);
```

:::info{title=🚨} 注意：history.push 和 history.replace 需要使用 `state` 需将 `state` 作为这两个 API 的第二个参数传递 ::: 路由监听。

```ts
import { history } from 'umi';

const unlisten = history.listen(({ location, action }) => {
  console.log(location.pathname);
});
unlisten();
```

#### Link

`<Link>` 是 React 组件，是带路由跳转功能的 `<a>` 元素。类型定义如下：

```ts
declare function Link(props: {
  prefetch?: boolean;
  to: string | Partial<{ pathname: string; search: string; hash: string }>;
  replace?: boolean;
  state?: any;
  reloadDocument?: boolean;
}): React.ReactElement;
```

示例：

```tsx
import { Link } from 'umi';

function IndexPage({ user }) {
  return <Link to={user.id}>{user.name}</Link>;
}
```

`<Link to>` 支持相对路径跳转；`<Link reloadDocument>` 不做路由跳转，等同于 `<a href>` 的跳转行为。若开启了 `prefetch` 则当用户将鼠标放到该组件上方时，Umi 就会自动开始进行跳转路由的组件 js 文件和数据预加载。

#### matchPath

`matchPath` 可以将给定的路径以及一个已知的路由格式进行匹配，并且返回匹配结果。类型定义如下：

```ts
declare function matchPath<ParamKey extends string = string>(
  pattern: PathPattern | string,
  pathname: string,
): PathMatch<ParamKey> | null;
interface PathMatch<ParamKey extends string = string> {
  params: Params<ParamKey>;
  pathname: string;
  pattern: PathPattern;
}
interface PathPattern {
  path: string;
  caseSensitive?: boolean;
  end?: boolean;
}
```

示例：

```ts
import { matchPath } from 'umi';
const match = matchPath({ path: '/users/:id' }, '/users/123');
// {
//   "params": { "id": "123" },
//   "pathname": "/users/123",
//   "pathnameBase": "/users/123",
//   "pattern": { "path": "/users/:id" }
// }
```

#### matchRoutes

`matchRoutes` 可以将给定的路径以及多个可能的路由选择进行匹配，并且返回匹配结果。类型定义如下：

```ts
declare function matchRoutes(
  routes: RouteObject[],
  location: Partial<Location> | string,
  basename?: string,
): RouteMatch[] | null;
interface RouteMatch<ParamKey extends string = string> {
  params: Params<ParamKey>;
  pathname: string;
  route: RouteObject;
}
```

示例：

```ts
import { matchRoutes } from 'umi';
const match = matchRoutes(
  [
    {
      path: '/users/:id',
    },
    {
      path: '/users/:id/posts/:postId',
    },
  ],
  '/users/123/posts/456',
);
// [
//  {
//    "params": {
//      "id": "123",
//       "postId": "456"
//     },
//     "pathname": "/users/123/posts/456",
//     "pathnameBase": "/users/123/posts/456",
//     "route": {
//       "path": "/users/:id/posts/:postId"
//     }
//   }
// ]
```

#### NavLink

`<NavLink>` 是 `<Link>` 的特殊形态，他知道当前是否为路由激活状态。通常在导航菜单、面包屑、Tabs 中会使用，用于显示当前的选中状态。类型定义如下：

```ts
declare function NavLink(
  props: LinkProps & {
    caseSensitive?: boolean;
    children?:
      | React.ReactNode
      | ((props: { isActive: boolean }) => React.ReactNode);
    className?: string | ((props: { isActive: boolean }) => string | undefined);
    end?: boolean;
    style?:
      | React.CSSProperties
      | ((props: { isActive: boolean }) => string | React.CSSProperties);
  },
): React.ReactElement;
```

下方示例分别用了 style、className 和 children 来渲染 active 状态。

```ts
import { NavLink } from 'umi';

function Navs() {
  return <ul>
    <li><NavLink to="message" style={({ isActive }) => isActive ? { color: 'red' } : undefined}>Messages</NavLink></li>
    <li><NavLink to="tasks" className={({ isActive }) => isActive ? 'active' : undefined}>Tasks</NavLink></li>
    <li><NavLink to="blog">{({ isActive }) => <span className={isActive ? 'active' : undefined}>Blog</span>}</NavLink></li>
  </ul>;
}
```

#### Outlet

`<Outlet>` 用于渲染父路由中渲染子路由。如果父路由被严格匹配，会渲染子路由中的 index 路由（如有）。类型定义如下：

```ts
interface OutletProps {
  context?: unknown;
}
declare function Outlet(props: OutletProps): React.ReactElement | null;
```

示例：

```ts
import { Outlet } from 'umi';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function DashboardWithContext() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet context={{ prop: 'a' }}/>
    </div>
  );
}
```

`Outlet` 组件的 `context` 可以使用 API `useOutletContext` 在子组件中获取。

#### resolvePath

用于在客户端解析前端路由跳转路径。类型定义如下：

```ts
declare function resolvePath(
  to: Partial<Location> | string,
  fromPathname?: string,
): {
  pathname: string;
  search: string;
  hash: string;
};
```

示例：

```ts
// 同级相对跳转，返回 { pathname: '/parent/child', search: '', hash: '' }
resolvePath('child', '/parent');
resolvePath('./child', '/parent');
resolvePath('', '/parent/child');
resolvePath('.', '/parent/child');

// 祖先层级相对跳转，返回 { pathname: '/parent/sibling', search: '', hash: '' }
resolvePath('../sibling', '/parent/child');
resolvePath('../../parent/sibling', '/other/child');

// 绝对跳转，返回 { pathname: '/target', search: '', hash: '' }
resolvePath('/target', '/parent');
resolvePath('/target', '/parent/child');

// 携带 search 和 hash 跳转，返回 { pathname: '/params', search: '?a=b', hash: '#c' }
resolvePath('/params?a=b#c', '/prev');
```

#### terminal

`terminal` 用于在开发阶段在浏览器向 node 终端输出日志的工具。示例：

```ts
import { terminal } from 'umi';
// 下面三条命令会在 umi 启动终端上打出用不同颜色代表的日志
terminal.log('i am log level');
terminal.warn('i am warn level');
terminal.error('i am error level');
```

注意 `terminal` 只在环境变量 `NODE_ENV` 非 `production` 时生效；在 Umi 的构建产物中对应的日志调用函数不会有任何作用，所以可以不必删除调用 `terminal` 的代码。

#### useAppData

`useAppData` 返回全局的应用数据。类型定义如下：

```ts
declare function useAppData(): {
  routes: Record<id, Route>;
  routeComponents: Record<id, Promise<React.ReactComponent>>;
  clientRoutes: ClientRoute[];
  pluginManager: any;
  rootElement: string;
  basename: string;
  clientLoaderData: { [routeKey: string]: any };
  preloadRoute: (to: string) => void;
};
```

注意：此处 API 可能还会调整。

#### useLocation

`useLocation` 返回当前 location 对象。类型定义如下：

```ts
declare function useLocation(): {
  pathname: string;
  search: string;
  state: unknown;
  key: Key;
};
```

一个场景是在 location change 时做一些 side effect 操作，比如 page view 统计。

```ts
import { useLocation } from 'umi';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);
  // ...
}
```

#### useMatch

`useMatch` 返回传入 path 的匹配信息；如果匹配失败将返回 `null` 类型定义如下：

```ts
declare function useMatch(
  pattern:
    | {
        path: string;
        caseSensitive?: boolean;
        end?: boolean;
      }
    | string,
): {
  params: Record<string, string>;
  pathname: string;
  pattern: {
    path: string;
    caseSensitive?: boolean;
    end?: boolean;
  };
};
```

示例：

```tsx
import { useMatch } from 'umi';

// when url = '/events/12'
const match = useMatch('/events/:eventId');
console.log(match?.pathname, match?.params.eventId);
// '/events/12 12'
```

#### useNavigate

`useNavigate` 钩子函数返回一个可以控制跳转的函数；比如可以用在提交完表单后跳转到其他页面。

```ts
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void;
  (delta: number): void;
}
```

示例：

- 跳转路径

```ts
import { useNavigate } from 'umi';

let navigate = useNavigate();
navigate('../success', { replace: true });
```

- 返回上一页

```ts
import { useNavigate } from 'umi';

let navigate = useNavigate();
navigate(-1);
```

#### useOutlet

`useOutlet` 返回当前匹配的子路由元素，`<Outlet>` 内部使用的就是此 hook 。类型定义如下：

```ts
declare function useOutlet(): React.ReactElement | null;
```

示例：

```ts
import { useOutlet } from 'umi';

const Layout = ()=>{
  const outlet = useOutlet()

  return <div className="fancyLayout">
    {outlet}
  </div>
}
```

#### useOutletContext

`useOutletContext` 用于返回 `Outlet` 组件上挂载的 `context` 。类型定义如下：

```ts
declare function useOutletContext<Context = unknown>(): Context;
```

示例：

```ts
import { useOutletContext, Outlet } from 'umi';

const Layout = () => {
  return <div className="fancyLayout">
    <Outlet context={{ prop: 'from Layout'}} />
  </div>
}

const SomeRouteComponentUnderLayout = () => {
  const layoutContext = useOutletContext();

  return JSON.stringify(layoutContext)   // {"prop":"from Layout"}
}
```

#### useParams

`useParams` 钩子函数返回动态路由的匹配参数键值对对象；子路由中会集成父路由的动态参数。类型定义如下：

```ts
declare function useParams<K extends string = string>(): Readonly<Params<K>>;
```

示例：

```ts
import { useParams } from 'umi';

// 假设有路由配置  user/:uId/repo/:rId
// 当前路径       user/abc/repo/def
const params = useParams();
/* params
{ uId: 'abc', rId: 'def'}
*/
```

#### useResolvedPath

`useResolvedPath` 根据当前路径将目标地址解析出完整的路由信息。类型定义如下：

```ts
declare function useResolvedPath(to: To): Path;
```

示例：

```ts
import { useResolvedPath } from 'umi';

const path = useResolvedPath('docs');
/* path
{ pathname: '/a/new/page/docs', search: '', hash: '' }
*/
```

#### useRouteData

`useRouteData` 返回当前匹配路由的数据的钩子函数。类型定义如下：

```ts
declare function useRouteData(): {
  route: Route;
};
```

注意：此处 API 可能还会调整。示例：

```ts
import { useRouteData } from 'umi';

const route = useRouteData();
/* route
{
  route: {
    path: 'a/page',
    id: 'a/page/index',
    parentId: '@@/global-layout',
    file: 'a/page/index.tsx'
  }
}
*/
```

#### useRoutes

`useRoutes` 渲染路由的钩子函数，传入路由配置和可选参数 `location`, 即可得到渲染结果；如果没有匹配的路由，结果为 `null`。类型定义如下：

```ts
declare function useRoutes(
  routes: RouteObject[],
  location?: Partial<Location> | string;
): React.ReactElement | null;
```

示例：

```ts
import * as React from "react";
import { useRoutes } from "umi";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
```

#### useRouteProps

读取当前路由在路由配置里的 props 属性，你可以用此 hook 来获取路由配置中的额外信息。

```ts
// .umirc.ts
routes: [
  {
    path: '/',
    custom_key: '1',
  },
];
```

```ts
import { useRouteProps } from 'umi';

export default function Page() {
  const routeProps = useRouteProps();

  // use `routeProps.custom_key`
}
```

注：同样适用于约定式路由。

#### useSelectedRoutes

用于读取当前路径命中的所有路由信息。比如在 `layout` 布局中可以获取到当前命中的所有子路由信息，同时可以获取到在 `routes` 配置中的参数，这格外有用。实例：

```tsx
// layouts/index.tsx

import { useSelectedRoutes } from 'umi';

export default function Layout() {
  const routes = useSelectedRoutes();
  const lastRoute = routes.at(-1);

  if (lastRoute?.pathname === '/some/path') {
    return (
      <div>
        1 : <Outlet />
      </div>
    );
  }

  if (lastRoute?.extraProp) {
    return (
      <div>
        2 : <Outlet />
      </div>
    );
  }

  return <Outlet />;
}
```

#### useSearchParams

`useSearchParams` 用于读取和修改当前 URL 的 query string。类似 React 的 `useState`，其返回包含两个值的数组，当前 URL 的 search 参数和用于更新 search 参数的函数。类型定义如下：

```ts
declare function useSearchParams(defaultInit?: URLSearchParamsInit): [
  URLSearchParams,
  (
    nextInit?: URLSearchParamsInit,
    navigateOpts?: : { replace?: boolean; state?: any }
  ) => void
];

type URLSearchParamsInit =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;
```

示例：

```ts
import React from 'react';
import { useSearchParams } from 'umi';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(serializeFormQuery(event.target));
  }
  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

#### withRouter

`withRouter` 参考 [react-router faq](https://reactrouter.com/docs/en/v6/getting-started/faq#what-happened-to-withrouter-i-need-it) 实现的版本, 仅实现了部分能力, 请参考类型定义按需使用, 建议迁移到 React Hook API。类型定义如下:

```ts
export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
  history: {
    back: () => void;
    goBack: () => void;
    location: ReturnType<typeof useLocation>;
    push: (url: string, state?: any) => void;
  };
  location: ReturnType<typeof useLocation>;
  match: {
    params: T;
  };
  params: T;
  navigate: ReturnType<typeof useNavigate>;
}
```

示例：

```tsx
import React from 'react';
import { withRouter } from 'umi';

class HelloWorld extends React.Component<any> {
  render() {
    return (
      <div>
        Hello World {this.props.location.pathname}
        <h2>params: {JSON.stringify(this.props.match.params)}</h2>
        <button
          onClick={() => {
            this.props.history.push('/users');
          }}
        >
          To Users
        </button>
      </div>
    );
  }
}

export default withRouter(HelloWorld);
```

### umi 如何使用 createBrowserHistory?

创建使用浏览器内置 `history` 来跟踪应用的 `BrowserHistory`。推荐在支持 HTML5 `history` 接口的 现代 Web 浏览器中使用。类型定义如下：

```ts
function createBrowserHistory(options?: { window?: Window }) => BrowserHistory;
```

使用范例：

```ts
// create a BrowserHistory
import { createBrowserHistory } from 'umi';
const history = createBrowserHistory();
// or a iframe BrowserHistory
import { createBrowserHistory } from 'umi';
const history = createBrowserHistory({
  window: iframe.contentWindow,
});
```

### umi 如何使用 createHashHistory?

`createHashHistory` 返回一个 `HashHistory` 实例。`window` 默认为当前 `document` 的 `defaultView`。 `HashHistory` 与 `BrowserHistory` 的主要区别在于，`HashHistory` 将当前位置存储在 URL 的哈希部分中，这意味着它在路由切换时不会发送请求到服务器。如果您将站点托管在您无法完全控制服务器上，或者在只提供同单页面的 Electron 应用程序中，推荐使用 `HashHistory`。使用范例：

```ts
// create a HashHistory
import { createHashHistory } from 'umi';
const history = createHashHistory();
```

### umi 如何使用 createMemoryHistory?

`MemoryHistory` 不会在地址栏被操作或读取。它也非常适合测试和其他的渲染环境。

```ts
const history = createMemoryHistory(location);
```

### umi 如何使用 createSearchParams?

包装 `new URLSearchParams(init)` 的工具函数，支持使用数组和对象创建

```ts
import { createSearchParams } from 'umi';

// 假设路径 http://a.com?foo=1&bar=2
createSearchParams(location.search);
createSearchParams('foo=1&bar=2');
createSearchParams('?foo=1&bar=2');

// 键值对对象
createSearchParams({ foo: 'bar', qux: 'qoo' }).toString();
// foo=bar&qux=qoo

// 键值元组数组
createSearchParams([
  ['foo', '1'],
  ['bar', '2'],
]).toString();
// foo=1&bar=2
```

[URLSearchParams 文档](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)

### umi 如何使用 generatePath?

使用给定的带参数的 path 和对应的 params 生成实际要访问的路由。

```ts
import { generatePath } from 'umi';

generatePath('/users/:id', { id: '42' }); // "/users/42"
generatePath('/files/:type/*', {
  type: 'img',
  '*': 'cat.jpg',
}); // "/files/img/cat.jpg"
```

### umi 如何使用 Helmet?

即 [react-helmet-async](https://github.com/staylor/react-helmet-async) 提供的 Helmet 组件，用于在页面中动态配置 `head` 中的标签，例如 `title`。

> 注意：为了确保 SSR 时 Helmet 仍能正常工作，请务必使用 Umi 提供的 Helmet 而不是单独安装 react-helmet

```tsx
import { Helmet } from 'umi';

export default function Page() {
  return (
    <Helmet>
      <title>Hello World</title>
    </Helmet>
  );
}
```

### umi 如何使用 history?

和 history 相关的操作，用于获取当前路由信息、执行路由跳转、监听路由变更。

```ts
// 建议组件或 hooks 里用 useLocation 取
import { useLocation } from 'umi';
export default function Page() {
  let location = useLocation();
  return (
    <div>
     { location.pathname }
     { location.search }
     { location.hash }
    </div>
  );
}
```

如果在 React 组件和 Hooks 之外获取当前路由信息。

```ts
// location 对象，包含 pathname、search 和 hash
window.location.pathname;
window.location.search;
window.location.hash;
```

命令式路由跳转。

```ts
import { history } from 'umi';

// 跳转到指定路由
history.push('/list');

// 带参数跳转到指定路由
history.push('/list?a=b&c=d#anchor', state);
history.push(
  {
    pathname: '/list',
    search: '?a=b&c=d',
    hash: 'anchor',
  },
  {
    some: 'state-data',
  },
);

// 跳转当前路径，并刷新 state
history.push({}, state);

// 跳转到上一个路由
history.back();
history.go(-1);
```

:::info{title=🚨} 注意：history.push 和 history.replace 需要使用 `state` 需将 `state` 作为这两个 API 的第二个参数传递 ::: 路由监听。

```ts
import { history } from 'umi';

const unlisten = history.listen(({ location, action }) => {
  console.log(location.pathname);
});
unlisten();
```

### umi 如何使用 Link?

`<Link>` 是 React 组件，是带路由跳转功能的 `<a>` 元素。类型定义如下：

```ts
declare function Link(props: {
  prefetch?: boolean;
  to: string | Partial<{ pathname: string; search: string; hash: string }>;
  replace?: boolean;
  state?: any;
  reloadDocument?: boolean;
}): React.ReactElement;
```

示例：

```tsx
import { Link } from 'umi';

function IndexPage({ user }) {
  return <Link to={user.id}>{user.name}</Link>;
}
```

`<Link to>` 支持相对路径跳转；`<Link reloadDocument>` 不做路由跳转，等同于 `<a href>` 的跳转行为。若开启了 `prefetch` 则当用户将鼠标放到该组件上方时，Umi 就会自动开始进行跳转路由的组件 js 文件和数据预加载。

### umi 如何使用 matchPath?

`matchPath` 可以将给定的路径以及一个已知的路由格式进行匹配，并且返回匹配结果。类型定义如下：

```ts
declare function matchPath<ParamKey extends string = string>(
  pattern: PathPattern | string,
  pathname: string,
): PathMatch<ParamKey> | null;
interface PathMatch<ParamKey extends string = string> {
  params: Params<ParamKey>;
  pathname: string;
  pattern: PathPattern;
}
interface PathPattern {
  path: string;
  caseSensitive?: boolean;
  end?: boolean;
}
```

示例：

```ts
import { matchPath } from 'umi';
const match = matchPath({ path: '/users/:id' }, '/users/123');
// {
//   "params": { "id": "123" },
//   "pathname": "/users/123",
//   "pathnameBase": "/users/123",
//   "pattern": { "path": "/users/:id" }
// }
```

### umi 如何使用 matchRoutes?

`matchRoutes` 可以将给定的路径以及多个可能的路由选择进行匹配，并且返回匹配结果。类型定义如下：

```ts
declare function matchRoutes(
  routes: RouteObject[],
  location: Partial<Location> | string,
  basename?: string,
): RouteMatch[] | null;
interface RouteMatch<ParamKey extends string = string> {
  params: Params<ParamKey>;
  pathname: string;
  route: RouteObject;
}
```

示例：

```ts
import { matchRoutes } from 'umi';
const match = matchRoutes(
  [
    {
      path: '/users/:id',
    },
    {
      path: '/users/:id/posts/:postId',
    },
  ],
  '/users/123/posts/456',
);
// [
//  {
//    "params": {
//      "id": "123",
//       "postId": "456"
//     },
//     "pathname": "/users/123/posts/456",
//     "pathnameBase": "/users/123/posts/456",
//     "route": {
//       "path": "/users/:id/posts/:postId"
//     }
//   }
// ]
```

### umi 如何使用 NavLink?

`<NavLink>` 是 `<Link>` 的特殊形态，他知道当前是否为路由激活状态。通常在导航菜单、面包屑、Tabs 中会使用，用于显示当前的选中状态。类型定义如下：

```ts
declare function NavLink(
  props: LinkProps & {
    caseSensitive?: boolean;
    children?:
      | React.ReactNode
      | ((props: { isActive: boolean }) => React.ReactNode);
    className?: string | ((props: { isActive: boolean }) => string | undefined);
    end?: boolean;
    style?:
      | React.CSSProperties
      | ((props: { isActive: boolean }) => string | React.CSSProperties);
  },
): React.ReactElement;
```

下方示例分别用了 style、className 和 children 来渲染 active 状态。

```ts
import { NavLink } from 'umi';

function Navs() {
  return <ul>
    <li><NavLink to="message" style={({ isActive }) => isActive ? { color: 'red' } : undefined}>Messages</NavLink></li>
    <li><NavLink to="tasks" className={({ isActive }) => isActive ? 'active' : undefined}>Tasks</NavLink></li>
    <li><NavLink to="blog">{({ isActive }) => <span className={isActive ? 'active' : undefined}>Blog</span>}</NavLink></li>
  </ul>;
}
```

### umi 如何使用 Outlet?

`<Outlet>` 用于渲染父路由中渲染子路由。如果父路由被严格匹配，会渲染子路由中的 index 路由（如有）。类型定义如下：

```ts
interface OutletProps {
  context?: unknown;
}
declare function Outlet(props: OutletProps): React.ReactElement | null;
```

示例：

```ts
import { Outlet } from 'umi';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function DashboardWithContext() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet context={{ prop: 'a' }}/>
    </div>
  );
}
```

`Outlet` 组件的 `context` 可以使用 API `useOutletContext` 在子组件中获取。

### umi 如何使用 resolvePath?

用于在客户端解析前端路由跳转路径。类型定义如下：

```ts
declare function resolvePath(
  to: Partial<Location> | string,
  fromPathname?: string,
): {
  pathname: string;
  search: string;
  hash: string;
};
```

示例：

```ts
// 同级相对跳转，返回 { pathname: '/parent/child', search: '', hash: '' }
resolvePath('child', '/parent');
resolvePath('./child', '/parent');
resolvePath('', '/parent/child');
resolvePath('.', '/parent/child');

// 祖先层级相对跳转，返回 { pathname: '/parent/sibling', search: '', hash: '' }
resolvePath('../sibling', '/parent/child');
resolvePath('../../parent/sibling', '/other/child');

// 绝对跳转，返回 { pathname: '/target', search: '', hash: '' }
resolvePath('/target', '/parent');
resolvePath('/target', '/parent/child');

// 携带 search 和 hash 跳转，返回 { pathname: '/params', search: '?a=b', hash: '#c' }
resolvePath('/params?a=b#c', '/prev');
```

### umi 如何使用 terminal?

`terminal` 用于在开发阶段在浏览器向 node 终端输出日志的工具。示例：

```ts
import { terminal } from 'umi';
// 下面三条命令会在 umi 启动终端上打出用不同颜色代表的日志
terminal.log('i am log level');
terminal.warn('i am warn level');
terminal.error('i am error level');
```

注意 `terminal` 只在环境变量 `NODE_ENV` 非 `production` 时生效；在 Umi 的构建产物中对应的日志调用函数不会有任何作用，所以可以不必删除调用 `terminal` 的代码。

### umi 如何使用 useAppData?

`useAppData` 返回全局的应用数据。类型定义如下：

```ts
declare function useAppData(): {
  routes: Record<id, Route>;
  routeComponents: Record<id, Promise<React.ReactComponent>>;
  clientRoutes: ClientRoute[];
  pluginManager: any;
  rootElement: string;
  basename: string;
  clientLoaderData: { [routeKey: string]: any };
  preloadRoute: (to: string) => void;
};
```

注意：此处 API 可能还会调整。

### umi 如何使用 useLocation?

`useLocation` 返回当前 location 对象。类型定义如下：

```ts
declare function useLocation(): {
  pathname: string;
  search: string;
  state: unknown;
  key: Key;
};
```

一个场景是在 location change 时做一些 side effect 操作，比如 page view 统计。

```ts
import { useLocation } from 'umi';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);
  // ...
}
```

### umi 如何使用 useMatch?

`useMatch` 返回传入 path 的匹配信息；如果匹配失败将返回 `null` 类型定义如下：

```ts
declare function useMatch(
  pattern:
    | {
        path: string;
        caseSensitive?: boolean;
        end?: boolean;
      }
    | string,
): {
  params: Record<string, string>;
  pathname: string;
  pattern: {
    path: string;
    caseSensitive?: boolean;
    end?: boolean;
  };
};
```

示例：

```tsx
import { useMatch } from 'umi';

// when url = '/events/12'
const match = useMatch('/events/:eventId');
console.log(match?.pathname, match?.params.eventId);
// '/events/12 12'
```

### umi 如何使用 useNavigate?

`useNavigate` 钩子函数返回一个可以控制跳转的函数；比如可以用在提交完表单后跳转到其他页面。

```ts
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void;
  (delta: number): void;
}
```

示例：

- 跳转路径

```ts
import { useNavigate } from 'umi';

let navigate = useNavigate();
navigate('../success', { replace: true });
```

- 返回上一页

```ts
import { useNavigate } from 'umi';

let navigate = useNavigate();
navigate(-1);
```

### umi 如何使用 useOutlet?

`useOutlet` 返回当前匹配的子路由元素，`<Outlet>` 内部使用的就是此 hook 。类型定义如下：

```ts
declare function useOutlet(): React.ReactElement | null;
```

示例：

```ts
import { useOutlet } from 'umi';

const Layout = ()=>{
  const outlet = useOutlet()

  return <div className="fancyLayout">
    {outlet}
  </div>
}
```

### umi 如何使用 useOutletContext?

`useOutletContext` 用于返回 `Outlet` 组件上挂载的 `context` 。类型定义如下：

```ts
declare function useOutletContext<Context = unknown>(): Context;
```

示例：

```ts
import { useOutletContext, Outlet } from 'umi';

const Layout = () => {
  return <div className="fancyLayout">
    <Outlet context={{ prop: 'from Layout'}} />
  </div>
}

const SomeRouteComponentUnderLayout = () => {
  const layoutContext = useOutletContext();

  return JSON.stringify(layoutContext)   // {"prop":"from Layout"}
}
```

### umi 如何使用 useParams?

`useParams` 钩子函数返回动态路由的匹配参数键值对对象；子路由中会集成父路由的动态参数。类型定义如下：

```ts
declare function useParams<K extends string = string>(): Readonly<Params<K>>;
```

示例：

```ts
import { useParams } from 'umi';

// 假设有路由配置  user/:uId/repo/:rId
// 当前路径       user/abc/repo/def
const params = useParams();
/* params
{ uId: 'abc', rId: 'def'}
*/
```

### umi 如何使用 useResolvedPath?

`useResolvedPath` 根据当前路径将目标地址解析出完整的路由信息。类型定义如下：

```ts
declare function useResolvedPath(to: To): Path;
```

示例：

```ts
import { useResolvedPath } from 'umi';

const path = useResolvedPath('docs');
/* path
{ pathname: '/a/new/page/docs', search: '', hash: '' }
*/
```

### umi 如何使用 useRouteData?

`useRouteData` 返回当前匹配路由的数据的钩子函数。类型定义如下：

```ts
declare function useRouteData(): {
  route: Route;
};
```

注意：此处 API 可能还会调整。示例：

```ts
import { useRouteData } from 'umi';

const route = useRouteData();
/* route
{
  route: {
    path: 'a/page',
    id: 'a/page/index',
    parentId: '@@/global-layout',
    file: 'a/page/index.tsx'
  }
}
*/
```

### umi 如何使用 useRoutes?

`useRoutes` 渲染路由的钩子函数，传入路由配置和可选参数 `location`, 即可得到渲染结果；如果没有匹配的路由，结果为 `null`。类型定义如下：

```ts
declare function useRoutes(
  routes: RouteObject[],
  location?: Partial<Location> | string;
): React.ReactElement | null;
```

示例：

```ts
import * as React from "react";
import { useRoutes } from "umi";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
```

### umi 如何使用 useRouteProps?

读取当前路由在路由配置里的 props 属性，你可以用此 hook 来获取路由配置中的额外信息。

```ts
// .umirc.ts
routes: [
  {
    path: '/',
    custom_key: '1',
  },
];
```

```ts
import { useRouteProps } from 'umi';

export default function Page() {
  const routeProps = useRouteProps();

  // use `routeProps.custom_key`
}
```

注：同样适用于约定式路由。

### umi 如何使用 useSelectedRoutes?

用于读取当前路径命中的所有路由信息。比如在 `layout` 布局中可以获取到当前命中的所有子路由信息，同时可以获取到在 `routes` 配置中的参数，这格外有用。实例：

```tsx
// layouts/index.tsx

import { useSelectedRoutes } from 'umi';

export default function Layout() {
  const routes = useSelectedRoutes();
  const lastRoute = routes.at(-1);

  if (lastRoute?.pathname === '/some/path') {
    return (
      <div>
        1 : <Outlet />
      </div>
    );
  }

  if (lastRoute?.extraProp) {
    return (
      <div>
        2 : <Outlet />
      </div>
    );
  }

  return <Outlet />;
}
```

### umi 如何使用 useSearchParams?

`useSearchParams` 用于读取和修改当前 URL 的 query string。类似 React 的 `useState`，其返回包含两个值的数组，当前 URL 的 search 参数和用于更新 search 参数的函数。类型定义如下：

```ts
declare function useSearchParams(defaultInit?: URLSearchParamsInit): [
  URLSearchParams,
  (
    nextInit?: URLSearchParamsInit,
    navigateOpts?: : { replace?: boolean; state?: any }
  ) => void
];

type URLSearchParamsInit =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;
```

示例：

```ts
import React from 'react';
import { useSearchParams } from 'umi';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams(serializeFormQuery(event.target));
  }
  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

### umi 如何使用 withRouter?

`withRouter` 参考 [react-router faq](https://reactrouter.com/docs/en/v6/getting-started/faq#what-happened-to-withrouter-i-need-it) 实现的版本, 仅实现了部分能力, 请参考类型定义按需使用, 建议迁移到 React Hook API。类型定义如下:

```ts
export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
  history: {
    back: () => void;
    goBack: () => void;
    location: ReturnType<typeof useLocation>;
    push: (url: string, state?: any) => void;
  };
  location: ReturnType<typeof useLocation>;
  match: {
    params: T;
  };
  params: T;
  navigate: ReturnType<typeof useNavigate>;
}
```

示例：

```tsx
import React from 'react';
import { withRouter } from 'umi';

class HelloWorld extends React.Component<any> {
  render() {
    return (
      <div>
        Hello World {this.props.location.pathname}
        <h2>params: {JSON.stringify(this.props.match.params)}</h2>
        <button
          onClick={() => {
            this.props.history.push('/users');
          }}
        >
          To Users
        </button>
      </div>
    );
  }
}

export default withRouter(HelloWorld);
```
