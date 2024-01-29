### 什么是微前端？

微前端是一种架构风格，用于将前端应用程序拆分为更小的、独立的功能模块。每个模块都可以独立开发、测试和部署。这种架构风格可以提高开发效率，降低耦合度，并支持独立部署和独立运行。

### 微前端的好处是什么？

微前端的好处包括：
- 可以将大型应用程序拆分为更小的、可维护的部分。
- 提高了开发效率和团队协作能力。
- 降低了模块之间的耦合度，使得修改一个模块不会影响其他模块。
- 支持独立部署和独立运行，提高了系统的可靠性和可伸缩性。

### 微前端如何实现独立部署和独立运行？

要实现微前端的独立部署和独立运行，可以采用以下方法：
- 使用模块化的开发方式，将前端应用程序拆分为独立的功能模块。
- 每个功能模块可以独立开发、测试和部署，使用独立的代码仓库和构建工具。
- 模块之间通过定义清晰的接口和通信方式进行集成。
- 每个模块可以被其他应用程序引入和使用，作为子应用运行。

通过以上方法，可以实现前端应用程序的独立部署和独立运行，提高系统的可靠性和可伸缩性。

### 微前端架构中父应用和子应用的关系是怎样的？

在微前端架构中，父应用和子应用是独立的前端项目。它们通过导航栏或其他方式进行关联和引入。父应用可以引入一个或多个子应用，子应用也可以在自己内部继续引入孙子应用。这种架构的设计允许子应用之间的任意嵌套，同时提供了灵活的路由切换功能，使内容能够实现动态展示。

父应用和子应用是完全独立的，它们可以在不同的代码仓库中进行开发和部署。父应用作为宿主，负责加载和运行子应用。子应用在被加载时，会运行在父应用的上下文中，共享一些全局的资源和状态。父应用和子应用之间可以通过通信机制进行数据的传递和交互。

微前端架构的设计使得前端开发团队可以按照业务模块划分的原则来拆分应用，实现独立开发和部署，同时保持整体系统的一致性。这种架构模式在大型应用场景中具有很好的扩展性和维护性，能够有效地提升开发效率和用户体验。

### 微前端架构中可以多少层级地嵌套子应用？

在微前端架构中，子应用可以无限制地嵌套子应用，从而形成多层级的应用结构。父应用可以引入一个或多个子应用，子应用则可以在自己的代码中重新引入其他子应用，以此类推。这种多层级的嵌套结构为前端应用的拆分和组合提供了极大的灵活性。

多层级的嵌套结构可以根据实际业务需求进行设计和划分。例如，一个电商平台的父应用可以引入多个子应用，每个子应用代表不同的业务模块，如商品管理、订单管理、用户管理等。而在订单管理子应用中，又可以继续引入其他子应用，如支付子应用、物流子应用等。

通过多层级的嵌套结构，前端团队可以将不同的业务模块划分为独立的子应用，实现模块的解耦和独立开发。这种方式可以提高团队的协作效率和项目的可维护性，同时也能够提供更好的用户体验。

### 微前端架构中父应用和子应用是如何通信的？

在微前端架构中，父应用和子应用之间可以通过不同的通信机制进行数据的传递和交互。常用的通信方式包括传统的浏览器事件、全局状态管理、跨应用消息总线等。

1. 浏览器事件：父应用和子应用可以使用浏览器原生的事件机制进行通信。父应用可以监听子应用内部触发的事件，子应用可以通过触发自定义事件的方式与父应用进行通信。

2. 全局状态管理：父应用和子应用可以使用共享的全局状态进行通信。常见的全局状态管理工具有 Redux、Vuex 等。父应用和子应用可以通过订阅和发布的方式实现对共享状态的读取和更新。

3. 跨应用消息总线：父应用和子应用可以使用消息总线来进行跨应用的通信。消息总线可以是一个独立的服务，也可以是部署在父应用中的消息代理。父应用和子应用通过订阅和发布消息的方式进行通信，实现数据的传递和交互。

通过以上通信机制，父应用和子应用可以实现灵活的数据传递和交互，从而实现整体系统的协同工作和一致性。这种通信方式能够适应不同场景和需求，为前端应用的拆分和组合提供了很大的自由度。

### 什么是微应用？

微应用是指可以作为子应用被其他应用引入的应用。它以独立的模块形式存在，具备自己的路由、状态、样式等特点。微应用的开发和部署可以独立于父应用，实现了应用的解耦和复用。

### 微应用在微前端架构中扮演什么角色？

在微前端架构中，微应用可以是一个功能模块、一个页面、一个组件，甚至是一个小的插件。它可以被多个父应用引入和复用，提供了更大的灵活性和可扩展性。微应用的存在使得开发团队可以更加细分和模块化地进行开发，实现了业务逻辑的独立和解耦。

### 微应用与父应用之间如何进行通信？

微应用与父应用之间可以通过一些通信机制进行数据的传输和状态的同步。常见的通信方式包括使用事件总线、通过 URL 参数传递数据、使用共享状态管理工具等。通过这些通信机制，微应用可以与父应用进行信息的交互，实现数据共享和状态同步的功能。

### Umi 配置文件如何注册插件子应用？

要在 Umi 配置文件中注册插件子应用，需要以下几个步骤：

1. 打开父应用的 Umi 配置文件（一般为 `.umirc.ts`）。
2. 在配置文件中找到 `qiankun` 对象，如果不存在则添加一个空对象。
3. 在 `qiankun` 对象中，找到 `master` 对象，如果不存在则添加一个空对象。
4. 在 `master` 对象中，找到 `apps` 数组，如果不存在则创建一个空数组。
5. 在 `apps` 数组中，添加子应用的配置对象。
  - 在子应用的配置对象中，设置 `name` 属性为子应用的名称，用于引入子应用时使用。
  - 在子应用的配置对象中，设置 `entry` 属性为子应用运行的 HTTP 地址。

以下是一个示例的 Umi 配置文件，用于注册两个插件子应用 `app1` 和 `app2`：

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

通过以上配置，父应用就可以在运行时动态加载和卸载这些子应用，实现插件化的效果。

### 如何设置插件子应用的名称和入口？

要设置插件子应用的名称和入口，在注册子应用时需要做以下配置：

1. 在父应用的 Umi 配置文件中找到 `apps` 数组。
2. 在 `apps` 数组中添加子应用的配置对象。
  - 在子应用的配置对象中，将 `name` 属性设置为子应用的名称。
  - 在子应用的配置对象中，将 `entry` 属性设置为子应用运行的 HTTP 地址。

举个例子，以下是注册两个插件子应用 `app1` 和 `app2` 的示例配置：

```ts
{
  name: 'app1',
  entry: '//localhost:7001',
},
{
  name: 'app2',
  entry: '//localhost:7002',
}
```

在这个示例中，`app1` 子应用的名称为 `'app1'`，入口为 `//localhost:7001`；`app2` 子应用的名称为 `'app2'`，入口为 `//localhost:7002`。

