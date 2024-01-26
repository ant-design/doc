### 什么是微前端？

微前端是一种将前端应用程序拆分成更小、更可管理的部分，并将它们作为独立的功能单元进行开发、测试和部署的架构风格。每个部分被称为一个微应用，它们可以独立地开发，具有独立的代码库和构建过程。微前端通过集成这些微应用来创建一个完整的前端应用程序。

### Umi 和 Qiankun 微前端插件之间的关系是什么？

`@umi/max` 内置了 Qiankun 微前端插件，可以用于在 Umi 项目中集成 Qiankun 微应用。通过启用这个插件，开发人员可以轻松地构建出一个生产可用的微前端架构系统。

### 什么是微前端？

微前端是一种架构风格，它将前端应用程序拆分为更小的、独立的功能模块，每个模块都可以独立开发、测试和部署。这些模块可以相互组合形成更大的应用程序，也可以作为子应用被其他应用引入使用。

微前端的好处是可以将大型应用程序拆分为更小的、可维护的部分，提高开发效率，降低耦合度。同时，微前端也能够支持独立部署、独立运行，提高系统的可靠性和可伸缩性。

### 父应用和子应用的关系是怎样的？

在微前端架构中，父应用和子应用是独立的前端项目。父应用可以引入子应用，子应用也可以在自己内部继续引入孙子应用，以此类推。子应用之间可以任意嵌套，父应用与子应用之间可以通过导航栏切换路由，实现内容的动态展示。

父应用和子应用是完全独立的，它们可以在不同的代码仓库中进行开发和部署。父应用可以通过导航栏或其他方式引入子应用，子应用会被加载和运行在父应用的上下文中。

### 如何理解微应用？

当一个应用能够作为子应用被其他应用引入的时候，它就成为了微应用。微应用可以被其他应用动态地加载和使用，它以独立的模块形式存在，具有自己的路由、状态、样式等。微应用的开发和部署可以独立于父应用，从而实现应用的解耦和复用。

在微前端架构中，微应用可以是一个功能模块、一个页面、一个组件，甚至是一个小的插件。它可以被多个父应用引入和复用，提供了更大的灵活性和可扩展性。

### 插件注册子应用

修改父应用的 Umi 配置文件，添加如下内容：

```ts
// .umirc.ts
export default {
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:7001',
        },
        {
          name: 'app2',
          entry: '//localhost:7002',
        },
      ],
    },
  },
};
```

