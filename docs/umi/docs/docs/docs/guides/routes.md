### 什么是 Umi 应用的路由？

在 Umi 应用中，路由是指页面地址的跳转。Umi 应用是单页应用，页面的跳转是在浏览器端完成的，不会重新请求服务端获取 HTML。页面的切换实际上是不同组件的切换。通过在配置中将不同的路由路径和对应的组件关联起来，可以实现页面的切换。

### 在 Umi 应用中，如何进行路由配置？

在 Umi 应用中，可以通过配置文件进行路由配置。通过在配置中指定不同的路由路径和对应的组件，可以将页面与组件关联起来。当用户在浏览器地址栏输入指定的路由路径时，Umi 应用会自动切换到对应的组件，并渲染该组件的内容。

### Umi 应用的页面切换是如何实现的？

在 Umi 应用中，页面的切换实际上就是不同组件的切换。当用户在浏览器地址栏输入指定的路由路径时，Umi 应用会根据路由配置找到对应的组件，并渲染该组件的内容。页面切换是在浏览器端完成的，不会重新请求服务端获取 HTML。这种方式可以提高应用的加载速度，并提升用户体验。

### 如何配置路由?

在 Umi 中，可以通过 `routes` 属性来配置路由信息。这个属性是一个数组，每个元素都代表一个路由信息对象。比如：

```ts
// .umirc.ts
export default {
  routes: [
    { path: "/", component: "index" },
    { path: "/user", component: "user" },
  ],
};
```

其中，每个路由信息对象包含两个属性：`path` 和 `component`。`path` 属性表示路由的路径，`component` 属性表示对应的组件。

### 为什么要编写 `loading.tsx`?

在 Umi 4 中，默认按页拆包，这样可以提高页面加载速度。由于加载过程是异步的，为了提升用户体验，需要编写 `loading.tsx` 文件来为项目添加加载样式。

在 Chrome Devtools 的网络选项卡中将网络设置成低速，然后切换路由，可以查看加载组件是否生效。

希望对你有帮助！

### 路由路径中支持的占位符有哪些？

在路由路径配置中，支持两种占位符。第一种是动态参数占位符形式，如`:id`。第二种是通配符占位符形式，用`*`表示。需要注意的是，通配符占位符只能出现在路由字符串的最后。

### 路由路径示例有哪些是被支持的？

以下是被支持的路由路径配置示例：

- `/groups`
- `/groups/admin`
- `/users/:id`
- `/users/:id/messages`
- `/files/*` 这些示例都符合支持的路由路径配置形式。

### 路由路径示例有哪些是不被支持的？

以下是不被支持的路由路径配置示例：

- `/users/:id?`
- `/tweets/:id(\d+)`
- `/files/*/cat.jpg`
- `/files-*` 这些示例都不符合目前支持的路由路径配置形式。

### component

- 类型: 字符串
- 描述: 用于渲染的 React 组件路径，可以是绝对路径或相对路径。如果是相对路径，将从 `src/pages` 目录开始寻找。如果指向 `src` 目录下的文件，可以使用 `@` 符号表示，例如 `component: '@/layouts/basic'`。推荐使用 `@` 符号组织路由文件位置。

### 如何配置子路由？

在需要为多个路径增加 layout 组件时，可以通过配置子路由实现。需要在路由配置文件中的 `routes` 数组中定义每个子路由的路径和对应的组件。

```js
export default {
  routes: [
    { path: "/login", component: "login" },
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/list", component: "list" },
        { path: "/admin", component: "admin" },
      ],
    },
  ],
};
```

以上代码表示路径为 `/list` 和 `/admin` 的页面将会使用 `src/layouts/index` 组件作为全局布局。

### 如何在全局布局中渲染子路由？

在全局布局组件 `src/layouts/index` 中，使用 `<Outlet/>` 组件来渲染子路由。通过在布局组件中的指定位置使用 `<Outlet/>`，可以将子路由的内容渲染到该位置。

```tsx
import { Outlet } from "umi";

export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <Outlet />
    </div>
  );
}
```

在以上代码中，`<Outlet/>` 组件将会渲染子路由的内容，从而实现根据子路由的不同动态展示页面内容。

