### 如何在 ProTable 和 ProList 中使用新的数据结构？

ProTable 和 ProList 使用了新的数据结构，你只需要按照我们的约定使用参数，就能非常简单地使用它们。以下是一个示例：

```tsx
const msg: {
  datT[];
  page: number;
  success: boolean;
  total: number;
} = {
  dat[],
  page: 1,
  success: true,
  total: 0,
};
```

只需要将你的数据按照这个结构传递给 ProTable 或 ProList，就可以轻松地使用它们了。

### 如何配置全局的网络请求转化器？

如果你的后端数据使用了自己熟悉的 URL，虽然我们可以用 Umi 的 request 来转化，但是每个 table 都需要单独配置就比较麻烦。不过，如果你使用 Umi 的 request，我们可以定义一个全局的转化器。在 app.tsx 文件中进行如下配置：

```tsx
import { request, RequestConfig } from 'umi';

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      // resData 是我们自己的数据
      return {
        ...resData,
        total: resData.sum,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
};
```

配置完成后，你可以在任何地方使用像这样的代码：

```tsx
<ProTable request={request('/list')} />
```

### 如何自定义 fetch 请求？

如果你使用了 fetch 来进行网络请求，你可以对 fetch 进行自定义。以下是一个示例：

```tsx
const request = (url, options) => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((resData) => {
      return Promise.resolve({
        ...resData,
        total: resData.sum,
        success: resData.ok,
        errorMessage: resData.message,
      });
    });
};

// 使用时
<ProTable request={request('/list')} />;
```

你可以根据自己的需求对 fetch 进行适配，并将返回的数据转化为 ProTable 或 ProList 需要的结构。