其中，`name` 为子应用的名称，在引入子应用时需要使用到它；`entry` 为子应用运行的 HTTP 地址；`master` 对象的完整 API 可[见此](#masteroptions)。

以上配置将注册两个子应用，分别是`app1`和`app2`，它们的入口分别是 `//localhost:7001` 和 `//localhost:7002`。这样配置后，父应用就可以在运行时动态加载和卸载这些子应用，实现插件化的效果。

### 运行时注册子应用

修改父应用的 Umi 配置文件，添加如下内容：

```ts
// .umirc.ts
export default {
  qiankun: {
    master: {},
  },
};
```

修改父应用的 `src/app.ts` 文件，导出 `qiankun` 对象：

```ts
// src/app.ts
export const qiankun = {
  apps: [
    {
      name: 'app1',
      entry: '//localhost:7001',
    },
    {
      name: 'app2',
      entry: '//localhost:7002',
    },
  ],
};
```

以上配置是为了在父应用中运行时注册子应用。通过配置 `qiankun` 对象，我们可以注册多个子应用到父应用中。

请确保 `qiankun` 的配置信息与子应用的实际信息相匹配，包括子应用的名称 `name` 和入口地址 `entry`。这样父应用在启动时就会自动注册这些子应用，并将它们渲染到指定的 DOM 节点中。

运行时注册子应用能够实现微前端架构，将多个独立的应用通过集成在一个父应用中进行管理和渲染，从而实现多个应用的协同工作。

### 安装和配置 qiankun 插件

假设您的子应用项目基于 Umi 开发且引入了 qiankun 插件。如果没有，请按照此教程进行配置。

首先，需要修改子应用的 Umi 配置文件 `.umirc.ts`，添加如下内容：

```ts
export default {
  qiankun: {
    slave: {},
  },
};
```

这样，qiankun 插件会自动在项目中创建好 Qiankun 子应用所需的生命周期钩子和方法。

请根据以上内容对您的子应用进行配置。

### 路由绑定引入子应用

手动配置 `.umirc.ts` 文件中的 `routes` 项，通过路由的方式绑定子应用。何时使用：

- 子应用包含完整的路由切换逻辑时。
- 父子应用路由相互关联时。

现在，我们想要在 `/app1/project` 和 `/app2` 路由分别加载子应用 `app1` 和 `app2`，可以配置父应用的路由如下：

```ts
// .umirc.ts
export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/index.tsx',
      routes: [
        {
          path: '/app1',
          component: '@/layouts/app-layout.tsx',
          routes: [
            // 配置微应用 app1 关联的路由
            {
              // 带上 * 通配符意味着将 /app1/project 下所有子路由都关联给微应用 app1
              path: '/project/*',
              microApp: 'app1',
            },
          ],
        },
        // 配置 app2 关联的路由
        {
          path: '/app2/*',
          microApp: 'app2',
        },
      ],
    },
  ],
};
```

配置好后，子应用的路由 base 会在运行时被设置为主应用中配置的 `path`。

例如，在上面的配置中，我们指定了 app1 关联的 path 为 `/app1/project`，假如 app1 里有一个路由配置为 `/user`，当我们想在父应用中访问 `/user` 对应的页面时，浏览器的 url 需要是 `base + /user`，即 `/app1/project/user` 路径，否则子应用会因为无法匹配到正确的路由而渲染空白或 404 页面。

`qiankun` 插件拓展了 Umi 原有的路由对象，新增了 `microApp` 字段，它的值为注册子应用的 `name`。切换到对应路由后，Umi 将会使用 `<MicroApp />` 组件渲染此子应用，并替换原来路由的 `component`。

拓展后的 Umi 路由对象 API 可以在 [这里](https://umijs.org/docs/routing#route) 找到更多信息。

### 通过 `<MicroApp />` 组件引入子应用

通过 `<MicroApp />` 组件加载（或卸载）子应用。何时使用：

- 子应用包含完整的路由切换逻辑时。
- 父子应用路由相互关联时。

现在，我们想在父应用的某个页面中引入子应用 `app1`，可以编写代码如下：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" />;
}
```

使用该方式引入子应用时，父子应用的路由将一一对应。例如，当父应用路由为 `/some/page` 时，子应用路由同样为 `/some/page`。切换子应用路由时，父应用将同步切换。

如果父应用的路由包含前缀，可以通过配置 `base` 属性保证父子应用的路由正确对应。例如，父应用路由为 `/prefix/router-path/some/page` 时，我们希望子应用的路由为 `/some/page`，可以修改代码如下：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" base="/prefix/router-path" />;
}
```

### &lt;MicroAppWithMemoHistory /&gt;组件是如何引入子应用的？

通过&lt;MicroAppWithMemoHistory /&gt;组件，可以加载或卸载子应用。当父应用的路由发生变化时，子应用的路由不会改变。这个组件用于以下两种情况：

1. 仅使用子应用的指定路由时。
2. 父子应用的路由相互独立时。

使用&lt;MicroAppWithMemoHistory /&gt;组件引入子应用时，需要提供子应用的路由 url 属性。例如，如果我们想在父应用的某个组件内部引入名为 app2 的子应用，子应用的路由为/some/page，可以使用以下代码：

```tsx
import { MicroAppWithMemoHistory } from 'umi';

export default function Page() {
  return <MicroAppWithMemoHistory name="app2" url="/some/page" />;
}
```

这样就可以在父应用的页面中引入名为 app2 的子应用，并指定子应用的路由为/some/page。

### 子应用之间跳转

#### 如何在子应用中跳转到另一个子应用的页面？

如果子应用通过**路由绑定的方式**引入，在其它子应用的内部，可以使用 `<MicroAppLink />` 组件来跳转到对应的路由。

以子应用 `app1` 和 `app2` 为例，我们可以在 `app1` 中的页面中使用 `<MicroAppLink />` 组件来实现跳转到 `app2` 的内部页面。例如：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink name="app2" to="/home">
        <Button>Go to app2</Button>
      </MicroAppLink>
    </>
  );
}
```

在上面的例子中，当点击按钮后，父应用的路由会变为 `/app2/home`，并渲染子应用 `app2` 中内部路由为 `/home` 的页面。

同样的，如果需要从 `app2` 跳转回 `app1`，可以在 `app2` 中的页面中使用 `<MicroAppLink />` 组件实现。例如：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink name="app1" to="/home">
        <Button>Go back to app1</Button>
      </MicroAppLink>
    </>
  );
}
```