通过以上配置，父应用就可以根据子应用的名称和入口来加载和卸载不同的插件子应用。

### 如何在父应用中注册子应用？

要在父应用中注册子应用，需要进行以下几个步骤：

1. 修改父应用的 Umi 配置文件（`.umirc.ts`），在 `qiankun` 配置项中添加 `master` 字段：

```ts
// .umirc.ts
export default {
  qiankun: {
    master: {},
  },
};
```

2. 在父应用的 `src/app.ts` 文件中，导出 `qiankun` 对象，并添加子应用的配置信息：

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

确保将 `name` 字段设置为子应用的名称，并将 `entry` 字段设置为子应用的入口地址。

以上配置完成后，父应用在启动时会自动注册配置的子应用，并将它们渲染到指定的 DOM 节点中。

通过运行时注册子应用，可以实现微前端架构，将多个独立的应用通过集成在一个父应用中进行管理和渲染，从而实现多个应用的协同工作。

### 如何安装和配置 qiankun 插件？

假设您的子应用项目基于 Umi 开发且引入了 qiankun 插件。如果没有，请按照以下步骤进行配置：

1. 打开子应用的 Umi 配置文件 `.umirc.ts`。

2. 在文件中添加以下内容：

   ```ts
   export default {
     qiankun: {
       slave: {},
     },
   };
   ```

   这样，qiankun 插件会自动在项目中创建好 Qiankun 子应用所需的生命周期钩子和方法。

3. 根据以上步骤对您的子应用进行配置。

### 子应用基于 Umi 开发，怎样引入 qiankun 插件？

如果您的子应用是基于 Umi 开发的，可以按照以下步骤引入 qiankun 插件：

1. 在子应用的 Umi 配置文件 `.umirc.ts` 中添加如下配置：

   ```ts
   export default {
     qiankun: {
       slave: {},
     },
   };
   ```

   这样，qiankun 插件会自动在项目中创建好 Qiankun 子应用所需的生命周期钩子和方法。

2. 根据以上步骤对您的子应用进行配置。

### qiankun 插件会自动在项目中创建哪些生命周期钩子和方法？

通过添加 qiankun 插件的配置，它会自动在项目中创建以下生命周期钩子和方法，以支持 Qiankun 子应用的运行：

1. `bootstrap`：子应用的启动函数。

2. `mount`：子应用的挂载函数。

3. `unmount`：子应用的卸载函数。

4. `update`：子应用的更新函数。

通过这些生命周期钩子和方法，qiankun 插件能够管理子应用的启动、挂载、卸载和更新等过程。

#### 如何手动配置路由绑定引入子应用?
手动配置路由绑定引入子应用需要在`.umirc.ts`文件的`routes`项中进行配置。在需要绑定子应用的路由上，添加`microApp`字段，并设置为对应的子应用名称。例如，如果想要在`/app1/project`路由中加载子应用`app1`，可以进行如下配置：

```ts
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
            {
              path: '/project/*',
              microApp: 'app1',
            },
          ],
        },
      ],
    },
  ],
};
```

配置好后，子应用的路由`base`会在运行时被设置为主应用中配置的`path`。例如，上述配置中，将子应用`app1`的关联路径设置为`/app1/project`，当在父应用中访问`/user`页面时，浏览器的URL需要是`base + /user`，即`/app1/project/user`路径，否则子应用无法匹配到正确的路由而渲染空白或404页面。

关于拓展后的Umi路由对象API的更多信息可以在[Umi文档](https://umijs.org/docs/routing#route)中找到。


#### 什么情况下需要手动配置路由绑定引入子应用?
手动配置路由绑定引入子应用通常在以下情况下使用：

- 子应用包含完整的路由切换逻辑。
- 父子应用之间的路由相互关联。

在这些情况下，通过配置父应用的路由，并设置子应用的路由路径和关联的子应用名称，可以实现在指定的父应用路由下加载对应的子应用。

#### 如何配置`.umirc.ts`文件中的`routes`项来绑定子应用的路由?
要配置`.umirc.ts`文件中的`routes`项来绑定子应用的路由，可以按照以下步骤进行配置：

1. 打开`.umirc.ts`文件。

2. 在`routes`数组中添加父应用的路由配置对象。

   ```ts
   routes: [
     {
       path: '/',
       component: '@/layouts/index.tsx',
       // 子路由配置在这里
     },
     // 其他路由配置项...
   ]
   ```

3. 在父应用的路由配置对象中添加子应用的路由配置。

   ```ts
   routes: [
     {
       path: '/',
       component: '@/layouts/index.tsx',
       routes: [
         {
           path: '/app1',
           component: '@/layouts/app-layout.tsx',
           // 子应用app1的路由配置在这里
         },
         // 其他路由配置项...
       ],
     },
   ],
   ```

4. 在子应用的路由配置中，使用`microApp`字段来关联子应用。

   ```ts
   routes: [
     {
       path: '/app1',
       component: '@/layouts/app-layout.tsx',
       routes: [
         {
           path: '/project/*',
           microApp: 'app1',
         },
         // 其他子路由配置项...
       ],
     },
   ],
   ```

   在上述示例中，配置了父应用的根路由为`/`，组件为`@/layouts/index.tsx`。在父应用的根路由下，配置了子应用`app1`的路由`/app1`，并将子应用的关联路径设置为`/project/*`，同时将子应用的名称设置为`app1`。

5. 根据需求进行添加其他路由配置项。

完成以上配置后，运行时会根据路由配置自动加载对应的子应用，并实现父子应用之间的路由切换。请确保配置的路由路径和关联路径符合预期，以便正确加载和切换子应用。

### 通过 `<MicroApp />` 组件引入子应用的使用场景是什么？

通过 `<MicroApp />` 组件加载（或卸载）子应用的场景包括：

- 子应用包含完整的路由切换逻辑时。
- 父子应用路由相互关联时。

### 如何通过 `<MicroApp />` 组件引入子应用？

要在父应用的某个页面中引入子应用 `app1`，可以按照以下步骤进行操作：

1. 在页面中引入 `MicroApp` 组件：

   ```tsx
   import { MicroApp } from 'umi';
   ```

2. 在页面中使用 `MicroApp` 组件引入子应用 `app1`：

   ```tsx
   export default function Page() {
     return <MicroApp name="app1" />;
   }
   ```

### 在使用 `<MicroApp />` 组件引入子应用时，父子应用的路由如何对应？

使用 `<MicroApp />` 组件引入子应用时，父子应用的路由将一一对应。例如，当父应用的路由为 `/some/page` 时，子应用的路由同样为 `/some/page`。切换子应用的路由时，父应用将同步切换。

### 如何确保父子应用的路由正确对应？

如果父应用的路由包含前缀，可以通过配置 `base` 属性来保证父子应用的路由正确对应。例如，如果父应用的路由为 `/prefix/router-path/some/page`，而希望子应用的路由为 `/some/page`，可以修改代码如下：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" base="/prefix/router-path" />;
}
```

以上是通过 `<MicroApp />` 组件引入子应用的相关信息，希望对你有所帮助！如果还有其他问题，请随时提问。

### 如何使用&lt;MicroAppWithMemoHistory /&gt;组件引入子应用？

通过&lt;MicroAppWithMemoHistory /&gt;组件，可以加载或卸载子应用，并且子应用的路由在父应用的路由变化时保持不变。这个组件适用于两种情况：

1. 当只需要使用子应用的指定路由时。
2. 当父子应用的路由需要相互独立。

要使用&lt;MicroAppWithMemoHistory /&gt;组件引入子应用，需要提供子应用的路由 url 属性。以下是一个示例代码：

```tsx
import { MicroAppWithMemoHistory } from 'umi';