### 1. redirect 是什么类型的配置？

- Type: `string`

### 2. 如何配置路由跳转？

- 需要在路由配置对象中添加 `redirect` 属性，将其值设置为目标路由路径。

### 3. 请提供一个示例来说明如何配置路由跳转。

```js
export default {
  routes: [
    { path: "/", redirect: "/list" },
    { path: "/list", component: "list" },
  ],
};
```

以上示例配置中，当访问根路径 `/` 时，会自动跳转到 `/list`，同时使用 `src/pages/list` 文件进行渲染。

### 问题 Umi 中的 `wrappers` 是用来做什么的？

`wrappers` 是用来配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。比如，可以用于路由级别的权限校验。

### 问题 如何在 Umi 中使用 `wrappers` 进行权限校验？

可以在路由配置中指定 `wrappers` 属性，并将需要使用的包装组件的路径传入。例如：

```js
routes: [
  {
    path: "/user",
    component: "user",
    wrappers: ["@/wrappers/auth"],
  },
  {
    path: "/login",
    component: "login",
  },
];
```

然后在 `src/wrappers/auth` 文件中，编写权限校验逻辑，并根据校验结果返回对应的内容或进行跳转。

### 问题 如何在 Umi 中实现不改变路由结构的权限校验？

如果希望路由结构不发生变化，推荐使用高阶组件来实现权限校验。首先在高阶组件中实现 `wrappers` 中的逻辑，然后使用该高阶组件装饰对应的路由组件。

举例来说，可以创建一个高阶组件 `withAuth` 来处理权限校验：

```jsx
// src/hocs/withAuth.tsx
import { Navigate } from "umi";

const withAuth = (Component) => () => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
};
```

然后在需要进行权限校验的路由组件中，使用 `withAuth` 来装饰该组件：

```jsx
// src/pages/user.tsx

const TheOldPage = () => {
  // ...
};

export default withAuth(TheOldPage);
```

这样，访问 `/user` 时，会通过 `withAuth` 高阶组件进行权限校验，如果通过则渲染 `TheOldPage` 组件，否则进行跳转到 `/login`。

### Umi 的约定式路由是什么？

Umi 的约定式路由也被称为文件路由，它不需要手动配置，而是通过分析文件系统的目录和文件名自动生成路由配置。当没有显式配置路由时，Umi 会进入约定式路由模式，然后会分析 `src/pages` 目录下的文件来生成路由配置。

### 约定式路由如何生成路由配置？

在 Umi 的约定式路由模式下，`src/pages` 目录下的文件会被认为是路由文件。根据文件的路径和文件名的规则，Umi 会生成对应的路由配置。例如，如果 `src/pages` 目录下有以下文件：

```
.
  └── pages
    ├── index.tsx
    └── users.tsx
```

那么会生成以下路由配置：

```js
[
  { path: "/", component: "@/pages/index" },
  { path: "/users", component: "@/pages/users" },
];
```

这样就根据文件系统的结构自动生成了路由配置。

### 如何修改约定式路由的默认规则？