在上述代码中，当点击按钮后，父应用的路由会变为 `/app1/home`，并渲染子应用 `app1` 中内部路由为 `/home` 的页面。

#### 如何从子应用跳转到父应用的指定路由？

如果需要从子应用直接跳转到父应用的指定路由，可以在子应用中使用 `<MicroAppLink />` 组件，并设置 `isMaster` 属性为 `true`。例如：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink isMaster to="/table">
        <Button>Go to master app</Button>
      </MicroAppLink>
    </>
  );
}
```

在上面的例子中，当点击按钮后，父应用的路由会变为 `/table`。

通过以上步骤，你可以在子应用之间进行页面跳转，并在需要的情况下跳转到父应用的指定路由。

### Qiankun 支持的完整生命钩子列表

Qiankun 在 single-spa 的基础上提供了额外的生命周期钩子，用于控制子应用的各个阶段。下面是 Qiankun 支持的完整的生命周期钩子列表：

1. `beforeLoad`：微应用开始获取前调用，微应用状态为 `NOT_LOADED`。
2. [`load`](https://single-spa.js.org/docs/building-applications/#load)：微应用获取完成时调用，用于加载微应用的资源。微应用状态会从 `NOT_LOADED` 变为 `LOADING_SOURCE_CODE`，若获取成功，则状态变为 `NOT_BOOTSTRAPPED`；若获取失败，则状态变为 `LOAD_ERROR`。
3. [`bootstrap`](https://single-spa.js.org/docs/building-applications/#bootstrap)：微应用初始化完成时调用。在这个阶段，微应用状态会从 `LOADING_SOURCE_CODE` 变为 `BOOTSTRAPPING`，然后变为 `NOT_MOUNTED`。
4. `beforeMount`：微应用每次开始挂载前调用。
5. [`mount`](https://single-spa.js.org/docs/building-applications/#mount)：微应用每次开始挂载时调用，用于将微应用挂载到页面上。微应用状态会从 `NOT_MOUNTED` 变为 `MOUNTING`。
6. `afterMount`：微应用每次挂载完成后调用，微应用状态变为 `MOUNTED`。
7. `beforeUnmount`：微应用每次开始卸载前调用。
8. [`unmount`](https://single-spa.js.org/docs/building-applications/#unmount)：微应用每次开始卸载时调用，用于将微应用从页面上卸载。微应用状态会从 `MOUNTED` 变为 `UNMOUNTING`。
9. `afterUnmount`：微应用每次卸载完成后调用，微应用状态变为 `NOT_MOUNTED`。
10. [`unload`](https://single-spa.js.org/docs/building-applications/#unload)：微应用卸载完成时调用，微应用状态变为 `NOT_LOADED`。

除了上述生命周期钩子，还有一个特殊的生命周期钩子：`update`。该钩子仅在使用 `<MicroApp />` 或 `<MicroAppWithMemoHistory />` 组件引入微应用时生效。当状态为 `MOUNTED` 的微应用手动刷新时，会触发该钩子。更新开始时，微应用状态变为 `UPDATING`，更新完成后，微应用状态变为 `MOUNTED`。

可以通过手动刷新子应用来触发 `update` 钩子，例如：

```tsx
import { useRef } from 'react';
import { MicroApp } from 'umi';

