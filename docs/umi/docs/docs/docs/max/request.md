### 什么是 `@umijs/max` 内置网络请求方案？

`@umijs/max` 内置了插件方案，它提供了一套统一的网络请求和错误处理方案。插件方案基于 `axios` 和 `ahooks` 的 `useRequest` 实现。

### 如何使用 `request` 方法进行网络请求？

`request` 方法是 `@umijs/max` 提供的网络请求方法，可以用于发送请求。使用方法如下：

```ts
import { request } from 'umi';

request({
  url: 'https://example.com/api',
  method: 'GET',
  // 其他配置项
})
  .then((response) => {
    // 处理请求成功的响应
  })
  .catch((error) => {
    // 处理请求失败的错误
  });
```

### 如何使用 `useRequest` 进行网络请求和错误处理？

`useRequest` 是 `@umijs/max` 提供的用于进行网络请求和错误处理的 hooks 函数。使用方法如下：

```ts
import { useRequest } from 'umi';

const { data, error, loading } = useRequest({
  url: 'https://example.com/api',
  method: 'GET',
  // 其他配置项
});

if (loading) {
  // 处理正在加载中的状态
} else if (error) {
  // 处理请求失败的错误
} else {
  // 处理请求成功的响应
}
```

通过 `data`、`error` 和 `loading` 变量，可以获取请求返回的数据、错误和加载状态。

### 什么是 useRequest 中的 dataField 配置项的作用？

`useRequest` 中的 `dataField` 配置项用于指定后端返回数据中作为请求结果的数据字段。默认情况下，`dataField` 的值为 `'data'`，即请求成功后取后端返回数据中的 `data` 字段作为结果。通过配置 `dataField`，可以方便地指定不同的数据字段作为请求结果，从而实现对后端返回数据的解构和定制。

### 如何配置 useRequest 的 dataField 为后端返回数据的根字段？

如果你想在消费请求结果时获取后端返回的原始数据，可以将 `dataField` 配置为一个空字符串 `''`。这样，`useRequest` 将直接返回后端返回的完整数据，不对其进行任何处理。

### 如何消费 useRequest 返回结果中的后端原始数据？

要消费 `useRequest` 返回结果中的后端原始数据，可以将 `dataField` 配置为空字符串 `''`。然后，你可以通过 `useRequest` 返回结果中的 `data` 字段来访问后端返回的完整数据。注意，此时 `data` 的值将是一个对象，包含请求成功、失败和加载中状态等信息，以及后端返回的原始数据。

### 运行时配置的概述

在 UmiJS 开发框架中，可以通过运行时配置来对项目的请求进行个性化设定。这些配置项可以在 `src/app.ts` 文件中进行设置。

