### 如何启用 @umijs/max 中的 reactQuery？

如果使用 @umijs/max 的 reactQuery，只需在配置文件中添加以下内容：

```ts
export default {
  reactQuery: {},
};
```

### 如何启用 umi？

如果使用 umi，需要先安装 @umijs/plugins 依赖，然后在配置文件中添加以下内容：

```bash
$ pnpm i @umijs/plugins -D
```

```ts
export default {
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
};
```

### 什么是 react-query 的 devtool？

devtool 是 react-query 的一个特性，在开发模式下会开启一个 react-query 的浏览器扩展工具，用于在浏览器中查看和调试 react-query 的状态和缓存情况。默认情况下，devtool 是开启的，可以通过 `reactQuery: { devtool: false }` 关闭。

### 如何关闭 react-query 的 queryClient？

通过设置 `reactQuery: { queryClient: false }` 可以关闭 react-query 的全局 QueryClient 注册功能。在 app.ts 文件中，可以通过 `export const reactQuery = { queryClient }` 进行配置。

### 如何使用 react-query 的导出？

react-query 的大部分导出，可以通过从 `umi` 或 `@umijs/max` 中 import 来使用。这样可以方便地在项目中使用 react-query 的各种功能和组件。

### 什么是 react query 的 devtool 工具？

react query 的 devtool 工具是 react query 官方提供的一个开发工具，用于帮助开发者在浏览器中查看 react query 的状态和调试信息。通过 devtool 工具，开发者可以方便地查看和监控正在进行的查询、缓存的数据以及错误信息等。默认情况下，react query 的 devtool 工具是开启的，但你可以通过配置项将其关闭。

### 什么是 react query 的 QueryClient 和 QueryClientProvider？

在 react query 中，QueryClient 是一个核心概念，用于管理和缓存所有的查询请求和响应。而 QueryClientProvider 是一个 react 组件，用于将 QueryClient 实例提供给整个应用中的其他组件使用。通过 QueryClientProvider，我们可以在整个应用中使用同一个 QueryClient 实例，确保所有的查询请求都能共享相同的缓存和状态。默认情况下，react query 会注册全局的 QueryClient 和 QueryClientProvider，但你可以通过配置项将其关闭。

### 什么是查询客户端(queryClient)的作用？

查询客户端(queryClient)是一个配置项，用于配置查询数据的默认选项。在这个配置项中，可以设置默认的查询函数(`queryFn`)，以及其他与查询相关的参数。通过查询客户端，可以统一管理查询数据的行为，方便进行统一的异常处理、数据转换等操作，提升开发效率和代码质量。

### 如何配置开发工具(devtool)和查询客户端(queryClient)？

要配置开发工具(devtool)和查询客户端(queryClient)，需要提供相应的配置对象，并将其赋值给相应的变量。在配置对象中，可以设置开发工具的属性和查询客户端的属性，以满足具体的需求。配置对象示例：

```ts
const API_SERVER = '/path/to/api/server';
export const reactQuery = {
  devtool: {
    initialIsOpen: true,
  },
  queryClient: {
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey }) => {
          const res = await fetch(`${API_SERVER}/${queryKey.join('/')}`);
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }
          return res.json();
        },
      },
    },
  },
};
```

通过以上配置对象，可以设置开发工具的`initialIsOpen`属性为`true`，使得开发工具在初始时处于打开状态；同时，设置查询客户端的`defaultOptions`属性，指定查询函数`queryFn`为一个异步函数，用于处理查询数据的逻辑。