export default function Page() {
  const microAppRef = useRef();

  // 执行此方法时，更新子应用
  const updateMicroApp = () => {
    microAppRef.current?.update();
  };

  return <MicroApp name="app1" ref={microAppRef} />;
}
```

当需要在子应用的生命周期中添加自定义逻辑时，可以在父应用中进行全局配置或在子应用中进行单独配置。

### 如何在父应用中配置生命周期钩子

要在父应用的 `src/app.ts` 文件中配置生命周期钩子，需要导出 `qiankun` 对象并定义 `lifeCycles` 属性。所有的子应用都将实现这些生命周期钩子。

以下是一个示例代码：

```ts
// src/app.ts
export const qiankun = {
  lifeCycles: {
    // 在所有子应用挂载完成后，执行该函数并打印 props 信息
    async afterMount(props) {
      console.log(props);
    },
  },
};
```

以上代码会在所有子应用挂载完成后，执行 `afterMount` 函数并打印传递的 `props` 信息。

这样可以在父应用中定义其他的生命周期钩子，来满足自己的需求。

### 子应用配置生命周期钩子

在子应用的 `src/app.ts` 中导出 `qiankun` 对象，实现生命周期钩子。子应用运行时仅支持配置 `bootstrap`、`mount` 和 `unmount` 钩子。

#### bootstrap 钩子

`bootstrap` 钩子在子应用加载之前触发，用于做一些初始化操作。在该钩子中，可以接收到一个 `props` 参数，用于接收主应用传递过来的数据。

示例代码：

```ts
// src/app.ts
export const qiankun = {
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
  },
};
```

#### mount 钩子

`mount` 钩子在子应用渲染之前触发，常用于子应用的启动。在该钩子中，可以接收到一个 `props` 参数，用于接收主应用传递过来的数据。

示例代码：

```ts
// src/app.ts
export const qiankun = {
  async mount(props) {
    console.log('app1 mount', props);
  },
};
```

#### unmount 钩子

`unmount` 钩子在子应用卸载之后触发，用于销毁子应用的资源。在该钩子中，可以接收到一个 `props` 参数，用于接收主应用传递过来的数据。

示例代码：

```ts
// src/app.ts
export const qiankun = {
  async unmount(props) {
    console.log('app1 unmount', props);
  },
};
```

以上是在子应用中配置生命周期钩子的方法。根据不同的情况，可以在对应的钩子中执行相应的逻辑。

### 如何使用基于 `useModel()` 的通信？

基于 `useModel()` 的通信是一种在子应用中使用数据流插件进行通信的方式。要使用基于 `useModel()` 的通信，需要满足以下条件：

1. 子应用是使用 Umi 开发的。
2. 子应用已经引入了数据流插件。

数据流插件是 Umi 内置的一个插件，用于实现全局数据的共享和通信。

基于 `useModel()` 的通信具有以下特点：

- 使用 `useModel()` 钩子函数可以在任意组件中访问全局数据。
- 使用 `useModel()` 钩子函数可以访问和更改全局数据的状态。
- 全局数据的状态改变会自动触发订阅该数据的组件重新渲染。

使用基于 `useModel()` 的通信可以方便地实现子应用之间的数据共享和通信，提高开发效率。

要使用基于 `useModel()` 的通信，需要在子应用的组件中引入 `useModel()` 钩子函数，并传入需要访问的全局数据的名称。然后可以根据需要获取和更改全局数据的状态。

需要注意的是，在使用 `useModel()` 钩子函数访问全局数据之前，需要先在 `app.ts` 文件中配置数据模型。数据模型定义了全局数据的结构和初始值。

总结一下，使用基于 `useModel()` 的通信需要以下几个步骤：

1. 在子应用的 `app.ts` 文件中配置数据模型。
2. 在子应用的组件中引入 `useModel()` 钩子函数并传入需要访问的全局数据的名称。
3. 根据需要获取和更改全局数据的状态。

以上就是使用基于 `useModel()` 的通信的基本步骤。通过使用这种通信方式可以方便地实现子应用之间的数据共享和通信，提高开发效率。

### 如何在父应用中向子应用透传数据？

如果通过路由的模式引入子应用，则需要在父应用的 `src/app.ts` 文件中导出一个名为 `useQiankunStateForSlave()` 的函数，该函数返回一个对象，其中包含了全局状态和修改全局状态的方法。子应用会从`window.g_root`中拿到这个函数，并在子应用调用父应用传递的`useQiankunStateForSlave()`函数时获取到全局状态。

如果通过组件的模式引入子应用，直接将数据以组件参数的形式传递给子应用即可。

以上是在 Umi 中的使用方式。对于其他前端框架，可以根据具体的使用方式进行相应的调整。

### 如何在父应用的 `src/app.ts` 文件中使用 `useQiankunStateForSlave()` 函数？

在 `src/app.ts` 文件中，首先需要导入 `useState` 方法，然后定义 `useQiankunStateForSlave()` 函数，并在函数内部使用 `useState()` 方法初始化全局状态。

```typescript
// src/app.ts
import { useState } from 'react';

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setGlobalState,
  };
}
```

在函数的返回值中，将全局状态和修改全局状态的方法返回给子应用使用。

### 如何在父应用的组件中向子应用透传数据？

在父应用的组件中，可以使用 `useState` 方法来初始化全局状态，并将全局状态以参数的形式传递给子应用。

```tsx
import { useState } from 'react';
import { MicroApp } from 'umi';