export default function Page() {
  return <MicroAppWithMemoHistory name="app2" url="/some/page" />;
}
```

通过以上代码，我们可以在父应用的页面中引入名为 app2 的子应用，并指定子应用的路由为/some/page。

### &lt;MicroAppWithMemoHistory /&gt;组件的作用是什么？

&lt;MicroAppWithMemoHistory /&gt;组件用于引入子应用，并且子应用的路由在父应用的路由变化时保持不变。它有以下两个主要的应用场景：

1. 当只需要使用子应用的指定路由时。
2. 当父子应用的路由需要相互独立。

要使用&lt;MicroAppWithMemoHistory /&gt;组件，需要提供子应用的路由 url 属性。

### 如何在父应用的组件中使用&lt;MicroAppWithMemoHistory /&gt;组件引入子应用？

要在父应用的组件中使用&lt;MicroAppWithMemoHistory /&gt;组件引入子应用，需要在组件内部使用该组件并指定子应用的名称和路由。以下是一个示例代码：

```tsx
import { MicroAppWithMemoHistory } from 'umi';

export default function Page() {
  return <MicroAppWithMemoHistory name="app2" url="/some/page" />;
}
```

通过以上代码，可以在父应用的页面中引入名为 app2 的子应用，并指定子应用的路由为/some/page。

#### 如何在子应用中跳转到另一个子应用的页面？

如果子应用通过路由绑定的方式引入，在其它子应用的内部，可以使用 `<MicroAppLink />` 组件来跳转到对应的路由。

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

#### 如何从子应用中跳转回到父应用的页面？

如果需要从 `app2` 跳转回 `app1`，可以在 `app2` 中的页面中使用 `<MicroAppLink />` 组件实现。例如：

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

#### 如何在子应用之间进行页面跳转？

如果有多个子应用，可以通过调用 `<MicroAppLink />` 组件的 `go` 方法进行页面跳转。例如：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  function handleClick() {
    MicroAppLink.go('app2', '/home');
  }

  return (
    <>
      <Button onClick={handleClick}>Go to app2</Button>
    </>
  );
}
```

在上述代码中，当点击按钮后，当前子应用会跳转到 `app2` 的内部页面 `/home`。

以上就是在子应用中跳转页面的方法。希望对你有帮助！

#### 如何在子应用中跳转到父应用的指定路由？

如果需要在子应用中直接跳转到父应用的指定路由，你可以使用 `<MicroAppLink />` 组件，并将 `isMaster` 属性设置为 `true`。以下是一个示例：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink isMaster to="/table">
        <Button>跳转到父应用</Button>
      </MicroAppLink>
    </>
  );
}
```

在上述示例中，当点击按钮时，父应用的路由会变为 `/table`。通过这个方法，你可以实现子应用直接跳转到父应用的指定路由。

#### 怎样跳转到父应用中的特定路由？

如果你想要在子应用中跳转到父应用的特定路由，可以使用 `<MicroAppLink />` 组件，并将 `isMaster` 属性设置为 `true`。以下是一个示例：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink isMaster to="/table">
        <Button>转到主应用</Button>
      </MicroAppLink>
    </>
  );
}
```

在上面的例子中，当点击按钮后，会跳转到父应用的 `/table` 路由。使用这个方法，你可以从子应用中跳转到父应用的特定路由。

#### 如何从子应用跳转到父应用的指定路由？

要在子应用中跳转到父应用的指定路由，你可以使用 `<MicroAppLink />` 组件，并设置 `isMaster` 属性为 `true`。以下是一个示例：

```tsx
import { MicroAppLink } from 'umi';

export default function Page() {
  return (
    <>
      <MicroAppLink isMaster to="/table">
        <Button>转到主应用</Button>
      </MicroAppLink>
    </>
  );
}
```

在上述示例中，当点击按钮后，父应用的路由会变为 `/table`。通过以上步骤，你可以在子应用之间进行页面跳转，并在需要的情况下跳转到父应用的指定路由。

### Q1: Qiankun 支持哪些生命周期钩子？

A1: Qiankun 支持以下生命周期钩子：

1. `beforeLoad`
2. `load`
3. `bootstrap`
4. `beforeMount`
5. `mount`
6. `afterMount`
7. `beforeUnmount`
8. `unmount`
9. `afterUnmount`
10. `unload`

除了上述生命周期钩子，还有一个特殊的生命周期钩子 `update`，该钩子仅在使用 `<MicroApp />` 或 `<MicroAppWithMemoHistory />` 组件引入微应用时生效。详细信息可参考文档所示。

### Q2: Qiankun 中的 `load` 生命周期钩子是用于什么的？

A2: `load` 生命周期钩子是在微应用获取资源完成后调用的钩子，用于加载微应用的资源。在该钩子中，微应用的状态会从 `NOT_LOADED` 变为 `LOADING_SOURCE_CODE`。若资源获取成功，则状态会变为 `NOT_BOOTSTRAPPED`，若资源获取失败，则状态会变为 `LOAD_ERROR`。更多相关信息可以查阅文档中的链接。

### Q3: 如何手动触发 Qiankun 中的 `update` 生命周期钩子？

A3: 需要使用 `<MicroApp />` 或 `<MicroAppWithMemoHistory />` 组件引入微应用时才能触发 `update` 生命周期钩子。当状态为 `MOUNTED` 的微应用需要手动刷新时，可以调用微应用实例的 `update` 方法来触发。具体示例可以参考上述文档中提供的代码片段。更新开始时，微应用的状态会变为 `UPDATING`，更新完成后，状态会变为 `MOUNTED`。

当需要在子应用的生命周期中添加自定义逻辑时，可以在父应用中进行全局配置或在子应用中进行单独配置。详细信息请查阅文档。

### 如何在父应用中配置生命周期钩子？

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

### 如何在父应用中使用 afterMount 生命周期钩子？

在父应用的 `src/app.ts` 文件中，可以通过导入 `qiankun` 对象并使用 `lifeCycles` 属性来配置 `afterMount` 生命周期钩子。

以下是一个示例代码：

