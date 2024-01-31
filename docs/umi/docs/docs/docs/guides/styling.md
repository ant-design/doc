### 在 Umi 项目中如何使用 .css 文件声明样式？

你可以在 Umi 项目中使用 .css 文件来声明各种样式。首先，在你的项目中创建一个 .css 文件，例如 `src/pages/index.css`。然后，在该文件中按照以下代码声明你想要的样式：

```css
.title {
  color: red;
}
```

接下来，在你的页面或组件文件中引入该样式文件，即可使样式生效。例如，在 `src/pages/index.tsx` 文件中，你可以通过以下方式引入样式文件：

```jsx
import './index.css';
```

此时，你可以使用样式类名 `.title` 来给任何元素应用该样式。

### 在 Umi 项目中如何限制样式的作用域？

如果你想要限制样式的作用范围，避免全局生效，你可以使用 CSS Modules 功能。使用 CSS Modules 时，每个样式类都会有一个唯一的类名，确保样式只应用在对应的页面或组件中。

要使用 CSS Modules，你只需要将你的样式文件命名为 `.module.css` 格式，例如 `index.module.css`。然后，在你的页面或组件文件中引入样式文件，并使用引入的样式类来应用样式。

### 在 Umi 项目中如何使用 CSS Modules？

要在 Umi 项目中使用 CSS Modules，首先将你的样式文件命名为 `.module.css` 格式，例如 `index.module.css`。

然后，在你的页面或组件文件中引入样式文件，并使用引入的样式类来应用样式。例如，在 `src/pages/index.tsx` 文件中：

```jsx
import styles from './index.module.css';

export default function () {
  return <div className={styles.title}>Hello World</div>;
}
```

在这个例子中，`styles.title` 表示被加工过的唯一样式类名，用它来应用样式。

通过使用 CSS Modules，每个样式类都会有一个唯一的类名，确保样式只在对应的页面或组件中生效。这样可以避免全局样式冲突的问题。

### 什么是 CSS Modules？

CSS Modules 是一种将样式模块化的技术。在使用 CSS Modules 时，我们可以在 JavaScript 代码中引入样式文件，并将样式赋予一个变量名。这样，样式只会作用于该模块内部，不会对全局样式产生影响。

### 如何在 JavaScript 文件中使用 CSS Modules？

要在 JavaScript 文件中使用 CSS Modules，首先需要引入样式文件。可以使用 `import` 语句引入样式文件，并将其赋予一个变量名。然后，可以使用该变量名作为 `className` 属性的值来应用样式。

例如，在一个名为 `index.css` 的样式文件中声明了一个名为 `title` 的样式，我们可以在 `index.tsx` 文件中这样使用：

```jsx
import styles from './index.css';

export default function () {
  return <div className={styles.title}>Hello World</div>;
}
```

这样，`title` 样式只会应用于包裹在 `className={styles.title}` 中的 `div` 元素。

### CSS Modules 可以解决什么问题？

CSS Modules 提供了一种样式模块化的解决方案，可以避免样式的全局污染问题。通过将样式赋予一个变量名，可以确保样式只会作用于当前模块内部，不会影响其他模块的样式。这样可以提高代码的可维护性和复用性，避免样式冲突和命名冲突的问题。

### Umi 中支持的 CSS 预处理器有哪些？

Umi 默认支持 LESS、SASS 和 SCSS 样式的导入。你可以按照引入 CSS 文件的方式引入并使用这些由 CSS 预处理器处理的样式。

### 如何在 Umi 中使用 SASS？

在 Umi 中使用 SASS 需要额外安装预处理依赖，可以通过以下步骤来安装：

1. 打开终端，并进入到项目根目录下。
2. 执行命令 `npm add -D sass` 来安装 SASS 依赖。
3. 在你的代码文件中引入 SASS 样式文件即可。

### 如何在 Umi 中使用 CSS Module？

在 Umi 中同样也支持 CSS Module 的用法。你可以按照以下步骤来使用 CSS Module：

1. 在你的代码文件中引入不同的样式文件（比如 LESS、SASS、SCSS 文件）。
2. 使用导入样式文件时返回的对象来设置元素的 className。

### Umi 是否支持其他类型的样式文件？

除了支持 LESS、SASS 和 SCSS 文件之外，Umi 还提供了对 `.styl` 和 `.stylus` 文件的内置支持。如果想要使用这些类型的样式文件，你需要先安装相应的预处理器依赖（比如 `stylus`），然后按照之前的方法引入和使用即可。

### UnoCSS 是什么？

UnoCSS 是一个用于快速构建样式的工具。它可以与 Umi 和 Tailwindcss 结合使用，并且提供了内置的 UnoCSS 插件。安装 UnoCSS 需要安装 `unocss` 和 `@unocss/cli`。

### 如何在 Umi 中启用 UnoCSS 插件？

要在 Umi 中启用 UnoCSS 插件，首先安装 `plugin-unocss`。然后，在项目的 `.umirc.ts` 文件中，使用 `@umijs/plugins/dist/unocss` 模块来引入插件。在 `unocss` 配置中，需要声明要使用 `unocss` 的文件目录。例如：

```js
// .umirc.ts

export default {
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['src/**/*.tsx'],
  },
};
```

这样配置之后，UnoCSS 插件会监听设置文件中的 `unocss.watch` 字段，动态生成样式文件并自动套用。

### 如何配置 UnoCSS？

要配置 UnoCSS，可以在项目的根目录下创建一个名为 `unocss.config.ts` 的文件。在这个配置文件中，可以使用 `unocss` 提供的 API 来定义配置项。

例如，可以使用 `defineConfig` 方法来创建配置对象，并使用 `presetAttributify` 和 `presetUno` 方法来定义 UnoCSS 的预设配置。在配置对象中，可以设置 `envMode`、`presets` 等属性来自定义 UnoCSS 的行为。例如：

```js
// unocss.config.ts

import { defineConfig, presetAttributify, presetUno } from 'unocss';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [presetAttributify({ strict }), presetUno()],
  });
}

export default createConfig();
```

这样配置之后，UnoCSS 将根据配置对象中的信息来生成样式。

这些信息可以帮助你了解如何在 Umi 中使用 UnoCSS，并进行相应的配置。