export default function Page() {
  const [globalState, setGlobalState] = useState<any>({
    slogan: 'Hello MicroFrontend',
  });

  return (
    <MicroApp
      name="app1"
      globalState={globalState}
      setGlobalState={setGlobalState}
    />
  );
}
```

在上面的示例中，将全局状态和修改全局状态的方法作为参数传递给子应用，并在子应用中使用这些参数来获取和修改全局状态。

请注意，以上示例是基于 Umi 框架的用法。对于其他前端框架，可以根据具体的使用方式进行相应的调整。

### UseModel

`useModel()` is a hook provided by the `umi` library that allows a sub-application to retrieve and consume data passed from the parent application. The sub-application can use this hook in any component to access the global model generated by the sub-application with the namespace `@@qiankunStateFromMaster`. Here is an example of how to use the `useModel()` hook:

```tsx
import { useModel } from 'umi';

export default function Page() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
}
```

### ConnectMaster

`connectMaster()` is a higher-order method provided by the `umi` library that allows a sub-application to retrieve and consume data passed from the parent application. The sub-application can use this method to wrap a component and access the props passed from the parent application. Here is an example of how to use the `connectMaster()` method:

```tsx
import { connectMaster } from 'umi';

function MyPage(props) {
  return <div>{JSON.stringify(props)}</div>;
}

export default connectMaster(MyPage);
```

### setLoading

When the parent application imports a sub-application using the `<MicroApp />` or `<MicroAppWithMemoHistory />` component, it passes a `setLoading()` method to the sub-application. This method allows the sub-application to mark its loading status as complete at an appropriate time. Here is an example of how to use the `setLoading()` method:

```tsx
const masterProps = useModel('@@qiankunStateFromMaster');
masterProps.setLoading(false);

// Or
function MyPage(props) {
  props.setLoading(false);
}
connectMaster(MyPage);
```

When the sub-application is mounted and reaches the `MOUNTED` state, it is automatically marked as complete.

### 基于配置的通信

在配置父应用注册子应用时，可以传入 props 属性，将数据传递给子应用。

例如，修改父应用 src/app.ts 的 qiankun 导出方法如下：

```ts
// src/app.ts
export const qiankun = {
  apps: [
    {
      name: 'app1',
      entry: '//localhost:7001',
      props: {
        accountOnClick: (event) => console.log(event),
        accountName: 'Alex',
        accountAge: 21,
      },
    },
  ],
};
```

子应用在生命周期钩子中能够获取并消费得到的 props 属性，根据需求实现对应的生命周期钩子即可。

### 子应用加载动画的使用方法

当启用子应用加载动画时，可以为子应用提供一个样式类 `wrapperClassName`，用于渲染子应用加载时的效果。

使用以下代码片段将加载动画应用到子应用中：

```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <MicroAppLoader loading={loading} />
  <MicroApp className={className} />