其中，`request` 是一个配置项，可以用来设置请求相关的参数。除了 `errorConfig`、`requestInterceptors` 和 `responseInterceptors` 之外的其他配置项都会直接透传给 [axios](https://axios-http.com/docs/req_config) 库的请求配置。

下面将详细介绍 `plugin-request` 的运行时配置项，以及一个完整的示例配置。

### 运行时配置项说明

1. `timeout`：设置请求超时时间，单位为毫秒。

2. `errorConfig`：设置错误相关的配置项。包括下面两个方法：

   - `errorHandler`：自定义错误处理方法。
   - `errorThrower`：自定义错误抛出方法。

3. `requestInterceptors`：设置请求拦截器，可以在请求发送前进行一些操作，比如添加请求头信息、修改请求参数等。

4. `responseInterceptors`：设置响应拦截器，可以在获得响应数据后进行一些操作，比如对响应数据进行处理、错误处理等。

上述配置项可以根据项目的需求进行个性化设定。

### 完整的运行时配置示例

```ts
import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [],
};
```

以上是一个完整的运行时配置示例。你可以根据需要对其中的配置项进行修改和补充，来实现具体的请求设置和处理逻辑。

在该配置示例中，我们设置了请求超时时间为 1000 毫秒，并且为空的拦截器和错误处理方法。你可以根据具体需求对其进行修改和补充。

### 什么是 `errorConfig`？

`errorConfig` 是一个用于配置统一错误处理方案的对象。通过设置 `errorThrower` 和 `errorHandler`，可以在请求出现错误时进行自定义的错误处理。

### `errorThrower` 是什么作用？

`errorThrower` 是一个函数，用于处理后端返回的数据并抛出一个自定义的错误。你可以根据后端返回的数据，在此函数中进行相应的处理。

### `errorHandler` 是如何使用的？

`errorHandler` 是用于处理 `errorThrower` 抛出的错误的函数。它接收两个参数，第一个参数是抛出的错误，第二个参数是请求的配置。

### 如何实现错误处理方案？

你可以在 `errorConfig` 中设置 `errorThrower` 和 `errorHandler` 方法来实现错误处理方案。当请求发生错误时，`errorThrower` 函数会被触发，抛出自定义的错误。然后，被 `request` 捕获，执行 `errorHandler` 方法来处理错误。

以下是一个完整的例子：

```javascript
const errorThrower = (responseData) => {
  if (responseData.code === 500) {
    throw new Error('服务器错误');
  } else if (responseData.code === 404) {
    throw new Error('请求地址不存在');
  } else {
    throw new Error('请求失败');
  }
};

const errorHandler = (error, opts) => {
  console.error('请求出错：', error);
  console.log('请求配置：', opts);
};

const request = extend({
  errorHandler,
  errorConfig: {
    errorThrower,
  },
});

request('/api/data').catch((error) => {
  console.error('请求失败：', error);
});
```

以上示例中，`errorThrower` 函数根据后端返回的数据进行判断，并抛出对应的错误。`errorHandler` 方法用于处理抛出的错误。`request` 函数使用 `errorHandler` 和 `errorThrower` 进行统一错误处理。

如果觉得配置 `errorThrower` 和 `errorHandler` 过于繁琐，也可以在拦截器中实现自定义的错误处理。

### 如何使用 requestInterceptors？

你可以通过传入一个数组来添加多个请求拦截器。数组的每个元素都是一个拦截器，拦截器将按照顺序依次注册到 axios 实例上。拦截器可以是一个函数，也可以是一个包含请求拦截器和错误处理器的二元组。拦截器需要接收请求的配置对象作为参数，并且需要将配置对象返回。

最佳实践是使用 `RequestConfig` 类型来编写拦截器，这样可以规范地书写拦截器。你还可以使用 umi-request 的拦截器写法，虽然它无法通过 TypeScript 的语法检查。

以下是一个示例：

```ts
const request: RequestConfig = {
  requestInterceptors: [
    // 第一个拦截器，一个简单的函数形式
    (url, options) => {
      // 在这里可以对 url 和 options 进行处理
      return { url, options };
    },
    // 第二个拦截器，包含请求拦截器和错误处理器的二元组
    [
      (url, options) => {
        // 在这里可以对 url 和 options 进行处理
        return { url, options };
      },
      (error) => {
        // 在这里可以处理请求错误
        return Promise.reject(error);
      },
    ],
    // 第三个拦截器，省略了错误处理器
    [
      (url, options) => {
        // 在这里可以对 url 和 options 进行处理
        return { url, options };
      },
    ],
  ],
};
```

### 为什么要使用 requestInterceptors？

使用 requestInterceptors 可以在发送请求前对请求进行统一处理。这样做的好处是可以在不同的拦截器中进行各种处理操作，例如添加认证信息、添加请求头、修改请求参数等。通过统一处理，可以减少重复的代码，并提高代码的可维护性和可读性。

使用 requestInterceptors 还可以实现对请求的全局配置和统一错误处理。当请求发生错误时，错误处理器会被调用，可以在此处进行统一的错误处理逻辑，例如弹出错误提示、重试请求等。

总而言之，使用 requestInterceptors 可以方便地对请求进行全局处理，提高开发效率和代码质量。

### 什么是 responseInterceptors？

responseInterceptors 是一种用于请求响应阶段拦截的机制。在使用 axios 发送请求时，可以通过传入一个数组，将多个拦截器依次注册到 axios 实例上。这些拦截器会在响应返回时按照注册的顺序执行，可以对响应数据进行处理或者进行错误处理。

### 如何使用 responseInterceptors？

在使用 responseInterceptors 时，可以通过 RequestConfig 的 responseInterceptors 属性来进行配置。可以传入一个数组，数组中的每个元素都是一个拦截器。每个拦截器可以是一个函数，也可以是一个包含两个函数的数组。

拦截器函数接收 axios 的 response 作为参数，并且将它返回。可以在拦截器函数中对响应数据进行处理，并返回处理后的数据给下一个拦截器或者请求发起者。

### responseInterceptors 的执行顺序是怎样的？

responseInterceptors 的执行顺序按照数组元素的顺序依次执行。但是需要注意的是，拦截器的执行顺序与 axios 的执行顺序是相反的。即，请求拦截器会先添加的在前面，响应拦截器会后添加的在后面。

如果需要对请求和响应都进行拦截处理，建议将请求拦截器放在前面，响应拦截器放在后面，这样可以保证拦截器按照预期的顺序执行。

### 什么是 useRequest？

useRequest 是一个插件内置的 React Hook，用于在组件内部简化数据获取的过程。它可以帮助我们方便地消费数据，并处理数据请求的 loading 状态和错误处理。

### useRequest 的使用方式是什么？

使用 useRequest 需要传入一个参数，即一个请求函数。这个请求函数负责发送请求，并返回需要的数据。在请求函数执行过程中，useRequest 会自动处理 loading 状态和错误信息，并将请求成功后的数据返回。

示例代码中的 useRequest 的使用方式如下：

```typescript
const { data, error, loading } = useRequest(() => {
  return services.getUserList('/api/test');
});
```

在示例中，我们将一个获取用户列表的请求函数传入 useRequest。我们可以通过解构返回的 data、error 和 loading 变量来分别获取请求成功后的数据、请求失败的错误信息和请求的 loading 状态。

### 如何处理 useRequest 的 loading 和错误状态？

在使用 useRequest 后，我们可以通过判断 loading 和 error 变量的值来处理 loading 和错误状态。

在示例代码中，我们通过判断 loading 变量的值来展示不同的页面内容。如果 loading 为 true，表示正在加载中，则展示 "loading..."；如果 loading 为 false，表示加载完成，则展示数据。

同时，我们也可以通过判断 error 变量的值来展示错误信息。如果 error 不为 null，表示请求出现错误，则展示错误信息。

总结起来，我们可以根据 loading 和 error 变量的不同值来决定展示不同的页面内容，从而方便地处理 loading 和错误状态。

### 什么是 request 方法？

通过 `import { request } from '@@/plugin-request'` 可以使用内置的请求方法 `request`。

`request` 方法接收一个 `options` 参数，除了可以透传 [axios](https://axios-http.com/docs/req_config) 的所有配置之外，还支持额外的属性，包括 `skipErrorHandler`，`getResponse`，`requestInterceptors` 和 `responseInterceptors`。

### 如何跳过错误处理？

如果你的某个请求想要跳过错误处理，可以将 `skipErrorHandler` 设置为 `true`。

### 如何获取完整的 response 结构？

`request` 方法默认返回后端的数据，如果你想要获取完整的 axios response 结构，可以传入 `{ getResponse: true }`。

### `requestInterceptors` 和 `responseInterceptors` 是什么？

`requestInterceptors` 和 `responseInterceptors` 是 request 方法的拦截器，采用与运行时配置中的拦截器相同的写法。这些拦截器是一次性的，会在运行时配置中的拦截器之后被注册。注意，在使用 errorHandler 时，在这里注册的 response 拦截器会失效，因为 errorHandler 已经会处理错误并抛出异常。

### 什么是 RequestConfig 接口？

RequestConfig 接口是一个用于配置运行时配置的接口。通过该接口可以对请求进行一些配置，例如设置请求头、请求拦截、响应拦截等操作。

### 如何导入 RequestConfig 接口？

在使用 RequestConfig 接口之前，需要先导入该接口。可以通过以下代码进行导入：

```typescript
import type { RequestConfig } from 'umi';
```

注意，在导入时要加上 `type` 关键字。

### 如何使用 RequestConfig 接口进行配置？

可以通过以下代码来使用 RequestConfig 接口对请求进行配置：

```typescript
export const request: RequestConfig = {
  // 这里写入具体的配置项
  ...
};
```

在 `request` 对象中，可以设置具体的配置项来进行请求配置。具体的配置项可以参考官方文档来进行设置。

### umi@4 中如何配置统一错误处理？

在 umi@4 中，可以通过配置 `request` 的 `errorConfig` 来实现统一错误处理。其中，`errorHandler` 是一个错误处理函数，用于处理请求错误，`errorThrower` 是一个错误抛出函数，用于抛出错误。你可以根据需要自定义这两个函数来处理请求错误。

```ts
export const request: RequestConfig = {
  errorConfig: {
    errorHandler: () => {
      // 处理请求错误
    },
    errorThrower: () => {
      // 抛出错误
    },
  },
};
```

### umi@4 中如何替代 umi@3 的中间件？

在 umi@4 中，去除了 `umi-request` 的中间件，你可以使用 `axios` 的拦截器来实现相同的功能。

对于一个 `umi@3` 的中间件，将 `next()` 方法之前的逻辑放在 `requestInterceptors` 中，将 `next()` 方法之后的逻辑放在 `responseInterceptors` 中。

```ts
// 中间件
async function middleware(ctx, next) {
  const { url, options } = req;
  if (url.indexOf('/api') !== 0) {
    ctx.req.url = `/api/v1/${url}`;
  }
  await next();
  if (!ctx.res.success) {
    // 进行错误处理
  }
}

// 拦截器
{
  requestInterceptors: [
    (config) => {
      if (config.url.indexOf('/api') !== 0) {
        config.url = `/api/v1/${url}`;
      }
      return config;
    }
  ],
  responseInterceptors: [
    (response) => {
      if(!response.data.success){
        // 进行错误处理
      }
    }
  ]
}
```

通过以上方式，你可以使用 axios 的拦截器来替代 umi@3 的中间件功能。

### 什么是 umi-request？

umi-request 是一个基于 fetch 封装的请求库，适用于浏览器和 Node.js 环境。它提供了更简洁的 API 和更强大的功能，例如拦截器、错误处理、取消请求等。

### 什么是 axios？

axios 是一个基于 Promise 的 HTTP 请求库，可以在浏览器和 Node.js 环境中使用。它具有简洁而强大的 API，支持拦截器、错误处理、取消请求等功能，并且可以与许多第三方库和框架无缝集成。

### umi-request 和 axios 的配置项有什么区别？

umi-request 和 axios 的配置项在命名和使用上存在一些区别。下面列举了一些主要的差异：

- `umi-request` 的配置项使用 `camelCase` 命名风格，而 `axios` 使用 `kebab-case` 命名风格。
- `umi-request` 的全局配置项通过 `extend` 方法进行设置，而 `axios` 则通过创建实例并传递配置参数进行设置。
- `umi-request` 的拦截器使用 `use` 方法进行注册，而 `axios` 使用 `interceptors` 属性进行注册。
- `umi-request` 的请求错误处理通过 `throwOnError` 配置项进行控制，而 `axios` 则通过返回 rejected 的 Promise 进行处理。
- `umi-request` 支持自定义请求库，而 `axios` 是一个独立的请求库。

总体而言，虽然配置项存在一些区别，但两者都提供了丰富的功能和灵活的扩展性，可以根据具体需求选择适合的请求库。

### 什么是 @umijs/max？

@umijs/max 是 Umi@4 版本中的请求库。它基于 axios 实现，与 Umi 官方维护的 umi-request 不同。在序列化 GET 请求参数时，默认采用带括号 `[]` 的形式，与 Umi@3 版本的 umi-request 不同。

### 如何将 @umijs/max 序列化 GET 请求参数的形式修改为与 Umi@3 一致？

可以在 Umi@4 的项目中这样修改：

```ts
// src/app.[ts|tsx]

/** @doc https://github.com/sindresorhus/query-string#arrayformat-1 */
+ import queryString from 'query-string';

export const request: RequestConfig = {
+  paramsSerializer(params) {
+    return queryString.stringify(params);
+  },
   ...
}
```

这样就可以将 GET 请求参数的序列化形式修改为 Umi@3 的形式。

### Umi@3 和 Umi@4 在序列化 GET 请求参数时有什么不同？

在 Umi@3 中，会使用相同的 Key 来序列化数组。例如，对于参数 `{ a: [1,2,3] }`，序列化后的形式是 `a=1&a=2&a=3`。

而在 Umi@4 中，默认会使用 `[]` 的形式序列化数组。例如，对于参数 `{ a: [1,2,3] }`，序列化后的形式是 `a[]=1&a[]=2&a[]=3`。

这是因为 Umi@4 中的请求库 @umijs/max 默认采用了这种较新的形式。如果希望保持 Umi@3 的序列化形式，可以按照上述方法进行修改。

### 什么是错误处理方案中的错误类型（Error Show Type）？

错误处理方案中的错误类型（Error Show Type）是用来定义错误发生时的展示方式的枚举类型。Ant Design Pro 中定义了以下几种错误类型：

- SILENT：静默处理，即不进行任何提示或操作。
- WARN_MESSAGE：以警告信息的形式提示用户错误信息。
- ERROR_MESSAGE：以错误信息的形式提示用户错误信息。
- NOTIFICATION：以通知的形式展示错误信息。
- REDIRECT：重新定向到指定页面。

具体的错误展示方式可以根据实际需要进行自定义。在运行时配置示例中，定义了一个响应拦截器来处理错误信息，并根据错误类型进行相应的展示操作，例如使用 Ant Design Pro 提供的 message 组件展示错误信息。