```ts
// src/app.ts
import { qiankun } from './qiankun';

qiankun.lifeCycles = {
  async afterMount(props) {
    console.log(props);
  },
};
```

在以上示例中，可以根据需要定义 `afterMount` 函数的具体实现，然后在子应用挂载完成后进行调用。这样可以在父应用中处理子应用挂载后的逻辑和数据。

### 如何在父应用中定义其他的生命周期钩子？

在父应用的 `src/app.ts` 文件中，可以通过导入 `qiankun` 对象并使用 `lifeCycles` 属性来配置其他的生命周期钩子。

以下是一个示例代码：

```ts
// src/app.ts
import { qiankun } from './qiankun';

qiankun.lifeCycles = {
  async afterUnmount(props) {
    console.log(props);
  },
};
```

在以上示例中，可以根据需要定义其他生命周期钩子的具体实现，然后在相应的生命周期阶段进行调用。这样可以在父应用中对子应用的生命周期进行管理和处理。

##### Bootstrap 钩子在 qiankun 子应用中的作用是什么？

在 qiankun 子应用中，`bootstrap` 钩子在子应用加载之前触发，用于进行一些初始化操作。该钩子可以接收一个 `props` 参数，用于接收主应用传递过来的数据。在此示例代码中，子应用会在 `bootstrap` 钩子中打印 `props` 参数。

##### `bootstrap` 钩子在 qiankun 子应用中的使用示例是什么？

在子应用的 `src/app.ts` 文件中，定义了 `bootstrap` 钩子的实现。在该示例代码中，子应用通过导出一个名为 `qiankun` 的对象，其中包含一个 `async bootstrap(props)` 的方法。该方法会在子应用加载之前被触发，将会在浏览器的控制台中打印出 `'app1 bootstrap', props` 字符串信息。

##### 如何在 qiankun 子应用中使用 `bootstrap` 钩子？

要在 qiankun 子应用中使用 `bootstrap` 钩子，需遵循以下步骤：
1. 在子应用的 `src/app.ts` 文件中，导出一个名为 `qiankun` 的对象。
2. 在 `qiankun` 对象中定义一个名为 `bootstrap` 的方法，方法需要使用 `async` 关键字标记。
3. 在 `bootstrap` 方法的参数中，接收一个名为 `props` 的参数，用于接收主应用传递过来的数据。
4. 在 `bootstrap` 方法的实现中，进行子应用的初始化操作，例如打印出接收到的 `props` 参数值。

以上就是在 qiankun 子应用中使用 `bootstrap` 钩子的基本流程和示例代码。

### mount 钩子是什么？
`mount` 钩子是在子应用渲染之前触发的钩子函数。它通常用于子应用的启动过程，可以在该钩子函数中进行一些初始化操作。此钩子函数接收一个 `props` 参数，用于接收主应用传递过来的数据。

示例代码：
```ts
// src/app.ts
export const qiankun = {
  async mount(props) {
    console.log('app1 mount', props);
  },
};
```

在这个示例代码中，`mount` 钩子被定义在 `src/app.ts` 文件中的 `qiankun` 对象中。当子应用启动时，会执行 `mount` 钩子函数，并输出 `app1 mount` 和传递的 `props` 参数。
  
### `mount` 钩子的作用是什么？
`mount` 钩子的主要作用是在子应用渲染之前进行一些初始化操作。它常用于子应用的启动过程，例如加载一些依赖、初始化一些配置等。在 `mount` 钩子中，可以通过传入的 `props` 参数接收主应用传递过来的数据。

示例代码：
```ts
// src/app.ts
export const qiankun = {
  async mount(props) {
    console.log('app1 mount', props);
  },
};
```

在这个示例中，`mount` 钩子被定义在 `src/app.ts` 文件中的 `qiankun` 对象中。当子应用启动时，会执行 `mount` 钩子函数，并输出 `app1 mount` 和传递的 `props` 参数。

### 如何使用 `mount` 钩子？
使用 `mount` 钩子需要在子应用的代码中定义一个 `qiankun` 对象，并在该对象中定义 `mount` 钩子函数。这个钩子函数会在子应用渲染之前被触发，可以在这个函数中进行一些初始化操作。

示例代码：
```ts
// src/app.ts
export const qiankun = {
  async mount(props) {
    console.log('app1 mount', props);
  },
};
```

在这个示例中，`mount` 钩子函数被定义在 `src/app.ts` 文件中的 `qiankun` 对象中。当子应用启动时，会执行 `mount` 钩子函数，并输出 `app1 mount` 和传递的 `props` 参数。

### unmount 钩子是用来做什么的？
`unmount` 钩子在子应用卸载之后触发，用于销毁子应用的资源。你可以在这个钩子中执行一些清理工作，比如释放事件监听器、取消网络请求等。这样可以确保在子应用被卸载时，相关资源都可以被正确地释放，避免内存泄漏或其他问题的发生。

### `props` 参数是如何传递给 `unmount` 钩子的？
在 `unmount` 钩子中，可以接收一个 `props` 参数，用于接收主应用传递过来的数据。这些数据可以是一些设置、配置或者其他需要传递给子应用的信息。你可以在 `unmount` 钩子中使用这些数据来执行一些额外的清理逻辑，或者根据这些数据来动态地销毁子应用的资源。

### 如何在子应用中配置 `unmount` 钩子？
要在子应用中配置 `unmount` 钩子，你需要在子应用的入口文件（比如 `app.ts`）中使用 `export const qiankun = { ... }` 的方式导出一个对象。在这个对象中，可以定义一个名为 `unmount` 的异步函数，函数的参数为 `props`。在函数体内，你可以编写具体的逻辑来处理子应用卸载时的清理工作。例如，在 `unmount` 钩子中可以使用 `console.log` 打印一些调试信息。

以上就是使用 `unmount` 钩子的基本介绍和使用方法。通过在子应用中配置 `unmount` 钩子，你可以在子应用卸载时执行一些必要的清理工作，确保子应用的资源被正确释放。

### 什么是基于 `useModel()` 的通信？

基于 `useModel()` 的通信是一种在子应用中使用数据流插件进行通信的方式。它可以让我们在任意组件中访问全局数据，并且可以方便地获取和更改全局数据的状态。使用基于 `useModel()` 的通信可以实现子应用之间的数据共享和通信。

### 如何在子应用中使用基于 `useModel()` 的通信？

要使用基于 `useModel()` 的通信，需要在子应用的组件中引入 `useModel()` 钩子函数，并传入需要访问的全局数据的名称。然后可以根据需要获取和更改全局数据的状态。在使用 `useModel()` 钩子函数访问全局数据之前，需要先在 `app.ts` 文件中配置数据模型，定义全局数据的结构和初始值。

### 基于 `useModel()` 的通信有哪些特点？

基于 `useModel()` 的通信具有以下特点：
- 使用 `useModel()` 钩子函数可以在任意组件中访问全局数据。
- 使用 `useModel()` 钩子函数可以访问和更改全局数据的状态。
- 全局数据的状态改变会自动触发订阅该数据的组件重新渲染。