</div>
```

在上述代码中，`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。加载动画的逻辑在 `MicroAppLoader` 组件中实现。

请注意，加载动画的显示与隐藏逻辑需要在父应用中进行控制，即通过控制 `loading` 状态来显示或隐藏加载动画。

### 子应用错误捕获能力的使用方法

当启用子应用错误捕获能力时，可以为子应用提供一个样式类 `wrapperClassName`，用于渲染子应用出现错误时的效果。

使用以下代码片段将错误捕获能力应用到子应用中：

```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <ErrorBoundary error={e} />
  <MicroApp className={className} />
</div>
```

在上述代码中，`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。错误捕获的逻辑在 `ErrorBoundary` 组件中实现。

请注意，子应用的错误信息（由变量 `e` 表示）需要在父应用中进行传递和处理，以便正确展示错误页面或信息。

### 子应用自定义样式的使用方法

当启用子应用自定义样式时，可以为子应用提供一个样式类 `wrapperClassName`，用于渲染子应用的自定义样式。

使用以下代码片段将自定义样式应用到子应用中：

```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <MicroApp className={className} />
</div>
```

在上述代码中，`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。自定义样式的逻辑在 `MicroApp` 组件中实现。

请注意，自定义样式需要在父应用中定义和传递给子应用，以便子应用可以正确应用这些样式。

### 如何使用基于 antd 的加载动画？

在使用 antd 作为项目的组件库时，可以通过 `autoSetLoading` 属性来开启子应用的加载动画。插件会自动调用 antd 的 `<Spin />` 组件作为加载组件。

如果是通过路由的方式引入子应用，可以按照以下配置进行设置：

```ts
// .umirc.ts
export default {
  routes: [
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        autoSetLoading: true,
      },
    },
  ],
};
```

如果是通过组件的方式引入子应用，直接将 `autoSetLoading` 作为参数传入即可：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" autoSetLoading />;
}
```

这样就可以在子应用加载时显示 antd 的加载动画了。 ign 5.x 的 CSS 变量模式，你需要进行相应的配置。具体的配置方式请查阅 Ant Design 的官方文档或相关文档资源。

### 如何使用 antd 的 `<Spin />` 组件作为加载组件？

要在使用 antd 作为项目组件库时，将 `<Spin />` 组件作为加载组件，你可以通过 `autoSetLoading` 属性来实现。在启用 `autoSetLoading` 属性后，插件会自动调用 antd 的 `<Spin />` 组件来展示加载动画。

具体使用方法如下：

如果是通过路由的方式引入子应用，可以按照以下配置进行设置：

```ts
// .umirc.ts
export default {
  routes: [
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        autoSetLoading: true,
      },
    },
  ],
};
```

如果是通过组件的方式引入子应用，直接将 `autoSetLoading` 作为参数传入即可：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" autoSetLoading />;
}
```

这样就可以在子应用加载时展示 antd 的 `<Spin />` 组件作为加载动画了。

### 如何自定义加载动画

如果您没有使用 antd 作为项目组件库，或希望覆盖默认的加载动画样式时，可以设置一个自定义的加载组件 `loader` 作为子应用的加载动画。

通过路由的模式引入的子应用，只支持在运行时配置，代码如下：

```tsx
// .app.tsx
import CustomLoader from 'src/components/CustomLoader';

export const qiankun = () => ({
  routes: [
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        loader: (loading) => <CustomLoader loading={loading} />,
      },
    },
  ],
});
```

通过组件的模式引入子应用，直接将 `loader` 作为参数传入即可：

```tsx
import CustomLoader from '@/components/CustomLoader';
import { MicroApp } from 'umi';

export default function Page() {
  return (
    <MicroApp
      name="app1"
      loader={(loading) => <CustomLoader loading={loading} />}
    />
  );
}
```

其中，`loading` 为 `boolean` 类型参数，为 `true` 时表示仍在加载状态，为 `false` 时表示加载状态已结束。

如果项目中希望多个子应用使用统一的自定义加载动画，可以通过在主应用配置 `defaultLoader` 来完成

```ts
// .umirc.ts
qiankun: {
  master: {
    defaultLoader: '@/defaultLoader',
  },
},
```