如果需要修改约定式路由的默认规则，你可以使用 [conventionRoutes](../api/config#conventionroutes) 配置来进行配置。通过修改配置项，你可以自定义约定式路由的生成规则。

### 动态路由的约定规则是什么？

惯例上，在目录或文件名前加上 `$` 前缀表示该路由为动态路由。如果 `$` 后面没有指定参数名，则代表通配符 `*`，例如 `src/pages/users/$id.tsx` 表示路由 `/users/:id`， `src/pages/users/$id/settings.tsx` 表示路由 `/users/:id/settings`。

### 如何生成动态路由配置？

动态路由配置的生成规则如下：

- 首先，根据文件结构生成静态路由配置。
- 然后，将动态路由部分以对象形式添加到静态路由配置中。
- 每个动态路由对象包含 `path` 和 `component` 两个属性。
- `path` 是动态路由的路径，使用 `:` 表示参数名。
- `component` 是对应的组件路径。

举个栗子，假设有以下的文件结构：

```
+ pages/
  + foo/
    - $slug.tsx
  + $bar/
    - $.tsx
  - index.tsx
```

则会生成如下的路由配置：

```javascript
[
  { path: "/", component: "@/pages/index.tsx" },
  { path: "/foo/:slug", component: "@/pages/foo/$slug.tsx" },
  { path: "/:bar/*", component: "@/pages/$bar/$.tsx" },
];
```

### 如何使用动态路由配置？

在前端应用中，可以使用生成的动态路由配置来指定路由匹配规则和对应的组件路径。比如，使用 React Router 可以这样配置：

```jsx
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
  { path: "/", component: "@/pages/index.tsx" },
  { path: "/foo/:slug", component: "@/pages/foo/$slug.tsx" },
  { path: "/:bar/*", component: "@/pages/$bar/$.tsx" },
];

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={lazy(() => import(route.component))}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
```

通过以上配置，可以根据动态路由规则来匹配对应的组件，并在应用中动态渲染相应的页面。

### 全局 layout

全局 layout 是一个约定的概念，在前端开发中用于定义应用的全局路由。在项目的 `src/layouts` 目录中，通常会有一个名为 `index.tsx` 的文件，它会作为全局路由的入口组件。该组件会返回一个 React 组件，并通过 `<Outlet />` 组件渲染嵌套路由。

下面是一个示例的目录结构：

```bash
.
└── src
    ├── layouts
    │   └── index.tsx
    └── pages
        ├── index.tsx
        └── users.tsx
```

根据以上目录结构，生成的全局路由配置如下：

```js
[
  {
    path: "/",
    component: "@/layouts/index",
    routes: [
      { path: "", component: "@/pages/index" },
      { path: "users", component: "@/pages/users" },
    ],
  },
];
```

需要注意的是，通过在路由配置中设置 `layout: false` 可以细粒度地关闭某个路由的全局布局显示。该选项只在一级生效，如下所示：

```ts
routes: [
  {
    path: "/",
    component: "./index",
    layout: false,
  },
  {
    path: "/users",
    routes: [
      // 这里的 layout:false 不会生效，因为该路由的 layout 不是全局布局，而是 /users
      { layout: false },
    ],
  },
];
```

自定义的全局 `layout` 示例代码如下：

```tsx
import { Outlet } from "umi";

export default function Layout() {
  return <Outlet />;
}
```

以上是关于全局 layout 的基本信息。

### 如何在 Umi 中实现不同的全局 layout？

在 Umi 中，默认的全局 layout 是通过 `src/layouts/index.tsx` 实现的。如果你需要针对不同的路由输出不同的全局 layout，虽然 Umi 并不直接支持这样的配置，但你仍可以在 `src/layouts/index.tsx` 中根据 `location.path` 来区分不同的路由，并渲染不同的 layout。

举个例子，如果你想要针对 `/login` 路由输出简单布局，你可以按以下方式处理：

```js
import { useLocation, Outlet } from "umi";

export default function () {
  const location = useLocation();
  if (location.pathname === "/login") {
    return (
      <SimpleLayout>
        <Outlet />
      </SimpleLayout>
    );
  }

  // 使用 `useAppData` / `useSelectedRoutes` 可以获得更多路由信息
  // const { clientRoutes } = useAppData()
  // const routes = useSelectedRoutes()

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

你可以根据实际情况，在 `src/layouts/index.tsx` 中根据 `location.path` 进行路由判断，从而实现不同的全局 layout 输出。

### 404 路由是如何工作的？

404 路由是在前端开发中用来处理页面不存在的情况的路由。通过约定`src/pages/404.tsx`为 404 页面，并返回一个 React 组件来实现。

举例来说，如果有以下目录结构：

```bash
.
└── pages
    ├── 404.tsx
    ├── index.tsx
    └── users.tsx
```

将会生成以下路由配置：

```js
[
  { path: "/", component: "@/pages/index" },
  { path: "/users", component: "@/pages/users" },
  { path: "/*", component: "@/pages/404" },
];
```

这样，如果访问`/foo`，既不匹配`/`也不匹配`/users`，就会 fallback 到 404 路由，然后使用`src/pages/404.tsx`进行渲染。

需要注意的是，404 只在约定式路由中自动生效，如果使用配置式路由，需要自行配置 404 的通配路由。

### 如何设置 404 路由？

要设置 404 路由，需要按照约定在`src/pages/`目录下创建一个名为`404.tsx`的文件，并在该文件中返回一个 React 组件。

举例来说，可以在`src/pages/`目录下创建一个`404.tsx`文件，并在该文件中编写一个 React 组件，该组件将会用于渲染 404 页面。

然后，在路由配置文件中，将 404 路由定义为`{ path: '/*', component: '@/pages/404' }`，这样当访问一个不存在的页面时，就会使用该组件进行渲染。

需要注意的是，如果使用的是配置式路由而不是约定式路由，需要手动配置 404 的通配路由。

### 约定式路由与配置式路由的区别是什么？

约定式路由是一种根据文件结构自动生成路由配置的方式，而配置式路由是手动配置路由的方式。

约定式路由的工作原理是根据目录结构和文件名来生成路由配置。在约定式路由中，通过约定`src/pages/`目录下的文件作为路由路径，加载对应的文件作为组件进行渲染。这样可以避免手动配置大量的路由信息，减少维护成本。

配置式路由是手动配置路由信息的方式。在配置式路由中，需要手动定义每个路由的路径和对应的组件。这种方式更加灵活，可以满足各种特殊需求，但需要开发者自己维护和更新路由配置。

需要注意的是，约定式路由只适用于部分框架或工具，而配置式路由是一种通用的路由配置方式。具体使用哪种方式，可以根据项目需求和开发者的习惯进行选择。

### Link 组件的作用是什么？

Link 组件是用于单页应用内部跳转的组件。通过设置 `to` 属性指定目标路径，用户点击组件后会自动跳转到指定的地址。

### Link 组件的使用方法是什么？

在使用 Link 组件之前，需要先导入 `umi` 中的 Link 组件：

```jsx
import { Link } from "umi";
```

然后在 JSX 中使用 Link 组件，并设置 `to` 属性为目标路径，例如：

```jsx
<Link to="/users">Users Page</Link>
```

在上述代码中，点击 `Users Page` 文本后，页面会自动跳转到 `/users` 路径。

### Link 组件适用于什么场景？

Link 组件适用于单页应用内部的路径跳转场景。它可以方便地实现页面之间的无刷新跳转，提升用户体验。但需要注意的是，如果需要跳转到外部地址，应该使用 `a` 标签而不是 Link 组件。

### React Router v6 中的 useMatch 是用来做什么的？

useMatch 是 React Router v6 提供的一个 hook 函数，在函数内部通过传入的路径模式进行匹配，如果当前路径与模式匹配成功，则返回包含匹配信息的对象。

### useMatch 返回的 match 对象中有哪些属性？

useMatch 返回的 match 对象包含以下属性：

- params：一个键值对，包含从路径中提取的参数值。
- pathname：当前路径的完整路径名。
- pathnameBase：当前路径的基准路径名。
- pattern：一个对象，包含路径模式的相关配置信息，如路径、大小写敏感性和结束标记。

### 如何使用 useMatch 进行路径匹配？

使用 useMatch 进行路径匹配的方法如下：

1. 在组件中导入 useMatch 函数。
2. 在组件中调用 useMatch 函数，并传入要匹配的路径模式作为参数。
3. useMatch 函数会返回一个 match 对象，可以通过解构赋值获取 match 对象中的属性。

例如，可以通过以下代码使用 useMatch 进行路径匹配：

```jsx
import { useMatch } from 'react-router-dom';

const MyComponent = () => {
  const match = useMatch('/comp/:id');

  // 根据匹配结果进行相应的处理
  if (match) {
    // 匹配成功
    const { params, pathname, pathnameBase, pattern } = match;
    // 其他处理逻辑...
  } else {
    // 匹配失败
    // 其他处理逻辑...
  }

  return (
    // 组件的 JSX 代码...
  );
};
```

### useLocation 是什么？

`useLocation` 是 React Router V6 提供的一个自定义 Hook。它用于获取当前路由的位置信息。

### 如何使用 useLocation？

你可以通过以下方式来使用 `useLocation`：

```jsx
import { useLocation } from "react-router-dom";

function MyComponent() {
  const location = useLocation();
  // 使用 location 对象进行操作
}
```

### useLocation 返回的信息有哪些？

通过 `useLocation` 返回的位置信息对象包含以下属性：

```jsx
{
  "pathname": "/path/",
  "search": "",
  "hash": "",
  "state": null,
  "key": "default"
}
```

- `pathname` 表示当前路由的路径名。
- `search` 表示当前路由的查询参数。
- `hash` 表示当前路由的哈希值。
- `state` 表示当前路由的状态，通常在使用 `history.push` 或 `history.replace` 时传递。
- `key` 表示当前路由的唯一标识。

### 为什么推荐使用 useLocation？

推荐使用 `useLocation` 而不是直接访问 `history.location` 的原因是，它提供了更方便和可靠的方式来获取路由的位置信息。

另外，需要注意的是 `pathname` 的区别。`history.location.pathname` 是完整的浏览器路径名，而 `useLocation().pathname` 是相对于项目配置的 `base` 路径的路径名。

举个例子，如果项目配置 `base: '/testbase'`，而当前浏览器地址为 `https://localhost:8000/testbase/page/apple`，那么：

- `history.location.pathname` 为 `/testbase/page/apple`
- `useLocation().pathname` 为 `/page/apple`

因此，在开发过程中，推荐使用 `useLocation` 来获取正确的路径名。

### 什么是路由动态参数？

路由动态参数是指在路由配置中定义一些占位符，用于接收在实际应用中传递的参数。在 React 路由中，使用 useParams 钩子可以轻松地获取路由动态参数的值。

### 如何在 React 中获取路由动态参数的值？

在 React 中，可以使用 useParams 钩子来获取路由动态参数的值。先在路由配置中定义动态参数的占位符，然后在组件中使用 useParams 钩子，即可获取到实际传递的参数值。

例如，假设路由配置为 /comp/:id，当前的 location 是 /comp/paramId，可以这样获取动态参数的值：

```jsx
const params = useParams();
```

这样，params 对象中将包含动态参数的键值对，例如在这个例子中，params.id 将等于 "paramId"。

### 在什么情况下需要使用路由动态参数？

当需要根据不同的路由配置传递参数，并在组件中获取这些参数时，就需要使用路由动态参数。通过路由动态参数，可以实现组件间的数据传递和动态展示。

例如，假设有一个列表页，点击列表中的某一项，需要跳转到详情页，并传递该项的唯一标识符作为参数，可以使用路由动态参数来实现这个功能。在详情页的组件中，通过获取路由动态参数的值，可以获取到该项的唯一标识符，并展示对应的详细信息。

总结起来，当需要根据路由配置传递参数，并在组件中获取这些参数时，可以使用路由动态参数。

### React Router v6 中的 useSearchParams 是什么？

在 React Router v6 中，useSearchParams 是一个自定义 hooks 函数，用于获取和设置 URL 中的查询参数。当你在应用中使用 useSearchParams hooks 时，它会返回一个 searchParams 对象和 setSearchParams 函数。

### useSearchParams hooks 如何使用？

使用 useSearchParams hooks 很简单，只需按照以下步骤进行：

1. 在你的组件中引入 useSearchParams 函数。
2. 在组件中调用 useSearchParams 函数，将它的返回值分配给一个数组解构（destructuring）变量，比如 [searchParams, setSearchParams]。
3. 现在，你可以使用 searchParams 对象来获取和设置 URL 查询参数。

以下是一个使用 useSearchParams hooks 的示例：

```jsx
const [searchParams, setSearchParams] = useSearchParams();

// 获取查询参数
searchParams.get('a'); // 返回 b

// 获取查询参数字符串
searchParams.toString(); // 返回 a=b

// 设置查询参数
setSearchParams({ 'c', d: 'e' }); // location 变为 /comp?a=c&d=e
```

### searchParams 对象有哪些常用方法？

searchParams 对象是基于 [URLSearchParams API](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/searchParams) 的，它提供了一系列方法来处理 URL 查询参数。你可以使用这些方法来获取、设置、删除和迭代查询参数。请参考 [URLSearchParams API](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/searchParams) 链接以获取更详细的信息。

希望以上解答能对你有所帮助！如果还有其他问题，请随时提问。