使用基于 `useModel()` 的通信可以方便地实现子应用之间的数据共享和通信，提高开发效率。

### 如何在父应用中向子应用透传数据？

如果通过路由的模式引入子应用，则需要在父应用的 `src/app.ts` 文件中导出一个名为 `useQiankunStateForSlave()` 的函数。子应用会从`window.g_root`中拿到这个函数，并在子应用调用父应用传递的`useQiankunStateForSlave()`函数时获取到全局状态。

如果通过组件的模式引入子应用，直接将数据以组件参数的形式传递给子应用即可。

以上是在 Umi 中的使用方式。对于其他前端框架，可以根据具体的使用方式进行相应的调整。

---

### 在父应用中使用 `useQiankunStateForSlave()` 函数的目的是什么？

通过在父应用中使用 `useQiankunStateForSlave()` 函数，可以向子应用透传全局状态和修改全局状态的方法。子应用可以从`window.g_root`中获取到这个函数，并且调用该函数来获取全局状态。

这种方式适用于通过路由的模式引入子应用的场景。对于其他引入子应用的方式，可以根据具体的情况进行调整。

---

### 在组件模式中，如何向子应用传递数据？

在组件模式中，可以直接将数据以组件参数的形式传递给子应用。子应用可以通过 props 接收数据，并在组件中使用。

这种方式适用于通过组件的模式引入子应用的场景。对于其他引入子应用的方式，可以根据具体的情况进行调整。

### 如何在父应用的 `src/app.ts` 文件中使用 `useQiankunStateForSlave()` 函数？

在父应用的 `src/app.ts` 文件中，可以按照以下步骤来使用 `useQiankunStateForSlave()` 函数：

1. 首先，导入 `useQiankunStateForSlave` 函数和 `useState` 方法：

   ```typescript
   // src/app.ts
   import { useState } from 'react';
   import { useQiankunStateForSlave } from './useQiankunStateForSlave';
   ```

2. 接下来，在 `src/app.ts` 文件中，可以直接调用 `useQiankunStateForSlave` 函数，并使用 `useState()` 方法初始化全局状态：

   ```typescript
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

3. 最后，将全局状态和修改全局状态的方法返回给子应用使用。

以上就是在父应用的 `src/app.ts` 文件中使用 `useQiankunStateForSlave()` 函数的步骤。通过调用该函数，并使用 `useState()` 方法初始化全局状态，即可在父应用中定义并管理全局状态，然后将其传递给子应用使用。

### 如何在父应用的组件中向子应用透传数据？

在父应用的组件中，可以通过以下方式向子应用透传数据：

1. 首先，使用 `useState` 方法初始化全局状态，并将全局状态以参数的形式传递给子应用。

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

2. 在父应用的 JSX 中，将子应用的名称（name）、全局状态（globalState）和修改全局状态的方法（setGlobalState）作为参数传递给 `<MicroApp>` 组件。

通过以上方式，父应用和子应用之间就可以共享全局状态数据，并可以在父应用中修改全局状态，同时更新到子应用中。

需要注意的是，以上示例是基于 Umi 框架的用法。对于其他前端框架，可以根据具体的使用方式进行相应的调整。

### What is `useModel()` in the `umi` library?
`useModel()` is a hook provided by the `umi` library. It allows a sub-application to retrieve and consume data passed from the parent application. This hook can be used in any component of the sub-application. 

### How can `useModel()` be used in a component?
To use `useModel()` in a component, you need to import it from the `umi` library. Then, you can call the hook inside the component. Pass the namespace `@@qiankunStateFromMaster` as an argument to the hook. This namespace represents the global model generated by the sub-application. Here is an example of how to use `useModel()`:

```tsx
import { useModel } from 'umi';

export default function Page() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  return <div>{JSON.stringify(masterProps)}</div>;
}
```

In the above example, the `useModel()` hook is used to access and display the `masterProps` data received from the parent application. The `masterProps` data is converted to a JSON string using `JSON.stringify()` and displayed within a `<div>` element. 

### What is the purpose of the `@@qiankunStateFromMaster` namespace in `useModel()`?
The `@@qiankunStateFromMaster` namespace in the `useModel()` hook represents the global model generated by the sub-application. It allows the sub-application to access and consume data passed from the parent application. By using this namespace, the sub-application can retrieve the necessary data and perform any required actions based on that data.

### 如何使用 `connectMaster()` 方法？

`connectMater()` 是 `umi` 库提供的一个高阶方法，它允许子应用从父应用中获取和使用传递的数据。子应用可以使用这个方法来包装组件并访问从父应用传递的props。以下是如何使用 `connectMaster()` 方法的示例代码：

```tsx
import { connectMaster } from 'umi';

function MyPage(props) {
  return <div>{JSON.stringify(props)}</div>;
}

export default connectMaster(MyPage);
```

### `connectMaster()` 方法是由哪个库提供的？

`connectMaster()` 方法是由 `umi` 库提供的。它是一个高阶方法，用于在子应用中获取和使用从父应用传递的数据。

### `connectMaster()` 方法的作用是什么？

`connectMaster()` 方法的作用是使子应用能够从父应用中获取和使用传递的数据。它可以用来包装组件，以便子应用可以访问从父应用传递的props。通过使用 `connectMaster()` 方法，子应用可以实现与父应用的数据交互和共享。

### 什么是 `setLoading` 方法？

当父应用程序使用 `<MicroApp />` 或 `<MicroAppWithMemoHistory />` 组件导入子应用程序时，它会将一个 `setLoading()` 方法传递给子应用程序。这个方法允许子应用程序在适当的时机标记其加载状态为完成。以下是如何使用 `setLoading()` 方法的示例：

```tsx
const masterProps = useModel('@@qiankunStateFromMaster');
masterProps.setLoading(false);

// 或者
function MyPage(props) {
  props.setLoading(false);
}
connectMaster(MyPage);
```

当子应用程序被挂载并达到 `MOUNTED` 状态时，它会自动被标记为完成。

### 如何使用 `setLoading` 方法来标记加载状态为完成？

要使用 `setLoading()` 方法将加载状态标记为完成，您可以按以下步骤进行操作：

1. 导入子应用程序的父应用程序文件。

2. 在合适的时机调用 `setLoading(false)` 方法。您可以通过 `useModel('@@qiankunStateFromMaster')` 获取 `masterProps` 并调用 `setLoading(false)` 方法，或者通过 `connectMaster` 包装组件并在组件中调用 `props.setLoading(false)`。

3. 当子应用程序被挂载并达到 `MOUNTED` 状态时，它会自动被标记为完成。

### 为什么需要使用 `setLoading` 方法来标记加载状态为完成？

使用 `setLoading()` 方法标记加载状态为完成的主要目的是在子应用程序加载完成后通知父应用程序。这样，父应用程序就可以在子应用程序加载完成后执行任何进一步的操作或显示对应的内容。标记加载状态为完成的过程可以确保父应用程序在子应用程序完全加载后获取到正确的状态，并且可以及时更新界面。

### 父应用如何传递数据给子应用？

在使用 qiankun 注册子应用时，可以通过 props 属性传递数据给子应用。例如，在父应用的 src/app.ts 文件中，可以修改 qiankun 导出方法如下：

```ts
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

