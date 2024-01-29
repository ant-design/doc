### 如何在配置时拥有 TypeScript 提示？

要在配置时拥有 TypeScript 语法提示，可以在配置的地方包一层 `defineConfig()`。下面是一个示例：

```ts
// .umirc.ts

import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: '@/pages/index' }],
});
```

### 什么是 defineConfig()？

`defineConfig()` 是一个函数，用于包装配置对象，以便在配置时拥有 TypeScript 语法提示。

### 如何使用 defineConfig()？

使用 `defineConfig()` 需要先导入它：

```ts
import { defineConfig } from 'umi';
```

然后，在配置对象外部使用 `defineConfig()` 包装配置对象：

```ts
export default defineConfig({
  routes: [{ path: '/', component: '@/pages/index' }],
});
```

这样，在配置时就可以拥有 TypeScript 的语法提示了。

![defineConfig](https://img.alicdn.com/imgextra/i4/O1CN01WqZ2Ma1ZqiNbTefi6_!!6000000003246-2-tps-1240-1000.png)

以上是如何在配置中使用 TypeScript 提示的方法，并且使用 `defineConfig()` 函数来实现。