其中，`defaultLoader` 为文件路径，统一约定放在 src 目录 下，在 umi 中 @ 即代表 src 目录。

defaultLoader 跟上述 loader 的实现一致，接收一个 `loading` 为 `boolean` 类型的参数。

```tsx
// defaultLoader.tsx
import { Spin } from 'antd';

export default function (loading: boolean) {
  return <Spin spinning={loading} />;
}
```

注意：loader 的优先级高于 defaultLoader。

### 如何开启子应用的错误捕获能力？

当使用 antd 作为项目组件库时，可以向子应用传入 `autoCaptureError` 属性以开启子应用错误捕获能力。插件将会自动调用 antd 的 `<Result />` 组件作为错误捕获组件。

如果通过路由的模式引入子应用，可以在 `.umirc.ts` 配置文件中进行配置，示例代码如下：

```ts
// .umirc.ts
export default {
  routes: [
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        autoCaptureError: true,
      },
    },
  ],
};
```

如果通过组件的模式引入子应用，直接将 `autoCaptureError` 作为参数传入即可，示例代码如下：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" autoCaptureError />;
}
```

这样设置后，子应用在出现错误时将会自动捕获并展示错误信息。

### 如何自定义错误捕获组件

如果您的项目没有使用 Ant Design 作为组件库，或者希望覆盖默认的错误捕获组件样式，您可以使用一个自定义的组件作为子应用的错误捕获组件。

对于通过路由模式引入的子应用，只支持在运行时配置，示例代码如下：

```tsx
import CustomErrorBoundary from '@/components/CustomErrorBoundary';

export const qiankun = () => ({
  routes: [
    {
      path: '/app1',
      microApp: 'app1',
      microAppProps: {
        errorBoundary: (error) => <CustomErrorBoundary error={error} />,
      },
    },
  ],
});
```

对于通过组件模式引入子应用，可以将 `errorBoundary` 作为参数传递，示例代码如下：

```tsx
import CustomErrorBoundary from '@/components/CustomErrorBoundary';
import { MicroApp } from 'umi';