在上述代码中，我们通过 props 属性传递了 accountOnClick、accountName 和 accountAge 三个数据给子应用。

### 子应用如何获取传递过来的数据？

在子应用的生命周期钩子中，可以获取并消费父应用传递过来的数据。根据实际需求实现对应的生命周期钩子即可。

通过上述父应用的配置代码，我们可以在子应用中获取到 accountOnClick、accountName 和 accountAge 这三个数据，并进行相应的操作和使用。

注意，上述示例中的代码是针对 qiankun 框架来说明的，如果你使用的是其他框架或工具，可能会有差异，具体请参考相应的文档或资料。

### 子应用加载动画的使用方法

问：如何启用子应用加载动画？
答：可以为子应用提供一个样式类 `wrapperClassName`，用于渲染子应用加载时的效果。

问：如何将加载动画应用到子应用中？
答：可以使用以下代码片段：
```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <MicroAppLoader loading={loading} />
  <MicroApp className={className} />
</div>
```

问：`wrapperClassName` 是什么？
答：`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。

问：加载动画的逻辑在哪里实现？
答：加载动画的逻辑在 `MicroAppLoader` 组件中实现。

问：加载动画的显示与隐藏逻辑应该在哪里控制？
答：加载动画的显示与隐藏逻辑需要在父应用中进行控制，即通过控制 `loading` 状态来显示或隐藏加载动画。

### 子应用错误捕获能力有什么作用？

启用子应用错误捕获能力可以提供一个样式类 `wrapperClassName`，用于在子应用出现错误时渲染错误效果。

### 如何将错误捕获能力应用到子应用？

将以下代码片段添加到子应用中：

```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <ErrorBoundary error={e} />
  <MicroApp className={className} />
</div>
```

其中，`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。错误捕获的逻辑实现在 `ErrorBoundary` 组件中。

### 如何传递和处理子应用的错误信息？

在父应用中需要传递和处理子应用的错误信息（由变量 `e` 表示），以展示正确的错误页面或信息。

### 子应用自定义样式的使用方法

当启用子应用自定义样式时，可以通过为子应用提供一个样式类 `wrapperClassName` 来应用自定义样式。

例如，在以下代码片段中，我们可以使用 `wrapperClassName` 类名来包裹子应用，并应用自定义样式：

```tsx
<div style={{ position: 'relative' }} className={wrapperClassName}>
  <MicroApp className={className} />
</div>
```

在上面的代码中，`wrapperClassName` 是用于包裹子应用的 `<div>` 标签的类名。通过在父应用中定义并传递给子应用，子应用可以正确地应用这些自定义样式。

请注意，自定义样式的逻辑实现在 `MicroApp` 组件中。

### 如何使用子应用自定义样式？

要使用子应用的自定义样式，可以按照以下步骤操作：

1. 在父应用中定义一个样式类，例如 `wrapperClassName`。

2. 将该样式类传递给子应用，作为子应用组件的 `wrapperClassName` 属性。

3. 在子应用中，使用该样式类来包裹相应的元素。

4. 子应用将会应用所传递的自定义样式。

请确保在父应用和子应用中都正确定义和传递相应的样式类，以便子应用能够正确地应用自定义样式。

### 什么是子应用自定义样式？

子应用自定义样式是一种在父应用中定义并传递给子应用的样式。通过使用自定义样式，可以改变子应用的外观和表现。

在子应用中，通过接收并应用父应用传递的自定义样式，可以实现个性化的界面效果。

为了使用子应用自定义样式，需要在父应用中定义相应的样式类，并将其传递给子应用。子应用将使用传递的样式类来包裹相应的元素，并应用所传递的自定义样式。

使用子应用自定义样式可以提供更灵活的界面定制功能，以满足不同用户和场景的需求。

### 如何使用基于 antd 的加载动画？

在使用基于 antd 的组件库时，可以通过设置 `autoSetLoading` 属性来开启子应用的加载动画。该属性会自动调用 antd 的 `<Spin />` 组件作为加载组件。具体的配置方式取决于你是通过路由方式还是组件方式引入子应用。

如果是通过路由方式引入子应用，可以按照以下配置进行设置：

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

如果是通过组件方式引入子应用，只需要将 `autoSetLoading` 作为参数传入即可：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" autoSetLoading />;
}
```

这样就可以在子应用加载时显示 antd 的加载动画了。

### 如何配置 Ant Design 5.x 的 CSS 变量模式？

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。通过 CSS 变量模式，Ant Design 将所有 Design Token 纳入了 CSS 变量的管理范畴，使得不同主题下的样式可以共享，减少样式体积，并提升主题切换的性能。

要使用 Ant Design 5.x 的 CSS 变量模式，你需要进行相应的配置。具体的配置方式请查阅 Ant Design 的官方文档或相关文档资源，以了解如何启用 CSS 变量模式以及如何配置主题。

### 为什么推荐开启 Ant Design 5.x 的 CSS 变量模式？

Ant Design 5.x 的 CSS 变量模式带来了以下好处：

1. 样式共享：通过 CSS 变量模式，不同主题下的样式可以共享，大大减少样式体积。
2. 性能提升：切换主题时不再需要重新序列化样式，提升了主题切换的性能。

因此，如果你的应用依赖 Ant Design 的主题能力，强烈推荐开启 CSS 变量模式以享受以上优势。

### antd 的 `<Spin />` 组件如何作为加载组件使用？

如果你想要在使用 antd 作为项目组件库时，将 `<Spin />` 组件作为加载组件，可以通过 `autoSetLoading` 属性来实现。启用 `autoSetLoading` 属性后，插件会自动调用 antd 的 `<Spin />` 组件来展示加载动画。

**方法一：通过路由引入子应用**

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

**方法二：通过组件引入子应用**

如果是通过组件的方式引入子应用，直接将 `autoSetLoading` 作为参数传入即可：

```tsx
import { MicroApp } from 'umi';

export default function Page() {
  return <MicroApp name="app1" autoSetLoading />;
}
```

这样就可以在子应用加载时展示 antd 的 `<Spin />` 组件作为加载动画了。

### antd 的 `<Spin />` 组件有哪些用途？

antd 的 `<Spin />` 组件是一个加载中的提示组件，用于在数据加载或操作处理时展示加载动画，给用户一个良好的等待体验。它可以用于以下场景：

- 在页面加载或异步请求数据时，展示加载动画，提醒用户等待。
- 在执行耗时的操作时，展示加载动画，防止用户重复操作。

通过设置 `autoSetLoading` 属性，可以方便地将 antd 的 `<Spin />` 组件作为加载组件使用，提升用户体验。

### antd 的 `<Spin />` 组件如何设置加载样式？

antd 的 `<Spin />` 组件提供了多种加载样式可供选择。可以通过设置 `spinner` 属性来指定加载样式，支持的加载样式包括：

- `"default"`: 默认加载样式，即一个简单的旋转圆圈。
- `"spinner"`: 自定义加载样式，可以通过设置自定义的 SVG 或其他元素作为加载动画。

示例代码：

```tsx
import { Spin } from 'antd';

function LoadingComponent() {
  return <Spin spinner={<MySpinner />} />;
}
```

其中，`<MySpinner />` 是一个自定义的加载动画组件，可以根据实际需求进行设计和实现。

使用 antd 的 `<Spin />` 组件及其提供的加载样式，可以灵活地展示各种不同的加载动画效果，增强用户体验。

### 如何自定义加载动画？

如果您没有使用 antd 作为项目组件库，或希望覆盖默认的加载动画样式时，可以设置一个自定义的加载组件 `loader` 作为子应用的加载动画。

通过路由的模式引入的子应用，只支持在运行时配置。您需要在 `.app.tsx` 文件中进行配置，示例代码如下：

```tsx
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

通过组件的模式引入子应用，您可以将 `loader` 直接作为参数传入 `MicroApp` 组件，示例代码如下：

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

在以上示例代码中，`loading` 是一个 `boolean` 类型的参数，为 `true` 时表示子应用正在加载状态，为 `false` 时表示加载状态已结束。

如果希望多个子应用使用统一的自定义加载动画，可以通过在主应用的配置文件中设置 `defaultLoader`。示例代码如下：

```ts
// .umirc.ts
qiankun: {
  master: {
    defaultLoader: '@/defaultLoader',
  },
},
```

注意，`defaultLoader` 是一个文件路径，通常放置在 `src` 目录下。在上述示例中，我们约定将 `defaultLoader` 文件放置在 `src` 目录下。如需修改路径，请根据实际情况进行调整。

`defaultLoader` 文件的实现与上述的 `loader` 参数相同，接收一个 `loading` 参数，且 `loading` 的类型为 `boolean`。示例代码如下：

```tsx
// defaultLoader.tsx
import { Spin } from 'antd';

export default function (loading: boolean) {
  return <Spin spinning={loading} />;
}
```

需要注意的是，`loader` 的优先级高于 `defaultLoader`。

希望以上信息能够帮助您自定义加载动画。如果还有其他问题，请随时提问。

### 如何开启子应用的错误捕获能力？

当使用 antd 作为项目组件库时，可以向子应用传入 `autoCaptureError` 属性以开启子应用错误捕获能力。插件将会自动调用 antd 的 `<Result />` 组件作为错误捕获组件。

1. 如何在路由模式下配置子应用的错误捕获能力？
   - 配置文件：`.umirc.ts`
   - 在 `routes` 数组中添加子应用的配置对象
   - 在 `microAppProps` 属性中设置 `autoCaptureError: true`
   - 示例代码：
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

2. 如何在组件模式下配置子应用的错误捕获能力？
   - 在需要引入子应用的组件中，使用 `MicroApp` 组件
   - 在 `MicroApp` 组件中设置 `autoCaptureError` 属性为 `true`
   - 示例代码：
     ```tsx
     import { MicroApp } from 'umi';

     export default function Page() {
       return <MicroApp name="app1" autoCaptureError />;
     }
     ```

通过以上配置，设置了子应用的错误捕获能力后，子应用在出现错误时会自动捕获并展示错误信息。

### 如何自定义错误捕获组件？

如果你的项目没有使用 Ant Design 作为组件库，或者想要覆盖默认的错误捕获组件样式，你可以使用一个自定义的组件作为子应用的错误捕获组件。

对于通过路由模式引入的子应用，只支持在运行时配置。示例代码如下：

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

对于通过组件模式引入子应用，可以将 `errorBoundary` 作为参数传递。示例代码如下：

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

其中，`error` 参数的类型是 `Error`。

如果你希望多个子应用共用同一个自定义错误捕获组件，可以通过配置 `defaultErrorBoundary` 来实现。

在 `.umirc.ts` 中配置如下：

```ts
qiankun: {
  master: {
    defaultErrorBoundary: '@/defaultErrorBoundary',
  },
},
```

其中，`defaultErrorBoundary` 是文件路径，通常放置在 `src` 目录下。在 umi 中，`@` 表示 `src` 目录。

`defaultErrorBoundary` 的实现与上述的 `errorBoundary` 相同，接收一个 `error` 参数，类型为 `Error`。

```tsx
// defaultErrorBoundary.tsx
export default function (error: Error) {
  return <div>{error?.message}</div>;
}
```

需要注意的是，`errorBoundary` 的优先级高于 `defaultErrorBoundary`。

### 如何配置自定义错误捕获组件的默认组件？

如果你希望多个子应用共用同一个自定义错误捕获组件，可以通过配置 `defaultErrorBoundary` 来实现。

在 `.umirc.ts` 中配置如下：

```ts
qiankun: {
  master: {
    defaultErrorBoundary: '@/defaultErrorBoundary',
  },
},
```

其中，`defaultErrorBoundary` 是文件路径，通常放置在 `src` 目录下。在 umi 中，`@` 表示 `src` 目录。

`defaultErrorBoundary` 的实现与上述的 `errorBoundary` 相同，接收一个 `error` 参数，类型为 `Error`。

```tsx
// defaultErrorBoundary.tsx
export default function (error: Error) {
  return <div>{error?.message}</div>;
}
```

需要注意的是，`errorBoundary` 的优先级高于 `defaultErrorBoundary`。

### 如何在运行时配置自定义错误捕获组件？

如果你的项目没有使用 Ant Design 作为组件库，或者希望覆盖默认的错误捕获组件样式，你可以使用一个自定义的组件作为子应用的错误捕获组件。

对于通过路由模式引入的子应用，可以在运行时进行配置。示例代码如下：

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

对于通过组件模式引入子应用，可以将 `errorBoundary` 作为参数传递。示例代码如下：

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

如果你希望多个子应用共用同一个自定义错误捕获组件，可以通过配置 `defaultErrorBoundary` 来实现。

在 `.umirc.ts` 中配置如下：

```ts
qiankun: {
  master: {
    defaultErrorBoundary: '@/defaultErrorBoundary',
  },
},
```

其中，`defaultErrorBoundary` 是文件路径，通常放置在 `src` 目录下。在 umi 中，`@` 表示 `src` 目录。

`defaultErrorBoundary` 的实现与上述的 `errorBoundary` 相同，接收一个 `error` 参数，类型为 `Error`。

```tsx
// defaultErrorBoundary.tsx
export default function (error: Error) {
  return <div>{error?.message}</div>;
}
```