export default function Page() {
  return (
    <MicroApp
      name="app1"
      errorBoundary={(error) => <CustomErrorBoundary error={error} />}
    />
  );
}
```

其中，`error` 参数的类型为 `Error`。

如果您希望多个子应用共用同一个自定义错误捕获组件，可以通过配置 `defaultErrorBoundary` 来实现。

在 `.umirc.ts` 中配置如下：

```ts
qiankun: {
  master: {
    defaultErrorBoundary: '@/defaultErrorBoundary',
  },
},
```

其中，`defaultErrorBoundary` 是文件路径，通常放置在 [src 目录](../guides/directory-structure.md#src-目录) 下。在 umi 中，`@` 表示 `src` 目录。

`defaultErrorBoundary` 的实现与上述的 `errorBoundary` 相同，接收一个 `error` 参数，类型为 `Error`。

```tsx
// defaultErrorBoundary.tsx
export default function (error: Error) {
  return <div>{error?.message}</div>;
}
```

需要注意的是，`errorBoundary` 的优先级高于 `defaultErrorBoundary`。

### MasterOptions

#### 属性

| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| enable | 否 | 启用 Qiankun 微应用插件，设置为 false 时为不启用 | boolean | undefined |
| apps | 是 | 微应用配置 | `App[]` | undefined |
| routes | 否 | 微应用运行时的路由 | `Route[]` | undefined |
| defaultErrorBoundary | 否 | 子应用默认的错误捕获组件，值为文件路径 | string | - |
| defaultLoader | 否 | 子应用默认的加载动画，值为文件路径 | string | - |
| sandbox | 否 | 是否开启沙箱模式 | boolean \| { strictStyleIsolation: boolean, experimentalStyleIsolation: boolean } | true |
| prefetch | 否 | 是否启用微应用预加载 | boolean \| 'all' \| string[] \| (( apps: RegistrableApp[] ) => { criticalAppNames: string[]; minorAppsName: string[] }) | true |

属性说明：

- `enable`：是否启用 Qiankun 微应用插件，默认值为 `undefined`
- `apps`：微应用配置，必填项
- `routes`：微应用运行时的路由
- `defaultErrorBoundary`：子应用默认的错误捕获组件，值为文件路径
- `defaultLoader`：子应用默认的加载动画，值为文件路径
- `sandbox`：是否开启沙箱模式，默认为 `true`
- `prefetch`：是否启用微应用预加载，默认为 `true`

### `enable`属性的作用

`enable`属性用于启用或禁用 Qiankun 微应用插件。当设置为`false`时，表示不启用该插件。

### `enable`属性的类型和默认值

`enable`属性的类型为`boolean`，默认值为`undefined`。

### `enable`属性是否必填

`enable`属性不是必填项，可以选择性地设置该属性。

### App

| 属性          | 必填 | 说明                         | 类型      | 默认值  |
| ------------- | ---- | ---------------------------- | --------- | ------- |
| `name`        | 是   | 微应用的名称                 | `string`  |         |
| `entry`       | 是   | 微应用的 HTML 地址           | `string`  |         |
| `credentials` | 否   | 拉取微应用时同时拉取 Cookies | `boolean` | `false` |
| `props`       | 否   | 父应用传递给微应用的数据     | `object`  | `{}`    |

属性说明：

- `name`：微应用的名称，必填项，类型为字符串。
- `entry`：微应用的 HTML 地址，必填项，类型为字符串。
- `credentials`：是否在拉取微应用时同时拉取 Cookies，可选项，默认值为 `false`，类型为布尔值。
- `props`：父应用传递给微应用的数据，可选项，默认为空对象，类型为对象。

请注意，以上表格提供了属性的基本信息，具体使用方法和示例可参考相关文档或开发手册。

### Route

| 属性 | 必填 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| `path` | 是 | 路由的路径 | `string` |  |
| `microApp` | 是 | 关联的微应用名称 | `string` |  |
| `microAppProps` | 否 | 微应用的配置 | [`MicroAppProps`](#microappprops) | `{}` |

路由是用于定义前端应用程序中不同页面之间的导航和跳转功能的配置。每个路由都由一个唯一的路径（path）和一个关联的微应用名称（microApp）组成。路径用于匹配用户在浏览器地址栏中输入的路径，当路径匹配成功时，系统会自动加载对应的微应用。微应用是一个独立的功能模块，可以包含自己的视图、逻辑和数据。微应用名称用于标识需要加载的微应用。此外，还可以通过微应用配置（microAppProps）来传递额外的配置信息给微应用，这样微应用可以根据配置信息进行个性化的渲染和处理。如果未提供微应用配置，默认使用空对象。

### MicroAppProps 属性的说明

`autoSetLoading`属性：是否自动设置微应用的加载状态

`loader`属性：自定义的微应用加载状态组件

`autoCaptureError`属性：是否自动设置微应用的错误捕获

`errorBoundary`属性：自定义的微应用错误捕获组件

`className`属性：微应用的样式类

`wrapperClassName`属性：包裹微应用加载组件、错误捕获组件和微应用的样式类，仅在启用加载组件或错误捕获组件时有效

### 子应用的生命周期钩子加载了，但是页面没有渲染

1. 确认子应用的路由配置是否正确。检查主应用中配置的子应用路由是否与子应用的路由配置匹配。如果路由匹配不上，子应用的页面就无法渲染出来。
2. 检查当前 URL 是否与子应用的路由路径匹配。子应用的路由路径可能包含了主应用的路径以及子应用的路径，确保当前 URL 使用了正确的子应用路由路径。
3. 检查子应用是否正确注册到主应用中。主应用中需要注册子应用的生命周期钩子，确保子应用的生命周期能被加载。
4. 检查子应用的根节点是否正常渲染。通过查看 DOM 可以确定子应用的根节点是否存在，如果存在但内容为空，那可能是因为当前 URL 没有匹配到子应用的任何路由导致的。确保使用了正确的子应用路由路径来访问页面。

请注意，以上 QA 文档只是示例，实际生成的 QA 文档应该根据具体情况进行调整，确保能够准确解决问题。