需要注意的是，`errorBoundary` 的优先级高于 `defaultErrorBoundary`。

### Q1: 如何启用 Qiankun 微应用插件？

**属性名称：** `enable`

**是否必填：** 否

**类型：** boolean

**默认值：** undefined

**说明：** 设置为 false 时表示不启用 Qiankun 微应用插件。

### Q2: 微应用配置是什么？

**属性名称：** `apps`

**是否必填：** 是

**类型：** `App[]`

**说明：** 微应用配置是一个数组，用于配置各个微应用的相关信息。

### Q3: 是否可以开启沙箱模式？如何开启沙箱模式？

**属性名称：** `sandbox`

**是否必填：** 否

**类型：** boolean \| { strictStyleIsolation: boolean, experimentalStyleIsolation: boolean }

**默认值：** true

**说明：** 可以开启沙箱模式，当设置为 true 时表示开启沙箱模式。沙箱模式可以提供一个隔离环境，确保微应用间的样式和逻辑不会相互干扰。也可以通过设置 `{ strictStyleIsolation: true }` 或 `{ experimentalStyleIsolation: true }` 来进一步控制样式的隔离程度。

### App 组件的属性 `name` 是必填项吗？

是的，属性 `name` 是必填项，必须提供微应用的名称。

### App 组件的属性 `entry` 是必填项吗？

是的，属性 `entry` 是必填项，必须提供微应用的 HTML 地址。

### App 组件的属性 `credentials` 的默认值是什么？

属性 `credentials` 的默认值为 `false`。

### App 组件的属性 `props` 是可选项吗？

是的，属性 `props` 是可选项，默认为空对象。父应用可以选择是否向微应用传递数据。

请注意，以上是对 App 组件的属性的基本信息说明，具体的使用方法和示例请参考相关文档或开发手册。

### Route 的属性有哪些？

Route 的属性如下：

- `path`：路由的路径，是一个字符串，必填。
- `microApp`：关联的微应用名称，是一个字符串，必填。
- `microAppProps`：微应用的配置，是一个包含 MicroAppProps 属性的对象，可选，默认为 `{}`。

### Route 的属性类型是什么？

- `path` 的类型是 `string`。
- `microApp` 的类型是 `string`。
- `microAppProps` 的类型是 `MicroAppProps`。

### Route 的默认值是什么？

- `path` 的默认值是空字符串 `""`。
- `microAppProps` 的默认值是一个空对象 `{}`。

### `autoSetLoading`属性的说明

`autoSetLoading`属性是用来控制是否自动设置微应用的加载状态的。当设置为 `true` 时，会自动设置微应用为加载中的状态，即显示加载组件；当设置为 `false` 时，需要手动控制微应用的加载状态。这个属性可以用来方便地管理微应用的加载状态，进一步提升用户体验。

### `loader`属性的说明

`loader`属性是用来定义自定义的微应用加载状态组件的。通过设置 `loader` 属性，可以指定一个自定义的组件来显示微应用的加载状态，可以根据实际需求来定制加载状态的样式和交互效果。这个属性可以帮助开发者根据项目需求来设计和呈现微应用加载时的状态。

### `autoCaptureError`属性的说明

`autoCaptureError`属性是用来控制是否自动捕获微应用的错误的。当设置为 `true` 时，会自动捕获微应用的错误，即显示错误捕获组件；当设置为 `false` 时，需要手动捕获微应用的错误。这个属性可以用来方便地管理微应用的错误捕获，进一步提升应用的稳定性和用户体验。

### `errorBoundary`属性的说明

`errorBoundary`属性是用来定义自定义的微应用错误捕获组件的。通过设置 `errorBoundary` 属性，可以指定一个自定义的组件来显示微应用发生错误时的处理方式，比如展示错误信息并提供重新加载或跳转到其他页面的选项。这个属性可以帮助开发者根据项目需求来设计和呈现微应用发生错误时的处理方式。

### `className`属性的说明

`className`属性是用来设置微应用的样式类的。通过设置 `className`，可以为微应用添加自定义的样式，从而实现样式的定制化。开发者可以根据需求在样式表中定义相应的样式类，并通过 `className` 属性将其应用到微应用上。

### `wrapperClassName`属性的说明

`wrapperClassName`属性是用来设置包裹微应用加载组件、错误捕获组件和微应用的样式类的。仅在启用加载组件或错误捕获组件时有效。通过设置 `wrapperClassName`，可以为微应用的组件添加自定义的样式类，从而实现对组件样式的定制化。开发者可以根据需求在样式表中定义相应的样式类，并通过 `wrapperClassName` 属性将其应用到微应用的组件上。

## 子应用在使用 CSS-in-JS 时报错 "Cannot find module 'styled-components'"

1. 确认是否已经在子应用的依赖中安装了 `styled-components` 模块。如果没有安装，可以通过运行 `npm install styled-components` 或 `yarn add styled-components` 来安装该模块。
2. 检查子应用的代码中是否正确引入了 `styled-components` 模块。可以确保在使用 `styled-components` 的地方使用了正确的引入语句，例如 `import styled from 'styled-components'`。
3. 如果确认依赖和引入都没有问题，可能是因为子应用的依赖冲突或版本不兼容导致。可以尝试更新 `styled-components` 模块的版本，或者查看子应用的依赖是否与 `styled-components` 兼容。

## 子应用的样式没有生效

1. 确认是否在子应用中正确使用了 CSS 变量。可以通过在子应用的样式文件中使用 Ant Design 提供的 CSS 变量，例如 `@import '~antd/dist/antd.css';`，来确保样式可以正常生效。
2. 检查是否有其他样式文件覆盖了子应用的样式。可以通过在浏览器的开发者工具中查看元素样式，确定是否有其他样式优先级更高的样式文件影响了子应用的样式。
3. 确认是否正确引入了子应用的样式文件。可以检查子应用的代码中是否正确引入了样式文件，例如在 HTML 文件中使用 `<link rel="stylesheet" href="path/to/your/styles.css">` 引入样式文件。

## 子应用的页面布局错乱

1. 检查子应用的样式是否正确引入。确保子应用的代码中正确引入了所需的样式文件，例如在 HTML 文件中使用 `<link rel="stylesheet" href="path/to/your/styles.css">` 引入样式文件。
2. 检查子应用的页面结构是否正确。通过查看子应用的 HTML 结构，确定页面是否有缺失或错误的标签，以及是否正确使用了 CSS 类名。
3. 查看浏览器的开发者工具中是否有错误信息。可能是因为子应用的代码存在错误导致页面布局错乱，可以查看浏览器的开发者工具中的错误日志来确定问题的具体原因。
4. 确认是否有其他样式文件影响了子应用的布局。可能是因为子应用的样式被其他样式文件覆盖了，可以通过浏览器的开发者工具中的元素样式来查看是否有其他样式文件优先级更高的样式影响了子应用的布局。